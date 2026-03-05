import { useMemo, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

type CardKey = "email" | "phone" | "location";

type Info = {
  key: CardKey;
  icon: string;
  title: string;
  value: string;
};

function InfoCard({
  icon,
  title,
  value,
  active,
  onClick,
}: {
  icon: string;
  title: string;
  value: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-[14px] rounded-[12px] border w-full text-left transition
      ${
        active
          ? "bg-[#9BFF1C]/10 border-[#9BFF1C]/40 shadow-[0_0_25px_rgba(155,255,28,0.25)]"
          : "bg-white/[0.04] border-white/[0.09]"
      }`}
    >
      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center bg-black/60 border border-white/[0.12] text-[18px] text-white">
        {icon}
      </div>

      <div>
        <div className="text-[12px] text-white/45">{title}</div>
        <div className="text-[13.5px] text-white/85">{value}</div>
      </div>
    </button>
  );
}

export default function Contact() {
  const [activeCard, setActiveCard] = useState<CardKey>("phone");
  const navigate = useNavigate();
  const cards: Info[] = useMemo(
    () => [
      { key: "email", icon: "✉", title: "Email", value: "finsentsis@gmail.com" },
      { key: "phone", icon: "☎", title: "Phone", value: "+91 9322872245" },
      { key: "location", icon: "⌖", title: "Location", value: "Hyderabad, India" },
    ],
    []
  );

  const hintText =
    activeCard === "email"
      ? "Ask us anything. We’ll reply by email."
      : activeCard === "phone"
      ? "Leave your number/message. We can call you back."
      : "Ask about office location, directions, or visits.";

  return (
    <div className="page min-h-screen relative overflow-hidden bg-[#07080a] text-white">

      <main className="relative z-10 max-w-[1080px] mx-auto px-[22px] pt-[40px] pb-[60px]">

        {/* CONTACT SECTION */}

        <section>

          <div className="text-center mb-[28px]">

            <h1 className="text-[42px] tracking-[-1px] font-semibold mb-[10px]">
              Get in Touch with us
            </h1>

            <p className="max-w-[650px] mx-auto text-[14px] text-white/60 leading-[1.6]">
              Have questions about Finsentsis? Our team is here to help.
              Reach out and we’ll get back to you as soon as possible.
            </p>

          </div>

          <div className="grid md:grid-cols-[360px_1fr] gap-[20px]">

            {/* LEFT CONTACT CARDS */}

            <div className="flex flex-col gap-[20px]">

              {cards.map((c) => (
                <InfoCard
                  key={c.key}
                  icon={c.icon}
                  title={c.title}
                  value={c.value}
                  active={activeCard === c.key}
                  onClick={() => setActiveCard(c.key)}
                />
              ))}

            </div>

            {/* CONTACT FORM */}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent (demo) ✅");
              }}
              className="p-[20px] rounded-[12px]
              bg-black/[0.2] "
            >

              <div className="mb-[12px] text-white/55 text-[12px]">
                {hintText}
              </div>

              <div className="flex flex-col gap-[16px]">

                <label className="flex flex-col gap-[8px]">
                  <span className="text-[12px] text-white/45">Name</span>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="bg-black/[0.55] border border-white/[0.10] rounded-[12px]
                    p-[12px] text-white outline-none transition
                    focus:border-[#9BFF1C] focus:ring-2 focus:ring-[#9BFF1C]/20"
                  />
                </label>

                <label className="flex flex-col gap-[8px]">
                  <span className="text-[12px] text-white/45">Email</span>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-black/[0.55] border border-white/[0.10] rounded-[12px]
                    p-[12px] text-white outline-none transition
                    focus:border-[#9BFF1C] focus:ring-2 focus:ring-[#9BFF1C]/20"
                  />
                </label>

                <label className="flex flex-col gap-[8px]">
                  <span className="text-[12px] text-white/45">Message</span>

                  <textarea
                    rows={5}
                    placeholder="Type your message"
                    required
                    className="bg-black/[0.55] border border-white/[0.10] rounded-[12px]
                    p-[12px] text-white outline-none transition
                    focus:border-[#9BFF1C] focus:ring-2 focus:ring-[#9BFF1C]/20"
                  />
                </label>

                <button
                  className="w-full py-[12px] rounded-[12px] bg-[#9BFF1C]
                  text-[#081008] font-bold
                  shadow-[0_10px_40px_rgba(155,255,28,0.35)]
                  hover:scale-[1.02] transition"
                >
                  Send your message
                </button>

              </div>

            </form>

          </div>
        </section>

        {/* BUILD FUTURE SECTION */}

        <section className="flex justify-center mt-[60px]">

          <div
    className="w-full max-w-[760px] text-center
    px-[36px] py-[50px]"
  >

            <h2 className="text-[68px] leading-[0.9] tracking-[-2px] font-extrabold mb-[16px]">
              Let's Build <br />
              the Future <br />
              Together
            </h2>

            <p className="max-w-[640px] mx-auto text-[14px] text-white/60 leading-[1.7] mb-[26px]">
              Let’s build the future of intelligent compliance together.
              Explore what we do and how we can help.
            </p>

            <div className="flex justify-center gap-[14px] flex-wrap">

              <button
                className="h-[48px] px-[24px] rounded-full bg-[#9BFF1C]
                text-[#071007] font-bold flex items-center gap-[8px]
                shadow-[0_14px_40px_rgba(155,255,28,0.35)]
                hover:scale-[1.03] transition"
              >
                Start a free trial
                <HiArrowUpRight size={18} />
              </button>

              <button onClick={() => navigate("/Requestademo")}
                className="h-[48px] px-[24px] rounded-full
                bg-white/[0.06] border border-white/[0.14]
                text-white/80 flex items-center gap-[8px]
                hover:bg-white/[0.08] transition"
              >
                Schedule Demo
                <HiArrowUpRight size={18} />
              </button>

            </div>

          </div>

        </section>

      </main>

      {/* BACKGROUND LIGHTING */}

      <style>{`

.page::before{
  content:"";
  position:absolute;
  inset:-150px;
  z-index:0;
  pointer-events:none;

  background:

  radial-gradient(
    900px 450px at 50% -10%,
    rgba(255,255,255,0.18),
    rgba(255,255,255,0.05) 40%,
    transparent 70%
  ),

  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%),
  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%),
  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%),
  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%),
  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%),
  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%),
  linear-gradient(130deg, transparent 48%, rgba(255,255,255,0.16) 50%, transparent 52%);

  background-size:
    100% 100%,
    80% 120%,80% 120%,80% 120%,80% 120%,80% 120%,80% 120%,80% 120%;

  background-position:
    center,
    10% 0,
    25% 0,
    40% 0,
    55% 0,
    70% 0,
    85% 0,
    100% 0;

  background-repeat:no-repeat;

  filter: blur(95px);

  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 45%,
    rgba(0,0,0,0.7) 55%,
    transparent 65%
  );
}


.page::after{
  content:"";
  position:absolute;
  inset:0;
  z-index:0;
  pointer-events:none;

  background:

  

  

  radial-gradient(
    900px 700px at 50% 10%,
    transparent 30%,
    rgba(0,0,0,0.75) 90%
  );

  filter: blur(90px);
}

`}</style>

    </div>
  );
}