import React from "react";
import './login.css'

const Register = () => {
    return (
        <div>
            <section className="login d-flex">
                <div className="login-left w-50 h-100 ">
                    <div className="row justify-content-center
                    mt-5">
                        <div className="col-6">
                        <div className="header"> 
                        <h2>Create Your Account</h2>
                        <p>Sign up your account</p>
                    <button className="signgoogle" > <img src="asset/google-icone-svg.png" alt="ikon-google" />Sign in with Google</button>
                    <span class="or-text" >or log in with an email account</span>

                    </div>
                    <div className="login-form" method="post">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="John Doe"></input>
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="example@gmail.com"></input>
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password"></input>
                    </div>

                    <button className="btn-click rounded-start" id="role">Teacher</button>
                    <button className="btn-click rounded-end" id="role">User</button>
                    <button className="btn-signin" type="submit" >Sign Up</button>

                    <div class="action-links or-text">
                        <span>Don't have an account? <a href="#" class="text-decoration-none">Register Now</a></span>
                        <br />
                        <a href="#" class="text-decoration-none">Forgot Password</a>
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
}

export default Register;