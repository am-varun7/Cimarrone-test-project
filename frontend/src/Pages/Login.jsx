import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { console.log(credentials); setIsLoading(false); }, 1500);
  };

  const features = [
    {
      title: "Smart Leave Tracking",
      desc: "Monitor balances across all leave types in sone place.",
      path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
      title: "Multi-level Approvals",
      desc: "Configurable workflows from team lead to HR.",
      path: "M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 110-8 4 4 0 010 8z",
    },
    {
      title: "Real-time Notifications",
      desc: "Instant alerts for requests and team availability.",
      path: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a1 1 0 10-2 0v.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    },
  ];

  /* ── shared styles ── */
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 14px 10px 38px",
    fontSize: 14,
    color: "#0f172a",
    backgroundColor: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    outline: "none",
    fontFamily: "inherit",
  };

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .ld-input:focus { border-color: #3b82f6 !important; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
        .ld-btn-google:hover { background-color: #f8fafc !important; }
        .ld-btn-submit:hover:not(:disabled) { background-color: #1d4ed8 !important; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      `}</style>

      <div style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}>

        {/* ── LEFT PANEL ── */}
        <div style={{
          display: "none",
          width: "50%",
          backgroundColor: "#0f1c3f",
          padding: "48px",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          // show on desktop via media query workaround — use inline flex always but hide on small
        }}
          className="left-panel"
        >
          {/* Decorative ring */}
          <div style={{
            position: "absolute", bottom: -160, left: -160,
            width: 480, height: 480, borderRadius: "50%",
            border: "1px solid rgba(59,130,246,0.15)",
          }} />
          <div style={{
            position: "absolute", bottom: -80, left: -80,
            width: 300, height: 300, borderRadius: "50%",
            border: "1px solid rgba(59,130,246,0.08)",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 360 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                backgroundColor: "#3b82f6",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>LeaveDesk</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, color: "#fff", marginBottom: 16 }}>
              Workforce leave,{" "}
              <span style={{ color: "#60a5fa" }}>fully in control.</span>
            </h1>
            <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7, marginBottom: 40 }}>
              A centralised platform for leave requests, approvals, and team capacity planning.
            </p>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    flexShrink: 0, width: 36, height: 36, borderRadius: 8,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#60a5fa",
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", marginBottom: 3 }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{
              marginTop: 40, paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{ display: "flex" }}>
                {["BK", "SR", "AN"].map((init, i) => (
                  <div key={i} style={{
                    width: 30, height: 30, borderRadius: "50%",
                    background: "linear-gradient(135deg,#3b82f6,#6366f1)",
                    border: "2px solid #0f1c3f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, fontWeight: 700, color: "#fff",
                    marginLeft: i === 0 ? 0 : -8,
                  }}>{init}</div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#64748b" }}>
                Trusted by <span style={{ color: "#cbd5e1", fontWeight: 600 }}>2,400+</span> teams
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          backgroundColor: "#f8fafc",
        }}>
          <div style={{ width: "100%", maxWidth: 400 }}>

            {/* Card */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              padding: "36px 32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}>
              {/* Logo top of card */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  backgroundColor: "#2563eb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", letterSpacing: "0.02em" }}>LeaveDesk</span>
              </div>

              {/* Heading */}
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>Welcome back</h2>
              <p style={{ fontSize: 14, color: "#64748b", marginBottom: 28 }}>Sign in to access your account.</p>

              {/* Form */}
              <form onSubmit={handleSubmit}>

                {/* Email */}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                    Email address
                  </label>
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)",
                      display: "flex", pointerEvents: "none",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      className="ld-input"
                      type="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Password */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Password</label>
                    <a href="#" style={{ fontSize: 12, color: "#2563eb", fontWeight: 500, textDecoration: "none" }}>
                      Forgot password?
                    </a>
                  </div>
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)",
                      display: "flex", pointerEvents: "none",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                    <input
                      className="ld-input"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      style={{ ...inputStyle, paddingRight: 40 }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                        background: "none", border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", padding: 0,
                      }}
                    >
                      {showPassword ? (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", marginBottom: 20 }}
                >
                  <div style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                    backgroundColor: rememberMe ? "#2563eb" : "#fff",
                    border: rememberMe ? "1px solid #2563eb" : "1.5px solid #d1d5db",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                  }}>
                    {rememberMe && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: 13, color: "#4b5563", userSelect: "none" }}>Remember me for 30 days</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="ld-btn-submit"
                  style={{
                    width: "100%",
                    padding: "11px 0",
                    backgroundColor: isLoading ? "#93c5fd" : "#2563eb",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 8,
                    cursor: isLoading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontFamily: "inherit",
                    transition: "background-color 0.15s",
                    marginBottom: 16,
                  }}
                >
                  {isLoading ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        style={{ animation: "spin 0.8s linear infinite" }}>
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                        <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Signing in…
                    </>
                  ) : "Sign in"}
                </button>

              </form>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
                <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>OR</span>
                <div style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
              </div>

              {/* Google button */}
              <button
                type="button"
                className="ld-btn-google"
                style={{
                  width: "100%",
                  padding: "10px 0",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                  fontSize: 14, fontWeight: 500, color: "#374151",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background-color 0.15s",
                  marginBottom: 24,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              {/* Register */}
              <p style={{ textAlign: "center", fontSize: 13, color: "#6b7280" }}>
                Don't have an account?{" "}
                <span style={{ color: "#2563eb", fontWeight: 600, cursor: "pointer" }}>
                  Request access
                </span>
              </p>
            </div>

            <p style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 24 }}>
              © 2026 LeaveDesk · Privacy · Terms
            </p>
          </div>
        </div>

      </div>

      {/* Responsive: show left panel on wide screens */}
      <style>{`
        @media (min-width: 1024px) {
          .left-panel { display: flex !important; }
        }
      `}</style>
    </>
  );
}