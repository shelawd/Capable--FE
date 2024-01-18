import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Value = () => {
    const navigate = useNavigate();
  
    const notify = () => {
      toast("Plus Ultra 💪", { onClose: () => navigate("/"), autoClose:3000, });
    }
    

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
        <button className="btn btn-primary" onClick={notify}>Back to Dashboard</button>
        <ToastContainer />
    </div>
</div>

    )
}

export default Value;