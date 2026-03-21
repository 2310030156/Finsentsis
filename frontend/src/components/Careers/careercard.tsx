const Stayconnected = () => {
  return (
    <section className="stay-section">

      <div className="stay-card">

        {/* LEFT */}
        <div className="stay-left">
          <h2 className="stay-title">Stay Connected</h2>

          <p className="stay-desc">
            Interested in joining our team? Send us your resume and a note
            about why you'd like to be part of the Finsentsis journey.
          </p>
        </div>

        {/* RIGHT */}
        <div className="stay-right">

          <p className="stay-note">
            We'll keep your information on file and reach out when relevant
            positions become available.
          </p>

          <div className="stay-email-wrapper">

            <div className="stay-email-box">

              {/* EMAIL LEFT */}
              <div className="stay-email-left">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-[#9AFF2E] mail-glow"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>


                <span className="stay-email-text">
                  finsentsis@gmail.com
                </span>
              </div>

              {/* BUTTON */}
              <button className="stay-btn">
                Send mail
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* CSS */}
      <style>{`

/* SECTION */
.stay-section {
  position: relative;
  padding: 80px 24px;

  color: white;
}

/* MAIN CARD */
.stay-card {
  max-width: 1425px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 718px;
  gap: 48px;


  padding: 48px 40px;
  border-radius: 10px;
  border: 1px solid #3b3b3b;

  background: #1e1e1e94;
  backdrop-filter: blur(116px);
}

/* LEFT */
.stay-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;          /* IMPORTANT */
}

/* tighten spacing like design */
.stay-title {
  font-size: 64px;
  font-weight: 500;
  line-height: 1.1;      /* tighter */
  margin-bottom: 16px;   /* reduced gap */
}

.stay-desc {
  color: #999999;
  font-size: 20px;
  line-height: 1.5;

  width: 100%;
  max-width: none;      /* ✅ remove restriction */
  text-align: left;
}

/* RIGHT CARD */
.stay-right {
  width: 718px;
  height: 230px;

  background: #111111;
  border: 1px solid #3B3B3B;
  border-radius: 10px;

  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stay-note {
  color: #999;
  font-size: 20px;
  line-height: 1.38;

  max-width: none;     /* ✅ remove restriction */
  width: 80%;         /* ✅ take full width */
  text-align: left;    /* ✅ ensure left alignment */
}

/* EMAIL WRAPPER */
.stay-email-wrapper {
  display: flex;
  justify-content: center;
}

/* GLOW EFFECT FOR MAIL ICON */
.mail-glow {
  color: #9aff2e;

  /* soft glow */
  filter: drop-shadow(0 0 0px #9aff2e)
          drop-shadow(0 0 8px rgba(154, 255, 46, 0.3))
          drop-shadow(0 0 10px rgba(154, 255, 46, 0.2));
}

/* OPTIONAL: subtle fade mask (like your lines) */
.mail-glow {
  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0,0,0,1) 60%,
    rgba(0,0,0,0.4) 80%,
    transparent 100%
  );
}

/* EMAIL BOX */
.stay-email-box {
  width: 630px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  border-radius: 8px;
  border: 1px solid #383838;

  background: #161616;
}

/* LEFT SIDE */
.stay-email-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stay-icon {
  width: 20px;
  height: 20px;
  color: #9aff2e;
}

.stay-email-text {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0.5px;
}

/* BUTTON */
.stay-btn {
  padding: 8px 16px;
  font-size: 14px;

  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.1);

  background: rgba(255,255,255,0.1);
  color: white;

  transition: 0.2s ease;
}

.stay-btn:hover {
  background: rgba(255,255,255,0.2);
}

      `}</style>

    </section>
  );
};

export default Stayconnected;