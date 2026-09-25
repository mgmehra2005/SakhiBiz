"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getStoredMatches,
  getBookmarkedSchemeIds,
  toggleBookmarkScheme,
} from "@/lib/schemes";

export default function SchemeResultsPage() {
  const router = useRouter();
  const [lang, setLang] = useState("hi");
  const [matchData, setMatchData] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [checkedDocsMap, setCheckedDocsMap] = useState({});
  const [expandedGuidanceId, setExpandedGuidanceId] = useState(null);

  useEffect(() => {
    setBookmarkedIds(getBookmarkedSchemeIds());
    const data = getStoredMatches();
    if (data && data.matches && data.matches.length > 0) {
      setMatchData(data);
    }
  }, []);

  const handleBookmarkToggle = (e, schemeId) => {
    e.stopPropagation();
    toggleBookmarkScheme(schemeId);
    setBookmarkedIds(getBookmarkedSchemeIds());
  };

  const toggleDocCheck = (schemeId, docIndex) => {
    const key = `${schemeId}-${docIndex}`;
    setCheckedDocsMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const matches = matchData ? matchData.matches : [];

  return (
    <div className="app-shell" style={{ background: "#fffdf9" }}>
      {/* Header */}
      <header className="app-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href="/schemes" className="btn btn-secondary" style={{ height: "36px", width: "36px", padding: 0, borderRadius: "50%" }}>
            ←
          </Link>
          <div>
            <p className="label-sm text-secondary">
              {lang === "hi" ? "सटीक परिणाम" : "Matched Results"}
            </p>
            <h1 className="headline-sm" style={{ fontSize: "17px" }}>
              {lang === "hi" ? "आपके लिए अनुशंसित योजनाएं" : "Recommended Schemes"}
            </h1>
          </div>
        </div>
        <button
          onClick={() => setLang(lang === "hi" ? "en" : "hi")}
          className="btn btn-secondary"
          style={{ height: "34px", padding: "0 10px", fontSize: "12px" }}
        >
          {lang === "hi" ? "English" : "हिंदी"}
        </button>
      </header>

      <main className="page-content">
        {/* Results Summary Header */}
        <div
          className="card"
          style={{
            background: "linear-gradient(135deg, #e8f5e9, #f0faf2)",
            border: "1px solid #c8e6c9",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ fontSize: "32px" }}>🎉</div>
            <div>
              <h2 className="headline-sm" style={{ color: "#006e25", fontSize: "17px" }}>
                {lang === "hi"
                  ? `बधाई! आपके लिए ${matches.length} योजनाएं मिलीं`
                  : `Found ${matches.length} matching schemes for you!`}
              </h2>
              <p className="body-sm text-secondary" style={{ fontSize: "13px", marginTop: "2px" }}>
                {lang === "hi"
                  ? "नीचे सबसे उपयुक्त सरकारी योजनाएं और उनकी पात्रता दी गई है।"
                  : "Below are the top recommended government schemes."}
              </p>
            </div>
          </div>
        </div>

        {matches.length === 0 ? (
          <div className="card" style={{ textAlign: "center", padding: "32px 16px" }}>
            <div style={{ fontSize: "40px", marginBottom: "8px" }}>🔍</div>
            <h3 className="headline-sm">
              {lang === "hi" ? "कोई परिणाम नहीं मिला" : "No Match Results Found"}
            </h3>
            <p className="body-sm text-secondary" style={{ marginTop: "4px" }}>
              {lang === "hi"
                ? "कृपया फिर से प्रश्नोत्तरी (Questionnaire) भरकर प्रयास करें।"
                : "Please try filling out the eligibility checker questionnaire again."}
            </p>
            <Link href="/schemes/check" className="btn btn-primary" style={{ marginTop: "16px" }}>
              {lang === "hi" ? "पात्रता जांचें (Re-Check)" : "Run Eligibility Check"}
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {matches.map((item, idx) => {
              const scheme = item.scheme;
              const isBookmarked = bookmarkedIds.includes(scheme.id);
              const score = item.match_score || 85;
              const isGuidanceOpen = expandedGuidanceId === scheme.id;

              // Color badge based on score
              const badgeBg = score >= 85 ? "#e8f5e9" : "#fffdad";
              const badgeColor = score >= 85 ? "#006e25" : "#8a6d0b";

              return (
                <div key={scheme.id || idx} className="card" style={{ border: "1px solid #dec0b9", padding: "18px" }}>
                  {/* Top Bar: Match Score & Bookmark */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      className="label-sm"
                      style={{
                        background: badgeBg,
                        color: badgeColor,
                        padding: "4px 10px",
                        borderRadius: "16px",
                        fontWeight: "700",
                        fontSize: "12px",
                      }}
                    >
                      ✨ {score}% {lang === "hi" ? "मैच (Match)" : "Match"}
                    </span>

                    <button
                      onClick={(e) => handleBookmarkToggle(e, scheme.id)}
                      style={{
                        background: isBookmarked ? "#ffdad2" : "#fdfdfd",
                        border: "1px solid #dec0b9",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "13px",
                        cursor: "pointer",
                        fontWeight: "600",
                        color: isBookmarked ? "#ac3231" : "#4a3e3d",
                      }}
                    >
                      {isBookmarked ? "⭐️ " + (lang === "hi" ? "सहेजा गया" : "Saved") : "☆ " + (lang === "hi" ? "सहेजें" : "Save")}
                    </button>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="headline-sm" style={{ marginTop: "8px", fontSize: "18px" }}>
                    {scheme.name}
                  </h3>
                  <p className="label-sm text-secondary">{scheme.introduced_by}</p>
                  <p className="body-sm text-secondary" style={{ marginTop: "6px" }}>
                    {scheme.description}
                  </p>

                  {/* Match Rationale / Reasons */}
                  {item.match_reasons && item.match_reasons.length > 0 && (
                    <div style={{ marginTop: "12px", background: "#fff5f2", padding: "10px 12px", borderRadius: "8px" }}>
                      <p className="label-sm text-brand" style={{ marginBottom: "4px" }}>
                        💡 {lang === "hi" ? "आपके लिए क्यों उपयुक्त है:" : "Why this fits you:"}
                      </p>
                      <ul style={{ paddingLeft: "18px", margin: 0 }} className="body-sm text-secondary">
                        {item.match_reasons.map((reason, rIdx) => (
                          <li key={rIdx} style={{ fontSize: "13px" }}>{reason}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Documents Required Interactive Checklist */}
                  <div style={{ marginTop: "14px" }}>
                    <p className="label-md" style={{ color: "#ac3231", marginBottom: "6px" }}>
                      📄 {lang === "hi" ? "आवश्यक दस्तावेज चेकलिस्ट:" : "Required Documents Checklist:"}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {(item.documents_required || []).map((doc, docIdx) => {
                        const isChecked = !!checkedDocsMap[`${scheme.id}-${docIdx}`];
                        return (
                          <label
                            key={docIdx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "13px",
                              cursor: "pointer",
                              textDecoration: isChecked ? "line-through" : "none",
                              color: isChecked ? "#888" : "#2d2424",
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleDocCheck(scheme.id, docIdx)}
                              style={{ width: "16px", height: "16px", accentColor: "#ff7e5f" }}
                            />
                            {doc}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Expandable Step-by-Step Guidance */}
                  <div style={{ marginTop: "14px" }}>
                    <button
                      onClick={() => setExpandedGuidanceId(isGuidanceOpen ? null : scheme.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#ff6b4a",
                        fontWeight: "600",
                        fontSize: "13px",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      {isGuidanceOpen
                        ? (lang === "hi" ? "▼ प्रक्रिया छिपाएं (Hide Steps)" : "▼ Hide How to Apply")
                        : (lang === "hi" ? "▶ आवेदन प्रक्रिया देखें (How to Apply Guide)" : "▶ How to Apply Step-by-Step")}
                    </button>

                    {isGuidanceOpen && (
                      <div style={{ marginTop: "8px", background: "#fbeae9", padding: "12px", borderRadius: "10px" }}>
                        <ol style={{ paddingLeft: "20px" }} className="body-sm text-secondary">
                          {(item.application_steps || []).map((step, sIdx) => (
                            <li key={sIdx} style={{ marginBottom: "4px", fontSize: "13px" }}>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>

                  {/* Apply Link Action */}
                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={scheme.official_link || "https://www.myscheme.gov.in/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-full"
                      style={{ height: "44px", fontSize: "14px", textDecoration: "none" }}
                    >
                      {lang === "hi" ? "पोर्टल पर आवेदन करें (Apply via Official Portal) 🔗" : "Apply via Official Portal 🔗"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Action Bar */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <Link href="/schemes/check" className="btn btn-secondary" style={{ flex: 1, fontSize: "13px" }}>
            {lang === "hi" ? "फिर से जांचें (Re-Check)" : "Re-Check Answers"}
          </Link>
          <Link href="/schemes" className="btn btn-secondary" style={{ flex: 1, fontSize: "13px" }}>
            {lang === "hi" ? "सभी योजनाएं देखें" : "All Schemes Directory"}
          </Link>
        </div>
      </main>
    </div>
  );
}
