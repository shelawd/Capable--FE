import React, {useState} from "react";
import '../styles/login.css'

const Register = ({setLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleRegister = () => {
        console.log("Registering with:", username, email, password, role);
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
                        <h2>Create Your Account</h2>
                        <p>Sign up your account</p>
                    <button className="signgoogle" > <img src="asset/google-icone-svg.png" alt="ikon-google" />Sign in with Google</button>
                    <span class="or-text" >or log in with an email account</span>

                    </div>
                    <div className="login-form">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="username" 
                        placeholder="John Doe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control"    
                        id="email" 
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    <label htmlForor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn-click rounded-start" onClick={setRole("Teacher")}>Teacher</button>
                    <button className="btn-click rounded-end" onClick={setRole("User")}>User</button>
                    <button className="btn-signin" onClick={handleRegister} >Sign Up</button>

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