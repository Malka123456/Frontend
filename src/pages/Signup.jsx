import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/signup", form);

      localStorage.setItem("token", res.data.token);

      alert("Signup success");

      navigate("/");

    } catch (err) {
      alert("Signup failed");
    }
  }

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input placeholder="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password" placeholder="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button>Create Account</button>
      </form>
    </div>
  );
}