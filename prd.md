# SakhiBiz – Product Requirements Document (PRD)

**Last Updated:** 23 September 2026  
**Mode:** Solo + AI  
**Hackathon:** CodeSlayer 2.0 2K26  
**Round 1 Deadline:** 5 October 2026

---

## 1. Problem Statement

Rural women micro-entrepreneurs in India (tailoring, food processing, dairy, handloom, handicrafts, small retail) face three critical barriers:

1. **Fragmented scheme information** – They do not know which government schemes they are eligible for, what documents are required, or how to apply.
2. **Absence of simple business records** – Most keep sales, expenses and udhaar only in memory or paper notebooks.
3. **Low digital confidence + poor connectivity** – Existing apps are complex, require constant internet, and are designed for urban users.

Result: Average capital invested stays very low (₹17,000–20,000) and most enterprises remain at subsistence level.

---

## 2. Target User

**Primary User:** Rural women micro-entrepreneurs (age 25–50) who:
- Run home-based or small local businesses
- Have low to medium digital literacy
- Often have intermittent internet
- Prefer simple, large-button interfaces (English + Hindi content)
- Need practical help more than advanced analytics

---

## 3. Solution Overview

**SakhiBiz** is an offline-first, mobile-centric Progressive Web App that acts as a personal “digital sakhi” for rural women entrepreneurs.

Core value:
- Discover relevant government schemes
- Keep simple digital records (sales, expenses, udhaar)
- Get basic practical guidance

---

## 4. Must-Have Features (MVP – Round 1)

| Feature | Description | Priority |
|---------|-------------|----------|
| User Authentication | Simple register / login + JWT | Must |
| Scheme Eligibility Checker | Short questionnaire → matching schemes + documents + next steps | Must |
| Simple Records | Add Sale / Expense / Udhaar + basic totals | Must |
| Offline Support | Show last known data when offline + sync when online | Must |
| Mobile-first PWA | Installable, large touch targets | Must |
| Basic Advice | 2–3 simple rule-based or thin LLM scenarios | Should |

---

## 5. Out of Scope (Do Not Build)

- Full hyperlocal market price engine
- Video tutorial library
- Career counseling
- Complex multi-language system
- Native mobile apps
- Advanced analytics / charts
- Social login / OTP (keep auth simple)
- Payment integration

---

## 6. Success Criteria for Round 1

A judge should be able to:
1. Register / Login
2. Complete a short scheme questionnaire and see relevant schemes
3. Add a few sales and expenses
4. See basic totals
5. Understand the value in under 3 minutes
