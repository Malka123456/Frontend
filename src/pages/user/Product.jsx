import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function UserProduct() {
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
      <p>₹ {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}