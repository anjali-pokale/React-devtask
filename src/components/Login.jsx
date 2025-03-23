import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/profile");
  };

  return (
    <div className="container">
      <h2>Sign in to your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          onChange={handleChange}
        />
        <button type="submit" className="primary-btn">Login</button>
      </form>
    </div>

    
  );

};

export default Login;
