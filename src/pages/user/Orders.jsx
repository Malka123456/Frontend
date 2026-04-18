import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/user/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>

      {orders.map(o => (
        <div key={o.id}>
          Order ID: {o.id}
        </div>
      ))}
    </div>
  );
}