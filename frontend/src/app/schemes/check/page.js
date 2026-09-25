"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiCheckEligibility } from "@/lib/schemes";

const STATES = [
  "Karnataka",
  "Odisha",
  "Telangana",
  "Kerala",
  "Uttar Pradesh",
  "Assam",
  "Maharashtra",
  "Tamil Nadu",
  "Gujarat",
  "West Bengal",
  "All India / Other State",
];

const CATEGORIES = [
  { id: "General", label: "सामान्य (General)" },
  { id: "OBC", label: "ओबीसी (OBC)" },
  { id: "SC", label: "अनुसूचित जाति (SC)" },
  { id: "ST", label: "अनुसूचित जनजाति (ST)" },
  { id: "Minority", label: "अल्पसंख्यक (Minority)" },
];

const BUSINESS_TYPES = [
  { id: "Trading", label: "व्यापार / खुदरा दुकान (Trading / Shop)" },
  { id: "Services", label: "सेवा व्यवसाय (Services / Beauty / Tailoring)" },
  { id: "Manufacturing", label: "निर्माण / उत्पादन (Manufacturing / Food)" },
  { id: "Artisan", label: "हस्तशिल्प / कारीगर (Traditional Artisan / Craft)" },
  { id: "Coir", label: "नारियल जूट उद्योग (Coir Spinning / Products)" },
  { id: "Startup", label: "नया टेक/नवाचार (Startup / Tech)" },
];

export default function SchemeCheckerPage() {
  const router = useRouter();
  const [lang, setLang] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    state: "Karnataka",
    urban_rural: "Rural",
    age: "30",
    category: "General",
    business_type: "Trading",
    is_shg_member: false,
    family_income: "150000",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiCheckEligibility(formData);
      router.push("/schemes/results");
    } catch (err) {
      console.error("Eligibility check failed:", err);
      setLoading(false);
    }
  };

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
              {lang === "hi" ? "पात्रता जांच" : "Eligibility Checker"}
            </p>
            <h1 className="headline-sm" style={{ fontSize: "17px" }}>
              {lang === "hi" ? "सरकारी योजना चेक" : "Scheme Eligibility"}
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
        {/* Progress indicator */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span className="label-sm text-secondary">
              {lang === "hi" ? `चरण ${step} / 3` : `Step ${step} of 3`}
            </span>
            <span className="label-sm text-brand">
              {step === 1
                ? lang === "hi" ? "स्थान व आयु" : "Location & Age"
                : step === 2
                ? lang === "hi" ? "बिज़नेस व श्रेणी" : "Business & Social Category"
                : lang === "hi" ? "एसएचजी व आय" : "SHG & Income"}
            </span>
          </div>
          <div style={{ height: "6px", background: "#f3e3d3", borderRadius: "3px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${(step / 3) * 100}%`,
                background: "linear-gradient(90deg, #ff9e7d, #ff6b4a)",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card" style={{ padding: "20px" }}>
          {/* STEP 1: Location & Age */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 className="headline-sm" style={{ fontSize: "18px", color: "#ac3231" }}>
                1️⃣ {lang === "hi" ? "आप कहाँ रहते हैं?" : "Where are you located?"}
              </h2>

              {/* State Dropdown */}
              <div className="input-group">
                <label className="input-label" htmlFor="state-select">
                  {lang === "hi" ? "अपना राज्य चुनें (Select State)" : "Select State"}
                </label>
                <select
                  id="state-select"
                  className="input-field"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                >
                  {STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Urban vs Rural */}
              <div className="input-group">
                <label className="input-label">
                  {lang === "hi" ? "क्षेत्र प्रकार (Area Type)" : "Area Type"}
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <RadioCard
                    id="area-rural"
                    selected={formData.urban_rural === "Rural"}
                    onClick={() => handleChange("urban_rural", "Rural")}
                    icon="🌾"
                    title={lang === "hi" ? "ग्रामीण (Rural)" : "Rural"}
                  />
                  <RadioCard
                    id="area-urban"
                    selected={formData.urban_rural === "Urban"}
                    onClick={() => handleChange("urban_rural", "Urban")}
                    icon="🏙️"
                    title={lang === "hi" ? "शहरी (Urban)" : "Urban"}
                  />
                </div>
              </div>

              {/* Age */}
              <div className="input-group">
                <label className="input-label" htmlFor="age-input">
                  {lang === "hi" ? "आपकी आयु (Age in years)" : "Your Age (years)"}
                </label>
                <input
                  id="age-input"
                  type="number"
                  min="18"
                  max="70"
                  className="input-field"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  placeholder="30"
                />
              </div>

              <button
                type="button"
                id="next-step-1"
                onClick={() => setStep(2)}
                className="btn btn-primary btn-full"
                style={{ marginTop: "10px" }}
              >
                {lang === "hi" ? "आगे बढ़ें (Next)" : "Next Step"} →
              </button>
            </div>
          )}

          {/* STEP 2: Business & Social Category */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 className="headline-sm" style={{ fontSize: "18px", color: "#ac3231" }}>
                2️⃣ {lang === "hi" ? "बिज़नेस व सामाजिक श्रेणी" : "Business & Category"}
              </h2>

              {/* Business Type */}
              <div className="input-group">
                <label className="input-label" htmlFor="business-type-select">
                  {lang === "hi" ? "बिज़नेस का प्रकार (Business Category)" : "Business Type"}
                </label>
                <select
                  id="business-type-select"
                  className="input-field"
                  value={formData.business_type}
                  onChange={(e) => handleChange("business_type", e.target.value)}
                >
                  {BUSINESS_TYPES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Social Category */}
              <div className="input-group">
                <label className="input-label" htmlFor="category-select">
                  {lang === "hi" ? "सामाजिक श्रेणी (Social Category)" : "Social Category"}
                </label>
                <select
                  id="category-select"
                  className="input-field"
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  ← {lang === "hi" ? "पीछे" : "Back"}
                </button>
                <button
                  type="button"
                  id="next-step-2"
                  onClick={() => setStep(3)}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  {lang === "hi" ? "आगे बढ़ें" : "Next"} →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SHG & Income */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 className="headline-sm" style={{ fontSize: "18px", color: "#ac3231" }}>
                3️⃣ {lang === "hi" ? "समूह (SHG) व वार्षिक आय" : "SHG & Income Info"}
              </h2>

              {/* SHG Member Toggle */}
              <div className="input-group">
                <label className="input-label">
                  {lang === "hi" ? "क्या आप स्वयं सहायता समूह (SHG) की सदस्य हैं?" : "Are you an SHG member?"}
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <RadioCard
                    id="shg-yes"
                    selected={formData.is_shg_member === true}
                    onClick={() => handleChange("is_shg_member", true)}
                    icon="👩‍👩‍👧‍👧"
                    title={lang === "hi" ? "हाँ (Yes)" : "Yes"}
                  />
                  <RadioCard
                    id="shg-no"
                    selected={formData.is_shg_member === false}
                    onClick={() => handleChange("is_shg_member", false)}
                    icon="👤"
                    title={lang === "hi" ? "नहीं (No)" : "No"}
                  />
                </div>
              </div>

              {/* Annual Family Income */}
              <div className="input-group">
                <label className="input-label" htmlFor="income-select">
                  {lang === "hi" ? "वार्षिक पारिवारिक आय (Annual Income)" : "Annual Family Income"}
                </label>
                <select
                  id="income-select"
                  className="input-field"
                  value={formData.family_income}
                  onChange={(e) => handleChange("family_income", e.target.value)}
                >
                  <option value="100000">₹1 लाख से कम (Under ₹1 Lakh)</option>
                  <option value="150000">₹1 लाख – ₹2 लाख</option>
                  <option value="300000">₹2 लाख – ₹3 लाख</option>
                  <option value="500000">₹3 लाख से अधिक (Above ₹3 Lakhs)</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  ← {lang === "hi" ? "पीछे" : "Back"}
                </button>
                <button
                  type="submit"
                  id="submit-checker-btn"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ flex: 2 }}
                >
                  {loading ? (
                    <div className="spinner" />
                  ) : (
                    <span>{lang === "hi" ? "योजनाएं देखें (Find Schemes)" : "Find Matching Schemes"} ✨</span>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

function RadioCard({ id, selected, onClick, icon, title }) {
  return (
    <div
      id={id}
      onClick={onClick}
      style={{
        padding: "12px",
        borderRadius: "12px",
        border: "2px solid " + (selected ? "#ff7e5f" : "#dec0b9"),
        background: selected ? "#ffdad2" : "#ffffff",
        cursor: "pointer",
        textAlign: "center",
        transition: "all 0.15s ease",
      }}
    >
      <div style={{ fontSize: "24px" }}>{icon}</div>
      <p className="label-sm" style={{ color: selected ? "#ac3231" : "#4a3e3d", marginTop: "4px" }}>
        {title}
      </p>
    </div>
  );
}
