import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/user/cart")
      .then(res => setCart(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.productName}</p>
        </div>
      ))}
    </div>
  );
}