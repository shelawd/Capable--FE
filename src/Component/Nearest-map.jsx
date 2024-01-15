import React from "react";

const NearestMap = () => {
    return (
        <div className="nearest">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="text-nearest">
                            <h3>The Nearest Therapists</h3>
                            <p>Information about the nearest therapists or clinics</p>
                            <button className="btn-nearest">Go Therapists Yogyakarta</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="img-nearest">
                            <img className="h-50 w-100" src="asset/maps.png" alt="maps" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NearestMap;