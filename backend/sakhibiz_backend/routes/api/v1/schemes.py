import re
from flask import request, jsonify
from sakhibiz_backend import app, db
# pyrefly: ignore [missing-import]
from sakhibiz_backend.models.scheme import Scheme


# ── GET /api/v1/schemes ───────────────────────────────────────
@app.route("/api/v1/schemes", methods=["GET"])
def get_schemes():
    """Fetch all available government schemes with optional filter parameters."""
    state = request.args.get("state", "").strip().lower()
    urban_rural = request.args.get("urban_rural", "").strip().lower()
    category = request.args.get("category", "").strip().lower()
    search = request.args.get("search", "").strip().lower()

    query = Scheme.query

    # Apply search filter
    if search:
        query = query.filter(
            (Scheme.name.ilike(f"%{search}%")) |
            (Scheme.description.ilike(f"%{search}%")) |
            (Scheme.business_type.ilike(f"%{search}%"))
        )

    all_schemes = query.all()
    filtered_schemes = []

    for s in all_schemes:
        # Filter by state if provided
        if state:
            s_state = (s.state_region or "").lower()
            if "all india" not in s_state and state not in s_state:
                continue

        # Filter by urban/rural if provided
        if urban_rural:
            s_ur = (s.urban_rural or "").lower()
            if "both" not in s_ur and urban_rural not in s_ur:
                continue

        # Filter by category preference if provided
        if category:
            s_cat = (s.category_preference or "").lower()
            if category not in s_cat and "women" not in s_cat and "open" not in s_cat:
                continue

        filtered_schemes.append(s.to_dict())

    return jsonify({
        "schemes": filtered_schemes,
        "count": len(filtered_schemes)
    }), 200


# ── GET /api/v1/schemes/<int:scheme_id> ───────────────────────
@app.route("/api/v1/schemes/<int:scheme_id>", methods=["GET"])
def get_scheme_by_id(scheme_id):
    """Fetch detailed scheme information by ID."""
    scheme = db.session.get(Scheme, scheme_id)
    if not scheme:
        return jsonify({"error": f"Scheme with ID {scheme_id} not found"}), 404
    return jsonify({"scheme": scheme.to_dict()}), 200


# ── POST /api/v1/schemes/check ────────────────────────────────
@app.route("/api/v1/schemes/check", methods=["POST"])
def check_scheme_eligibility():
    """
    Match algorithm for scheme eligibility based on user questionnaire input.
    Expected JSON input:
      - state (str): e.g. "Karnataka", "Assam", "Uttar Pradesh", "All India"
      - urban_rural (str): "Urban", "Rural", or "Both"
      - age (int/str): e.g. 28
      - category (str): "General", "SC", "ST", "OBC", "Minority"
      - business_type (str): e.g. "Manufacturing", "Services", "Trading", "Coir", "Artisan", "Startup"
      - is_shg_member (bool): True / False
      - family_income (int/float): e.g. 150000
    """
    data = request.get_json(silent=True) or {}

    user_state = (data.get("state") or "").strip()
    user_urban_rural = (data.get("urban_rural") or "").strip()
    user_age = data.get("age")
    user_category = (data.get("category") or "").strip()
    user_business_type = (data.get("business_type") or "").strip()
    is_shg_member = bool(data.get("is_shg_member", False))
    family_income = data.get("family_income")

    # Try converting age & income to numeric values if provided
    try:
        user_age = int(user_age) if user_age is not None and str(user_age).isdigit() else None
    except (ValueError, TypeError):
        user_age = None

    try:
        family_income = float(family_income) if family_income is not None else None
    except (ValueError, TypeError):
        family_income = None

    all_schemes = Scheme.query.all()
    results = []

    for scheme in all_schemes:
        match_score = 50  # Base compatibility score
        reasons = []

        # 1. State / Region match check
        s_state = (scheme.state_region or "").lower()
        if "all india" in s_state:
            match_score += 20
            reasons.append("Pan-India scheme available in all states")
        elif user_state and user_state.lower() in s_state:
            match_score += 30
            reasons.append(f"Specifically tailored for {scheme.state_region} residents")
        elif user_state and "all india" not in s_state and user_state.lower() not in s_state:
            # Scheme is state-specific and user lives elsewhere
            match_score -= 40

        # 2. Urban / Rural area check
        s_ur = (scheme.urban_rural or "").lower()
        if "both" in s_ur:
            match_score += 10
            reasons.append("Applies to both urban and rural areas")
        elif user_urban_rural and user_urban_rural.lower() in s_ur:
            match_score += 15
            reasons.append(f"Matches your location type ({user_urban_rural})")
        elif user_urban_rural and "both" not in s_ur and user_urban_rural.lower() not in s_ur:
            match_score -= 15

        # 3. SHG Membership check
        is_shg_focused = any(kw in (scheme.name + " " + (scheme.description or "")).lower() for kw in ["shg", "lakhpati", "mission shakti", "stree nidhi"])
        if is_shg_focused:
            if is_shg_member:
                match_score += 25
                reasons.append("Exclusive benefits for Self-Help Group (SHG) members")
            else:
                match_score -= 10
                reasons.append("SHG membership required/preferred (easy to join local SHG)")

        # 4. Category (SC/ST/OBC/Women) preference check
        s_cat = (scheme.category_preference or "").lower()
        if user_category and user_category.lower() in s_cat:
            match_score += 15
            reasons.append(f"Special priority & subsidy for {user_category} category")
        elif "women" in s_cat:
            match_score += 10
            reasons.append("Special priority for women entrepreneurs")

        # 5. Business Type / Sector match
        s_bus = (scheme.business_type or "").lower() + " " + (scheme.description or "").lower()
        if user_business_type:
            u_bus_lower = user_business_type.lower()
            if u_bus_lower in s_bus:
                match_score += 20
                reasons.append(f"Fits your business sector ({user_business_type})")
            elif any(word in s_bus for word in u_bus_lower.split()):
                match_score += 10
                reasons.append("Suitable for micro/small enterprise activities")

        # 6. Age Group check
        s_age = scheme.age_group or ""
        if user_age is not None and s_age:
            age_nums = [int(n) for n in re.findall(r"\d+", s_age)]
            if len(age_nums) == 2 and age_nums[0] <= user_age <= age_nums[1]:
                match_score += 10
                reasons.append(f"Age {user_age} falls within scheme range ({s_age})")
            elif len(age_nums) == 1 and user_age >= age_nums[0]:
                match_score += 10
                reasons.append(f"Age {user_age} meets minimum requirement ({s_age})")

        # 7. Income criteria check
        s_elig = (scheme.other_eligibility or "").lower()
        if family_income is not None and "income" in s_elig:
            reasons.append("Income criteria evaluated")
            if family_income <= 300000:
                match_score += 10

        # Cap score between 0 and 100
        final_score = max(10, min(100, match_score))

        # Only include schemes with score >= 40%
        if final_score >= 40:
            results.append({
                "scheme": scheme.to_dict(),
                "match_score": final_score,
                "match_reasons": reasons,
                "documents_required": scheme.documents_required or [],
                "application_steps": scheme.application_steps or []
            })

    # Sort results by match_score descending
    results.sort(key=lambda x: x["match_score"], reverse=True)

    return jsonify({
        "matches": results,
        "total_matches": len(results)
    }), 200
