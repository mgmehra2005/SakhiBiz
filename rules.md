# SakhiBiz – Rules & Boundaries (for AI + Human)

**Last Updated:** 23 September 2026  
**Purpose:** Keep the project simple, focused, and finishable before 5 October.

---

## 1. Core Principles

1. Build the smallest thing that proves the core idea.
2. Reliability > New features
3. Offline-first is non-negotiable
4. Rural women must understand the UI quickly
5. Prefer working code over perfect code

---

## 2. What To Use

| Area | Allowed |
|------|---------|
| Frontend | Next.js (App Router), Tailwind, JavaScript, localStorage / IndexedDB |
| Backend | Flask, SQLAlchemy, Flask-JWT-Extended, Flask-CORS |
| Database | SQLite only |
| Styling | Large buttons, high contrast, simple layout |
| Language | English UI + Hindi content (hardcoded is fine) |

---

## 3. What To Avoid (Strict)

- TypeScript
- MySQL / PostgreSQL / external databases
- Complex state management libraries
- Social login / OTP / over-engineered auth
- Heavy UI component libraries
- Building anything not listed in prd.md
- Premature optimization
- Large code dumps without explanation

---

## 4. AI Coding Rules

When helping with code:

1. Prefer small, focused changes over big rewrites.
2. Explain the “why” briefly before code.
3. Keep functions short and readable.
4. Respect the existing folder structure (`backend/sakhibiz_backend`, `frontend/src/app`).
5. If a request increases scope, stop and confirm first.
6. Prioritize demo reliability.

---

## 5. Scope Boundary (Until Round 1)

Only these features are allowed:
- Simple Auth (register / login + JWT)
- Scheme Eligibility Checker
- Basic Sales / Expense / Udhaar records
- Offline cache
- Clean mobile-first UI

Everything else is out of scope.

---

## 6. Decision Rule

If in doubt:

> “Does this help a rural woman check a scheme or keep simple records in the next 10 days?”

If no → do not build it.
