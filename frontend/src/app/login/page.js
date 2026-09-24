"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiLogin } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("ईमेल और पासवर्ड डालें  /  Enter email and password");
      return;
    }
    setLoading(true);
    try {
      await apiLogin(form);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Logo */}
        <div className="auth-logo">
          <div className="auth-logo-icon">🪭</div>
          <h1 className="headline-sm" style={{ marginTop: "8px" }}>
            SakhiBiz
          </h1>
          <p className="body-sm text-secondary" style={{ marginTop: "4px" }}>
            आपका डिजिटल बिज़नेस साथी
          </p>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: "24px" }}>
          <h2 className="headline-md">वापस स्वागत है!</h2>
          <p className="body-sm text-secondary" style={{ marginTop: "4px" }}>
            Welcome back — log in to continue
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="alert alert-error" style={{ marginBottom: "16px" }}>
            {error}
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} id="login-form">
          <div className="input-group">
            <label className="input-label" htmlFor="login-email">
              ईमेल / Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="input-field"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="login-password">
              पासवर्ड / Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              className="input-field"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <button
            id="login-submit"
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
            style={{ marginTop: "8px" }}
          >
            {loading ? <span className="spinner" /> : "लॉग इन करें / Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="auth-footer">
          <p>
            खाता नहीं है?{" "}
            <Link href="/register" id="go-to-register">
              अभी बनाएं / Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
