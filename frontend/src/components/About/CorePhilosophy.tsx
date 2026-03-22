import React from "react";

const philosophyCards = [
  {
    title: "Our Mission",
    text: "To empower enterprises with AI-driven compliance intelligence that adapts in real-time to global regulatory changes, eliminating manual processes and reducing risk across all jurisdictions",
  },
  {
    title: "Our Vision",
    text: "A world where compliance is autonomous, transparent, and intelligent—where organizations can confidently operate globally without the fear of regulatory gaps or missed obligations.",
  },
];

const valueCards = [
  {
    title: "Innovation",
    text: "Leveraging cutting-edge AI and automation to solve the most complex compliance challenges.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L6 13h5l-1 9 8-12h-5V2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Precision",
    text: "Delivering accurate, audit-ready compliance with zero tolerance for regulatory gaps.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Trust",
    text: "Building enterprise-grade security and transparency into every layer of our platform.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Global Impact",
    text: "Supporting organizations across all jurisdictions with localized compliance intelligence.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    ),
  },
];

export default function CorePhilosophy() {
  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      background:
        "linear-gradient(180deg," +
        "  #9AFF2E 0%," +
        "  #1a2312 12%," +
        "  #090b09 28%," +
        "  #050505 50%," +
        "  #060606 75%," +
        "  #070807 100%)",
    }}>

      {/* TOP LIME BURST */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%", zIndex: 1, pointerEvents: "none",
        width: "1100px", height: "260px",
        transform: "translateX(-50%)",
        background:
          "radial-gradient(ellipse at center," +
          "  rgba(177,255,92,0.95)  0%," +
          "  rgba(146,255,56,0.48) 34%," +
          "  rgba(146,255,56,0.08) 60%," +
          "  transparent           78%)",
        filter: "blur(56px)",
      }} />

      {/* DARK VIGNETTE */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background:
          "radial-gradient(circle at 50% 40%," +
          "  rgba(0,0,0,0.00)  0%," +
          "  rgba(0,0,0,0.18) 45%," +
          "  rgba(0,0,0,0.72) 100%)",
      }} />

      {/* GRID — top section only, fades softly toward center and bottom */}
      <div aria-hidden style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "52%",
        zIndex: 3, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        WebkitMaskImage:
          "linear-gradient(180deg, black 0%, black 20%, rgba(0,0,0,0.6) 50%, transparent 80%)," +
          "radial-gradient(ellipse 70% 70% at 50% 30%, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.7) 55%, black 80%)",
        WebkitMaskComposite: "destination-in",
        maskImage:
          "linear-gradient(180deg, black 0%, black 20%, rgba(0,0,0,0.6) 50%, transparent 80%)," +
          "radial-gradient(ellipse 70% 70% at 50% 30%, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.7) 55%, black 80%)",
        maskComposite: "intersect",
      } as React.CSSProperties} />

      {/* ── TOP SECTION — Our Core Philosophy ── */}
      <div style={{ position: "relative", zIndex: 10, padding: "80px 40px 108px" }}>

        {/* Green orb outer glow */}
        <div aria-hidden style={{
          position: "absolute",
          left: "50%", bottom: "2%",
          width: "340px", height: "340px",
          transform: "translateX(-50%)",
          background: "rgba(180,255,60,1.00)",
          filter: "blur(80px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
        }} />
        {/* Green orb bright core */}
        <div aria-hidden style={{
          position: "absolute",
          left: "50%", bottom: "8%",
          width: "140px", height: "140px",
          transform: "translateX(-50%)",
          background: "rgba(210,255,80,1.00)",
          filter: "blur(28px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{
              margin: 0,
              fontSize: "clamp(34px, 4.5vw, 54px)",
              fontWeight: 700, letterSpacing: "-0.06em", color: "#fff",
            }}>
              Our Core Philosophy
            </h2>
            <p style={{
              marginTop: "12px", fontSize: "13px", lineHeight: "24px",
              letterSpacing: "-0.03em", color: "rgba(255,255,255,0.70)",
            }}>
              Empower enterprises with autonomy so compliance never feels like a burden again.
            </p>
          </div>

          <div style={{
            position: "relative", maxWidth: "780px", margin: "64px auto 0",
            display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap",
          }}>
            {philosophyCards.map((card) => (
              <article key={card.title} style={{
                position: "relative", flex: "1 1 280px", maxWidth: "300px",
                overflow: "hidden", borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.20)",
                background: "linear-gradient(180deg, rgba(10,10,10,0.96) 0%, rgba(7,7,7,0.95) 100%)",
                padding: "36px 24px",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset, 0 10px 30px rgba(0,0,0,0.45)",
              }}>
                <div aria-hidden style={{
                  position: "absolute", inset: 0, borderRadius: "12px",
                  background: "radial-gradient(circle at 50% 100%, rgba(154,255,46,0.18), transparent 40%)",
                }} />
                <h3 style={{
                  position: "relative", margin: 0, fontSize: "17px", fontWeight: 600,
                  letterSpacing: "-0.04em", color: "#9AFF2E",
                }}>{card.title}</h3>
                <p style={{
                  position: "relative", margin: "24px 0 0", fontSize: "14px",
                  lineHeight: "1.75", letterSpacing: "-0.03em", color: "rgba(255,255,255,0.82)",
                }}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION — Finsentsis Core Value ── */}
      <div style={{ position: "relative", zIndex: 10, padding: "0 40px 88px" }}>

        {/* Soft centre green glow */}
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "0%",
          width: "700px", height: "400px", transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center," +
            "  rgba(134,200,40,0.28) 0%, rgba(100,160,20,0.10) 45%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        {/* Left diagonal beam */}
        <div aria-hidden style={{
          position: "absolute", left: "5%", top: "15%",
          width: "120px", height: "700px",
          transform: "rotate(-38deg)", transformOrigin: "center center",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(210,255,160,0.55) 30%," +
            "  rgba(220,255,170,0.72) 50%, rgba(210,255,160,0.55) 70%, transparent 100%)",
          filter: "blur(22px)", pointerEvents: "none",
        }} />

        {/* Right diagonal beam */}
        <div aria-hidden style={{
          position: "absolute", right: "5%", top: "15%",
          width: "120px", height: "700px",
          transform: "rotate(38deg)", transformOrigin: "center center",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(210,255,160,0.55) 30%," +
            "  rgba(220,255,170,0.72) 50%, rgba(210,255,160,0.55) 70%, transparent 100%)",
          filter: "blur(22px)", pointerEvents: "none",
        }} />

        {/* Corner glows */}
        <div aria-hidden style={{
          position: "absolute", bottom: "-5%", left: "-8%",
          width: "380px", height: "380px",
          background: "rgba(134,255,42,0.14)", filter: "blur(120px)", pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: "-5%", right: "-8%",
          width: "380px", height: "380px",
          background: "rgba(134,255,42,0.14)", filter: "blur(120px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "8px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center",
              padding: "6px 16px", borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset",
              fontSize: "10px", fontWeight: 500, letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.60)",
            }}>
              AI-powered Autonomous Compliance
            </span>
          </div>

          {/* Heading */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <h3 style={{
              margin: 0, fontSize: "clamp(34px, 4.5vw, 54px)",
              fontWeight: 600, letterSpacing: "-0.06em", color: "#fff",
            }}>
              Finsentsis Core Value
            </h3>
            <p style={{
              margin: "16px auto 0", maxWidth: "760px",
              fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: "28px",
              letterSpacing: "-0.03em", color: "rgba(255,255,255,0.65)",
            }}>
              From tax and payroll laws to ESG regulations and labor standards everything
              runs autonomously through the Finsentsis engine.
            </p>
          </div>

          {/* 4 value cards */}
          <div style={{
            marginTop: "64px", display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", gap: "16px",
          }}>
            {valueCards.map((card) => (
              <article key={card.title} style={{
                position: "relative", minHeight: "280px", overflow: "hidden",
                borderRadius: "12px", border: "1px solid rgba(255,255,255,0.10)",
                background: "linear-gradient(180deg, rgba(10,10,10,0.97) 0%, rgba(6,6,6,0.98) 100%)",
                padding: "24px 24px 32px",
                boxShadow: "0 12px 28px rgba(0,0,0,0.32)",
                display: "flex", flexDirection: "column",
              }}>
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 34%)",
                }} />
                <div aria-hidden style={{
                  position: "absolute", top: "8%", left: "-10%",
                  width: "220px", height: "88px", transform: "rotate(24deg)",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
                  filter: "blur(18px)",
                }} />
                <div aria-hidden style={{
                  position: "absolute", bottom: "-8%", left: 0, right: 0, height: "120px",
                  background:
                    "radial-gradient(ellipse at center," +
                    "  rgba(219,255,156,1.00) 0%, rgba(154,255,46,0.88) 28%," +
                    "  rgba(154,255,46,0.22) 56%, transparent 80%)",
                  filter: "blur(22px)",
                }} />

                <div style={{
                  position: "relative", display: "flex", alignItems: "center",
                  justifyContent: "center", width: "40px", height: "40px",
                  background:
                    "radial-gradient(circle at 30% 30%, #e8ffb8 0%, #9aff2e 45%, rgba(154,255,46,0.16) 100%)",
                  color: "#0f1408", boxShadow: "0 0 24px rgba(154,255,46,0.32)", flexShrink: 0,
                }}>
                  {card.icon}
                </div>

                <div style={{ flex: 1, minHeight: "48px" }} />

                <h4 style={{
                  position: "relative", margin: 0, fontSize: "18px",
                  fontWeight: 600, letterSpacing: "-0.04em", color: "#fff",
                }}>{card.title}</h4>
                <p style={{
                  position: "relative", margin: "24px 0 0", fontSize: "14px",
                  lineHeight: "1.70", letterSpacing: "-0.03em", color: "rgba(255,255,255,0.80)",
                }}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}