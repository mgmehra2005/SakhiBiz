"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiRegister } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("सभी फ़ील्ड भरें  /  Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      await apiRegister(form);
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
          <h2 className="headline-md">नया खाता बनाएं</h2>
          <p className="body-sm text-secondary" style={{ marginTop: "4px" }}>
            Create your free account
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="alert alert-error" style={{ marginBottom: "16px" }}>
            {error}
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} id="register-form">
          <div className="input-group">
            <label className="input-label" htmlFor="reg-name">
              नाम / Name
            </label>
            <input
              id="reg-name"
              name="name"
              type="text"
              className="input-field"
              placeholder="आपका नाम"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="reg-email">
              ईमेल / Email
            </label>
            <input
              id="reg-email"
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
            <label className="input-label" htmlFor="reg-password">
              पासवर्ड / Password
            </label>
            <input
              id="reg-password"
              name="password"
              type="password"
              className="input-field"
              placeholder="कम से कम 6 अक्षर"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <button
            id="register-submit"
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
            style={{ marginTop: "8px" }}
          >
            {loading ? (
              <span className="spinner" />
            ) : (
              "खाता बनाएं / Register"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="auth-footer">
          <p>
            पहले से खाता है?{" "}
            <Link href="/login" id="go-to-login">
              लॉग इन करें / Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
