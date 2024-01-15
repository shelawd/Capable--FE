import React from "react"; 
import "../styles/style.css";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img className="d-inline-block align-top" src="asset/Atsy-logo.png" alt="logo" width="30" height="30"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Academy</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Information</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="asset/avatar.png" width="30" height="30" alt="profil" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;