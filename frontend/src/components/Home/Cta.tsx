import glowLine from "../../assets/glowline.png";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <section className="cta-section">

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
          <Link to="/Requestademo" className="btn-secondary">
  Schedule Demo ↗
</Link>
        </div>

      </section>

      <style>{`

.cta-section{
  position:relative;
  overflow:visible;
  z-index: 0;
  
  padding:40px 40px 160px;
  text-align:center;
  background:#0d0d0d;
}

.cta-content{
  margin-top:180px;
  position:relative;
  z-index:1;
}

/* glow images */
.cta-glow-line{
  position:absolute;
  width:925px;
  z-index:0;

  pointer-events:none;
  mix-blend-mode:screen;
  opacity:0.75;

  transform:scaleX(1.3);

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 75%,
    transparent 100%
  );
}

/* layer depth */

.glow-layer1{
  filter: blur(6px);
  opacity:1;
}

.glow-layer2{
  filter: blur(280px);
  opacity:0.55;
}

.glow-layer3{
  filter: blur(320px);
  opacity:0.35;
}

.glow-layer4{
  filter: blur(160px);
  opacity:0.25;
}

.glow-layer5{
  filter: blur(200px);
  opacity:0.15;
}


/* LEFT beams */

.glow-left.glow-layer1 { top:-120px; left:-380px; transform:rotate(-2deg); }
.glow-left.glow-layer2 { top:-150px; left:-340px; transform:rotate(-2deg); }
.glow-left.glow-layer3 { top:-180px; left:-300px; transform:rotate(-2deg); }
.glow-left.glow-layer4 { top:-210px; left:-260px; transform:rotate(-2deg); }
.glow-left.glow-layer5 { top:-240px; left:-220px; transform:rotate(-2deg); }


/* RIGHT beams */

.glow-right.glow-layer1 { bottom:-120px; right:-380px; transform:rotate(-82deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-150px; right:-340px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-180px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-210px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-240px; right:-220px; transform:rotate(22deg) scaleX(-1); }



/* gradient overlay to fade out glows at edges */
.cta-section::before{
  content:"";
  position:absolute;
  inset:0;

  

  background:
    linear-gradient(
      to bottom,
      rgba(13,13,13,0) 0%,
      rgba(13,13,13,0.35) 40%,
      rgba(13,13,13,0.75) 70%,
      rgba(13,13,13,1) 100%
    ),
    linear-gradient(
      to right,
      rgba(13,13,13,0) 60%,
      rgba(13,13,13,0.6) 85%,
      rgba(13,13,13,1) 100%
    );

  pointer-events:none;
}

.cta-section::after{
  content:"";
  position:absolute;

  right:-250px;
  bottom:-250px;

  width:520px;
  height:520px;

  background: radial-gradient(
    circle,
    rgba(154,255,46,0.35) 0%,
    rgba(154,255,46,0.15) 40%,
    transparent 75%
  );

  filter: blur(140px);
  pointer-events:none;
}

.glow-soft{
  opacity:0.35;
  filter: blur(60px);
}


.cta-heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(44px, 8vw, 100px);
  font-weight: 700; 
  color: #fff;
  line-height: 1.0; 
  letter-spacing: -0.02em;
  position: relative; 
  z-index: 1; 
  margin-bottom: 24px;
}

.cta-sub {
  font-size: 14px; 
  color: rgba(255,255,255,0.45);
  line-height: 1.65; 
  max-width: 540px;
  margin: 0 auto 40px; 
  position: relative; 
  z-index: 1;
}

.cta-buttons {
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap: 12px; 
  position: relative; 
  z-index: 1; 
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex; 
  align-items: center; 
  gap: 6px;
  padding: 12px 24px; 
  border-radius: 999px;
  background: #9AFF2E; 
  color: #0a0a0a;
  font-family: 'DM Sans', sans-serif; 
  font-size: 14px; 
  font-weight: 600;
  border: none; 
  cursor: pointer; 
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover { 
  opacity: 0.88; 
  transform: translateY(-1px); 
}

.btn-secondary {
  display: inline-flex; 
  align-items: center; 
  gap: 6px;
  padding: 12px 24px; 
  border-radius: 999px;
  background: transparent; 
  color: #fff;
  font-family: 'DM Sans', sans-serif; 
  font-size: 14px; 
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.18); 
  cursor: pointer;
  text-decoration: none; 
  transition: border-color 0.2s, transform 0.2s;
}

.btn-secondary:hover { 
  border-color: rgba(255,255,255,0.4); 
  transform: translateY(-1px); 
}
`}</style>
    </>
  );
}
