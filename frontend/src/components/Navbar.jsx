import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import logo from "../img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./Cart";

export default function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setShowLogin(!!token);
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("token");

    setShowLogin(false);
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt="Logo" />
            <span>ANRUEY</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {!showLogin && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {showLogin && (
              <>
                <ul className="navbar-nav ms-auto navbar-icons">
                  <Cart/>
                  <button
                    className="btn btn-warning ms-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
