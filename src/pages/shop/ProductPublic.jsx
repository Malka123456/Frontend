import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function ProductPublic() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>

      <div style={{
        width: "300px",
        height: "200px",
        background: "#eee",
        marginBottom: "20px"
      }} />

      <h2>₹ {product.price}</h2>

      <p>{product.description}</p>

      <button style={{
        padding: "10px",
        background: "black",
        color: "white"
      }}>
        Add to Cart
      </button>
    </div>
  );
}