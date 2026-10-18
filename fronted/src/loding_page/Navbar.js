import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg p-3 border-bottom bg-white position-relative"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            style={{ width: "140px" }}
          />
        </Link>

        {/* Navigation Links */}
        <div className="d-flex align-items-center ml-auto">
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-muted mx-2" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted mx-2" to="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted mx-2" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted mx-2" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted mx-2" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted mx-2" to="/support">
                Support
              </Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            type="button"
            className="btn border-0 ml-3"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: "22px", color: "#050b12" }}
          >
            <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {menuOpen && (
        <div
          className="position-absolute bg-white shadow mt-5"
          style={{
            top: "100%",
            right: "1.5%",
            width: "70%",
            zIndex: 2000,
          }}
        >
          {/* Products */}
          <div className="row p-4 text-center">
            <div className="col-md-3 mb-3">
              <a href="https://kite.zerodha.com/">
                <i className="fa fa-line-chart fa-2x text-primary"></i>
              </a>

              <h5 className="mt-3 mb-2">Kite</h5>
              <p className="mb-0 text-muted">Trading platform</p>
            </div>

            <div className="col-md-3 mb-3">
              <a href="https://console.zerodha.com/">
                <i className="fa fa-pie-chart fa-2x text-primary"></i>
              </a>

              <h5 className="mt-3 mb-2">Console</h5>
              <p className="mb-0 text-muted">Backoffice</p>
            </div>

            <div className="col-md-3 mb-3">
              <a href="https://kite.trade/">
                <i className="fa fa-cubes fa-2x"></i>
              </a>

              <h5 className="mt-3 mb-2">Kite Connect</h5>
              <p className="mb-0 text-muted">Trading APIs</p>
            </div>

            <div className="col-md-3 mb-3">
              <a href="https://coin.zerodha.com/">
                <i className="fa fa-circle-o fa-2x text-warning"></i>
              </a>

              <h5 className="mt-3 mb-2">Coin</h5>
              <p className="mb-0 text-muted">Mutual funds</p>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="row bg-light p-4">
            {/* Utilities */}
            <div className="col-md-4">
              <h5 className="mb-3">Utilities</h5>

              <p className="mb-1">
                <Link to="/calculator">Calculators</Link>
              </p>
              <p className="mb-1">
                <Link to="/calculator">Brokerage calculator</Link>
              </p>
              <p className="mb-1">
                <Link to="/calculator">Margin calculator</Link>
              </p>
              <p className="mb-0">
                <Link to="/calculator">SIP calculator</Link>
              </p>
            </div>

            {/* Updates */}
            <div className="col-md-4">
              <h5 className="mb-3">Updates</h5>

              <p className="mb-1">
                <a href="https://zerodha.com/z-connect/">Z-Connect blog</a>
              </p>
              <p className="mb-1">
                <a href="https://zerodha.com/marketintel/bulletin/">
                  Circulars / Bulletin
                </a>
              </p>
              <p className="mb-1">
                <a href="https://zerodha.com/ipo/">IPOs</a>
              </p>
              <p className="mb-0">
                <a href="https://kite.zerodha.com/">Markets</a>
              </p>
            </div>

            {/* Education */}
            <div className="col-md-4">
              <h5 className="mb-3">Education</h5>

              <p className="mb-1">
                <a href="https://zerodha.com/varsity/">Varsity</a>
              </p>
              <p className="mb-0">
                <a href="https://tradingqna.com/">Trading Q&amp;A</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
