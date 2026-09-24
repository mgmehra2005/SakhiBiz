"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getStoredUser, isLoggedIn, logout } from "@/lib/auth";

const NAV_TABS = [
  { href: "/dashboard", icon: "🏠", label: "होम", en: "Home", id: "nav-home" },
  { href: "/records",   icon: "📒", label: "खाता", en: "Records", id: "nav-records" },
  { href: "/schemes",   icon: "🗂️", label: "योजनाएं", en: "Schemes", id: "nav-schemes" },
  { href: "/profile",   icon: "👤", label: "प्रोफाइल", en: "Profile", id: "nav-profile" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login");
      return;
    }
    setUser(getStoredUser());
  }, [router]);

  if (!user) return null; // will redirect or hydrate

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "सुप्रभात 🌅";
    if (h < 17) return "नमस्ते 🌞";
    return "शुभ संध्या 🌙";
  })();

  return (
    <div className="app-shell">
      {/* Header */}
      <header className="app-header">
        <div>
          <p className="label-sm text-secondary">{greeting}</p>
          <h1 className="headline-sm">{user.name}</h1>
        </div>
        <button
          id="logout-btn"
          onClick={() => logout(router)}
          className="btn btn-secondary"
          style={{ height: "40px", padding: "0 16px", fontSize: "13px" }}
        >
          लॉग आउट
        </button>
      </header>

      {/* Main content */}
      <main className="page-content">
        {/* Welcome banner */}
        <div
          className="card"
          style={{
            marginTop: "16px",
            background: "linear-gradient(135deg, #fff5f2, #fff0f0)",
            border: "1px solid #f3e3d3",
          }}
        >
          <p className="label-md text-secondary">आपका ऐप</p>
          <h2 className="headline-md" style={{ marginTop: "4px" }}>
            SakhiBiz में स्वागत है! 🪭
          </h2>
          <p className="body-sm text-secondary" style={{ marginTop: "8px" }}>
            अपना बिज़नेस रिकॉर्ड रखें और सरकारी योजनाओं का लाभ उठाएं।
          </p>
        </div>

        {/* Quick actions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <QuickCard
            icon="📋"
            title="सरकारी योजनाएं"
            sub="Government Schemes"
            href="/schemes"
            id="quick-schemes"
          />
          <QuickCard
            icon="💰"
            title="बिक्री जोड़ें"
            sub="Add Sale"
            href="/records/new?type=sale"
            id="quick-add-sale"
          />
          <QuickCard
            icon="📉"
            title="खर्च जोड़ें"
            sub="Add Expense"
            href="/records/new?type=expense"
            id="quick-add-expense"
          />
          <QuickCard
            icon="📒"
            title="मेरे रिकॉर्ड"
            sub="My Records"
            href="/records"
            id="quick-records"
          />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        {NAV_TABS.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            id={tab.id}
            className={`nav-tab${tab.href === "/dashboard" ? " active" : ""}`}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function QuickCard({ icon, title, sub, href, id }) {
  return (
    <Link
      href={href}
      id={id}
      style={{ textDecoration: "none" }}
    >
      <div
        className="card"
        style={{
          cursor: "pointer",
          transition: "transform 0.15s, box-shadow 0.15s",
          textAlign: "center",
          padding: "20px 12px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(217,83,79,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>
        <p className="label-md">{title}</p>
        <p className="label-sm text-secondary">{sub}</p>
      </div>
    </Link>
  );
}
