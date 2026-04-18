import { useState } from "react";
import { api } from "../../api/api";

export default function ProductCreate() {
  const [form, setForm] = useState({
    name: "",
    price: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/seller/products", form);
    alert("Product created!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />

      <input
        placeholder="Price"
        onChange={(e) => setForm({...form, price: e.target.value})}
      />

      <button>Create</button>
    </form>
  );
} 