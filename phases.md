# SakhiBiz – Development Phases (Revised – Solo Mode)

**Last Updated:** 23 September 2026  
**Round 1 Deadline:** 5 October 2026 (12 days left)

---

## Phase Overview

| Phase | Name | Target Finish | Goal |
|-------|------|---------------|------|
| 0 | Foundation Hardening | 25 Sep | Flask + SQLite + Auth working |
| 1 | Scheme Checker | 29 Sep | Full scheme eligibility flow end-to-end |
| 2 | Simple Records | 2 Oct | Sales / Expense / Udhaar + basic totals |
| 3 | Polish + Demo Ready | 4 Oct | Offline, UI cleanup, demo script, PPT |
| 4 | Round 1 Submission | 5 Oct | Submit on Unstop |

---

## Phase 0 – Foundation Hardening (23 – 25 Sep)

**Goal:** Working authentication.

- [ ] Confirm / clean backend structure
- [ ] Add SQLAlchemy + SQLite
- [ ] User model + Register / Login APIs (JWT)
- [ ] Frontend Login + Register pages
- [ ] Token storage + basic protected route
- [ ] (Optional) docker-compose if time permits

**Exit Criteria:**  
Register → Login → see a protected page successfully.

---

## Phase 1 – Scheme Checker (26 – 29 Sep)

**Goal:** Core value working.

- [ ] Scheme model + load data from existing schemes data
- [ ] `/api/v1/schemes` and `/api/v1/schemes/check` endpoints
- [ ] Frontend questionnaire UI
- [ ] Results page with matching schemes + documents
- [ ] Basic offline cache for schemes

**Exit Criteria:**  
User answers questions and sees relevant schemes with next steps.

---

## Phase 2 – Simple Records (30 Sep – 2 Oct)

**Goal:** Second core feature.

- [ ] Record model linked to user
- [ ] CRUD APIs for records
- [ ] Frontend add form + list view
- [ ] Basic totals (Today / This Week / This Month)
- [ ] Offline cache for records

**Exit Criteria:**  
User can add and view their own records and see simple totals.

---

## Phase 3 – Polish + Demo Ready (3 – 4 Oct)

- [ ] Offline banner + graceful degradation
- [ ] UI cleanup (large buttons, spacing)
- [ ] End-to-end testing of main flows
- [ ] Short demo script
- [ ] Round 1 PPT (official template)

---

## Daily Working Rule (Solo)

1. Maximum 2 focused tasks per day.
2. Finish them before starting new ones.
3. Update `memory.md` at the end of every session.
4. If blocked > 2 hours → simplify.
