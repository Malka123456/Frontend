import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => {
        console.log("API RESPONSE:", res.data);

        const data =
          res.data?.products ||
          res.data?.data ||
          res.data ||
          [];

        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {Array.isArray(products) && products.map((p) => (
        <div key={p.id}>
          {p.name}
        </div>
      ))}
    </div>
  );
}