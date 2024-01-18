import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const Register = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
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
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  id="email"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Form>
      <Form.Check
        type="radio"
        label="Teacher"
        name="radioGroup"
        value="teacher"
        checked={selectedOption === "teacher"}
        onChange={handleRadioChange}
      />
      <Form.Check
        type="radio"
        label="Parent"
        name="radioGroup"
        value="parent"
        checked={selectedOption === "parent"}
        onChange={handleRadioChange}
      />
      </Form>
              <button className="btn-signin">Sign Up</button>

              <div class="action-links or-text">
                <span>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Register Now
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
