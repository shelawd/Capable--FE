import React from "react";

const Jumbotron = () => {
    return(
    <div>
        <div className="jumbotron bg-white">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="teks-jumbotron">
                            <h1>Joyful steps, unique <br /> rhythms, dancing to</h1>
                            <h1 className="biru">life's melody</h1>
                            <p>Encourage the potential of your autistic child on our website. Join now for a learning experience that supports the unique development of each child.</p>
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
            
            
        </div>
        <div className="img-jumbotron2">
        <img src="asset/Jumbotron.png" alt="puzzle" />
        </div>
    </div>
    )
}

export default Jumbotron;