import "./events.scss";
import Event from "../event/Event.jsx";
import React, { useState, useEffect } from 'react';

const Events = () => {
  // Fetch all events. '/newPosts'

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      fetch('http://localhost:3000/getAllPosts')
        .then(response => response.json())
        .then(data => {

          const modifiedData = data.map(ev => ({
            id: ev.id_posts,
            title: ev.title,
            city: ev.id_city,
            category: ev.id_category,
            capacity: ev.capacity,
            currentCapacity: ev.current_capacity,
            description: ev._description,
            location: ev.google_map_location,
            image: ev.image,
            date: ev.event_date,
            remainingTime: '2 hours',
            host: {
              id: ev.id_host.id_user,
              name: ev.id_host.username,
              profilePicture: ev.id_host.image,
            }
          }));

          setEvents(modifiedData);

          console.log(modifiedData); // Change events to data here
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    getPosts();
  }, []); // Empty dependency array to run the effect only once on component mount


  
  return (
    <div className="events">
      {events.map((ev) => (
        <Event event={ev} key={ev.id} />
      ))}
    </div>
  );
};

export default Events;

    // const events = [
    //   {
    //     id: 1,
    //     title: "First Post Title",
    //     city: "Sofia",
    //     category: "Board games",
    //     capacity: 10,
    //     currentCapacity: 4,
    //     description:
    //       "A nice description of the current event. It's pretty long and kinda boring, but you'll have to kindly sit though it since I need to fill just a bit more space to see how descriptions react to being longer. Thank you<3.",
    //     location:
    //       "https://www.google.bg/maps/dir//42.6674403,23.3162753/@42.6668802,23.3162002,17z?hl=bg",
    //     image:
    //       "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     date: "21.10.2024",
    //     remainingTime: "2 hours",
    //     host: {
    //       id: 11,
    //       name: "Luben",
    //       profilePicture:
    //         "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     comments: [
    //       {
    //         user: {
    //           id: 11,
    //           name: "Luben",
    //           profilePicture:
    //             "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         },
    //         comment: "A nice, not too large comment.",
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     title: "Second Post Title",
    //     city: "Pernik",
    //     category: "Board games",
    //     capacity: 14,
    //     currentCapacity: 4,
    //     description:
    //       "A nice description of the current event. It's pretty long and kinda boring, but you'll have to kindly sit though it since I need to fill just a bit more space to see how descriptions react to being longer. Thank you<3.",
    //     location:
    //       "https://www.google.com/maps/d/viewer?mid=17-mWPBv1rYLCmKxan6vTF866LG0&hl=bg&ll=42.57832843669542%2C23.037228589865&z=13",
    //     image:
    //       "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     date: "21.10.2024",
    //     remainingTime: "2 hours",
    //     host: {
    //       id: 11,
    //       name: "Luben",
    //       profilePicture:
    //         "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     comments: [
    //       {
    //         user: {
    //           id: 11,
    //           name: "Luben",
    //           profilePicture:
    //             "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         },
    //         comment: "A nice, not too large comment.",
    //       },
    //     ],
    //   },
    // ];