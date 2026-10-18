
import React from "react";

export const Pricing = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-5">
          <h2 className="mb-5">Unbeatable pricing</h2>

          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a
            href="https://zerodha.com/charges/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Seen Pricing{" "}
            <i className="fa fa-long-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="col-7 mt-4">
          <img
            src="/media/images/price.png"
            alt="Zerodha pricing and charges"
            style={{ width: "120%" }}
          />
        </div>
      </div>
    </div>
  );
};
