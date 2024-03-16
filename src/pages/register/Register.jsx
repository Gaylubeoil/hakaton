import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const userData = {
    username: "Andrew",
    email: "AndrewAndewson@gmail.com",
    password: "nwordpassword",
  };

  const register = () => {
    console.log(formData);

    fetch("http://192.168.146.1:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");

        return response.json();
      })
      .then((data) => {
        console.log("User created successfully:", data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <span>Have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              onChange={onHandleChange}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={onHandleChange}
            />
            <input type="email" placeholder="Email" onChange={onHandleChange} />
            <button onSubmit={register}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
