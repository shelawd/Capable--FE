import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css'
import Navbar from "../Component/navbar";
import Jumbotron from "../Component/Jumbotron";
import CreativeClass from "../Component/Creative-class";
import TeacherGroup from "../Component/Teacher-group";
import BoxCategories from "../Component/Box-categories";
import NearestMap from "../Component/Nearest-map";
import Footer from "../Component/Footer";



function LandingPage ({ isLoggedIn }) {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <CreativeClass/>
            <TeacherGroup/>
            <BoxCategories/>
            <NearestMap/>
            <Footer/>

            {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <Link to="/login">Go to Login</Link>
      )}
        </div>
    );
}

export default LandingPage;
