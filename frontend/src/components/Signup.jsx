import React, { useState } from "react";
import axios from "axios";
import "../css/Signup.css";


export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const API = "http://localhost:4000/api/signup/postinfo";
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(API, user);
      setMessage("Registered successfully");
      console.log(message);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="myapp-container">
        <div className="myapp-row ">
          <div className="myapp-col-5 m-auto">
            <form action="">
              <div className="myapp-input-group mb-3">
                <input
                  type="text"
                  className="myapp-form-control"
                  placeholder="Name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  name="username"
                  autoComplete="name"
                  value={user.username}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="myapp-input-group mb-3">
                <input
                  type="email"
                  className="myapp-form-control"
                  placeholder="Email"
                  aria-label="email"
                  autoComplete="email"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={user.email}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="myapp-input-group mb-3">
                <input
                  type="tel"
                  className="myapp-form-control"
                  placeholder="Phone No"
                  aria-label="phoneNo"
                  aria-describedby="basic-addon1"
                  name="phoneNo"
                  autoComplete="tel"
                  value={user.phoneNo}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="myapp-input-group mb-3">
                <input
                  type="password"
                  className="myapp-form-control"
                  placeholder="Password"
                  aria-label="current-password"
                  aria-describedby="basic-addon1"
                  name="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={(e) => {
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </div>
              <button
                className="myapp-btn myapp-btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
