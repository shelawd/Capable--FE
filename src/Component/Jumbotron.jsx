import React from "react";

const Jumbotron = () => {
    return(
        <div className="jumbotron bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="teks-jumbotron">
                            <h1>Joyful steps, unique <br /> rhythms, dancing to</h1>
                            <h1 className="biru">life's melody</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rerum quo iusto consequuntur quisquam,<br /> dicta provident tenetur quod doloremque minus odio?</p>
                            <button className="btn-jumbotron rounded-pill">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="img-jumbotron">
                            <img src="asset/icon-children.png" alt="ikon jumbotron" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-jumbotron2">
                <img src="asset/puzzle-with-country.png" alt="puzzle" />
            </div>
        </div>
    )
}

export default Jumbotron;