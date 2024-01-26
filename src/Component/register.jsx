import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleRegister = async () => {
        try {
            const response = await fetch(
                "https://backend-capable.vercel.app/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                        role: selectedOption,
                    }),
                }
            );

            if (response.ok) {
                console.log("Register successful");
                window.alert("Register successful!");
                navigate("/login");
            } else {
                // Unsuccessful register
                console.error("Registration failed");
                window.alert(
                    "Registration failed. Please check your credentials."
                );
            }
        } catch (error) {
            console.error("Error during register:", error);
            window.alert("Error during register. Please try again later.");
        }
    };

    return (
        <div>
            <section className="login d-flex">
                <div className="login-left w-50 h-100 ">
                    <div
                        className="row justify-content-center
                    mt-5"
                    >
                        <div className="col-6">
                            <div className="header">
                                <h2>Create Your Account</h2>
                                <p>Sign up your account</p>
                            </div>

                            <div className="login-form">
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="John Doe"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />

                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label for="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <Form>
                                <Form.Check
                                    type="radio"
                                    label="Teacher"
                                    name="radioGroup"
                                    value="Teacher"
                                    checked={selectedOption === "Teacher"}
                                    onChange={handleRadioChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Parent"
                                    name="radioGroup"
                                    value="user"
                                    checked={selectedOption === "user"}
                                    onChange={handleRadioChange}
                                />
                            </Form>
                            <button
                                className="btn-signin"
                                onClick={handleRegister}
                            >
                                Sign Up
                            </button>

                            <div class="action-links or-text">
                                <span>
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-decoration-none"
                                    >
                                        Login Now
                                    </Link>
                                </span>
                                <br />
                                <a href="#" className="text-decoration-none">
                                    Forgot Password
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="login-right w-50 h-100">
                    <img src="asset/ikon-anak.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Register;
