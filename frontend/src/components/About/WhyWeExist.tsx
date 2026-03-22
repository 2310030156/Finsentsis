

const WhyWeExist = () => {
  return (
    <>
      <section className="why">
        {/* BASE BACKGROUND */}
        <div className="why__bg" />


        {/* GREEN GLOW */}
        <div className="why__glow" />


        {/* DARK VIGNETTE */}
        <div className="why__vignette" />

        {/* CONTENT */}
        <div className="why__content">
          <h2 className="why__title">Why We Exist</h2>

          <div className="why__text">
            <p>
              The compliance landscape is broken. Organizations spend billions annually on manual
              processes, fragmented tools, and reactive compliance strategies. Regulatory bodies
              continue to increase requirements, yet most enterprises lack real-time visibility into
              their compliance posture. We saw an opportunity to fundamentally change this. By
              combining AI, data intelligence, and automation, Finsentsis OS transforms compliance
              from a cost center into a competitive advantage. Our platform doesn&apos;t just help you
              stay compliant—it helps you stay ahead of regulatory changes, optimize your compliance
              spend, and build trust with regulators and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* STYLE */}
      <style>{`
        .why {
          position: relative;
          width: 100%;
          min-height: 720px;
          background: #000;
          overflow: hidden;
          color: #fff;
        }

        /* BASE BACKGROUND */
        .why__bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #020302 0%, #000 100%);
          z-index: 0;
        }

        /* 🔥 IMAGE LAYER */
        .why__image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          mix-blend-mode: multiply;
          opacity: 0.95;

          z-index: 1;
        }

        /* 🔥 GREEN GLOW */
        .why__glow {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 300px;
          background: radial-gradient(
            ellipse at center,
            rgba(154,255,46,0.9) 0%,
            rgba(154,255,46,0.6) 30%,
            rgba(154,255,46,0.25) 50%,
            transparent 75%
          );
          filter: blur(80px);
          z-index: 2;
        }

     
        /* DARK CENTER */
        .why__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.85) 100%
          );
          z-index: 3;
        }

        /* CONTENT */
        .why__content {
          position: relative;
          z-index: 4;
          max-width: 1200px;
          margin: 0 auto;
          padding: 140px 20px 120px;
          text-align: center;
          font-family: "Inter", sans-serif;
        }

        .why__title {
          font-size: 42px;
          font-weight: 500;
          margin-bottom: 40px;
        }

      /* TEXT WRAPPER */
.why__text {
  max-width: 1119px; /* ✅ exact Figma width */
  margin: 0 auto;
}

/* PARAGRAPH */
.why__text p {
  font-size: 26px;
  line-height: 1.7;
  letter-spacing: -0.01em;
  color: #979797;
  text-align: center;

  margin: 0; /* remove default spacing */
}

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .why__title {
            font-size: 32px;
          }

          
        }
      `}</style>
    </>
  );
};

export default WhyWeExist;