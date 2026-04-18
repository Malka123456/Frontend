import { Link } from "react-router-dom";
import {
  Menu,
  Store,
  Package,
  PlusCircle,
  ShoppingBag,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  ChevronRight,
  ShieldCheck,
  Copy,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: BarChart3, to: "/seller" },
  { label: "My Products", icon: Package, to: "/seller/products" },
  { label: "Add Product", icon: PlusCircle, to: "/seller/create-product" },
  { label: "Orders", icon: ShoppingBag, to: "/seller/orders" },
  { label: "Payments/Earnings", icon: CreditCard, to: "/seller/earnings" },
  { label: "Analytics/Reports", icon: BarChart3, to: "/seller/reports" },
  { label: "Profile/Store Setting", icon: Settings, to: "/seller/settings" },
  { label: "Logout", icon: LogOut, to: "/logout" },
];

const cards = [
  { title: "Total Orders", value: "290" },
  { title: "Total Sales", value: "$6,000" },
  { title: "Wallet Balance", value: "$1,000" },
  { title: "Pending Orders", value: "11" },
];

const inventory = [
  { title: "In Stock", value: "37" },
  { title: "Low Stock", value: "8" },
  { title: "Out Of Stock", value: "16" },
];

const recentOrders = [
  { id: "00123", customer: "Riya", product: "T-Shirt", qty: 2, status: "Shipped" },
  { id: "00146", customer: "Aman", product: "Jacket", qty: 1, status: "Pending" },
  { id: "00329", customer: "Kashi", product: "Kurta set", qty: 1, status: "Shipped" },
];

function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#f2f2f2",
        border: "1px solid #e4e4e4",
        borderRadius: "14px",
        padding: "16px",
        minHeight: "96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: 700, color: "#222" }}>{title}</div>
      <div style={{ fontSize: "30px", fontWeight: 800, color: "#000", lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid #e6e6e6",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
          <button
            type="button"
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
              lineHeight: 0,
            }}
            aria-label="Menu"
          >
            <Menu size={34} strokeWidth={2.2} />
          </button>

          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: "28px", fontWeight: 800, fontStyle: "italic", lineHeight: 1 }}>
              Heaven Cart Seller Dashboard
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "999px",
                  background: "#111",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <Store size={24} />
              </div>

              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "18px", fontWeight: 700 }}>Kshama Teotia</div>
                <div style={{ fontSize: "15px", color: "#333" }}>Shop: Kshama Fashion Store</div>
                <div style={{ fontSize: "15px", color: "#0b6", display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShieldCheck size={16} />
                  Verified Seller
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            color: "#1b4dff",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#222", display: "flex", alignItems: "center", gap: "6px" }}>
            <Copy size={16} />
            Shop Link
          </span>
          <a href="https://heavencart.com/shop/kshama_fashion_store-01" target="_blank" rel="noreferrer">
            https://heavencart.com/shop/kshama_fashion_store-01
          </a>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <aside
          style={{
            width: "260px",
            borderRight: "1px solid #e6e6e6",
            background: "#fff",
            padding: "14px 10px",
            flexShrink: 0,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    color: "#111",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    fontSize: "15px",
                  }}
                >
                  <Icon size={22} strokeWidth={2} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main style={{ flex: 1, padding: "16px", overflow: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
            {cards.map((c) => (
              <StatCard key={c.title} title={c.title} value={c.value} />
            ))}
          </div>

          <section style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2 style={{ margin: 0, fontSize: "26px", fontWeight: 800 }}>Inventory Status</h2>
              <Bell size={20} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px", marginTop: "12px" }}>
              {inventory.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#f2f2f2",
                    border: "1px solid #e4e4e4",
                    borderRadius: "14px",
                    padding: "18px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: 700 }}>{item.title}</div>
                  <div style={{ fontSize: "34px", fontWeight: 900, marginTop: "8px" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: "20px" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: "26px", fontWeight: 800 }}>Recent Order</h2>

            <div
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 1.4fr 100px 120px",
                  gap: "10px",
                  padding: "12px 14px",
                  fontWeight: 800,
                  borderBottom: "1px solid #eee",
                  background: "#fafafa",
                }}
              >
                <div>Order ID</div>
                <div>Customer</div>
                <div>Product</div>
                <div>Quantity</div>
                <div>Status</div>
              </div>

              {recentOrders.map((row) => (
                <div
                  key={row.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr 1.4fr 100px 120px",
                    gap: "10px",
                    padding: "12px 14px",
                    borderBottom: "1px solid #f1f1f1",
                    fontSize: "15px",
                    alignItems: "center",
                  }}
                >
                  <div>{row.id}</div>
                  <div>{row.customer}</div>
                  <div>{row.product}</div>
                  <div>{row.qty}</div>
                  <div style={{ color: row.status === "Shipped" ? "#0a8f3c" : "#ff4d4f", fontWeight: 700 }}>
                    {row.status}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "18px" }}>
            <button
              type="button"
              style={{
                border: "1px solid #ddd",
                background: "#fff",
                padding: "10px 14px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              share copy paste
            </button>
            <button
              type="button"
              style={{
                border: "1px solid #ddd",
                background: "#fff",
                padding: "10px 14px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ChevronRight size={16} />
              share
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}