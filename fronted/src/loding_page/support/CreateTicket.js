
import React, { useState } from "react";

const categories = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    links: ["Online account opening", "Offline account opening", "Charges", "Documents required"],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user-circle-o",
    links: ["Login credentials", "Account modification", "Profile details"],
  },
  {
    title: "Kite",
    icon: "fa-line-chart",
    links: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"],
  },
  {
    title: "Funds",
    icon: "fa-inr",
    links: ["Add funds", "Withdraw funds", "Fund statements"],
  },
  {
    title: "Console",
    icon: "fa-pie-chart",
    links: ["Reports", "Tax P&L", "Tradebook"],
  },
  {
    title: "Coin",
    icon: "fa-circle-o",
    links: ["Mutual funds", "SIP", "Redemption"],
  },
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

export const CreateTicket = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container-fluid py-5 px-4">
      <div className="row">
        {/* Left side dropdowns */}
        <div className="col-md-8">
          {categories.map((category, index) => (
            <div className="card rounded-0 mb-3" key={category.title}>
              <div
                className="card-header bg-white  border-0"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="bg-light text-primary d-flex align-items-center justify-content-center"
                    style={{ width: "68px", height: "45px" }}
                  >
                    <i className={`fa ${category.icon} fa-lg`}></i>
                  </div>

                  <span className="ml-3 flex-grow-1" style={{ fontSize: "20px" }}>
                    {category.title}
                  </span>

                  <i
                    className={`fa ${
                      openIndex === index
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    } text-primary mr-4`}
                  ></i>
                </div>
              </div>

              {openIndex === index && (
                <div className="card-body border-top">
                  <ul className="mb-0 pl-4">
                    {category.links.map((link) => (
                      <li className="py-2 text-primary" key={link}>
                        <a href="#" className="text-primary">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div className="col-md-4">
          <div
            className="p-3 mb-4"
            style={{
              backgroundColor: "#fff4e5",
              borderLeft: "8px solid #ff9800",
            }}
          >
            <ul className="mb-0 pl-4">
              <li className="mb-3">
                <a href="#" className="text-primary">
                  Surveillance measure on scrips - October 2026
                </a>
              </li>
              <li>
                <a href="#" className="text-primary">
                  Current Buybacks - October 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="card rounded-0">
            <div className="card-header bg-light">
              Quick links
            </div>

            <div className="list-group list-group-flush">
              {quickLinks.map((link, index) => (
                <a
                  href="#"
                  className="list-group-item list-group-item-action text-primary"
                  key={link}
                >
                  {index + 1}. {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
