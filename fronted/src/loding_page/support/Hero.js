import React from "react";

export const Hero = () => {
  return (
    <div className="bg-light mb-2 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold mb-0 "style={{color:"#4f4b4b"}}>Support Portal</h1>

        <button
          className="btn btn-primary fw-semibold"
          style={{
            backgroundColor: "#387ed1",
            border: "none",
            padding: "12px 24px",
          }}
        >
          My tickets
        </button>
      </div>

      <div className="position-relative mb-3">
        <i
          className="fa fa-search position-absolute"
          style={{
            left: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#666",
            fontSize: "20px",
          }}
        ></i>
        <input
          type="text"
          className="form-control search-input text-muted"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          style={{
            height: "55px",
            paddingLeft: "85px",
            fontSize: "15px",
            backgroundColor: "#fff",
            border: "1px solid #dee2e6",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};