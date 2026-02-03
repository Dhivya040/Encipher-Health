import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="login-page">
      <h1>Login to your account</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p className="signup-text">
        Don’t have an account? <Link to="/signup">Create one</Link>
      </p>
    </div>
  );
};

export default Login;
