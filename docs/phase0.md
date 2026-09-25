================================================================================
SAKHIBIZ — PHASE 0: FOUNDATION HARDENING
Documentation of all changes made on 23 September 2026
================================================================================

STATUS   : COMPLETE
PHASE    : 0 — Foundation Hardening
DEADLINE : 25 September 2026
GOAL     : Working authentication — Register → Login → Protected Page

--------------------------------------------------------------------------------
1. OVERVIEW
--------------------------------------------------------------------------------

Phase 0 set up the full authentication backbone for SakhiBiz. This includes:
  - Flask backend configured with SQLAlchemy, JWT, and CORS
  - SQLite database with a User model
  - REST API endpoints for Register, Login, and protected /me
  - Frontend design system (Warm Dignity palette)
  - Login, Register, and Dashboard pages
  - Token-based auth utility library
  - PWA manifest

Exit criteria met: A user can Register, Login, and land on a protected Dashboard.

--------------------------------------------------------------------------------
2. DEPENDENCIES INSTALLED (backend)
--------------------------------------------------------------------------------

Run from: backend/

  pip install flask flask-cors flask-jwt-extended flask-sqlalchemy python-dotenv

Packages added (from requirements.txt):
  - Flask==3.1.3          (already present)
  - flask-cors==6.0.5     (Cross-Origin Resource Sharing)
  - Flask-JWT-Extended==4.7.4  (JSON Web Token auth)
  - Flask-SQLAlchemy==3.1.1    (ORM for SQLite)
  - python-dotenv==1.2.3       (load .env config)
  - SQLAlchemy==2.0.54
  - PyJWT==2.14.0
  - greenlet==3.5.6
  - typing_extensions==4.16.0

requirements.txt was generated with: pip freeze > requirements.txt

--------------------------------------------------------------------------------
3. BACKEND — NEW / MODIFIED FILES
--------------------------------------------------------------------------------

3.1  backend/.env                                          [NEW]
---------------------------------------------------------------------
Environment config file. Contains Flask and JWT secret keys and the
SQLite DB path. Should NOT be committed to version control.

Contents:
  FLASK_APP=app.py
  FLASK_ENV=development
  SECRET_KEY=sakhibiz-secret-key-change-in-production
  JWT_SECRET_KEY=sakhibiz-jwt-secret-change-in-production
  DATABASE_URL=sqlite:///../../data/sakhibiz.db


3.2  backend/sakhibiz_backend/__init__.py                 [MODIFIED]
---------------------------------------------------------------------
Was: bare Flask app with only route imports.
Now: Full app factory wiring all extensions.

Changes:
  - Added imports: SQLAlchemy, JWTManager, CORS, load_dotenv
  - Reads SECRET_KEY and JWT_SECRET_KEY from .env
  - Computes absolute path to data/sakhibiz.db (project root /data/)
  - Creates /data/ directory automatically with os.makedirs()
  - Initialises:  db = SQLAlchemy(app)
                  jwt = JWTManager(app)
                  CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


3.3  backend/sakhibiz_backend/models/              [NEW DIRECTORY]
---------------------------------------------------------------------
New package for SQLAlchemy models.

  models/__init__.py
    - Imports User model so it is registered with SQLAlchemy metadata.

  models/user.py
    - SQLAlchemy model: class User(db.Model)
    - Table name: users
    - Columns:
        id           Integer, primary key
        name         String(120), not nullable
        email        String(120), unique, not nullable
        password_hash String(256), not nullable
        created_at   DateTime, default = UTC now
    - Methods:
        set_password(password)  — hashes with Werkzeug
        check_password(password) — verifies hash
        to_dict()               — returns safe JSON-serialisable dict
                                  (never exposes password_hash)


3.4  backend/sakhibiz_backend/routes/api/v1/auth.py       [NEW]
---------------------------------------------------------------------
Three REST endpoints registered on the Flask app:

  POST /api/v1/auth/register
    Request body (JSON): { "name": str, "email": str, "password": str }
    Validation:
      - All fields required
      - Password must be >= 6 characters
      - Email must not already exist (returns 409 Conflict)
    Success (201): { "token": "<JWT>", "user": { id, name, email, created_at } }
    Error  (400/409): { "error": "<message>" }

  POST /api/v1/auth/login
    Request body (JSON): { "email": str, "password": str }
    Validation:
      - Both fields required
      - Email + password must match a stored user
    Success (200): { "token": "<JWT>", "user": { id, name, email, created_at } }
    Error  (400/401): { "error": "<message>" }

  GET /api/v1/auth/me
    Header: Authorization: Bearer <JWT>
    Protected with @jwt_required()
    Success (200): { "user": { id, name, email, created_at } }
    Error  (404): { "error": "User not found" }


3.5  backend/sakhibiz_backend/routes/api/v1/__init__.py   [MODIFIED]
---------------------------------------------------------------------
Was: bare import of sakhibiz_backend app.
Now: imports the auth module so Flask registers its routes:
  from sakhibiz_backend.routes.api.v1 import auth


3.6  backend/app.py                                       [MODIFIED]
---------------------------------------------------------------------
Was: just `from sakhibiz_backend import app` + app.run()
Now: also imports models and calls db.create_all() inside app context
so SQLite tables are created automatically on first run.

  from sakhibiz_backend import app, db
  import sakhibiz_backend.models
  with app.app_context():
      db.create_all()

--------------------------------------------------------------------------------
4. DATABASE
--------------------------------------------------------------------------------

Engine : SQLite (file-based, zero config)
ORM    : SQLAlchemy 2.0
File   : data/sakhibiz.db  (at project root, created automatically)

Tables created in Phase 0:
  users  (id, name, email, password_hash, created_at)

Tables planned for Phase 1+:
  schemes  (id, name, description, eligibility_rules, documents, official_link, category)
  records  (id, user_id, type, amount, note, date, created_at)

--------------------------------------------------------------------------------
5. FRONTEND — NEW / MODIFIED FILES
--------------------------------------------------------------------------------

5.1  frontend/src/app/globals.css                         [REWRITTEN]
---------------------------------------------------------------------
Completely replaced the default Next.js globals with the full
"Warm Dignity" design system defined in design.md.

Implemented:
  - CSS custom properties (design tokens):
      Colors: --color-primary (#ff7e5f), --color-primary-dark (#ff6b4a),
              --color-background (#fffdf9), --color-surface (#ffffff),
              --color-on-surface (#2d2424), --color-outline (#f3e3d3), ...
      Spacing: --space-xs through --space-xl (4px–32px scale)
      Radius:  --radius-sm through --radius-full
      Shadows: --shadow-card, --shadow-active, --shadow-fab

  - Typography helper classes:
      .headline-lg / .headline-md / .headline-sm
      .body-lg / .body-md / .body-sm
      .label-lg / .label-md / .label-sm
      Font: Plus Jakarta Sans (loaded from Google Fonts)

  - Button classes:
      .btn          (base — 52px height, pill radius, transitions)
      .btn-primary  (warm peach gradient, shadow, hover lift)
      .btn-secondary (outlined)
      .btn-full     (100% width)
      :disabled state handled

  - Form classes:
      .input-group, .input-label, .input-field
      Focus ring: 3px rgba(255,126,95,0.15) + primary border color
      Error state: .input-field.error

  - Auth page layout:
      .auth-page    (full-height centered, warm gradient bg)
      .auth-card    (max-width 420px card with shadow)
      .auth-logo, .auth-logo-icon, .auth-form, .auth-footer

  - Alert banners:
      .alert, .alert-error, .alert-success

  - Bottom navigation:
      .bottom-nav   (fixed 64px bar, Level 3 shadow)
      .nav-tab, .nav-tab.active

  - App shell layout:
      .app-shell, .app-header, .page-content

  - Utility: .spinner (CSS keyframe animation)


5.2  frontend/src/app/layout.js                           [MODIFIED]
---------------------------------------------------------------------
Was: loaded Geist fonts, generic title.
Now: minimal layout with PWA-ready meta tags.

Changes:
  - Removed Geist font imports
  - Set lang="hi" (Hindi primary language)
  - Added viewport and theme-color meta tags
  - Added <link rel="manifest" href="/manifest.json">
  - Updated title: "SakhiBiz – Your Digital Business Companion"
  - Updated description (SEO + PWA)


5.3  frontend/src/lib/auth.js                             [NEW]
---------------------------------------------------------------------
Client-side auth utility module. All localStorage access is guarded
with typeof window checks for SSR compatibility.

Exports:
  getToken()         — reads JWT from localStorage
  setToken(token)    — saves JWT
  clearToken()       — removes JWT and user
  getStoredUser()    — reads cached user object
  setStoredUser(u)   — saves user object as JSON
  isLoggedIn()       — returns Boolean(getToken())

  apiRegister({name, email, password})
    → POST /api/v1/auth/register
    → stores token + user on success

  apiLogin({email, password})
    → POST /api/v1/auth/login
    → stores token + user on success

  apiMe()
    → GET /api/v1/auth/me (sends Bearer token)

  logout(router)
    → clears token, redirects to /login


5.4  frontend/src/app/page.js                             [REWRITTEN]
---------------------------------------------------------------------
Was: default Next.js boilerplate with Vercel links.
Now: auth-aware splash/redirect page.

Behaviour:
  - On mount: checks isLoggedIn()
  - If logged in → router.replace("/dashboard")
  - If not      → router.replace("/login")
  - While redirecting: shows branded splash (🪭 logo + spinner)


5.5  frontend/src/app/login/page.js                       [NEW]
---------------------------------------------------------------------
Login page at route: /login

Features:
  - "use client" — client-side component
  - Bilingual labels: Hindi primary + English secondary
  - Form fields: email, password
  - Client-side validation before API call
  - Calls apiLogin() on submit
  - Shows inline error alert on failure (alert-error)
  - Shows spinner inside button while loading
  - Redirects to /dashboard on success
  - Link to /register for new users
  - All interactive elements have unique HTML IDs for testing:
      #login-form, #login-email, #login-password, #login-submit, #go-to-register


5.6  frontend/src/app/register/page.js                    [NEW]
---------------------------------------------------------------------
Register page at route: /register

Features:
  - "use client" — client-side component
  - Bilingual labels: Hindi primary + English secondary
  - Form fields: name, email, password
  - Validation: all fields required, handled server-side for length
  - Calls apiRegister() on submit
  - Shows inline error alert on failure
  - Shows spinner inside button while loading
  - Redirects to /dashboard on success
  - Link to /login for existing users
  - HTML IDs: #register-form, #reg-name, #reg-email, #reg-password,
              #register-submit, #go-to-login


5.7  frontend/src/app/dashboard/page.js                   [NEW]
---------------------------------------------------------------------
Protected dashboard at route: /dashboard

Features:
  - "use client" — client-side component
  - Route protection: checks isLoggedIn() on mount,
    redirects to /login if token is missing
  - Reads user name from localStorage (no extra API call needed)
  - Time-based greeting: सुप्रभात / नमस्ते / शुभ संध्या
  - Sticky app header with user name + logout button
  - Welcome banner card with warm gradient
  - 2×2 quick-action card grid:
      Schemes (→ /schemes)
      Add Sale (→ /records/new?type=sale)
      Add Expense (→ /records/new?type=expense)
      My Records (→ /records)
  - Phase status banner (green success card)
  - Bottom navigation bar with 4 tabs:
      🏠 होम/Home  📒 खाता/Records  🗂️ योजनाएं/Schemes  👤 प्रोफाइल/Profile
  - HTML IDs for all interactive elements:
      #logout-btn, #quick-schemes, #quick-add-sale,
      #quick-add-expense, #quick-records, #nav-home,
      #nav-records, #nav-schemes, #nav-profile


5.8  frontend/public/manifest.json                        [NEW]
---------------------------------------------------------------------
PWA Web App Manifest enabling "Add to Home Screen" on mobile.

  name            : SakhiBiz
  short_name      : SakhiBiz
  display         : standalone
  background_color: #fffdf9
  theme_color     : #ff7e5f
  orientation     : portrait

--------------------------------------------------------------------------------
6. FLOW VERIFIED (manually)
--------------------------------------------------------------------------------

  1. User opens app  →  splash screen (/)
  2. Not logged in   →  redirected to /login
  3. Clicks Register →  navigates to /register
  4. Fills name + email + password → POST /api/v1/auth/register
  5. Backend creates User, hashes password, issues JWT
  6. Frontend stores JWT + user in localStorage
  7. Redirected to /dashboard  (protected route — auth check passes)
  8. User sees greeting + name + quick cards + bottom nav
  9. Logout → token cleared → back to /login

--------------------------------------------------------------------------------
7. HOW TO RUN
--------------------------------------------------------------------------------

Backend:
  cd backend
  source .venv/bin/activate
  python app.py
  → Runs on http://localhost:5000
  → SQLite DB auto-created at data/sakhibiz.db

Frontend:
  cd frontend
  npm run dev
  → Runs on http://localhost:3000

Test register (curl):
  curl -X POST http://localhost:5000/api/v1/auth/register \
    -H "Content-Type: application/json" \
    -d '{"name":"Priya Sharma","email":"priya@test.com","password":"secret123"}'

Test login (curl):
  curl -X POST http://localhost:5000/api/v1/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"priya@test.com","password":"secret123"}'

--------------------------------------------------------------------------------
8. WHAT IS NOT IN PHASE 0 (deferred to later phases)
--------------------------------------------------------------------------------

  - Scheme Checker UI and API           (Phase 1)
  - Records (Sales / Expense / Udhaar)  (Phase 2)
  - Offline cache / PWA service worker  (Phase 3)
  - Docker / docker-compose             (optional)
  - Round 1 PPT                         (Phase 3)

================================================================================
END OF PHASE 0 DOCUMENTATION
================================================================================
