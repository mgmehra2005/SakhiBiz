# SakhiBiz – Architecture Document

**Last Updated:** 23 September 2026  
**Based on actual project structure**

---

## 1. High-Level Architecture

```
┌─────────────────────┐         ┌──────────────────────┐
│   Next.js Frontend  │◄───────►│   Flask Backend      │
│   (PWA)             │  REST   │   (API + Auth)       │
│                     │  + JWT  │                      │
│  - Auth UI          │         │  - Auth endpoints    │
│  - Scheme Checker   │         │  - Schemes APIs      │
│  - Records UI       │         │  - Records APIs      │
│  - Offline Cache    │         │  - (Future) Advice   │
└─────────────────────┘         └──────────┬───────────┘
         │                                 │
         │ localStorage / IndexedDB        │ SQLAlchemy
         ▼                                 ▼
   Browser Storage                  SQLite (data/sakhibiz.db)
```

---

## 2. Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | Next.js (App Router) + Tailwind + JavaScript | Already initialized |
| Backend | Flask + Flask-CORS + Flask-JWT-Extended | Package structure exists |
| ORM | SQLAlchemy | Recommended |
| Database | SQLite | File-based, simple |
| Container | Docker + docker-compose (planned) | Separate services |
| Offline | localStorage / IndexedDB | Mandatory |

---

## 3. Current Folder Structure (Actual)

```
project-root/
├── backend/
│   ├── app.py
│   ├── description.txt
│   └── sakhibiz_backend/
│       ├── __init__.py
│       ├── routes/
│       │   ├── __init__.py
│       │   ├── routes.py
│       │   └── api/v1/
│       └── temp_data/
│           └── schemes.json
│
├── frontend/
│   ├── src/app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── public/
│   ├── package.json
│   └── ... (Next.js config)
│
├── docs/
│   └── Women_Entrepreneurs_Government_Schemes_2026.md
│
└── (documentation files)
    ├── prd.md
    ├── architecture.md
    ├── rules.md
    ├── phases.md
    ├── design.md
    └── memory.md
```

**Recommended additions:**
- `data/` folder at root for `sakhibiz.db`
- `docker-compose.yml` at root
- `Dockerfile` inside `backend/` and `frontend/`

---

## 4. Core Data Models

**User**
- id, name, phone/email, password_hash, created_at

**Scheme**
- id, name, description, eligibility_rules (JSON), documents (JSON), official_link, category

**Record**
- id, user_id (FK), type (sale / expense / udhaar), amount, note, date, created_at

---

## 5. Key Flows

### Authentication
1. Frontend → POST /api/v1/auth/register or /login
2. Backend returns JWT
3. Frontend stores token and sends it on protected requests

### Scheme Checker
1. User answers short questionnaire
2. Frontend calls /api/v1/schemes/check
3. Backend matches against schemes data
4. Returns matching schemes + documents + next steps

### Offline Strategy
- On successful API response → also save to localStorage/IndexedDB
- When offline → read from cache + show offline banner
- When online → sync pending changes (keep simple)

---

## 6. Docker Plan (When Ready)

- Backend container mounts `./data` for SQLite persistence
- Frontend and Backend run as separate services via docker-compose
- `docker-compose up --build` starts everything
