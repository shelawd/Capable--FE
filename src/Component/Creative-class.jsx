import React from "react";
import { Link } from 'react-router-dom';

const CreativeClass = () => {
    return (
        <div className="creative-class" id="creative-class">
            <div className="container">
                <h3>Creative Classes</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="asset/class1.png" alt="class" />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <h5 class="card-class-title">Mathematics Class</h5>
                                <p class="card-text">Navigating math milestones with autism-focused teaching.</p>
                                <Link to="/class" className="btn-watch btn btn-primary rounded-pill">
                Watch Now
            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="asset/class2.png" alt="class" />
                            <div className="card-body">
                                <h5 className="card-title">Samuel Abdi</h5>
                                <h5 class="card-class-title">Mathematics Class</h5>
                                <p class="card-text">Navigating math milestones with autism-focused teaching.</p>
                                <Link to="/class" className="btn-watch btn btn-primary rounded-pill">
                Watch Now
            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="asset/class3.png" alt="class" />
                            <div className="card-body">
                                <h5 className="card-title">Nazela Clara</h5>
                                <h5 class="card-class-title">Mathematics Class</h5>
                                <p class="card-text">Navigating math milestones with autism-focused teaching.</p>
                                <Link to="/class" className="btn-watch btn btn-primary rounded-pill">
                Watch Now
            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreativeClass;