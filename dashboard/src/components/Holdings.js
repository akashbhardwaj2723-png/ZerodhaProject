
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";
import React, { useState, useEffect } from "react";
import { Dataset } from "@mui/icons-material";


// import { holdings } from "../data/data";





const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  
useEffect(() => {
  const token = localStorage.getItem("token");

  axios
    .get("http://localhost:8080/allHoldings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    })
    .catch((err) => {
      console.log(err.response?.data || err.message);
    });
}, []);



const labels = allHoldings.map((subArray)=>subArray["name"])

const data= {
  labels,
  datasets:[
    {
    label:"Stock Price",
    data:allHoldings.map((stock)=>stock.price),
    backgroundColor:"rgba(255,99,132, 0.5)"
     }
]
}
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
            </thead>
          {allHoldings.map((stock, idx) => {
            const currValue = stock.price * stock.qty;
            const isProfile = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfile ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            

            return (
              <tr key={idx}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                 <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>

                <td className={profClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>

                <td className={profClass}>{stock.net}</td>
               <td style={{ dayClass }}>{stock.day} </td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
