# SakhiBiz – Project Memory

**Last Updated:** 23 September 2026

---

## Current Mode
- **Solo development + AI assistance**
- Team members unresponsive
- Decision: Stop forcing the team. Build independently.

---

## Current Project Structure (Actual)

- `backend/` – Flask app (`app.py`, `sakhibiz_backend/` package, routes, models, temp_data/schemes.json)
- `frontend/` – Next.js app (`src/app/`, Tailwind, etc.)
- `docs/` – Contains schemes research markdown
- Documentation files created in artifacts

---

## Completed ✅

- Project idea & MVP scope defined
- Tech stack decided (Next.js JS + Flask + SQLite)
- Core documentation set created/updated
- Frontend Next.js project exists
- Backend folder structure exists
- Schemes data available

### Phase 0 — Foundation Hardening (23 Sep)
- [x] Dependencies installed: flask-cors, flask-jwt-extended, flask-sqlalchemy, python-dotenv
- [x] `requirements.txt` generated
- [x] Backend `__init__.py` wired with SQLAlchemy, JWTManager, CORS
- [x] `.env` config file created
- [x] `sakhibiz_backend/models/user.py` — User model with set_password / check_password / to_dict
- [x] `sakhibiz_backend/models/__init__.py` — models package
- [x] `sakhibiz_backend/routes/api/v1/auth.py` — POST /register, POST /login, GET /me
- [x] `backend/app.py` — calls db.create_all() on startup
- [x] Frontend `globals.css` — full Warm Dignity design system tokens + components
- [x] Frontend `layout.js` — PWA meta tags, Plus Jakarta Sans font
- [x] `src/lib/auth.js` — token storage helpers + apiRegister / apiLogin / apiMe / logout
- [x] `src/app/page.js` — auth-aware redirect (logged-in → dashboard, else → login)
- [x] `src/app/login/page.js` — Login UI (bilingual Hindi/English)
- [x] `src/app/register/page.js` — Register UI (bilingual Hindi/English)
- [x] `src/app/dashboard/page.js` — Protected dashboard with greeting, quick cards, bottom nav
- [x] `public/manifest.json` — PWA manifest

---

## In Progress

- Backend server start (connection issue with terminal — run manually)

---

## Not Started / Missing

- Working Scheme Checker end-to-end (Phase 1)
- Records feature (Phase 2)
- Offline cache implementation
- docker-compose (optional)
- UI polish
- Round 1 PPT

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

---

## To Start Backend Manually

```bash
cd backend
source .venv/bin/activate
python app.py
```

## To Start Frontend Manually

```bash
cd frontend
npm run dev
```

---

## Next Immediate Focus (Phase 1)

1. Scheme model — load from `temp_data/schemes.json`
2. `/api/v1/schemes` list endpoint
3. `/api/v1/schemes/check` eligibility endpoint (short questionnaire → matching schemes)
4. Frontend questionnaire UI
5. Results page with matching schemes + documents

---

## Notes

- Always update this file at the end of a working session
- Keep scope extremely tight
- Prefer finishing one complete flow over starting many
