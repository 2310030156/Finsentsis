import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import StayConnected from "../../components/Careers/careercard";

import glowLine from "../../assets/glowline.png";

const Careers = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-[170px]">

        {/* RIGHT SIDE GREEN RAYS */}
        <img src={glowLine} className="career-glow glow-right glow-layer1" />
        <img src={glowLine} className="career-glow glow-right glow-layer2" />
        <img src={glowLine} className="career-glow glow-right glow-layer3" />
        <img src={glowLine} className="career-glow glow-right glow-layer4" />
        <img src={glowLine} className="career-glow glow-right glow-layer5" />

        

        {/* CONTENT */}
        <div className="relative z-10 max-w-[930px] mx-auto">

  <h1 className="text-[56px] md:text-[70px] font-medium leading-[0.96] mb-6">
    Join Our Growing Team
  </h1>

  <p className="text-[16px] md:text-[18px] text-white/90 leading-[1.38] max-w-[770px] mx-auto">
    Finsentsis is in its exciting early stages. While we don't have open
    positions right now, we're rapidly growing and will be expanding our
    team soon.
  </p>

</div>

        {/* CARD */}
      <StayConnected />


      </section>

     

      {/* FOOTER */}
      <Footer />

      {/* STYLES */}
      <style>{`

/* BASE GLOW IMAGE */
.career-glow {
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
.glow-layer2 { filter: blur(280px); opacity: 0.15; }
.glow-layer3 { filter: blur(320px); opacity: 0.25; }
.glow-layer4 { filter: blur(160px); opacity: 0.15; }
.glow-layer5 { filter: blur(200px); opacity: 0; }

/* RIGHT */
.glow-right{
width: 1500px
}

.glow-right.glow-layer1 { bottom:-230px; right:-380px; transform:rotate(-60deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-260px; right:-340px; transform:rotate(-62deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-280px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-310px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-340px; right:-220px; transform:rotate(22deg) scaleX(-1); }



      `}</style>

    </div>
  );
};

export default Careers;