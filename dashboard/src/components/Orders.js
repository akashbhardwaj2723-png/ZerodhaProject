
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  
useEffect(() => {
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/allOrders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Orders data:", response.data);
      setOrders(response.data);
    } catch (error) {
      console.log(
        "Error fetching orders:",
        error.response?.data || error.message
      );
    }
  };

  fetchOrders();
}, []);
  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <h3>Orders ({orders.length})</h3>

          <table className="table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
