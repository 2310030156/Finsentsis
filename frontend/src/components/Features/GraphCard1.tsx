import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    L: {
      map: (el: HTMLElement, opts: object) => object;
      tileLayer: (url: string, opts: object) => { addTo: (map: object) => void };
      divIcon: (opts: object) => object;
      marker: (latlng: [number, number], opts: object) => { addTo: (map: object) => void };
    };
  }
}

/* ══════════════════════════════════════════
   FEATURE 01 — Speedometer
   Exact match to screenshot
══════════════════════════════════════════ */
export function Speedometer() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setProgress(0.75), 400);
    return () => clearTimeout(t);
  }, []);

  const cx = 280, cy = 280, r = 210;
  const startDeg = 148, endDeg = 392, totalArc = endDeg - startDeg;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const px = (d: number, rad: number) => cx + rad * Math.cos(toRad(d));
  const py = (d: number, rad: number) => cy + rad * Math.sin(toRad(d));
  const arc = (from: number, to: number, rad: number) => {
    const large = to - from > 180 ? 1 : 0;
    return `M ${px(from, rad)} ${py(from, rad)} A ${rad} ${rad} 0 ${large} 1 ${px(to, rad)} ${py(to, rad)}`;
  };

  const filledEnd = startDeg + progress * totalArc;
  const needleRad = toRad(startDeg + progress * totalArc);

  const pills = [
    { label: "10%", deg: 154 },
    { label: "10%", deg: 386 },
    { label: "90%", deg: 208 },
    { label: "90%", deg: 336 },
  ];

  return (
    <div style={{
      width: "100%", height: "100%",
      background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <svg viewBox="0 0 560 560" style={{ width: "50%", height: "80%", maxWidth: 450 }}>
        <defs>
          {/* Sphere gradient */}
          <radialGradient id="sph" cx="42%" cy="36%" r="60%">
            <stop offset="0%" stopColor="#484848" />
            <stop offset="35%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#080808" />
          </radialGradient>
          {/* Green arc gradient */}
          <linearGradient id="gArc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d5520" />
            <stop offset="50%" stopColor="#1ed64f" />
            <stop offset="100%" stopColor="#39ff85" />
          </linearGradient>
          {/* Outer glow filter */}
          <filter id="outerGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pillGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Concentric background rings ── */}
        <circle cx={cx} cy={cy} r={r + 52} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={r + 38} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={r + 22} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* ── Outer green glow halo ── */}
        <path
          d={arc(startDeg, filledEnd, r + 22)}
          fill="none" stroke="rgba(57,255,133,0.15)" strokeWidth="44" strokeLinecap="round"
          style={{ transition: "all 1.6s cubic-bezier(0.4,0,0.2,1)" }}
        />
        <path
          d={arc(startDeg, filledEnd, r + 22)}
          fill="none" stroke="rgba(57,255,133,0.25)" strokeWidth="22" strokeLinecap="round"
          style={{ transition: "all 1.6s cubic-bezier(0.4,0,0.2,1)" }}
        />

        {/* ── Track background ── */}
        <path d={arc(startDeg, endDeg, r)} fill="none"
          stroke="rgba(255,255,255,0.07)" strokeWidth="32" strokeLinecap="round" />

        {/* ── Main green arc ── */}
        <path
          d={arc(startDeg, filledEnd, r)}
          fill="none" stroke="url(#gArc)" strokeWidth="32" strokeLinecap="round"
          filter="url(#outerGlow)"
          style={{ transition: "all 1.6s cubic-bezier(0.4,0,0.2,1)" }}
        />

        {/* ── Tick marks ── */}
        {Array.from({ length: 60 }).map((_, i) => {
          const deg = startDeg + (i / 59) * totalArc;
          const major = i % 5 === 0;
          const active = deg <= filledEnd;
          return (
            <line key={i}
              x1={px(deg, r + 16)} y1={py(deg, r + 16)}
              x2={px(deg, major ? r - 14 : r + 2)} y2={py(deg, major ? r - 14 : r + 2)}
              stroke={active
                ? (major ? "rgba(57,255,133,1)" : "rgba(57,255,133,0.55)")
                : (major ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)")}
              strokeWidth={major ? 3.5 : 1.5} strokeLinecap="round"
            />
          );
        })}

        {/* ── Inner circle — Figma exact: 422×422, 33.47deg, Subtract blend, layer blur 29.6 ── */}
        <defs>
          <radialGradient id="innerCircleGrad" cx="50%" cy="0%" r="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#D6FFAB" stopOpacity="1" />
            <stop offset="58.17%" stopColor="#326200" stopOpacity="0" />
          </radialGradient>
          <filter id="innerBlur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <circle
          cx={cx} cy={cy} r={211}
          fill="url(#innerCircleGrad)"
          filter="url(#innerBlur)"
          transform={`rotate(33.47, ${cx}, ${cy})`}
          style={{ mixBlendMode: "screen", opacity: 0.6 }}
        />

        {/* ── Metallic sphere (on top of inner circle) ── */}
        {/* Outer shadow */}
        <circle cx={cx} cy={cy} r={r - 38}
          fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="16" />
        {/* Main sphere */}
        <circle cx={cx} cy={cy} r={r - 46} fill="url(#sph)" />
        {/* Subtle highlight */}
        <ellipse cx={cx - 28} cy={cy - 38} rx={38} ry={28}
          fill="rgba(255,255,255,0.05)" />
        {/* Inner ring detail */}
        <circle cx={cx} cy={cy} r={r - 80}
          fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />

        {/* ── Hub ── */}
        <circle cx={cx} cy={cy} r={30} fill="#0e0e0e" stroke="rgba(57,255,133,0.2)" strokeWidth="2" />
        <circle cx={cx} cy={cy} r={16} fill="#1a1a1a" />
        <circle cx={cx} cy={cy} r={8} fill="#2e2e2e" />

        {/* ── Needle ── */}
        <line
          x1={cx + 18 * Math.cos(needleRad)} y1={cy + 18 * Math.sin(needleRad)}
          x2={cx + (r - 60) * Math.cos(needleRad)} y2={cy + (r - 60) * Math.sin(needleRad)}
          stroke="rgba(240,240,240,0.95)" strokeWidth="4.5" strokeLinecap="round"
          style={{ transition: "x2 1.6s cubic-bezier(0.4,0,0.2,1), y2 1.6s cubic-bezier(0.4,0,0.2,1)" }}
        />

        {/* ── Rotated percentage pills ── */}
        {pills.map((p, i) => {
          const dist = r + 68;
          const lx = px(p.deg, dist);
          const ly = py(p.deg, dist);
          const rotate = p.deg - 90;
          return (
            <g key={i} transform={`translate(${lx},${ly}) rotate(${rotate})`}>
              <rect x={-30} y={-14} width={60} height={28} rx={14}
                fill="rgba(6,6,6,0.96)"
                stroke="#3dff8f"
                strokeWidth="1.8"
                filter="url(#pillGlow)"
              />
              <text x={0} y={5.5} textAnchor="middle"
                fontSize="12" fontWeight="700"
                fill="#3dff8f" fontFamily="monospace"
              >{p.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════
   FEATURE 02 — Gear Widget
   Dark disc, dashed card border effect,
   gear icon center, orbit dots, green glow
══════════════════════════════════════════ */
export function GearWidget() {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
      background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)",
    }}>
      {/* Dashed border lines (mimics screenshot dashed card outline on right) */}
      <div style={{
        position: "absolute", inset: 12,
        border: "1px dashed rgba(255,255,255,0.1)",
        borderRadius: 8, pointerEvents: "none",
      }} />

      <svg viewBox="0 0 340 340" style={{ width: "80%", maxWidth: 300 }}>
        <defs>
          <radialGradient id="discBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#111" />
          </radialGradient>
          <radialGradient id="discGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(61,255,143,0.22)" />
            <stop offset="70%" stopColor="rgba(61,255,143,0.05)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <filter id="dotGlowG">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Outer glow */}
        <circle cx="170" cy="170" r="155" fill="url(#discGlow)" />

        {/* Main disc */}
        <circle cx="170" cy="170" r="128" fill="url(#discBg)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

        {/* Inner shadow ring */}
        <circle cx="170" cy="170" r="118" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="8" />

        {/* Dashed orbit ring */}
        <circle cx="170" cy="170" r="105" fill="none"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"
          strokeDasharray="7 5" />

        {/* Gear icon */}
        <g transform="translate(132,132) scale(3.2)" fill="none"
          stroke="rgba(61,255,143,0.9)" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </g>

        {/* 5 orbit dots */}
        {[18, 90, 162, 234, 306].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const dx = 170 + 105 * Math.cos(rad);
          const dy = 170 + 105 * Math.sin(rad);
          const big = i === 2;
          return (
            <g key={i} filter="url(#dotGlowG)">
              <circle cx={dx} cy={dy} r={big ? 9 : 6}
                fill={big ? "#3dff8f" : "rgba(61,255,143,0.55)"}
              />
              {big && <circle cx={dx} cy={dy} r={16} fill="rgba(61,255,143,0.12)" />}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════
   FEATURE 03 — Dashboard Mock
   Device frame, top-right bleed, green glow
══════════════════════════════════════════ */
export function DashboardWidget() {
  return (
    <div style={{
      width: "100%", height: "100%",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "flex-start", justifyContent: "flex-end",
      background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)",
    }}>
      {/* Strong green radial glow — bottom left of right panel */}
      <div style={{
        position: "absolute", bottom: -80, left: -60,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(50,220,80,0.7) 0%, rgba(20,110,35,0.4) 35%, transparent 65%)",
        filter: "blur(40px)", pointerEvents: "none", zIndex: 0,
      }} />

      {/* Device frame — bleeds top and right edges */}
      <div style={{
        position: "relative", zIndex: 1,
        width: "80%",
        height: "100%",
        marginTop: "8%",
        background: "#0a0a0a",
        borderRadius: "20px 0 0 20px",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRight: "none",
        boxShadow: "-12px 12px 80px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.03)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Top bar */}
        <div style={{
          background: "#0d0d0d",
          padding: "10px 16px",
          display: "flex", alignItems: "center", gap: 10,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "#3dff8f",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2v8" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif" }}>← All projects</span>
        </div>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Sidebar */}
          <div style={{
            width: 155,
            background: "#080808",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "14px 0",
            flexShrink: 0,
            overflow: "hidden",
          }}>
            <div style={{ padding: "0 14px 10px", fontSize: 8.5, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>
              Sisyphus Ventures
            </div>
            {[
              { label: "Overview", active: true, count: "3" },
              { label: "Dashboards", count: "2" },
              { label: "All charts", count: "1" },
              { label: "My tasks" },
              { label: "Insights" },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex", alignItems: "center",
                padding: "7px 14px",
                background: item.active ? "rgba(61,255,143,0.08)" : "transparent",
                borderLeft: item.active ? "2px solid #3dff8f" : "2px solid transparent",
                gap: 8,
              }}>
                <span style={{
                  flex: 1,
                  fontSize: 11, fontFamily: "Inter, sans-serif",
                  color: item.active ? "#fff" : "rgba(255,255,255,0.32)",
                  fontWeight: item.active ? 600 : 400,
                }}>{item.label}</span>
                {item.count && (
                  <span style={{
                    fontSize: 9,
                    color: item.active ? "#3dff8f" : "rgba(255,255,255,0.18)",
                    background: item.active ? "rgba(61,255,143,0.12)" : "rgba(255,255,255,0.05)",
                    padding: "1px 6px", borderRadius: 4,
                  }}>{item.count}</span>
                )}
              </div>
            ))}
            <div style={{ padding: "12px 14px 5px", fontSize: 8, color: "rgba(255,255,255,0.15)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>
              Data Management
            </div>
            {["Event log", "Labels & analytics", "Live data feed"].map((l) => (
              <div key={l} style={{ padding: "6px 14px" }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "Inter, sans-serif" }}>{l}</span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: "16px 18px", overflow: "hidden", background: "#0b0b0b" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 12, fontFamily: "Inter, sans-serif" }}>
              Sisyphus Ventures
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              {[
                { label: "Users", val: "629.2k", badge: "+12%", green: true },
                { label: "Sessions", val: "564.1", badge: "↓", green: false },
              ].map((s) => (
                <div key={s.label} style={{
                  flex: 1, background: "rgba(255,255,255,0.03)",
                  borderRadius: 8, padding: "8px 10px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                    <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif" }}>{s.label}</span>
                    <span style={{
                      fontSize: 8.5, padding: "1px 6px", borderRadius: 4,
                      color: s.green ? "#3dff8f" : "rgba(255,100,100,0.9)",
                      background: s.green ? "rgba(61,255,143,0.1)" : "rgba(255,80,80,0.08)",
                    }}>{s.badge}</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>{s.val}</div>
                </div>
              ))}
            </div>

            {/* Revenue chart */}
            <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.28)", marginBottom: 6, fontFamily: "Inter, sans-serif" }}>Revenue over time</div>
            <svg viewBox="0 0 280 75" style={{ width: "100%", marginBottom: 10 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(61,255,143,0.3)" />
                  <stop offset="100%" stopColor="rgba(61,255,143,0)" />
                </linearGradient>
              </defs>
              <path d="M0 56 C24 50 42 22 74 28 C104 34 118 10 150 16 C176 22 192 37 220 32 C242 28 258 40 280 37 L280 75 L0 75 Z" fill="url(#revGrad)" />
              <path d="M0 56 C24 50 42 22 74 28 C104 34 118 10 150 16 C176 22 192 37 220 32 C242 28 258 40 280 37" fill="none" stroke="#3dff8f" strokeWidth="2" strokeLinecap="round" />
              {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map((m, i) => (
                <text key={m} x={i * 43 + 2} y={73} fontSize="7" fill="rgba(255,255,255,0.18)" fontFamily="Inter, sans-serif">{m}</text>
              ))}
            </svg>

            {/* Active users */}
            <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.22)", marginBottom: 5, fontFamily: "Inter, sans-serif" }}>Active users right now</div>
            <svg viewBox="0 0 280 28" style={{ width: "100%" }}>
              {Array.from({ length: 46 }).map((_, i) => {
                const h = 3 + Math.abs(Math.sin(i * 0.6)) * 22;
                return (
                  <rect key={i} x={i * 6.1} y={28 - h} width={4.5} height={h} rx={2}
                    fill={i > 30 ? "rgba(61,255,143,0.7)" : "rgba(255,255,255,0.07)"} />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   FEATURE 04 — Risk Chart
   Two wavy lines full width, green + amber,
   "Risk tracker - Low" pill tooltip,
   dashed vertical line, glowing dots
══════════════════════════════════════════ */
export function RiskChart() {
  const [prog, setProg] = useState(0);
  useEffect(() => { const t = setTimeout(() => setProg(1), 300); return () => clearTimeout(t); }, []);

  const gPath = "M0 90 C40 82 65 38 110 46 C148 53 162 20 210 27 C248 33 268 62 320 55 C355 50 378 72 430 66";
  const yPath = "M0 138 C35 128 65 148 110 122 C145 102 168 158 210 136 C248 118 272 152 320 140 C358 130 390 150 430 144";

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "20px 0", background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)" }}>
      {/* Tooltip */}
      <div style={{
        position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)",
        background: "#1c1c1c", border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 999, padding: "6px 18px",
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 13, color: "#fff", whiteSpace: "nowrap", zIndex: 2,
        boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
        fontFamily: "'Inter', sans-serif", fontWeight: 500,
      }}>
        Risk tracker –&nbsp;<span style={{ color: "#3dff8f", fontWeight: 700 }}>Low</span>
      </div>

      <svg viewBox="0 0 430 200" style={{ width: "100%", overflow: "visible" }}>
        <defs>
          <linearGradient id="gFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(61,255,143,0.22)" />
            <stop offset="100%" stopColor="rgba(61,255,143,0)" />
          </linearGradient>
          <linearGradient id="yFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(200,155,30,0.2)" />
            <stop offset="100%" stopColor="rgba(200,155,30,0)" />
          </linearGradient>
          <linearGradient id="gLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a7a3a" />
            <stop offset="100%" stopColor="#3dff8f" />
          </linearGradient>
          <linearGradient id="yLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7a4800" />
            <stop offset="100%" stopColor="#d4960f" />
          </linearGradient>
          <clipPath id="reveal">
            <rect x="0" y="0" width={430 * prog} height="200"
              style={{ transition: "width 2s ease" }} />
          </clipPath>
          <filter id="dotGR">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Dashed vertical line */}
        <line x1="210" y1="10" x2="210" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" strokeDasharray="5 4" />

        {/* Fill areas */}
        <path d={`${gPath} L430 200 L0 200 Z`} fill="url(#gFill)" clipPath="url(#reveal)" />
        <path d={`${yPath} L430 200 L0 200 Z`} fill="url(#yFill)" clipPath="url(#reveal)" />

        {/* Lines */}
        <path d={gPath} fill="none" stroke="url(#gLine)" strokeWidth="3" strokeLinecap="round" clipPath="url(#reveal)" />
        <path d={yPath} fill="none" stroke="url(#yLine)" strokeWidth="3" strokeLinecap="round" clipPath="url(#reveal)" />

        {/* Glowing intersection dots */}
        <circle cx="210" cy="27" r="9" fill="#3dff8f" filter="url(#dotGR)" opacity={prog} />
        <circle cx="210" cy="27" r="4.5" fill="#fff" opacity={prog} />
        <circle cx="210" cy="136" r="9" fill="#d4960f" filter="url(#dotGR)" opacity={prog} />
        <circle cx="210" cy="136" r="4.5" fill="#fff" opacity={prog} />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════
   FEATURE 05 — Audit Reports
   3 open folders, center large with glow,
   two dimmed side folders, pages fanning out
══════════════════════════════════════════ */
function Folder({ size = 140, dim = false }: { size?: number; dim?: boolean }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: size * 0.13,
      background: dim
        ? "linear-gradient(160deg, #1c1c1c, #0e0e0e)"
        : "linear-gradient(160deg, #202020, #0d0d0d)",
      border: `1px solid rgba(255,255,255,${dim ? 0.05 : 0.1})`,
      position: "relative", overflow: "hidden", flexShrink: 0,
      boxShadow: dim
        ? "0 4px 20px rgba(0,0,0,0.6)"
        : "0 16px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(61,255,143,0.08)",
    }}>
      {/* Green inner glow for center folder */}
      {!dim && (
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 80%, rgba(61,255,143,0.45) 0%, rgba(30,100,50,0.25) 45%, transparent 70%)",
        }} />
      )}
      {/* Folder bottom body */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "56%",
        background: dim ? "#232323" : "#2a2a2a",
        borderTop: `1px solid rgba(255,255,255,${dim ? 0.04 : 0.08})`,
      }} />
      {/* Tab */}
      <div style={{
        position: "absolute", top: "38%", left: size * 0.1,
        width: size * 0.3, height: size * 0.08,
        background: dim ? "#1e1e1e" : "#252525",
        borderRadius: `${size * 0.05}px ${size * 0.05}px 0 0`,
        border: `1px solid rgba(255,255,255,${dim ? 0.04 : 0.07})`,
        borderBottom: "none",
      }} />
      {/* Pages fanning out */}
      {[
        { rotate: -20, tx: -size * 0.13, color: dim ? "rgba(180,180,180,0.12)" : "rgba(230,255,240,0.9)", z: 1 },
        { rotate: 0,   tx: 0,            color: dim ? "rgba(180,180,180,0.16)" : "rgba(210,255,225,0.97)", z: 3 },
        { rotate: 20,  tx: size * 0.13,  color: dim ? "rgba(180,180,180,0.12)" : "rgba(190,230,205,0.8)", z: 2 },
      ].map((p, i) => (
        <div key={i} style={{
          position: "absolute", bottom: "36%", left: "50%",
          width: size * 0.36, height: size * 0.46,
          borderRadius: size * 0.04,
          background: p.color,
          transform: `translateX(calc(-50% + ${p.tx}px)) rotate(${p.rotate}deg)`,
          transformOrigin: "bottom center", zIndex: p.z,
          boxShadow: dim ? "none" : "0 -3px 12px rgba(0,0,0,0.4)",
        }} />
      ))}
    </div>
  );
}

export function AuditReportsWidget() {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
      background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)",
    }}>
      {/* Strong radial glow */}
      <div style={{
        position: "absolute", width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(40,170,70,0.55) 0%, rgba(20,85,35,0.3) 40%, transparent 68%)",
        filter: "blur(24px)", pointerEvents: "none", zIndex: 0,
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      }} />
      {/* Left folder */}
      <div style={{ position: "absolute", left: "6%", top: "50%", transform: "translateY(-42%)", opacity: 0.42, zIndex: 1 }}>
        <Folder size={90} dim />
      </div>
      {/* Right folder */}
      <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-42%)", opacity: 0.42, zIndex: 1 }}>
        <Folder size={90} dim />
      </div>
      {/* Center main folder */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Folder size={160} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   FEATURE 06 — Map Widget (Leaflet)
   Full dark map fills panel, green tint,
   pulsing location dots
══════════════════════════════════════════ */
export function MapWidget() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    script.addEventListener("load", () => {
      const L = window.L;
      if (!mapRef.current || mapRef.current.dataset.initialized) return;
      mapRef.current.dataset.initialized = "true";

      const map = L.map(mapRef.current, {
        center: [42, -95], zoom: 3.2,
        zoomControl: false, scrollWheelZoom: false,
        dragging: false, doubleClickZoom: false, attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", { maxZoom: 19 }).addTo(map);

      // Green tint overlay
      const canvas = document.createElement("canvas");
      canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;mix-blend-mode:color;opacity:0.2;z-index:400;";
      canvas.width = 2; canvas.height = 2;
      const ctx = canvas.getContext("2d");
      if (ctx) { ctx.fillStyle = "#3dff8f"; ctx.fillRect(0, 0, 2, 2); }
      mapRef.current.style.position = "relative";
      mapRef.current.appendChild(canvas);

      const locs: { lat: number; lng: number; big: boolean }[] = [
        { lat: 49.25, lng: -123.1, big: false },
        { lat: 41.8,  lng: -87.6,  big: true  },
        { lat: 43.7,  lng: -79.4,  big: false },
        { lat: 37.77, lng: -122.4, big: false },
        { lat: 29.76, lng: -95.37, big: false },
        { lat: 19.43, lng: -99.13, big: true  },
        { lat: 23.13, lng: -82.38, big: false },
        { lat: 10.5,  lng: -66.9,  big: false },
      ];

      locs.forEach(({ lat, lng, big }) => {
        const s = big ? 18 : 10;
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:${s}px;height:${s}px;border-radius:50%;
            background:${big ? "#3dff8f" : "rgba(61,255,143,0.75)"};
            box-shadow:0 0 ${big ? 20 : 8}px ${big ? 10 : 4}px rgba(61,255,143,${big ? 0.6 : 0.3});
            position:relative;">
            ${big ? `<div style="position:absolute;inset:-${s}px;border-radius:50%;
              background:rgba(61,255,143,0.12);
              animation:pulse 2s ease-in-out infinite;"></div>` : ""}
          </div>`,
          iconSize: [s, s], iconAnchor: [s / 2, s / 2],
        });
        L.marker([lat, lng], { icon }).addTo(map);
      });
    });
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(2.5);opacity:0.05} }
        .leaflet-container { background: #060606 !important; }
      `}</style>
      <div ref={mapRef} style={{ width: "100%", height: "100%", minHeight: 400, background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)" }} />
    </>
  );
}
