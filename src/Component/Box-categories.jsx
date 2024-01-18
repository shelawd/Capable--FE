import React from "react";
import "../styles/style.css";

const BoxCategories = () => {
    return (
        <div className="box">
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="asset/Vector1.png" alt="" />
                            <h4>30+</h4>
                            <p className="card-title">Categories</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="asset/Vector2.png" alt="" />
                            <h4>30+</h4>
                            <p className="card-title">Categories</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="asset/Vector3.png" alt="" />
                            <h4>30+</h4>
                            <p className="card-title">Categories</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src="asset/Vector4.png" alt="" />
                            <h4>30+</h4>
                            <p className="card-title">Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BoxCategories;