import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export interface FeatureData {
  number: string;
  title: string;
  description: string;
  widget: ReactNode;
}

interface FeatureCardProps {
  feature: FeatureData;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="
      grid grid-cols-[50%_50%]
      h-[450px]
      border-2 border-[#4B4B4B]
      rounded-[10px]
      bg-[linear-gradient(253.41deg,#323232_38.52%,#080808_99.15%)]
      overflow-hidden
      relative
      cursor-default
      items-stretch
      transition-all duration-700 ease-out
      "
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-start px-10 gap-6">

        {/* Number Box */}
        <div
          className="
          flex items-center justify-center
          w-[100px] h-[100px]
          rounded-[10px]
          border border-white/10
          bg-[#000000]
          text-white
          text-[32px]
          font-medium
          "
        >
          {feature.number}
        </div>

        {/* Text */}
        <div className="space-y-6">

          <h3
            className="
            text-[30px]
            font-medium
            text-white
            leading-none
            max-w-[450px]
            "
          >
            {feature.title}
          </h3>

          <p
            className="
            text-[15px]
            text-white/90
            leading-snug
            max-w-[516px]
            "
          >
            {feature.description}
          </p>

        </div>
      </div>

      {/* RIGHT SIDE (Widget) */}
      <div className="flex items-center justify-center">
        {feature.widget}
      </div>

    </div>
  );
}