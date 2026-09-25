const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

const BOOKMARKS_KEY = "sakhibiz_bookmarked_schemes";
const SCHEMES_CACHE_KEY = "sakhibiz_cached_schemes";
const LAST_MATCHES_KEY = "sakhibiz_last_scheme_matches";

// Pre-seeded fallback data for instant offline access even on first run
const DEFAULT_OFFLINE_SCHEMES = [
  {
    id: 1,
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    description: "Collateral-free loans up to ₹20 lakh (Shishu / Kishor / Tarun) for micro non-farm enterprises; priority & interest concessions for women",
    introduced_by: "Central Government (Ministry of Finance)",
    state_region: "All India",
    urban_rural: "Both",
    age_group: "18–65 years",
    category_preference: "Priority to women, SC/ST/OBC",
    business_type: "Non-farm micro enterprises (manufacturing, trading, services)",
    documents_required: ["Aadhaar Card", "PAN Card", "Bank Account Details", "Business Plan", "Passport photographs"],
    application_steps: ["Check eligibility requirements", "Gather required documents", "Apply via Mudra portal or nearest bank branch"],
    official_link: "https://www.mudra.org.in/"
  },
  {
    id: 2,
    name: "Stand-Up India Scheme",
    description: "Bank loans ₹10 lakh–₹1 crore for greenfield enterprises by women (and SC/ST); one woman borrower per bank branch",
    introduced_by: "Central Government (Ministry of Finance)",
    state_region: "All India",
    urban_rural: "Both",
    age_group: "18+ years",
    category_preference: "Women (any caste) + SC/ST",
    business_type: "Greenfield manufacturing, services, trading, agri-allied",
    documents_required: ["Identity Proof", "Address Proof", "Caste Certificate (if SC/ST)", "Project Report", "Pollution Clearance"],
    application_steps: ["Register on Stand-Up India Portal", "Fill online loan application", "Connect with assigned bank branch"],
    official_link: "https://www.standupmitra.in/"
  },
  {
    id: 3,
    name: "Prime Minister’s Employment Generation Programme (PMEGP)",
    description: "Credit-linked subsidy (up to 35% for women) for new micro enterprises in manufacturing/services",
    introduced_by: "Central Government (Ministry of MSME via KVIC)",
    state_region: "All India",
    urban_rural: "Both (higher subsidy rural)",
    age_group: "18+ years",
    category_preference: "Special category: Women, SC/ST, OBC (higher subsidy)",
    business_type: "New micro enterprises (manufacturing up to ₹50L, services up to ₹20L)",
    documents_required: ["Aadhaar", "EDP Training Certificate", "Project Report", "Caste/Special Category Certificate"],
    application_steps: ["Apply online via KVIC e-portal", "Score EDP training", "Bank approval & subsidy release"],
    official_link: "https://www.kviconline.gov.in/pmegpeportal/"
  },
  {
    id: 9,
    name: "DAY-NRLM / Lakhpati Didi",
    description: "SHG mobilisation, credit, enterprise support to make rural women earn ≥₹1 lakh/year",
    introduced_by: "Central Government (Ministry of Rural Development)",
    state_region: "All India (rural)",
    urban_rural: "Rural",
    age_group: "18+ years",
    category_preference: "Rural poor women (priority SC/ST)",
    business_type: "SHG-based farm & non-farm enterprises",
    documents_required: ["Aadhaar", "SHG Membership Passbook", "Bank Account Details"],
    application_steps: ["Join or form local SHG", "Apply for Revolving Fund / Community Investment Fund", "Scale up enterprise"],
    official_link: "https://daynrlm.gov.in/"
  },
  {
    id: 14,
    name: "Udyogini Scheme",
    description: "Subsidised bank loans up to ₹3 lakh (30–50% subsidy) for women in trade/services",
    introduced_by: "Government of Karnataka (KSWDC)",
    state_region: "Karnataka",
    urban_rural: "Both",
    age_group: "18–55 years",
    category_preference: "Higher subsidy SC/ST (50%); General/Special 30%",
    business_type: "Trade & service micro enterprises",
    documents_required: ["Karnataka Domicile Proof", "Aadhaar Card", "Income Certificate", "BPL Card / Caste Certificate"],
    application_steps: ["Obtain application form from CDPO / KSWDC office", "Submit with income & project details", "Sanction by bank committee"],
    official_link: "https://kswdc.karnataka.gov.in/"
  }
];

// ── Bookmark Management ───────────────────────────────────────
export function getBookmarkedSchemeIds() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function isSchemeBookmarked(schemeId) {
  const bookmarks = getBookmarkedSchemeIds();
  return bookmarks.includes(Number(schemeId));
}

export function toggleBookmarkScheme(schemeId) {
  if (typeof window === "undefined") return false;
  const id = Number(schemeId);
  let bookmarks = getBookmarkedSchemeIds();
  let isSaved = false;

  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter((bId) => bId !== id);
    isSaved = false;
  } else {
    bookmarks.push(id);
    isSaved = true;
  }

  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  } catch (e) {
    console.error("Failed to update bookmarks in localStorage:", e);
  }
  return isSaved;
}

// ── Cache Utilities ──────────────────────────────────────────
export function getCachedSchemes() {
  if (typeof window === "undefined") return DEFAULT_OFFLINE_SCHEMES;
  try {
    const cached = localStorage.getItem(SCHEMES_CACHE_KEY);
    return cached ? JSON.parse(cached) : DEFAULT_OFFLINE_SCHEMES;
  } catch (e) {
    return DEFAULT_OFFLINE_SCHEMES;
  }
}

export function cacheSchemes(schemes) {
  if (typeof window === "undefined" || !Array.isArray(schemes)) return;
  try {
    localStorage.setItem(SCHEMES_CACHE_KEY, JSON.stringify(schemes));
  } catch (e) {
    console.warn("Failed to cache schemes in localStorage:", e);
  }
}

// ── API & Offline Fallback Functions ─────────────────────────

/**
 * Fetch schemes from backend API, automatically updating offline cache.
 * Uses localStorage cache if network is unavailable.
 */
export async function apiFetchSchemes(filters = {}) {
  const params = new URLSearchParams();
  if (filters.state) params.append("state", filters.state);
  if (filters.urban_rural) params.append("urban_rural", filters.urban_rural);
  if (filters.category) params.append("category", filters.category);
  if (filters.search) params.append("search", filters.search);

  try {
    const res = await fetch(`${API_BASE}/schemes?${params.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (data.schemes && data.schemes.length > 0) {
        cacheSchemes(data.schemes);
        return data.schemes;
      }
    }
  } catch (err) {
    console.warn("API request failed, falling back to offline cached schemes:", err);
  }

  // Offline Fallback
  let schemes = getCachedSchemes();
  if (filters.search) {
    const q = filters.search.toLowerCase();
    schemes = schemes.filter(
      (s) =>
        (s.name && s.name.toLowerCase().includes(q)) ||
        (s.description && s.description.toLowerCase().includes(q))
    );
  }
  return schemes;
}

/**
 * Fetch single scheme details by ID with offline cache fallback.
 */
export async function apiFetchSchemeById(id) {
  try {
    const res = await fetch(`${API_BASE}/schemes/${id}`);
    if (res.ok) {
      const data = await res.json();
      return data.scheme;
    }
  } catch (err) {
    console.warn("Failed to fetch scheme from API, checking local cache:", err);
  }

  const cachedSchemes = getCachedSchemes();
  return cachedSchemes.find((s) => s.id === Number(id)) || null;
}

/**
 * Run intelligent offline scheme matching algorithm when server is offline.
 */
function runOfflineMatching(payload, schemes) {
  const userState = (payload.state || "").trim();
  const userUrbanRural = (payload.urban_rural || "").trim();
  const userAge = payload.age ? parseInt(payload.age, 10) : null;
  const userCategory = (payload.category || "").trim();
  const userBusinessType = (payload.business_type || "").trim();
  const isShgMember = !!payload.is_shg_member;

  const results = [];

  for (const scheme of schemes) {
    let score = 50;
    const reasons = [];

    const sState = (scheme.state_region || "").toLowerCase();
    if (sState.includes("all india")) {
      score += 20;
      reasons.append("Pan-India scheme available in all states");
    } else if (userState && sState.includes(userState.toLowerCase())) {
      score += 30;
      reasons.push(`Specifically tailored for ${scheme.state_region} residents`);
    } else if (userState && !sState.includes("all india") && !sState.includes(userState.toLowerCase())) {
      score -= 40;
    }

    const sUr = (scheme.urban_rural || "").toLowerCase();
    if (sUr.includes("both")) {
      score += 10;
      reasons.push("Applies to both urban and rural areas");
    } else if (userUrbanRural && sUr.includes(userUrbanRural.toLowerCase())) {
      score += 15;
      reasons.push(`Matches your location type (${userUrbanRural})`);
    }

    const isShgFocused = (scheme.name + " " + (scheme.description || "")).toLowerCase().includes("shg");
    if (isShgFocused) {
      if (isShgMember) {
        score += 25;
        reasons.push("Exclusive benefits for Self-Help Group (SHG) members");
      } else {
        score -= 10;
        reasons.push("SHG membership preferred/required");
      }
    }

    const sCat = (scheme.category_preference || "").toLowerCase();
    if (userCategory && sCat.includes(userCategory.toLowerCase())) {
      score += 15;
      reasons.push(`Special priority for ${userCategory} category`);
    } else if (sCat.includes("women")) {
      score += 10;
      reasons.push("Priority assistance for women entrepreneurs");
    }

    if (userBusinessType && (scheme.business_type || "").toLowerCase().includes(userBusinessType.toLowerCase())) {
      score += 20;
      reasons.push(`Fits your business sector (${userBusinessType})`);
    }

    const finalScore = Math.max(10, Math.min(100, score));
    if (finalScore >= 40) {
      results.push({
        scheme,
        match_score: finalScore,
        match_reasons: reasons.length > 0 ? reasons : ["General eligibility match"],
        documents_required: scheme.documents_required || ["Aadhaar Card", "PAN Card", "Bank Passbook"],
        application_steps: scheme.application_steps || ["Visit official website", "Fill online application form"]
      });
    }
  }

  results.sort((a, b) => b.match_score - a.match_score);
  return { matches: results, total_matches: results.length };
}

/**
 * Check eligibility based on questionnaire payload.
 * Runs client-side matching algorithm offline if API request fails.
 */
export async function apiCheckEligibility(payload) {
  try {
    const res = await fetch(`${API_BASE}/schemes/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      if (typeof window !== "undefined") {
        localStorage.setItem(LAST_MATCHES_KEY, JSON.stringify(data));
      }
      return data;
    }
  } catch (err) {
    console.warn("API check request failed, running offline client-side matching:", err);
  }

  // Offline matching fallback
  const cachedSchemes = getCachedSchemes();
  const offlineResults = runOfflineMatching(payload, cachedSchemes);

  if (typeof window !== "undefined") {
    localStorage.setItem(LAST_MATCHES_KEY, JSON.stringify(offlineResults));
  }
  return offlineResults;
}

/**
 * Get stored last scheme matches.
 */
export function getStoredMatches() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LAST_MATCHES_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
