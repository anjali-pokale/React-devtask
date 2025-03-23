import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";


const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData); 
    navigate("/profile"); 
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="text" name="company" placeholder="Company Name" required onChange={handleChange} />

        <div className="radio-group">

          <label>Are you an Agency?</label>
          <label><input type="radio" name="agency" value="Yes" onChange={handleChange} defaultChecked /> Yes</label>
          <label><input type="radio" name="agency" value="No" onChange={handleChange} /> No</label>
        </div>

        <button type="submit" className="primary-btn">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
