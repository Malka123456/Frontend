import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "12px",
      borderRadius: "8px",
      width: "200px"
    }}>
      {/* IMAGE (placeholder for now) */}
      <div style={{
        height: "120px",
        background: "#eee",
        marginBottom: "10px"
      }} />

      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      {/* future product page */}
      <Link to={`/product/${product.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}