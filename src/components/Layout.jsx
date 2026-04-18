import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/signup">Signup</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}