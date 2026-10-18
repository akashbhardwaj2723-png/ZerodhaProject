 
import React, { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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

  if (!formData.username || !formData.email || !formData.password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/signup",
      {
        name: formData.username,
        password: formData.password,
      }
    );

    alert(res.data.message);
    console.log(res.data);
  } catch (error) {
    alert(error.response?.data?.message || "Signup failed");
    console.log(error.response?.data || error.message);
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-2">Create Account</h2>

        <p className="text-center text-muted mb-4">
          Join Zerodha today
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};


