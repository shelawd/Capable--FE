import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css";

const Navbar = (props) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Navigate to the /login route
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <a className="navbar-brand" href="#">
                <img
                    className="d-inline-block align-top ms-5"
                    src="asset/Atsy-logo.png"
                    alt="logo"
                    width="30"
                    height="30"
                />
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto align-items-center">
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#creative-class">
                            Academy
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#information">
                            Information
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">
                            Service
                        </a>
                    </li>
                    <li className="nav-item me-3">
                        {props.isLoggedIn ? (
                            <a className="nav-link " href=""><img 
                            src="asset/avatar.png"
                            width="70%"
                            height="auto"
                            alt="profile"
                            className="nav-link"
                        /></a>
                            
                        ) : (
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
