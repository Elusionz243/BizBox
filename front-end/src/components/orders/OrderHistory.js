import React, { useEffect, useState } from "react";

import "./OrderHistory.scss";
import PortalHeader from "../header/PortalHeader";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   // API call to get order history
  //   async function fetchOrders() {
  //     const response = await fetch("/api/orders");
  //     const data = await response.json();
  //     setOrders(data);
  //   }
  //   fetchOrders();
  // }, []);

  return (
    <div>
      <PortalHeader />
      <div>
        <h2>Order History</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order #{order.id}</p>
              <p>Total: ${order.total}</p>
              <p>Date: {order.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderHistory;
