import React, {useState} from "react"; 
import "../styles/style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <a className="navbar-brand" href="#">
          <img className="d-inline-block align-top ms-5" src="asset/Atsy-logo.png" alt="logo" width="30" height="30" />
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
          <ul className="navbar-nav ml-auto me-4">
            {/* Menu Navigasi */}
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
            {/* Menu untuk Login atau Profil */}
            <li className="nav-item me-3">
              {isLoggedIn ? (
                <Link to="/" className="nav-link">
                  <img src="asset/avatar.png" width="30" height="30" alt="profil" />
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  <button className="btn btn-outline-primary" onClick={handleLogin}>
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;