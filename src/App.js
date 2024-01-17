import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing-page";
import Login from "./Component/login";
import Register from "./Component/register";
import Class from "./Component/class-page/class";
import Value from "./Component/Preview-value";
import Camera from "./Component/camera";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={<Login setLoggedIn={setLoggedIn} />}
                />
                <Route
                    path="/register"
                    element={<Register setLoggedIn={setLoggedIn} />}
                />
                <Route
                    path="/"
                    element={
                        <LandingPage
                            isLoggedIn={isLoggedIn}
                            setLoggedIn={setLoggedIn}
                        />
                    }
                />

                <Route path="/class" element={<Class />} />
                <Route path="/value" element={<Value />} />
                <Route path="/camera" element={<Camera />} />
            </Routes>
        </Router>
    );
}

export default App;
