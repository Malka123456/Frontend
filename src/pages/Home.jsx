import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "/src/api/api.js";import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  ChevronRight,
  Star,
  Circle,
  Layers3,
} from "lucide-react";

function normalizeProductsResponse(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.products)) return data.products;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

function toCurrency(value) {
  const num = Number(value || 0);
  return `₹ ${num.toLocaleString("en-IN")}`;
}

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{
        textDecoration: "none",
        color: "#111",
        display: "block",
        border: "1px solid #e6e6e6",
        borderRadius: "14px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
          }
          alt={product.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            display: "block",
            background: "#f3f3f3",
          }}
        />
        <button
          type="button"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "30px",
            height: "30px",
            borderRadius: "999px",
            border: "1px solid #ddd",
            background: "#fff",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <Heart size={14} />
        </button>
      </div>

      <div style={{ padding: "12px" }}>
        <div style={{ fontSize: "14px", color: "#666", marginBottom: "4px" }}>
          {product.category || "Ethnic Wear"}
        </div>
        <div style={{ fontSize: "15px", fontWeight: 800, lineHeight: 1.3, minHeight: "40px" }}>
          {product.name}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "8px" }}>
          <div style={{ fontSize: "22px", fontWeight: 900 }}>{toCurrency(product.price)}</div>
          {product.mrp ? (
            <div style={{ color: "#777", textDecoration: "line-through", fontSize: "13px" }}>
              {toCurrency(product.mrp)}
            </div>
          ) : null}
        </div>

        <div style={{ fontSize: "13px", color: "#555", marginTop: "6px" }}>
          ₹ {product.price ? Math.round(Number(product.price)) : 0} with Pay Later
        </div>
        <div style={{ fontSize: "13px", color: "#555", marginTop: "2px" }}>
          Free Delivery
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <Star size={14} fill="#111" />
            <span style={{ fontWeight: 800 }}>{product.rating || "4.2"}</span>
          </div>
          <span style={{ color: "#777" }}>({product.reviews || "870"})</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let alive = true;

    async function loadProducts() {
      try {
        const res = await api.get("/products");
        const list = normalizeProductsResponse(res.data);

        if (!alive) return;
        setProducts(list);
      } catch (err) {
        console.log("HOME PRODUCTS ERROR:", err.response?.data || err.message);
      }
    }

    loadProducts();

    return () => {
      alive = false;
    };
  }, []);

  const featured = useMemo(() => {
    if (products.length > 0) return products.slice(0, 6);

    return [
      {
        id: 1,
        name: "Noorva brand banarasi silk saree",
        price: 980,
        category: "Sarees",
        rating: "4.2",
        reviews: "870",
        image:
          "https://images.unsplash.com/photo-1571513722275-4dca3b6f2c8f?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 2,
        name: "Noorva brand cotton short kurti",
        price: 450,
        category: "Western",
        rating: "3.9",
        reviews: "398",
        image:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 3,
        name: "Elegant suit set for women",
        price: 1199,
        category: "Suits",
        rating: "4.5",
        reviews: "621",
        image:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 4,
        name: "Everyday jeans and top combo",
        price: 699,
        category: "Jeans",
        rating: "4.1",
        reviews: "550",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 5,
        name: "Party wear lehenga set",
        price: 2499,
        category: "Lehengas",
        rating: "4.7",
        reviews: "920",
        image:
          "https://images.unsplash.com/photo-1583391733956-6c78276477e4?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 6,
        name: "Stylish western dress",
        price: 899,
        category: "Western",
        rating: "4.3",
        reviews: "640",
        image:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      },
    ];
  }, [products]);

  const categories = [
    { name: "sarees", image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=400&q=80" },
    { name: "suits", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80" },
    { name: "lehengas", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e4?auto=format&fit=crop&w=400&q=80" },
    { name: "jeans", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80" },
    { name: "western", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111" }}>
      <header
        style={{
          height: "58px",
          borderBottom: "1px solid #ececec",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          gap: "10px",
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "#fff",
        }}
      >
        <button
          type="button"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 0,
            lineHeight: 0,
          }}
        >
          <Menu size={26} />
        </button>

        <div style={{ fontSize: "22px", fontWeight: 900, color: "#0f2a6f" }}>
          HeavenCart
        </div>

        <div
          style={{
            flex: 1,
            maxWidth: "280px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "999px",
            padding: "6px 10px",
            gap: "8px",
            background: "#fff",
          }}
        >
          <Search size={16} color="#666" />
          <input
            placeholder="Search"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "14px",
              background: "transparent",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <button type="button" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
            <Heart size={22} />
          </button>
          <button type="button" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
            <ShoppingCart size={22} />
          </button>
        </div>
      </header>

      <section
        style={{
          padding: "12px 12px 4px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "12px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, rgba(255,245,238,1) 0%, rgba(250,250,250,1) 50%, rgba(239,247,255,1) 100%)",
            padding: "18px",
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "relative",
            border: "1px solid #eee",
          }}
        >
          <div>
            <div style={{ fontSize: "26px", fontWeight: 900, lineHeight: 1.05 }}>
              Discover
              <br />
              your style
            </div>
            <div style={{ marginTop: "10px", fontSize: "16px", fontWeight: 700 }}>
              At a TRUSTED place
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#333" }}>
              <Circle size={8} fill="#111" />
              100% genuine
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#333" }}>
              <Circle size={8} fill="#111" />
              Pay later
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#333" }}>
              <Circle size={8} fill="#111" />
              Free delivery
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
            alt="Hero"
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              width: "58%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.98,
            }}
          />
        </div>

        <div
          style={{
            borderRadius: "18px",
            border: "1px solid #eee",
            background: "#fff",
            display: "grid",
            placeItems: "center",
            padding: "16px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "240px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {["womenka", "mohini", "libaas"].map((name) => (
                <div
                  key={name}
                  style={{
                    borderRadius: "14px",
                    border: "1px solid #eee",
                    background: "#f5f5f5",
                    padding: "10px",
                    textAlign: "center",
                    fontWeight: 800,
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      margin: "0 auto 8px",
                      borderRadius: "999px",
                      background: "#111",
                      color: "#ffd95a",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "28px",
                      fontWeight: 700,
                      fontFamily: "serif",
                    }}
                  >
                    {name[0].toUpperCase()}
                  </div>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "8px 12px 0" }}>
        <div style={{ fontSize: "22px", fontWeight: 900, marginBottom: "10px" }}>Categories</div>

        <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "4px" }}>
          {categories.map((cat) => (
            <div key={cat.name} style={{ minWidth: "72px", textAlign: "center" }}>
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "999px",
                  objectFit: "cover",
                  border: "2px solid #e6d27a",
                  padding: "2px",
                  background: "#fff",
                }}
              />
              <div style={{ fontSize: "13px", marginTop: "6px" }}>{cat.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "10px 12px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Layers3 size={18} />
          <div style={{ fontSize: "22px", fontWeight: 900 }}>Trending Outfits</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px", marginTop: "10px" }}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div style={{ height: "18px" }} />
    </div>
  );
}