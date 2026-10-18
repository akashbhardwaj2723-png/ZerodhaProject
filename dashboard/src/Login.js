
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://zerodhaproject-fqq7.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="zerodha-login-page">
      <nav className="login-navbar">
        <div className="login-brand">
          <span className="brand-symbol">Z</span>
          <span>ZERODHA</span>
        </div>
        <span className="brand-caption">TRADING DASHBOARD</span>
      </nav>

      <main className="login-main">
        <div className="login-card">
          <div className="login-icon">
            <i className="fa fa-line-chart"></i>
          </div>

          <h2>Welcome back</h2>
          <p className="login-subtitle">
            Sign in to access your trading dashboard
          </p>

          {error && (
            <div className="login-error" role="alert">
              <i className="fa fa-exclamation-circle"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="name">Username</label>
              <div className="login-input-wrap">
                <i className="fa fa-user"></i>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <div className="login-input-wrap">
                <i className="fa fa-lock"></i>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login to Dashboard"}
              {!loading && <i className="fa fa-arrow-right"></i>}
            </button>
          </form>

          <div className="login-security">
            <i className="fa fa-shield"></i>
            Secure access to your trading account
          </div>
        </div>

        <p className="login-footer">
          Investments in securities market are subject to market risks.
        </p>
      </main>
    </div>
  );
};

export default Login;
