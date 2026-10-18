import React, { useState } from "react";

const data = {
  Equity: {
    columns: [
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    rows: [
      [
        "Brokerage",
        "Zero Brokerage",
        "0.03% or Rs. 20/executed order whichever is lower",
        "0.03% or Rs. 20/executed order whichever is lower",
        "Flat Rs. 20 per executed order",
      ],
      [
        "STT/CTT",
        "0.1% on buy & sell",
        "0.025% on the sell side",
        "0.05% on the sell side",
        "0.15% on exercised options; 0.15% on sell side (premium)",
      ],
      [
        "Transaction charges",
        "NSE: 0.00307% BSE: 0.00375%",
        "NSE: 0.00307% BSE: 0.00375%",
        "NSE: 0.00183% BSE: 0",
        "NSE: 0.03553% (on premium) BSE: 0.0325% (on premium)",
      ],
      [
        "GST",
        "18% on brokerage + SEBI charges + transaction charges",
        "18% on brokerage + SEBI charges + transaction charges",
        "18% on brokerage + SEBI charges + transaction charges",
        "18% on brokerage + SEBI charges + transaction charges",
      ],
      [
        "SEBI charges",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
        "₹10 / crore",
      ],
      [
        "Stamp charges",
        "0.015% or ₹1500 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
      ],
    ],
  },

  Currency: {
    columns: ["Currency futures", "Currency options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/order, whichever is lower", "₹20 per executed order"],
      ["STT/CTT", "Not applicable", "Not applicable"],
      ["Transaction charges", "Exchange charges apply", "Exchange charges apply"],
      ["GST", "18% on applicable charges", "18% on applicable charges"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "Applicable on buy side", "Applicable on buy side"],
    ],
  },

  Commodity: {
    columns: ["Commodity futures", "Commodity options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/order, whichever is lower", "₹20 per executed order"],
      ["STT/CTT", "Applicable on sell side", "Applicable on exercised options"],
      ["Transaction charges", "Exchange charges apply", "Exchange charges apply"],
      ["GST", "18% on applicable charges", "18% on applicable charges"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "Applicable on buy side", "Applicable on buy side"],
    ],
  },
};

export default function Brokerage() {
  const [active, setActive] = useState("Equity");
  const current = data[active];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">

          {/* Tabs */}
          <div className="d-flex gap-2 gap-md-4 border-bottom mb-4">
            {Object.keys(data).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`btn rounded-0 px-3 py-2 fs-5 ${
                  active === tab
                    ? "text-dark border-bottom border-primary border-2"
                    : "text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Charges Table */}
          <div className="table-responsive border rounded">
            <table className="table table-striped align-middle mb-0 text-muted">
              <thead>
                <tr>
                  <th></th>
                  {current.columns.map((column) => (
                    <th key={column} className="fw-normal text-nowrap">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {current.rows.map((row) => (
                  <tr key={row[0]}>
                    <td className="text-secondary">{row[0]}</td>
                    {row.slice(1).map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Brokerage Calculator Link */}
          <p className="text-center fs-5 mt-4">
            <a
              href="https://zerodha.com/brokerage-calculator/"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-decoration-none"
            >
              Calculate your costs upfront
            </a>{" "}
            using our brokerage calculator
          </p>

        </div>
      </div>
      <div className="row mt-5 mb-5">
        <h3 className="">Charges for account opening</h3>
        <div className="row border">
           <div className="table-responsive">
  <div className="table-responsive border rounded">
    <table className="table table-striped mb-0 align-middle">
      <thead>
        <tr>
          <th className="fw-normal p-3">Type of account</th>
          <th className="fw-normal p-3">Charges</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="p-3">Individual account</td>
          <td className="p-3">
            <span className="badge bg-success rounded-0 fs-6">FREE</span>
          </td>
        </tr>

        <tr>
          <td className="p-3">Minor account</td>
          <td className="p-3">
            <span className="badge bg-success rounded-0 fs-6">FREE</span>
          </td>
        </tr>

        <tr>
          <td className="p-3">NRI account</td>
          <td className="p-3">₹ 500</td>
        </tr>

        <tr>
          <td className="p-3">HUF account</td>
          <td className="p-3">
            <span className="badge bg-success rounded-0 fs-6">FREE</span>
            <span className="ms-2">(online) / ₹ 500 (offline)</span>
          </td>
        </tr>

        <tr>
          <td className="p-3">
            Partnership, LLP, and Corporate accounts (offline only)
          </td>
          <td className="p-3">₹ 500</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
        </div>
      </div>
    </div>
    
  );
}