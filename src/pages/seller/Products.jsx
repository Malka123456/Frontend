import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import {
  Bell,
  Settings,
  Eye,
  ShoppingBag,
  Heart,
  Link as LinkIcon,
  Copy,
  Package,
  Tags,
  Ruler,
  BadgeIndianRupee,
  Truck,
  ArrowLeft,
  Pencil,
  Power,
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

function safeText(value, fallback = "—") {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

function ProductStat({ icon: Icon, value, label }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        background: "#fff",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        minWidth: 0,
      }}
    >
      <Icon size={18} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: "12px", color: "#555" }}>{label}</div>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await api.get("/seller/products");
        const list = normalizeProductsResponse(res.data);

        if (!alive) return;
        setProducts(list);
        setSelectedId(list[0]?.id ?? null);
      } catch (err) {
        console.log("SELLER PRODUCTS ERROR:", err.response?.data || err.message);
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();

    return () => {
      alive = false;
    };
  }, []);

  const selectedProduct = useMemo(() => {
    return products.find((p) => String(p.id) === String(selectedId)) || products[0] || null;
  }, [products, selectedId]);

  const product = selectedProduct || {
    id: 2,
    name: "Cotton Floral Print Kurti",
    slug: "cotton-floral-print-kurti",
    price: 799,
    category: "Ethnic Wear",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    description:
      "Breathable cotton floral kurti designed for everyday comfort and effortless style.",
    status: "Active (18 Left)",
    condition: "New",
    brand: "House of Ethnic",
    stock: 18,
    views: 1520,
    orders: 835,
    wishlist: 320,
    discount: "10% Off",
    salePrice: 719,
    shippingFee: 50,
    colors: "Red Floral, Yellow Floral, Green with Yellow Floral",
    size: "S M L XL",
    fit: "Regular Fit",
    neckType: "V-Neck",
    occasion: "Daily/Casual",
    length: "Short (28-30 inches)",
    fabric: "100% Cotton",
    print: "Floral Print",
  };

  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80",
  ].filter(Boolean);

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
          borderBottom: "2px solid #222",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/seller" style={{ textDecoration: "none", color: "#111", display: "flex", alignItems: "center" }}>
            <ArrowLeft size={22} />
          </Link>
          <h1 style={{ margin: 0, fontSize: "30px", fontWeight: 800, color: "#183a98" }}>
            Product Preview
          </h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            type="button"
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
            }}
          >
            <Bell size={18} />
            Notification
          </button>
          <button
            type="button"
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
            }}
          >
            <Settings size={18} />
            Settings
          </button>
        </div>
      </header>

      <div style={{ padding: "10px 14px 0", color: "#444", fontSize: "14px" }}>
        Dashboard &gt; Manage Products &gt; <span style={{ color: "#2f6bff" }}>Product Preview</span>
      </div>

      <main style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "12px", padding: "12px 14px 18px" }}>
        <section style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", background: "#fff" }}>
          <div
            style={{
              padding: "10px 14px",
              background: "#efefef",
              borderBottom: "1px solid #ddd",
              fontSize: "20px",
              fontWeight: 800,
              color: "#183a98",
            }}
          >
            Product Information
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "12px", padding: "12px" }}>
            <div>
              <img
                src={product.image || gallery[0]}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "1px solid #e6e6e6",
                  background: "#f4f4f4",
                }}
              />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginTop: "8px" }}>
                {gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "56px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      border: "1px solid #ddd",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: 800 }}>
                {safeText(product.name)}
              </h2>

              <div style={{ display: "grid", gap: "10px", fontSize: "15px" }}>
                <Row label="Product Name" value={safeText(product.name)} />
                <Row label="Category" value={safeText(product.category, "Ethnic Wear")} />
                <Row label="Product ID" value={safeText(product.slug || product.id, "KURTI-FL-1023")} />
                <Row label="Price" value={<strong style={{ fontSize: "22px" }}>{toCurrency(product.price)}</strong>} />
                <Row label="Status" value={<span style={{ color: "#0a8f3c" }}>{safeText(product.status, "Active (18 Left)")}</span>} />
                <Row label="Condition" value={safeText(product.condition, "New")} />
                <Row label="Brand" value={safeText(product.brand, "House of Ethnic")} />
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", padding: "0 12px 12px" }}>
            <Box title="Pricing & Shipping">
              <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.7, fontSize: "15px" }}>
                <li>
                  Price: <strong>{toCurrency(product.price)}</strong>
                </li>
                <li>
                  Discount: <strong>{safeText(product.discount, "10% Off")}</strong>
                </li>
                <li>
                  Sale Price: <strong>{toCurrency(product.salePrice || 719)}</strong>
                </li>
                <li>
                  Shipping Fee: <strong>{toCurrency(product.shippingFee || 50)}</strong>
                </li>
              </ul>
            </Box>

            <Box title="Product Description">
              <p style={{ margin: 0, lineHeight: 1.7, fontSize: "15px" }}>
                {safeText(
                  product.description,
                  "Breathable cotton floral kurti designed for everyday comfort and effortless style."
                )}
              </p>
            </Box>
          </div>

          <div style={{ display: "flex", gap: "10px", padding: "0 12px 12px" }}>
            <Link
              to="/seller"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#111",
                padding: "10px 16px",
                borderRadius: "10px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 700,
              }}
            >
              <ArrowLeft size={16} />
              Back
            </Link>

            <button
              type="button"
              style={{
                border: "none",
                background: "#2f8cff",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "10px",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Pencil size={16} />
              Edit Product
            </button>

            <button
              type="button"
              style={{
                border: "none",
                background: "#1456bf",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "10px",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Power size={16} />
              Deactivate Product
            </button>
          </div>
        </section>

        <aside style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <section style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", background: "#fff" }}>
            <div
              style={{
                padding: "10px 14px",
                background: "#efefef",
                borderBottom: "1px solid #ddd",
                fontSize: "20px",
                fontWeight: 800,
                color: "#183a98",
              }}
            >
              Product Performance
            </div>

            <div style={{ padding: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                <ProductStat icon={Eye} value={safeText(product.views ?? 1520)} label="views" />
                <ProductStat icon={ShoppingBag} value={safeText(product.orders ?? 835)} label="Orders" />
                <ProductStat icon={Heart} value={safeText(product.wishlist ?? 320)} label="Wishlist" />
              </div>
            </div>
          </section>

          <section style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", background: "#fff" }}>
            <div
              style={{
                padding: "10px 14px",
                background: "#efefef",
                borderBottom: "1px solid #ddd",
                fontSize: "20px",
                fontWeight: 800,
                color: "#183a98",
              }}
            >
              Product Link
            </div>

            <div style={{ padding: "12px" }}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  background: "#fff",
                }}
              >
                <span style={{ color: "#333", wordBreak: "break-all" }}>
                  www.yourstore.com/{safeText(product.slug, "sku1234")}
                </span>
                <button
                  type="button"
                  style={{
                    border: "none",
                    background: "#2f8cff",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Copy size={14} />
                  Copy Link
                </button>
              </div>
            </div>
          </section>

          <section style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", background: "#fff" }}>
            <div
              style={{
                padding: "10px 14px",
                background: "#efefef",
                borderBottom: "1px solid #ddd",
                fontSize: "20px",
                fontWeight: 800,
                color: "#183a98",
              }}
            >
              Product Details
            </div>

            <div style={{ padding: "12px" }}>
              <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, fontSize: "15px" }}>
                <li>Fabric: {safeText(product.fabric, "100% Cotton")}</li>
                <li>Print: {safeText(product.print, "Floral Print")}</li>
                <li>Size: {safeText(product.size, "S M L XL")}</li>
                <li>Neck Type: {safeText(product.neckType, "V-Neck")}</li>
                <li>Fit Type: {safeText(product.fit, "Regular Fit")}</li>
                <li>Occasion: {safeText(product.occasion, "Daily/Casual")}</li>
                <li>Length: {safeText(product.length, "Short (28-30 inches)")}</li>
                <li>Color: {safeText(product.colors, "Red Floral, Yellow Floral, Green with Yellow Floral")}</li>
              </ul>
            </div>
          </section>
        </aside>
      </main>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12px",
          padding: "0 14px 18px",
        }}
      >
        <Box title="Pricing & Shipping">
          <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.7, fontSize: "15px" }}>
            <li>
              Price: <strong>{toCurrency(product.price)}</strong>
            </li>
            <li>
              Discount: <strong>{safeText(product.discount, "10% Off")}</strong>
            </li>
            <li>
              Sale Price: <strong>{toCurrency(product.salePrice || 719)}</strong>
            </li>
            <li>
              Shipping Fee: <strong>{toCurrency(product.shippingFee || 50)}</strong>
            </li>
          </ul>
        </Box>

        <Box title="Product Description">
          <p style={{ margin: 0, lineHeight: 1.7, fontSize: "15px" }}>
            {safeText(
              product.description,
              "Breathable cotton floral kurti designed for everyday comfort and effortless style."
            )}
          </p>
        </Box>

        <Box title="Quick Actions">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="button"
              style={{
                border: "1px solid #ddd",
                background: "#fff",
                color: "#111",
                padding: "10px 12px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              <LinkIcon size={16} />
              Product Link
            </button>
            <button
              type="button"
              style={{
                border: "1px solid #ddd",
                background: "#fff",
                color: "#111",
                padding: "10px 12px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              <Tags size={16} />
              Manage Category
            </button>
            <button
              type="button"
              style={{
                border: "1px solid #ddd",
                background: "#fff",
                color: "#111",
                padding: "10px 12px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              <Truck size={16} />
              Shipping Settings
            </button>
          </div>
        </Box>
      </section>

      <div style={{ padding: "0 14px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800 }}>Select another product</h3>
          {loading ? <span>Loading...</span> : null}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedId(p.id)}
              style={{
                border: String(selectedId) === String(p.id) ? "2px solid #2f8cff" : "1px solid #ddd",
                borderRadius: "12px",
                padding: "10px",
                background: "#fff",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <img
                src={p.image || "https://via.placeholder.com/300x180?text=Product"}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  background: "#f4f4f4",
                }}
              />
              <div style={{ fontWeight: 800 }}>{safeText(p.name)}</div>
              <div style={{ color: "#444", marginTop: "4px" }}>{toCurrency(p.price)}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Box({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        minHeight: "160px",
      }}
    >
      <div
        style={{
          padding: "10px 14px",
          background: "#efefef",
          borderBottom: "1px solid #ddd",
          fontSize: "20px",
          fontWeight: 800,
          color: "#183a98",
        }}
      >
        {title}
      </div>
      <div style={{ padding: "12px" }}>{children}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "10px", alignItems: "start" }}>
      <div style={{ fontWeight: 700 }}>{label}</div>
      <div>{value}</div>
    </div>
  );
}