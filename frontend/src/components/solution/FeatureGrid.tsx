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
          max-width: 1450px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        /* CARD BASE */
        .card {
          position: relative;
          background: linear-gradient(180deg, #0d0f0d, #060807);
          border: 1px solid #222;
          border-radius: 10px;
          padding: 32px;
          overflow: hidden;
          z-index: 2;
        }

        /* IMAGE BASE */
        .card-img {
          position: absolute;
          pointer-events: none;
          z-index: 1;

        }

        /* TOP CARD */

        .large {
  width: 1404px; /* match Figma */
  height: 434px; /* match Figma */
  margin-bottom: 24px;
  padding: 60px; /* more breathing like design */
  background: #1E1E1E;
}

.large-img {
  width: 955px;
  height: 546px;
  position: absolute;
  right: -10px;   /* push outside like Figma */
  bottom: -90px; /* overflow down */
  object-fit: contain;
  z-index: 1;
}



/* CONTENT FIX FOR PERFECT ALIGNMENT */
.large .content {
  max-width: 700px; /* match Figma width */
  margin-top: 80px;
  left:-50px;
}

/* TITLE */
.large h3 {
  font-size: 36.23px;
  font-weight: 500;
  line-height: 1.06; /* 106% */
  letter-spacing: 0;
  color: #ffffff;
  margin-bottom: 15px;
}

/* DESCRIPTION */
.large p {
  font-size: 19.32px;
  font-weight: 400;
  line-height: 1; /* 100% */
  color: #7f7f7f;
  max-width: 596px;
}


/* MIDDLE ROW */

   /* GRID */
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        /* POLICY CARD */

.row .card:first-child {
  width: 688px;              /* fills grid column */
  height: 434px;            /* adjusted for diagram layout */
 
  padding: 40px;            /* less than large (60px) */
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #1E1E1E;
}

        /* POLICY IMAGE FIX */

        
.policy-img {
  position: absolute;
  width: 594px;          /* control exact size */
  height: 452px;
  left: 45px;          /* push outside like Figma */
  bottom: -170px;         /* slight overflow down */
  object-fit: contain;
  z-index: 1;
}

.row .card:first-child::after {
  content: "";
  position: absolute;

  bottom: -170px;
  left: 50%;
  transform: translateX(-50%);

  width: 823px;
  height: 276px;

  background: radial-gradient(
    circle,
    rgba(154, 255, 46, 0.52) 0%,
    rgba(154, 255, 46, 0.25) 50%,
    rgba(154, 255, 46, 0.1) 70%,
    transparent 75%
  );

  filter: blur(130px);
  z-index: 0;
  pointer-events: none;
}

        /* TARGET POLICY CARD (middle left) */
        
.row .card:first-child .content {
  max-width: 621px; /* from Figma */
  margin-top: 0px;
  left: -30px; /* slight left shift for better alignment with diagram */
}

/* TITLE */
.row .card:first-child h3 {
  font-size: 36.23px;
  font-weight: 500;
  line-height: 1.06;
  color: #ffffff;
  margin-bottom: 15px;
}

/* DESCRIPTION */
.row .card:first-child p {
  font-size: 19.32px;
  font-weight: 400;
  line-height: 1.06;
  color: #7f7f7f;
  max-width: 460px;
}



        /* GRAPH CARD */


        /* GRAPH CARD SAME AS POLICY */
.row .card:nth-child(2) {
  width: 688px;
  height: 434px;
  padding: 40px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #1E1E1E;
}

  .graph-img {
          left: 5px;
          top: 5px;
          width: 100%;
        }

/* TARGET GRAPH CARD (middle right) */

.row .card:nth-child(2) .content {
  max-width: 621px; /* same as policy */
  margin-top: 0px;
  left: -30px; /* same alignment */
}

/* TITLE */
.row .card:nth-child(2) h3 {
  font-family: "Inter Display", sans-serif;
  font-size: 36.23px;
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: 0;
  color: #ffffff;

  width: 621px;           /* match Figma width */
  white-space: nowrap;    /* force single line */
  overflow: hidden;
  text-overflow: ellipsis;
}

/* DESCRIPTION */

.row .card:nth-child(2) p {
  font-family: "Inter Display", sans-serif;
  font-size: 19.32px;
  font-weight: 400;
  line-height: 1; /* FIX: was 1.06 */
  letter-spacing: 0;
  color: #7f7f7f;

  max-width: 481px; /* match Figma */
}



      
/* BOTTOM ROW */

        .row-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* WIDE CARD */

.wide {
  height: 434px;
  width: 1004px; /* match Figma */
  padding: 40px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #1E1E1E;
}

    .map-img {
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  object-fit: contain;
  opacity: 0.9;
}

.wide .content {
  max-width: 621px;
  position: relative;
  left: -30px;
  margin-top: 200px;
}

.wide h3 {
  font-size: 36.23px;
  font-weight: 500;
  line-height: 1.06;
  color: #ffffff;
  margin-bottom: 15px;
}

.wide p {
  font-size: 19.32px;
  font-weight: 400;
  line-height: 1.06;
  color: #7f7f7f;
  max-width: 480px;
}



        /* AUDIT */
        .small {
  height: 434px;
  width: 373px; /* match Figma */
  padding: 40px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #1E1E1E;
}

.audit-img {
  position: absolute;
  width: 322px;
  height: 322px;
  right: -10px;   /* slight push outside */
  bottom: -60px;  /* slight overflow */
  object-fit: contain;
  opacity: 0.9;
}

.small .content {
  max-width: 300px;
  height:76px;
  position: relative;
  left: -30px;
  margin-top: -30px;
}
.small h3 {
  font-size: 36.23px;
  font-weight: 500;
  line-height: 1.06;
  color: #ffffff;
  margin-bottom: 15px;
}

.small p {
  font-family: "Inter Display", sans-serif;
  font-size: 19.32px;
  font-weight: 400;
  line-height: 1.06;           /* 106% */
  letter-spacing: 0;
  color: #7F7F7F;
  max-width: 286px;         /* ✅ exact from Figma */
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
