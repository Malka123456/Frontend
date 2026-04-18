import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function ShopPublic() {
  const { shopSlug } = useParams();
  const [shop, setShop] = useState(null);

  useEffect(() => {
    api.get(`/shops/${shopSlug}`)
      .then(res => setShop(res.data))
      .catch(err => console.log(err));
  }, [shopSlug]);

  return (
    <div>
      <h1>Shop</h1>

      {shop ? (
        <pre>{JSON.stringify(shop, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}