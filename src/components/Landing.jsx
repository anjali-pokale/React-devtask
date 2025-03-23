import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (


    <div className="container">
        <div className="card">
          <h1 class="font-bold ">Welcome to PopX</h1>
          <p>Join thousands of professionals who trust PopX to manage their digital identity effortlessly.</p>
          <button className="primary-btn cursor-pointer" onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <button className="secondary-btn cursor-pointer" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
    </div>

  );
};

export default Landing;
