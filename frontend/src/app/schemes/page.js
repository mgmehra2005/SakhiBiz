"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  apiFetchSchemes,
  getBookmarkedSchemeIds,
  toggleBookmarkScheme,
} from "@/lib/schemes";

const NAV_TABS = [
  { href: "/dashboard", icon: "🏠", label: "होम", en: "Home", id: "nav-home" },
  { href: "/records",   icon: "📒", label: "खाता", en: "Records", id: "nav-records" },
  { href: "/schemes",   icon: "🗂️", label: "योजनाएं", en: "Schemes", id: "nav-schemes" },
  { href: "/profile",   icon: "👤", label: "प्रोफाइल", en: "Profile", id: "nav-profile" },
];

export default function SchemesDirectoryPage() {
  const router = useRouter();
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [lang, setLang] = useState("hi"); // 'hi' or 'en'

  useEffect(() => {
    setBookmarkedIds(getBookmarkedSchemeIds());
    loadSchemes();
  }, []);

  const loadSchemes = async () => {
    setLoading(true);
    const data = await apiFetchSchemes();
    setSchemes(data);
    setLoading(false);
  };

  const handleBookmarkToggle = (e, schemeId) => {
    e.stopPropagation();
    const isSaved = toggleBookmarkScheme(schemeId);
    setBookmarkedIds(getBookmarkedSchemeIds());
  };

  // Filter schemes based on tab and search
  const filteredSchemes = schemes.filter((s) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !search ||
      s.name.toLowerCase().includes(q) ||
      (s.description && s.description.toLowerCase().includes(q)) ||
      (s.business_type && s.business_type.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    if (activeTab === "saved") {
      return bookmarkedIds.includes(s.id);
    }
    if (activeTab === "pan_india") {
      return (s.state_region || "").toLowerCase().includes("all india");
    }
    if (activeTab === "state") {
      return !(s.state_region || "").toLowerCase().includes("all india");
    }
    return true;
  });

  return (
    <div className="app-shell">
      {/* Header */}
      <header className="app-header">
        <div>
          <p className="label-sm text-secondary">
            {lang === "hi" ? "सरकारी सहायता" : "Government Support"}
          </p>
          <h1 className="headline-sm">
            {lang === "hi" ? "सरकारी योजनाएं" : "Government Schemes"}
          </h1>
        </div>
        <button
          onClick={() => setLang(lang === "hi" ? "en" : "hi")}
          className="btn btn-secondary"
          style={{ height: "36px", padding: "0 12px", fontSize: "12px" }}
        >
          {lang === "hi" ? "English" : "हिंदी"}
        </button>
      </header>

      <main className="page-content">
        {/* Banner to Eligibility Checker */}
        <div
          className="card"
          style={{
            background: "linear-gradient(135deg, #ffdad2 0%, #fff0f0 100%)",
            border: "1px solid #dec0b9",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ fontSize: "36px" }}>🎯</div>
            <div style={{ flex: 1 }}>
              <h2 className="headline-sm" style={{ fontSize: "16px", color: "#ac3231" }}>
                {lang === "hi"
                  ? "आपके लिए कौन सी योजना सही है?"
                  : "Which scheme is right for you?"}
              </h2>
              <p className="body-sm text-secondary" style={{ fontSize: "13px" }}>
                {lang === "hi"
                  ? "6 सरल प्रश्नों के उत्तर दें और सटीक योजनाएं देखें।"
                  : "Answer 6 simple questions to find matching schemes."}
              </p>
            </div>
          </div>
          <Link
            href="/schemes/check"
            id="start-checker-btn"
            className="btn btn-primary btn-full"
            style={{ marginTop: "12px", height: "44px", fontSize: "14px" }}
          >
            {lang === "hi" ? "पात्रता जांचें (Scheme Checker)" : "Check Eligibility Now"} →
          </Link>
        </div>

        {/* Search bar */}
        <div className="input-group" style={{ marginBottom: "16px" }}>
          <input
            id="scheme-search-input"
            type="text"
            className="input-field"
            placeholder={
              lang === "hi"
                ? "🔍 योजना का नाम या कीवर्ड खोजें..."
                : "🔍 Search scheme name or keyword..."
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "8px",
            marginBottom: "16px",
            scrollbars: "none",
          }}
        >
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            label={lang === "hi" ? "सभी (All)" : "All"}
            count={schemes.length}
          />
          <TabButton
            active={activeTab === "saved"}
            onClick={() => setActiveTab("saved")}
            label={lang === "hi" ? "सहेजे गए (Saved)" : "Saved"}
            count={bookmarkedIds.length}
            icon="⭐️"
          />
          <TabButton
            active={activeTab === "pan_india"}
            onClick={() => setActiveTab("pan_india")}
            label={lang === "hi" ? "पूरे भारत" : "Pan-India"}
          />
          <TabButton
            active={activeTab === "state"}
            onClick={() => setActiveTab("state")}
            label={lang === "hi" ? "राज्य-विशेष" : "State Specific"}
          />
        </div>

        {/* Scheme List */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#ff6b4a" }}>
            <div className="spinner" style={{ margin: "0 auto 12px", borderColor: "rgba(255,107,74,0.3)", borderTopColor: "#ff6b4a" }} />
            <p className="body-sm text-secondary">
              {lang === "hi" ? "योजनाएं लोड हो रही हैं..." : "Loading schemes..."}
            </p>
          </div>
        ) : filteredSchemes.length === 0 ? (
          <div
            className="card"
            style={{ textAlign: "center", padding: "32px 16px" }}
          >
            <div style={{ fontSize: "40px", marginBottom: "8px" }}>📁</div>
            <h3 className="headline-sm">
              {lang === "hi" ? "कोई योजना नहीं मिली" : "No schemes found"}
            </h3>
            <p className="body-sm text-secondary" style={{ marginTop: "4px" }}>
              {activeTab === "saved"
                ? lang === "hi"
                  ? "आपने अभी तक कोई योजना सहेज (bookmark) नहीं की है।"
                  : "You haven't bookmarked any schemes yet."
                : lang === "hi"
                ? "कृपया अलग शब्द खोजें या फ़िल्टर बदलें।"
                : "Try searching with a different term."}
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {filteredSchemes.map((scheme) => {
              const isBookmarked = bookmarkedIds.includes(scheme.id);
              return (
                <div
                  key={scheme.id}
                  className="card"
                  onClick={() => setSelectedScheme(scheme)}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(74,62,61,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <div>
                      <span
                        className="label-sm"
                        style={{
                          background: "#e8f5e9",
                          color: "#006e25",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "11px",
                          display: "inline-block",
                          marginBottom: "4px",
                        }}
                      >
                        {scheme.state_region}
                      </span>
                      <h3 className="headline-sm" style={{ fontSize: "16px" }}>
                        {scheme.name}
                      </h3>
                      <p className="label-sm text-secondary" style={{ fontSize: "12px", marginTop: "2px" }}>
                        {scheme.introduced_by}
                      </p>
                    </div>

                    <button
                      onClick={(e) => handleBookmarkToggle(e, scheme.id)}
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        padding: "4px",
                      }}
                      title={isBookmarked ? "Unbookmark" : "Bookmark"}
                    >
                      {isBookmarked ? "⭐️" : "☆"}
                    </button>
                  </div>

                  <p className="body-sm text-secondary" style={{ marginTop: "8px", lineClamp: 2, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {scheme.description}
                  </p>

                  <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="label-sm text-brand" style={{ fontSize: "12px" }}>
                      विवरण देखें (View Details) →
                    </span>
                    <span className="label-sm" style={{ background: "#fff0f0", color: "#ac3231", padding: "2px 8px", borderRadius: "8px", fontSize: "11px" }}>
                      {scheme.urban_rural || "Both"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Scheme Details Modal */}
      {selectedScheme && (
        <SchemeDetailModal
          scheme={selectedScheme}
          isBookmarked={bookmarkedIds.includes(selectedScheme.id)}
          onClose={() => setSelectedScheme(null)}
          onBookmarkToggle={(e) => handleBookmarkToggle(e, selectedScheme.id)}
          lang={lang}
        />
      )}

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        {NAV_TABS.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            id={tab.id}
            className={`nav-tab${tab.href === "/schemes" ? " active" : ""}`}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function TabButton({ active, onClick, label, count, icon }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        border: "1.5px solid " + (active ? "#ff7e5f" : "#f3e3d3"),
        background: active ? "#ffdad2" : "#ffffff",
        color: active ? "#ac3231" : "#4a3e3d",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
      {count !== undefined && (
        <span
          style={{
            background: active ? "#ff7e5f" : "#fff0f0",
            color: active ? "#fff" : "#ac3231",
            borderRadius: "10px",
            padding: "0 6px",
            fontSize: "11px",
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function SchemeDetailModal({ scheme, isBookmarked, onClose, onBookmarkToggle, lang }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 200,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "600px",
          maxHeight: "85vh",
          overflowY: "auto",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: "20px",
          background: "#fff",
          animation: "slideUp 0.25s ease-out",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
          <div>
            <span className="label-sm" style={{ background: "#e8f5e9", color: "#006e25", padding: "2px 8px", borderRadius: "12px" }}>
              {scheme.state_region}
            </span>
            <h2 className="headline-sm" style={{ marginTop: "4px" }}>
              {scheme.name}
            </h2>
            <p className="label-sm text-secondary">{scheme.introduced_by}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#f0f0f0",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ✕
          </button>
        </div>

        <p className="body-sm text-secondary" style={{ marginTop: "12px" }}>
          {scheme.description}
        </p>

        {/* Quick Highlights Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginTop: "16px",
            background: "#fff0f0",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          <div>
            <p className="label-sm text-secondary">{lang === "hi" ? "आयु सीमा" : "Age Group"}</p>
            <p className="label-md">{scheme.age_group || "18+ years"}</p>
          </div>
          <div>
            <p className="label-sm text-secondary">{lang === "hi" ? "क्षेत्र" : "Area"}</p>
            <p className="label-md">{scheme.urban_rural || "Both"}</p>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <p className="label-sm text-secondary">{lang === "hi" ? "व्यवसाय का प्रकार" : "Business Sector"}</p>
            <p className="label-md" style={{ fontSize: "13px" }}>{scheme.business_type}</p>
          </div>
        </div>

        {/* Documents Checklist */}
        <div style={{ marginTop: "16px" }}>
          <h4 className="label-md" style={{ color: "#ac3231" }}>
            📄 {lang === "hi" ? "आवश्यक दस्तावेज (Required Documents)" : "Required Documents"}
          </h4>
          <ul style={{ paddingLeft: "20px", marginTop: "6px" }} className="body-sm text-secondary">
            {(scheme.documents_required || []).map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>

        {/* Application Steps */}
        <div style={{ marginTop: "16px" }}>
          <h4 className="label-md" style={{ color: "#ac3231" }}>
            📌 {lang === "hi" ? "आवेदन कैसे करें (How to Apply)" : "How to Apply"}
          </h4>
          <ol style={{ paddingLeft: "20px", marginTop: "6px" }} className="body-sm text-secondary">
            {(scheme.application_steps || []).map((step, idx) => (
              <li key={idx} style={{ marginBottom: "4px" }}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            onClick={onBookmarkToggle}
            className="btn btn-secondary"
            style={{ flex: 1, height: "46px", fontSize: "14px" }}
          >
            {isBookmarked ? "⭐️ " + (lang === "hi" ? "सहेजा गया" : "Saved") : "☆ " + (lang === "hi" ? "सहेजें (Bookmark)" : "Bookmark")}
          </button>
          <a
            href={scheme.official_link || "https://www.myscheme.gov.in/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, height: "46px", fontSize: "14px", textDecoration: "none" }}
          >
            {lang === "hi" ? "ऑफिशियल लिंक 🔗" : "Official Link 🔗"}
          </a>
        </div>
      </div>
    </div>
  );
}
