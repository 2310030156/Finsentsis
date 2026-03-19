import React from "react";
import PlanFeatureList from "./PlanFeatureList";
import Finsentsis from "../../assets/logos/finsentsis.png";

/**
 * Props for PricingCard component
 */
interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  billingNote?: string;
  buttonText: string;
  features: string[];
  highlighted?: boolean;
}

/**
 * PricingCard
 * Renders a single pricing plan card
 */
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  billingNote,
  buttonText,
  features,

}) => {
  return (
    <div
  className={`relative overflow-hidden rounded-2xl border p-6
    bg-[#1E1E1E] border-[#4B4B4B]
  `}
>
    {/* Green gradient glow */}
<div
  className="
    pointer-events-none
    absolute bottom-[-50%] left-1/2
    h-[70%] w-[160%]
    -translate-x-1/2
    rounded-full
    bg-[radial-gradient(circle_at_center,_#9AFF2E_20%,_rgba(154,255,46,0.6)_45%,_rgba(154,255,46,0.2)_45%,_transparent_70%)]
    blur-3xl
  "
/>
      {/* Top content */}
      <div>
        {/* Logo */}
        <img src={Finsentsis} alt="Finsentsis" className="h-8 w-8 mb-4 " />

        {/* Title */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-400">{description}</p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {billingNote && (
            <p className="mt-1 text-xs text-gray-400">{billingNote}</p>
          )}
        </div>

        {/* CTA Button */}
        <button
          className="mt-6 w-full rounded-lg bg-[#9AFF2E] py-2.5
          text-sm font-medium text-black transition
          hover:bg-[#9AFF2E]"
        >
          {buttonText}
        </button>

        {/* Feature list */}
        <PlanFeatureList features={features} />
      </div>
    </div>
  );
};

export default PricingCard;
