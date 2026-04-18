import { useParams } from "react-router-dom";

export default function Shop() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Shop Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}