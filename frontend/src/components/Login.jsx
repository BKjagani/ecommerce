import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../css/Login.css'
export default function Login() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const API = "http://localhost:4000/api/login/loginUser";

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(API, user);
            const data = await response.data;
            setMessage('Logged in successfully');
            console.log(message, data);
            const token = data.token;
            localStorage.setItem('token', token);
            navigate('/');
        } catch (err) {
            console.log(err);
            setMessage('Error logging in');
        }
    }

 

    return (
        <div className="login-body">
            <div className="login-container">
                <div className="login-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="login-input-group">
                            <input
                                type="text"
                                className="login-form-control"
                                placeholder="Name"
                                aria-label="name"
                                autoComplete="name"
                                aria-describedby="basic-addon1"
                                name="username"
                                value={user.username}
                                onChange={(e) => {
                                    setUser((prevUser) => ({
                                        ...prevUser,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                            />
                        </div>
                        <div className="login-input-group">
                            <input
                                type="password"
                                className="login-form-control"
                                placeholder="Password"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                name="password"
                                autoComplete="current-password"
                                value={user.password}
                                onChange={(e) => {
                                    setUser((prevUser) => ({
                                        ...prevUser,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                            />
                        </div>
                        <button className="login-btn" type="submit">
                            Submit
                        </button>
                    </form>
                    {message && <p className="login-message text-danger">{message}</p>}
                </div>
            </div>
        </div>
    );
}
