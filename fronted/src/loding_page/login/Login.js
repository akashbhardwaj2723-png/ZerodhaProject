import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://zerodhaproject-fqq7.onrender.com/api/auth/login",
        formData,
      );

      // Save JWT token after successful login
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");

      console.log(res.data);

      // Redirect to dashboard
     window.location.href = "https://zerodha-dashboard-static.onrender.com/";
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-2">Welcome Back</h2>

        <p className="text-center text-muted mb-4">
          Login to your Zerodha account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <a href="/signup" className="text-decoration-none">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
