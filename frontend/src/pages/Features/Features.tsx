import { FeatureCard } from "../../components/Features/FeatureCard1";
import type { FeatureData } from "../../components/Features/FeatureCard1";

/* ✅ Import Footer Component */
import Footer from "../../components/Home/Footer";
import Cta from "../../components/Home/Cta";
import Navbar from "../../components/Home/Navbar";

import {
  AIWidget,
  AuditWidget,
  ComplianceWidget,
  CopilotWidget,
  GovernanceWidget,
  MarketplaceWidget,
  PolicyWidget,
  RealEstateWidget,
  RiskWidget,
} from "../../components/Features/GraphCard1";

const features: FeatureData[] = [
  {
    number: "01",
    title: "AI Regulatory Intelligence Layer",
    widget: <AIWidget />,
  },
  {
    number: "02",
    title: "Policy-to-Process Automation Engine",
    widget: <PolicyWidget />,
  },
  {
    number: "03",
    title: "Autonomous Compliance Copilot",
    widget: <CopilotWidget />,
  },
  {
    number: "04",
    title: "Audit-Ready Evidence & Blockchain Trail",
    widget: <AuditWidget />,
  },
  {
    number: "05",
    title: "Global Dashboard & Risk Radar",
    widget: <RiskWidget />, // chart-style visual
  },
  {
    number: "06",
    title: "Consulting & Expert Marketplace",
    widget: <MarketplaceWidget />,
  },
  {
    number: "07",
    title: "Legal Governance & Contract Compliance Engine",
    widget: <ComplianceWidget />,
  },
 
  {
    number: "08",
    title: "Real Estate & Asset Compliance Engine",
    widget: <RealEstateWidget />,
  },
  
  {
    number: "09",
    title: "Workforce & Immigration Compliance Engine",
    widget: <GovernanceWidget />, // gear-style image
  },
];

export default function Features() {
  return (
    <div className="page">

      <Navbar/>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading mt-[80px] mb-[46px]">
            Intelligent Features That Power Autonomy
          </h1>

          <p className="hero-sub">
            Finsentsis OS combines AI-powered intelligence, real-time monitoring,
            and autonomous automation to deliver comprehensive compliance
            management across all regulatory domains.
          </p>
        </div>

        <div className="hero-bg-text">
          <span>Core Features</span>
        </div>
      </section>


      {/* SUN RAYS */}
      <div className="sun-rays">
        <span className="ray ray1"></span>
        <span className="ray ray2"></span>
        <span className="ray ray3"></span>
        <span className="ray ray4"></span>
      </div>

      {/* FEATURES */}
      <section className="features-section">
        {features.map((f, i) => (
          <FeatureCard key={f.number} feature={f} index={i} />
        ))}
      </section>

    
    <Cta />

      {/* ✅ Footer Component */}
      <Footer />


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #0d0d0d;
          color: #e8e8e8;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

      
        

        /* ── Hero Section ── */
       .hero-section {
  position: relative;
  padding: 100px 24px 0;
  overflow: hidden;

  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(60,60,60,0.45) 0%,
      #0d0d0d 60%
    ),
    linear-gradient(
      120deg,
      rgba(255,255,255,0.12) 0%,
      rgba(255,255,255,0.05) 15%,
      transparent 40%
    ),
    linear-gradient(
      110deg,
      rgba(255,255,255,0.08) 0%,
      transparent 35%
    );

  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
}
    
        .hero-content {
          position: relative; z-index: 2;
          max-width: 761px;
          left: 43.69px;
        }
        .hero-heading {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 55px;
          font-weight: 500;
          font-style: normal;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: 0;
          width: 761px;
          max-width: 100%;
          margin-bottom: 46px;
        }
        .hero-sub {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
          font-style: normal;
          line-height: 1.5;
          letter-spacing: 0;
          color: #999999;
          width: 779px;
          max-width: 100%;
        }

      /* Sun Rays Effect */
          .sun-rays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}  
.ray {
  position: absolute;
  top: -200px;

  width: 100px;
  height: 1000px;

  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.35),
    rgba(255,255,255,0.18),
    rgba(255,255,255,0.05),
    transparent
  );

  filter: blur(60px);
  transform-origin: top;

  left: var(--left);
  transform: rotate(var(--angle));
  opacity: var(--opacity, 1);

  mix-blend-mode: screen; 
}

/* Position and rotate rays to fan out across the hero section */


.ray1 { --left: 40%; --angle: 30deg; --opacity: 1.0; }
.ray2 { --left: 70%; --angle: 30deg;  --opacity: 1.0; }
.ray3 { --left: 100%; --angle: 30deg; --opacity: 1.0; }
.ray4 { --left: 10%; --angle: 30deg; --opacity: 1.0; }

  .sun-rays {
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.9) 30%,
    rgba(0,0,0,0.5) 60%,
    transparent 90%
  );
}


       /* Large "Core Features" text */
.hero-bg-text {
  position: relative;
  margin-top: 10px;
  margin-bottom: -75px; /* overlap cards slightly */
  z-index: 1;
  pointer-events: none;
  user-select: none;
  overflow: visible;
  width: 100%;
  height: 260px;
}

.hero-bg-text span {
  font-family: 'Inter', sans-serif;
  font-size: clamp(80px, 16vw, 250px);
  font-weight: 500;
  letter-spacing: -0.07em;
  line-height: 1;
  white-space: nowrap;
  display: block;
  text-align: center;
  mix-blend-mode: lighten;
  

  /* white → transparent fade */
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255,255,255,0.9) 30%,
    rgba(255,255,255,0.4) 50%,
    rgba(255,255,255,0) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* glow */
  text-shadow:
    0 0 25px rgba(255,255,255,0.35),
    0 0 45px rgba(255,255,255,0.2);
}

        /* ── Feature Cards Grid ── */
        .features-section {
          padding: 0 37px 0;
          display: flex; flex-direction: column; gap: 20px;
          position: relative;   /* 🔥 ADD */
  z-index: 2;           /* 🔥 ADD */
}
        }
          
       .feature-card {
  position: relative;
  overflow: hidden;

  height: 552px;

  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.18);

  /* exact matte gradient like image */
  background: linear-gradient(
    90deg,
    #050505 0%,
    #111111 20%,
    #1a1a1a 40%,
    #2a2a2a 65%,
    #3a3a3a 100%
  );

  transition: border-color 0.3s ease;
}
        .feature-card--split {
          display: grid;
          grid-template-columns: 50% 50%;
          align-items: stretch;
          gap: 0;
        }
        .feature-card:hover { border-color: rgba(61,255,143,0.4); }

        /* Left side */
        .feature-card__left {
          position: relative; z-index: 1;
          padding: 184px 36px 36px 66px;
          display: flex; flex-direction: column;
          justify-content: space-between;
          background: transparent;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .feature-card__left-top {
          display: flex; flex-direction: column;
        }
        .feature-card__left-bottom {
          display: flex; flex-direction: column; gap: 16px;
        }

        /* Right side — widget bleeds fully */
        .feature-card__right {
          position: relative; z-index: 1;
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          padding: 0;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border: 3px solid #000;
          border-left: none;
        }

   

        /* Number box — 109x109px, border-radius 10px */
        .feature-number-box {
          display: inline-flex; align-items: center; justify-content: center;
          width: 109px; height: 109px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
          background: #1a1a1a;
          font-family: 'Inter Display', 'Inter', sans-serif; font-size: 32px; font-weight: 500;
          color: #fff; letter-spacing: 0;
          align-self: flex-start;
        }
        .feature-title {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 500;
          font-style: normal;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: 0;
          width: 450px;
          max-width: 100%;
          margin-bottom: 12px;
        }
        .feature-desc {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 400;
          font-style: normal;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: 0;
          width: 516px;
          max-width: 100%;
        }
          .footer {
  position: relative;
  z-index: 2;
}





       
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .nav-center { display: none; }
        }
        @media (max-width: 640px) {
          .feature-card--split { grid-template-columns: 1fr; }
          .feature-card { height: auto; }
          .feature-card__left { padding: 20px 18px; }
          .feature-card__right { min-height: 260px; }
          nav { padding: 0 16px; }
          .nav-center { display: none; }
          .hero-section { padding: 90px 16px 0; }
          .features-section { padding: 0 16px 60px; gap: 12px; }
          .footer { padding: 40px 16px 24px; }
          .footer-top { grid-template-columns: 1fr; gap: 28px; }
          .hero-heading { font-size: 32px; }
          .hero-sub { font-size: 14px; }
        }

  

  
`}</style>


    </div>
  );
}
