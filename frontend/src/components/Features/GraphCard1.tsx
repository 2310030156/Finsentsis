import React from "react";

import speedometer from "../../assets/features/Speedometer.png";
import gear from "../../assets/features/Gear.png";
import dashboard from "../../assets/features/Dashboard.png";
import riskChart from "../../assets/features/Risk Chart.png";
import auditReports from "../../assets/features/Audit Reports.png";
import map from "../../assets/features/Map.png";

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "radial-gradient(ellipse at 50% 50%, #111 0%, #060606 100%)",
  overflow: "hidden",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

/* ═══════════════════════════════
   Speedometer
═══════════════════════════════ */

export function Speedometer() {
  return (
    <div style={containerStyle}>
      <img src={speedometer} alt="Speedometer" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Gear Widget
═══════════════════════════════ */

export function GearWidget() {
  return (
    <div style={containerStyle}>
      <img src={gear} alt="Gear Widget" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Dashboard
═══════════════════════════════ */

export function DashboardWidget() {
  return (
    <div style={containerStyle}>
      <img src={dashboard} alt="Dashboard" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Risk Chart
═══════════════════════════════ */

export function RiskChart() {
  return (
    <div style={containerStyle}>
      <img src={riskChart} alt="Risk Chart" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Audit Reports
═══════════════════════════════ */

export function AuditReportsWidget() {
  return (
    <div style={containerStyle}>
      <img src={auditReports} alt="Audit Reports" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Map Widget
═══════════════════════════════ */

export function MapWidget() {
  return (
    <div style={containerStyle}>
      <img src={map} alt="Map" style={imgStyle} />
    </div>
  );
}
