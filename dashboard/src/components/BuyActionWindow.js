
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
      
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      

      // Close window only after successful order placement
      closeBuyWindow();
    } catch (error) {
      console.log(
        "Order error:",
        error.response?.status,
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <Link
            to="#"
            className="btn btn-blue"
            onClick={handleBuyClick}
            style={{
              pointerEvents: loading ? "none" : "auto",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Processing..." : mode}
          </Link>

          <Link
            to="#"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
