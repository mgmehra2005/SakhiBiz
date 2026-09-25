# SakhiBiz – Project Memory

**Last Updated:** 24 September 2026

---

## Current Mode
- **Solo development + AI assistance**
- Team members unresponsive
- Decision: Stop forcing the team. Build independently.

---

## Current Project Structure (Actual)

```
project-root/
├── backend/
│   ├── .env                          # Flask + JWT secrets (do not commit)
│   ├── app.py                        # Entry point — db.create_all() on startup
│   ├── requirements.txt              # pip freeze output
│   └── sakhibiz_backend/
│       ├── __init__.py               # Flask app + SQLAlchemy + JWT + CORS
│       ├── models/
│       │   ├── __init__.py
│       │   └── user.py               # User model (id, name, email, password_hash)
│       └── routes/
│           ├── __init__.py
│           ├── routes.py             # GET / health check
│           └── api/v1/
│               ├── __init__.py
│               └── auth.py           # POST /register, POST /login, GET /me
│
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── globals.css           # Warm Dignity design system (full tokens + components)
│       │   ├── layout.js             # Root layout — PWA meta, Plus Jakarta Sans
│       │   ├── page.js               # Splash/redirect — → /login or /dashboard
│       │   ├── login/page.js         # Login UI (bilingual Hindi/English)
│       │   ├── register/page.js      # Register UI (bilingual Hindi/English)
│       │   └── dashboard/page.js     # Protected home — greeting, quick cards, bottom nav
│       └── lib/
│           └── auth.js               # Token storage + apiRegister/apiLogin/apiMe/logout
│
├── data/
│   └── sakhibiz.db                   # SQLite DB (auto-created on first run)
│
├── docs/
│   ├── Women_Entrepreneurs_Government_Schemes_2026.md
│   └── phase0.txt                    # Full Phase 0 change documentation
│
└── (root docs)
    ├── prd.md
    ├── architecture.md
    ├── design.md                     # Warm Dignity design system spec
    ├── phases.md
    ├── rules.md
    └── memory.md                     # ← this file
```

---

## Phase Status

| Phase | Name | Target | Status |
|-------|------|--------|--------|
| 0 | Foundation Hardening | 25 Sep | ✅ COMPLETE |
| 1 | Scheme Checker | 29 Sep | ✅ COMPLETE |
| 2 | Simple Records | 2 Oct | ⏳ NOT STARTED |
| 3 | Polish + Demo Ready | 4 Oct | ⏳ NOT STARTED |
| 4 | Round 1 Submission | 5 Oct | ⏳ NOT STARTED |

---

## Phase 0 — Completed ✅ (23–24 Sep)

### Backend
- [x] Installed: flask-cors, flask-jwt-extended, flask-sqlalchemy, python-dotenv
- [x] `requirements.txt` generated
- [x] `.env` config file (SECRET_KEY, JWT_SECRET_KEY)
- [x] `__init__.py` wired with SQLAlchemy + JWTManager + CORS
- [x] `models/user.py` — User model with set_password / check_password / to_dict
- [x] `routes/api/v1/auth.py` — POST /register, POST /login, GET /me
- [x] `app.py` — calls db.create_all() on startup
- [x] **Bug fix (24 Sep):** `db.session.add(user)` and `db.session.commit()` were
      accidentally commented out in register(). Fixed — users now persist to DB.

### Frontend
- [x] `globals.css` — full Warm Dignity design system (tokens, buttons, inputs, cards,
      auth layout, bottom nav, spinner)
- [x] `layout.js` — PWA meta tags, Plus Jakarta Sans font, lang="hi"
- [x] `lib/auth.js` — token storage + apiRegister / apiLogin / apiMe / logout
- [x] `app/page.js` — auth-aware redirect splash screen
- [x] `app/login/page.js` — Login UI (bilingual, spinner, error alert)
- [x] `app/register/page.js` — Register UI (bilingual, spinner, error alert)
- [x] `app/dashboard/page.js` — Protected dashboard (greeting, quick cards, bottom nav)
- [x] `public/manifest.json` — PWA manifest

### Docs
- [x] `docs/phase0.txt` — full Phase 0 change log

---

## Phase 1 — Completed ✅ (25 Sep)

**Goal:** Scheme Eligibility Checker end-to-end

- [x] `models/scheme.py` — Scheme model & `seed_schemes.py` populates SQLite from `schemes.json`
- [x] `GET /api/v1/schemes`, `GET /api/v1/schemes/<id>`, and `POST /api/v1/schemes/check` endpoints
- [x] Frontend Directory (`app/schemes/page.js`) — search, category tabs, bookmarks, details modal
- [x] Frontend Questionnaire (`app/schemes/check/page.js`) — bilingual multi-step checker
- [x] Frontend Results (`app/schemes/results/page.js`) — match scores, reasons, document checklists, application steps
- [x] Offline Cache & Fallback (`lib/schemes.js`) — client-side matching algorithm + localStorage cache
- [x] `docs/phase1.txt` — full Phase 1 documentation

Exit criteria: User answers questions and sees relevant schemes with next steps.

---

## Known Issues / Watch Out

| Issue | Status |
|-------|--------|
| `db.session.add/commit` were commented out in register() | ✅ Fixed 24 Sep |
| Backend terminal run needs manual activation of .venv | Ongoing |
| Frontend uses Tailwind class names in some old files — globals.css uses vanilla CSS | Monitor |

---

## How to Run

### Backend
```bash
cd backend
source .venv/bin/activate
python app.py
# → http://localhost:5000
# → SQLite DB auto-created at data/sakhibiz.db & auto-seeded with 20 schemes
```

### Frontend
```bash
cd frontend
npm run dev
# → http://localhost:3000
```

---

## Phase 2 — Next Immediate Focus

**Goal:** Simple Records (Sales / Expenses / Udhaar)


---

## Key Decisions Log

| Date | Decision |
|------|----------|
| Early Sep | Problem & solution defined |
| 1–4 Sep | Mobile-centric PWA chosen |
| 10 Sep | SQLite chosen over MySQL |
| 10 Sep | Docker planned for services |
| 23 Sep | Switched to solo + AI mode |
| 23 Sep | Full documentation set created |
| 23 Sep | Phase 0 complete — Auth backend + Login/Register/Dashboard UI |
| 24 Sep | Bug fix — register was not saving users to DB (commit was commented out) |
| 24 Sep | Phase 0 fully documented in docs/phase0.txt |

---

## Rules (reminder)
- Max 2 focused tasks per day
- Finish before starting new ones
- Update this file at the end of every session
- If blocked > 2 hours → simplify
