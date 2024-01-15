import React from "react";
import '../styles/style.css'
import Navbar from "../Component/navbar";
import Jumbotron from "../Component/Jumbotron";
import CreativeClass from "../Component/Creative-class";
import TeacherGroup from "../Component/Teacher-group";
import BoxCategories from "../Component/Box-categories";
import NearestMap from "../Component/Nearest-map";
import Footer from "../Component/Footer";



function LandingPage () {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <CreativeClass/>
            <TeacherGroup/>
            <BoxCategories/>
            <NearestMap/>
            <Footer/>
        </div>
    );
}

export default LandingPage;
