import { Link } from "react-router-dom";
import React, {useState}from "react";
import '../styles/login.css'

const Login = ({setLoggedIn}) => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState (" ");

    const handleLogin = () => {
        console.log("Logging in with:", email, password);
        setLoggedIn(true);
    };  

    return (
        <div>
            <section className="login d-flex">
                <div className="login-left w-50 h-100 ">
                    <div className="row justify-content-center
                    mt-5">
                        <div className="col-6">
                        <div className="header"> 
                        <h2>Welcome Back</h2>
                        <p>Log in to your account</p>
                    <button className="signgoogle" > <img src="asset/google-icone-svg.png" alt="ikon-google" />Sign in with Google</button>
                    <span className="or-text" >or log in with an email account</span>
                    </div>

                    <div className="login-form">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        className="form-control"
                        type="email"  
                        id="email" 
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="password" className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"  
                        id="email" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>

                    <button className="btn-signin" onClick={handleLogin}>Sign In</button>

                    <div class="action-links or-text">
                        <span>Don't have an account? <Link to="/register" className="text-decoration-none">Register Now</Link></span>
                        <br />
                        <a href="#" className="text-decoration-none">Forgot Password</a>
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

export default Login;