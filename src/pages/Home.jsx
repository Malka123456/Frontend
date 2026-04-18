import { useEffect, useState } from "react";
import { api } from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>🔥 Products</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px"
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}