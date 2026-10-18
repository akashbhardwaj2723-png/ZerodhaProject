import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <img
        src="/media/images/error.png"
        alt="Page Not Found"
        className="img-fluid"
        style={{ width: "300px" }}
      />

      <h1 className="mt-3">404 - Page Not Found</h1>

      <p className="text-muted">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-primary mb-5">
        Go to Home
      </Link>
    </div>
  );
};