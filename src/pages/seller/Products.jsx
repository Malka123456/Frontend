import { useEffect, useState } from "react";
import { api } from "../../api/api";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/seller/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>My Products</h1>

      <div style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap"
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}