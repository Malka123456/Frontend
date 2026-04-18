import { api } from "../../api/api";

export default function BecomeSeller() {

  async function handleBecomeSeller() {
    try {
      await api.post("/user/become-seller");
      alert("You are now a seller!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Become Seller</h1>
      <button onClick={handleBecomeSeller}>
        Become Seller
      </button>
    </div>
  );
}