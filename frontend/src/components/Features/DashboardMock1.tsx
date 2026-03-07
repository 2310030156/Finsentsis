export function DashboardMock() {
  return (
    <div style={{
      width: "100%", maxWidth: 420, borderRadius: 14, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)", background: "#111",
      boxShadow: "0 0 60px rgba(61,255,143,0.12), 0 20px 60px rgba(0,0,0,0.6)",
      transform: "perspective(800px) rotateY(-6deg) rotateX(2deg)",
    }}>
      {/* Top bar */}
      <div style={{ background: "#0e0e0e", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3dff8f", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2v8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>← All projects</span>
      </div>

      <div style={{ display: "flex", height: 240 }}>
        {/* Sidebar */}
        <div style={{ width: 140, background: "#0d0d0d", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "12px 0", flexShrink: 0 }}>
          <div style={{ padding: "4px 12px 8px", fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Sisyphus Ventures
          </div>
          {[
            { icon: "⊞", label: "Overview", active: true },
            { icon: "▦", label: "Dashboards" },
            { icon: "◈", label: "All charts" },
            { icon: "✓", label: "My tasks" },
            { icon: "◎", label: "Insights" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex", alignItems: "center", gap: 7, padding: "6px 12px",
                background: item.active ? "rgba(61,255,143,0.1)" : "transparent",
                borderLeft: item.active ? "2px solid #3dff8f" : "2px solid transparent",
              }}
            >
              <span style={{ fontSize: 10, color: item.active ? "#3dff8f" : "rgba(255,255,255,0.35)" }}>{item.icon}</span>
              <span style={{ fontSize: 10, color: item.active ? "#fff" : "rgba(255,255,255,0.4)", fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
            </div>
          ))}
          <div style={{ padding: "10px 12px 4px", fontSize: 9, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>
            Data Management
          </div>
          {["Event log", "Labels & analytics", "Live data feed"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 12px" }}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>☰</span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "14px 16px", overflow: "hidden" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 10 }}>Sisyphus Ventures</div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            {[
              { label: "Users", val: "629.2k", change: "+12%" },
              { label: "Sessions", val: "564.1", change: "↓" },
            ].map((s) => (
              <div key={s.label} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>{s.label}</span>
                  <span style={{ fontSize: 8, color: "#3dff8f", background: "rgba(61,255,143,0.1)", padding: "1px 5px", borderRadius: 4 }}>{s.change}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Revenue chart */}
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Revenue over time</div>
          <svg viewBox="0 0 240 80" style={{ width: "100%", opacity: 0.8 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(61,255,143,0.25)" />
                <stop offset="100%" stopColor="rgba(61,255,143,0)" />
              </linearGradient>
            </defs>
            <path d="M0 65 C20 60 30 30 60 35 C90 40 100 20 130 25 C160 30 170 45 200 40 C220 37 230 50 240 48 L240 80 L0 80 Z" fill="url(#chartFill)" />
            <path d="M0 65 C20 60 30 30 60 35 C90 40 100 20 130 25 C160 30 170 45 200 40 C220 37 230 50 240 48" fill="none" stroke="#3dff8f" strokeWidth="1.5" />
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m, i) => (
              <text key={m} x={i * 38 + 4} y={78} fontSize="7" fill="rgba(255,255,255,0.2)">{m}</text>
            ))}
          </svg>

          {/* Active users bar chart */}
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", marginTop: 4 }}>Active users right now</div>
          <svg viewBox="0 0 240 28" style={{ width: "100%", marginTop: 4 }}>
            {Array.from({ length: 40 }).map((_, i) => {
              const h = 4 + Math.abs(Math.sin(i * 0.7)) * 20;
              return <rect key={i} x={i * 6} y={28 - h} width={4} height={h} rx={1} fill={i > 28 ? "rgba(61,255,143,0.6)" : "rgba(255,255,255,0.1)"} />;
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
