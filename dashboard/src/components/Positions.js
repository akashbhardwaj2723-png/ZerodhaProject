import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPasitions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("1. Token exists:", Boolean(token));

    axios
      .get("http://localhost:8080/allPositions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllPasitions(res.data);
      })
      .catch((err) => {
        console.error("3. REQUEST FAILED");
      });
  }, []);
  return (
    <>
      <h3 className="title">Positions({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, idx) => {
            const currValue = stock.price * stock.qty;
            const isProfile = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfile ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={idx}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>

                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
