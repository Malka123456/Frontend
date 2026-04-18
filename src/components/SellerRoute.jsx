import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/auth";

export default function SellerRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  // later we will check role from backend
  return children;
}