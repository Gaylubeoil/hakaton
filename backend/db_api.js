import mysql from "mysql2"
import dotenv from "dotenv"
import { createHash } from "crypto"
import cors from "cors";
import bodyParser from'body-parser';

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()    

function hash_password(password) {
    return createHash('sha256').update(password).digest('hex');
}

async function getUsers(){
    const [rows] = await pool.query("SELECT * FROM users")
    return rows;
}

async function getAllCities(){
    const [rows] = await pool.query("SELECT * FROM cities")
    return rows;
}

async function getAllPosts(){
    const [rows] = await pool.query("SELECT * FROM posts")
    return rows;
}

async function getFollowedPosts(){
    const [rows] = await pool.query("SELECT posts.* FROM posts JOIN users ON posts.id_host = users.id JOIN follows ON follows.followed_user_id = users.id WHERE follows.follower_user_id = {current_user_id};")
    return rows;
}

async function getCategoryById(id){
    const [rows] = await pool.query(`SELECT category FROM categories WHERE id_category = ?`, [id])
    let result = (rows[0].category);
    return result;
}

async function getCityById(id){
    const [rows] = await pool.query(`SELECT city FROM cities WHERE id_city = ?`, [id])
    let result = (rows[0].city);
    return result;
}

async function findUserByUsername(username){
    const [rows] = await pool.query(`SELECT * FROM users WHERE username = ?`, [username])
    return rows;
}

async function getUser(id) {
    const [rows] = await pool.query(`SELECT * FROM users WHERE id_user = ?`, 
                                    [id])
    return rows[0];
}


async function createUser(username, email, password) {
    const hash = hash_password(password);

    await pool.query(`INSERT INTO users (username, email, pass_hash) VALUES (?, ?, ?)`, 
                    [username, email, hash]);
}

async function updateBio(userID, bio) {
    await pool.query(`UPDATE users SET bio = ? WHERE id_user = ?`,
                     [bio, userID]);
}

async function follow(followsID, followedID) {
    await pool.query(`INSERT INTO follow (id_follows, id_followed) VALUES (?, ?)`,
                     [followsID, followedID]);
    await pool.query(`UPDATE users SET followers_count = followers_count + 1 WHERE id_user = ?`,
                     [followedID]);
    await pool.query(`UPDATE users SET following_count = following_count + 1 WHERE id_user = ?`,
                     [followsID]);

}

async function unfollow(followsID, followedID) {
    await pool.query(`UPDATE follow SET is_active = 0 WHERE id_follows = ? AND id_followed = ?`,
                     [followsID, followedID]);
    await pool.query(`UPDATE users SET followers_count = followers_count - 1 WHERE id_user = ?`,
                     [followedID]);
    await pool.query(`UPDATE users SET following_count = following_count - 1 WHERE id_user = ?`,
                     [followsID]);
}


// POSTS FUNCTIONS
async function createPost(_title,_city,_capacity, _description, _date, _user, _image, _category, _location) {
    await pool.query(`INSERT INTO posts (title, id_category, id_city, capacity, image, _description, id_host, google_map_location, event_date)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                      [_title, 1, 1, _capacity, _image, _description, _user, _location, _date]);
}


async function changePostPicture(pictureID, postID) {
    await pool.query(`UPDATE posts SET id_picture = ? WHERE id_post = ?`, 
                    [pictureID, postID])
}

// JOIN REQUEST FUNCTIONS

async function requestToJoin(userID, postID) {
    await pool.query(`INSERT INTO requests (id_user, id_post) VALUES (?, ?)`, 
                    [userID, postID]);
}

async function approveRequest(userID, postID) {
    await pool.query(`INSERT INTO joined (id_user, id_post_joined) VALUES (?, ?)`,
                     [userID, postID]);
    await pool.query(`UPDATE requests SET is_active = 0 WHERE id_user = ? AND id_post = ?`, 
                     [userID, postID]);
}

async function declineRequest(userID, postID) {
    await pool.query(`UPDATE requests SET is_active = 0 WHERE id_user = ? AND id_post = ?`,
                     [userID, postID]);
}

// COMMENTS AND REVIEWS

async function addPublicComment(userID, postID, comment) {
    await pool.query(`INSERT INTO comments (id_commenting, id_commented_post, comment, isPublic) VALUES (?, ?, ? ,?)`,
                     [userID, postID, comment, 1]);
}

async function addPrivateComment(userID, postID, comment) {
    await pool.query(`INSERT INTO comments (id_commenting, id_commented_post, comment, isPublic) VALUES (?, ?, ? ,?)`,
                     [userID, postID, comment, 0]);
}

async function addReview(reviewingID, reviewedID, isPositive) {
    await pool.query(`INSERT INTO reviews (id_reviewing, id_reviewed, review_comment, is_positive) VALUES (?, ?, ?, ?)`,
                    [reviewingID, reviewedID, '', isPositive] );

}

import express from 'express';
  
const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("This is from root");
});
  
app.get('/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Error getting users');
    }
});

app.post('/createPost', async (req, res) => {
    const{        
        _title,
        _city,
        _capacity,
        _description,
        _date,
        _user,
        _image,
        _category,
        _location
    } = req.body;

    console.log(_title, _user);  

    try{
        createPost(_title,_city,
            _capacity, _description, _date,
            _user, _image, _category, _location);
    }catch(error){
        res.status(500).send("invalid post details");
    }

})

app.post('/follow', async (req, res) => {
    const { following_id, follower_id } = req.body;

    try{
        follow(following_id, follower_id);

    }catch(error){
        res.status(500).send("invalid follow input");
    }
});

app.post('/unfollow', async (req, res) => {
    const { following_id, follower_id } = req.body;

    try{
        unfollow(following_id, follower_id);

    }catch(error){
        res.status(500).send("invalid unfollow input");
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;


    const user = await findUserByUsername(username);


    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    let encodedPassword = createHash('sha256').update(password).digest('hex');

    if (encodedPassword !== user[0].pass_hash) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    // const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
    // res.status(200).json({ message: 'Login successful', token });
    res.status(200).json({ message: 'Login successful', user });
});

app.get('/getAllPosts', async (req, res) => {
    try {
        const posts = await getAllPosts();

        for(let i = 0; i < posts.length; i++)
        {
            const [category, host, city] = await Promise.all([
                getCategoryById(posts[i].id_category),
                getUser(posts[i].id_host),
                getCityById(posts[i].id_city),
            ]);

            posts[i].id_category = category;
            posts[i].id_host = host;
            posts[i].id_city = city;
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send('Error getting posts');
    }
});

app.post('/getFollowedPosts', async (req, res) => {
    const { user_id } = req.body;

    try {
        const posts = await getFollowedPosts(user_id);

        for(let i = 0; i < posts.length; i++)
        {
            const [category, host, city] = await Promise.all([
                getCategoryById(posts[i].id_category),
                getUser(posts[i].id_host),
                getCityById(posts[i].id_city),
            ]);

            posts[i].id_category = category;
            posts[i].id_host = host;
            posts[i].id_city = city;
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send('Error getting posts');
    }
});

app.get('/getAllCities', async (req, res) => {
    try {
        const cities = await getAllCities();
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).send('Error getting users');
    } 
});

app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = createHash('sha256').update(password).digest('hex');

    try {
        await createUser(username, email, hashedPassword);
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
