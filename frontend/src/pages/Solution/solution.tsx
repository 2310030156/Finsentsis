import ProblemCards from "../../components/solution/ProblemCard";
import FeatureGrid from "../../components/solution/FeatureGrid";
import glowLine from "../../assets/glowline.png";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";

export default function SolutionPage() {
  return (
    <div className="page">

      <Navbar />

      {/* GLOBAL TOP RIGHT GLOW */}
<img src={glowLine} className="page-glow glow-top-right glow-layer1" />
<img src={glowLine} className="page-glow glow-top-right glow-layer2" />
<img src={glowLine} className="page-glow glow-top-right glow-layer3" />
<img src={glowLine} className="page-glow glow-top-right glow-layer4" />
<img src={glowLine} className="page-glow glow-top-right glow-layer5" />

      {/* HERO */}
      <section className="hero-section">
        <h1 className="hero-heading">
          The Problem We Solve
        </h1>

        <p className="hero-sub">
          Enterprises face unprecedented compliance challenges. Complex, ever-changing regulatory landscapes across multiple countries, high costs of compliance and manual audits, lack of unified visibility and data integration, and the constant risk of penalties due to fragmented systems and human oversight.
        </p>

        {/* PROBLEMS */}
        <div className="problems-section">
          <div className="container">
            <ProblemCards />
          </div>
        </div>

        {/* SOLUTION */}
        <div className="solution-section">
          <div className="solution-pill">
    Enterprise-grade security · Encryption at rest & in transit · Role-based access controls
  </div>
          <h2 className="solution-heading">
            Our AI-Driven Solution
          </h2>

          <p className="solution-sub">
            Finsentsis OS introduces an autonomous compliance brain that continuously learns, monitors, and updates global policies — transforming regulations into automated actions.
          </p>
        </div>


        <FeatureGrid />

        {/* CTA (INLINE) */}
<div className="cta-section">
  

        {/* LEFT beams */}

        <img src={glowLine} className="cta-glow-line glow-left glow-layer1" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer2" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer3" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer4" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer5" />

        {/* RIGHT beams */}
        
        <img src={glowLine} className="cta-glow-line glow-right glow-layer1" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer2" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer3" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer4" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer5" />


  <div className="cta-content">
    <h2 className="cta-heading">
      Ready to <br />
      Transform Your <br />
      Compliance?
    </h2>
  </div>

  <p className="cta-sub">
    Join forward-thinking enterprises that are already using Finsentsis OS
    to simplify compliance and reduce risk.
  </p>

  <div className="cta-buttons">
    <a href="#" className="btn-primary">Start free trial ↗</a>
    <a href="/Requestademo" className="btn-secondary">
      Schedule Demo ↗
    </a>
  </div>

</div>
        
      </section>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.page {
  background: #000000;
  color: #e8e8e8;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;

  position: relative;   /* ✅ REQUIRED */
  overflow: hidden;     /* ✅ prevents glow scroll issue */
}



        /* HERO SECTION (same style language as Features page) */
        .hero-section {
  position: relative;
  padding-top: 100px; /* ✅ ONLY top padding */
}

        .hero-heading {
          font-size: 55px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.05;
          max-width: 760px;
          margin: 80px auto 24px;
          text-align: center;
        }

        .hero-sub {
  font-size: 18px;                 /* slightly bigger */
  color: #FFFFFF;                  /* softer white like pic 1 */
  line-height: 1.8;                /* 🔥 more breathing space */
  max-width: 900px;                /* wider → better wrapping */
  margin: 40px auto 60px;
  text-align: center;
}

        /* PROBLEM SECTION */
        .problems-section {
          padding: 40px 0 80px;
        }

        .container {
          max-width: 1404px;
          margin: 0 auto;
        }

        /* SOLUTION SECTION */
        .solution-section {
          text-align: center;
          padding: 80px 20px 100px;
        }
          .solution-pill {
  display: inline-block;

  font-size: 16px;
  font-weight: 400;
  color: #EAEAEA;

  padding: 8px 18px;
  border-radius: 999px;

  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.03);

  margin-bottom: 20px;

  backdrop-filter: blur(6px);
}

        .solution-heading {
          font-size: 40px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .solution-sub {
          font-size: 16px;
          color: #999999;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 36px;
          }

          .hero-sub {
            font-size: 14px;
          }

          .solution-heading {
            font-size: 28px;
          }
        }


        /* ========================= */
/* GLOBAL PAGE GLOW */
/* ========================= */

.page-glow {
  position: absolute;   /* ✅ KEY FIX */
  top: 0;
  right: 0;

  width: 1400px;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0.7;

  z-index: 0;

  transform: scaleX(-1);
}
  

/* reuse your layers */

.page-glow.glow-layer1 { filter: blur(6px); opacity: 1; }
.page-glow.glow-layer2 { filter: blur(380px); opacity: 0.55; }
.page-glow.glow-layer3 { filter: blur(320px); opacity: 0.35; }
.page-glow.glow-layer4 { filter: blur(160px); opacity: 0.25; }
.page-glow.glow-layer5 { filter: blur(200px); opacity: 0.15; }



/* top-right positioning */

.glow-top-right.glow-layer1 { top: -150px; right: -420px; transform:rotate(-68deg) scaleX(-1);}
.glow-top-right.glow-layer2 { top: -160px; right: -380px; transform:rotate(-68deg) scaleX(-1);}
.glow-top-right.glow-layer3 { top: -200px; right: -340px; transform:rotate(-68deg) scaleX(-1);}
.glow-top-right.glow-layer4 { top: -240px; right: -300px; transform:rotate(-68deg) scaleX(-1);}
.glow-top-right.glow-layer5 { top: -280px; right: -260px; transform:rotate(-68deg) scaleX(-1);}




       /* ========================= */
/* CTA SECTION (FIXED) */
/* ========================= */

.cta-section {
  position: relative;
  overflow: hidden;
  padding: 140px 40px 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}

/* REMOVE BAD OFFSET */
.cta-content {
  margin-top: 0; /* ✅ FIX */
  position: relative;
  z-index: 2;
}

/* ========================= */
/* GLOW IMAGES */
/* ========================= */

.cta-glow-line {
  position: absolute;
  width: 925px;

  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0.75;

  transform: scaleX(1.3);

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 75%,
    transparent 100%
  );
}

/* DEPTH LAYERS */
.glow-layer1 { filter: blur(6px); opacity: 1; }
.glow-layer2 { filter: blur(280px); opacity: 0.55; }
.glow-layer3 { filter: blur(320px); opacity: 0.35; }
.glow-layer4 { filter: blur(160px); opacity: 0.25; }
.glow-layer5 { filter: blur(200px); opacity: 0.15; }

/* ========================= */
/* LEFT GLOW (FIXED) */
/* ========================= */

.glow-left.glow-layer1 { top: 10%; left: -380px; transform: rotate(-2deg); }
.glow-left.glow-layer2 { top: 32%; left: -340px; transform: rotate(-2deg); }
.glow-left.glow-layer3 { top: 34%; left: -300px; transform: rotate(-2deg); }
.glow-left.glow-layer4 { top: 36%; left: -260px; transform: rotate(-2deg); }
.glow-left.glow-layer5 { top: 38%; left: -220px; transform: rotate(-2deg); }

/* ========================= */
/* RIGHT GLOW (FIXED) */
/* ========================= */

.glow-right.glow-layer1 { bottom:-120px; right:-380px; transform:rotate(-82deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-150px; right:-340px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-180px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-210px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-240px; right:-220px; transform:rotate(22deg) scaleX(-1); }


/* ========================= */
/* RADIAL GLOW */
/* ========================= */

.cta-section::after {
  content: "";
  position: absolute;

  right: -250px;
  bottom: -250px;

  width: 520px;
  height: 520px;

  background: radial-gradient(
    circle,
    rgba(154,255,46,0.35) 0%,
    rgba(154,255,46,0.15) 40%,
    transparent 75%
  );

  filter: blur(140px);
  pointer-events: none;
}

/* ========================= */
/* TEXT */
/* ========================= */

.cta-heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(44px, 8vw, 100px);
  font-weight: 700;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.cta-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  line-height: 1.65;
  max-width: 340px;
  margin: 0 auto 40px;
}

/* ========================= */
/* BUTTONS */
/* ========================= */

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 12px 24px;
  border-radius: 999px;
  background: #9AFF2E;
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.btn-secondary {
  padding: 12px 24px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

      `}</style>
    </div>
  );
}
