import React from "react";
import { Link } from "react-router-dom";


const Value = () => {
    return (
    <div class="value-child mt-5">
    <h3>Your Child's Progress Report</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perferendis?</p>

    <div class="image-container">
        <img class="w-50 h-50" src="asset/childrenball.png" alt="children" />
    </div>

    <div class="report">
        <h3>Nilai Belajar: </h3>
        <h3>Nilai Quiz: </h3>
        <h3>Nilai Fokus: </h3>
    </div>

    <div class="back-to-dashboard">
        <a class="value-child" href="#">
            <Link to="/">Kembali Ke Dashboard</Link>
        </a>
    </div>
</div>

    )
}

export default Value;