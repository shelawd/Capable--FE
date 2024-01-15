import React from "react";

const Footer = () => {
    return (
        <div className="mt-5">
        <div className="container">
            <div className="row footer-content">
                <div className="col-md-4">
                    <img src="asset/Atsy-logo.png" alt="" />
                    <p>Get classes and therapy information exclusively on the Capable App. Interested in 'Children's Learning Focus Test'?</p>
                </div>

                <div className="col-md-4">
                    <h4>CAPABLE</h4>
                    <ul>
                        <li><a href="#">About Capable</a></li>
                        <li><a href="#">Class</a></li>
                        <li><a href="#">Information Therapists</a></li>
                        <li><a href="#">About Capable</a></li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h4>CONTACT US</h4>
                    <a href="mailto:capable@gmail.com">capable@gmail.com</a>
                    <a href="tel:+1234567890">081233445566</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;