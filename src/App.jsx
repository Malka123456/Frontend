import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import ProductPublic from "./pages/shop/ProductPublic";

import ProtectedRoute from "./components/ProtectedRoute";
import SellerRoute from "./components/SellerRoute";

import DashboardLayout from "./pages/seller/DashboardLayout";
import ProductCreate from "./pages/seller/ProductCreate";
import Dashboard from "./pages/seller/Dashboard";
import Products from "./pages/seller/Products";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* USER PROTECTED */}
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/shop/:slug" element={
          <ProtectedRoute>
            <Shop />
          </ProtectedRoute>
        } />

        <Route path="/product/:id" element={
  <ProtectedRoute>
    <ProductPublic />
  </ProtectedRoute>
} />

        {/* SELLER PROTECTED */}
        <Route path="/seller" element={
          <SellerRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </SellerRoute>
        } />

        <Route path="/seller/products" element={
          <SellerRoute>
            <DashboardLayout>
              <Products />
            </DashboardLayout>
          </SellerRoute>
        } />

        <Route path="/seller/create-product" element={
          <SellerRoute>
            <DashboardLayout>
              <ProductCreate />
            </DashboardLayout>
          </SellerRoute>
        } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;