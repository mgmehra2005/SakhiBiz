"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  // Brief loading state while redirecting
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #fff5f2, #fffdf9)",
        gap: "16px",
      }}
    >
      <div style={{ fontSize: "48px" }}>🪭</div>
      <p className="headline-sm" style={{ color: "#ff6b4a" }}>
        SakhiBiz
      </p>
      <div className="spinner" style={{ borderColor: "rgba(255,107,74,0.3)", borderTopColor: "#ff6b4a" }} />
    </div>
  );
}
