import audit from "../../assets/Solution/Audit.png";
import compliance from "../../assets/Solution/Compliance.png";
import governance from "../../assets/Solution/Governance.png";
import policy from "../../assets/Solution/Policy.png";
import regulatory from "../../assets/Solution/Regulatory.png";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Real-Time Regulatory Interpretation",
    description:
      "AI & NLP technology tracks and analyzes global laws to ensure organizations always stay updated.",
    image: regulatory,
  },
  {
    id: 2,
    title: "Policy-to-Task Conversion",
    description:
      "Convert policies into real-time workflows via automation scripts, reducing human effort.",
    image: policy,
  },
  {
    id: 3,
    title: "Continuous Compliance Monitoring",
    description:
      "Automated monitoring and alerts ensure you never miss a regulatory change or deadline.",
    image: compliance,
  },
  {
    id: 4,
    title: "Multi-Country Governance",
    description:
      "Supports compliance frameworks across multiple countries and industries.",
    image: governance,
  },
  {
    id: 5,
    title: "Audit-Ready Reporting",
    description:
      "Auto-generates compliant, standardized reports for regulators and auditors on demand.",
    image: audit,
  },
];

export default function FeatureGrid() {
  return (
    <>
      <div className="feature-wrapper">

        {/* TOP BIG CARD */}
        <div className="card large">
          <div className="content">
            <h3>{features[0].title}</h3>
            <p>{features[0].description}</p>
          </div>
          <img src={features[0].image} className="card-img large-img" />
        </div>

        {/* MIDDLE */}
        <div className="row">
          <div className="card">
            <div className="content">
              <h3>{features[1].title}</h3>
              <p>{features[1].description}</p>
            </div>
            <img src={features[1].image} className="card-img policy-img" />
          </div>

          <div className="card">
            <div className="content">
              <h3>{features[2].title}</h3>
              <p>{features[2].description}</p>
            </div>
            <img src={features[2].image} className="card-img graph-img" />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="row-bottom">
          <div className="card wide">
            <div className="content">
              <h3>{features[3].title}</h3>
              <p>{features[3].description}</p>
            </div>
            <img src={features[3].image} className="card-img map-img" />
          </div>

          <div className="card small">
            <div className="content">
              <h3>{features[4].title}</h3>
              <p>{features[4].description}</p>
            </div>
            <img src={features[4].image} className="card-img audit-img" />
          </div>
        </div>

      </div>

      <style>{`
        .feature-wrapper {
          max-width: 1404px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        /* CARD BASE */
        .card {
          position: relative;
          background: linear-gradient(180deg, #0d0f0d, #060807);
          border: 1px solid #222;
          border-radius: 20px;
          padding: 32px;
          overflow: hidden;
        }

        /* CONTENT BLOCK (TEXT POSITION FIX) */
        .content {
          position: relative;
          z-index: 2;
          max-width: 420px;
        }

        .card h3 {
          font-size: 20px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 14px;
          color: #777;
          line-height: 1.5;
        }

        /* IMAGE BASE */
        .card-img {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          filter: drop-shadow(0 0 25px #9AFF2E);
        }

        /* TOP CARD */
        .large {
          height: 320px;
          margin-bottom: 24px;
        }

        .large-img {
          right: 60px;
          bottom: -10px;
          width: 420px;
        }

        /* POLICY CARD */
        .policy-img {
          bottom: 0;
          right: 0;
          width: 80%;
        }

        /* GRAPH CARD */
        .graph-img {
          right: -40px;
          bottom: -10px;
          width: 120%;
        }

        /* MAP */
        .map-img {
          bottom: 0;
          right: 0;
          width: 100%;
          opacity: 0.9;
        }

        /* AUDIT */
        .audit-img {
          bottom: 0;
          right: 0;
          width: 110%;
        }

        /* GRID */
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .row-bottom {
          display: grid;
          grid-template-columns: 2.7fr 1fr;
          gap: 24px;
        }

        .wide {
          height: 434px;
        }

        .small {
          height: 434px;
        }

        /* GREEN GLOW BACKGROUND */
        .card::after {
          content: "";
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 350px;
          height: 350px;
          filter: blur(80px);
          z-index: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .row-bottom {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr;
          }

          .large,
          .wide,
          .small {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
