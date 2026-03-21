import React from "react";

export interface TeamMember {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  linkedIn?: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const imageRight = index % 2 !== 0;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1360px",
        margin: "0 auto 32px",

        display: "flex",
        flexDirection: imageRight ? "row-reverse" : "row",
        gap: "100px",

        /* ✅ Figma background */
        background: "#1E1E1E",
        backdropFilter: "blur(10px)",

        borderRadius: "15px",
        padding: "40px",

        border: "1px solid rgba(255,255,255,0.06)",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* IMAGE + NAME CARD */}
      <div
  style={{
    width: "426px",
    flexShrink: 0,
  }}
>
  {/* IMAGE */}
  <img
    src={member.image}
    alt={member.name}
    style={{
      width: "426px",
      height: "426px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "16px",
    }}
  />

  {/* INFO BOX */}
  <div
    style={{
      width: "426px",
      height: "202px",
      background: "#161616",
      borderRadius: "10px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <h3
      style={{
        fontSize: "18px",
        fontWeight: 600,
        marginBottom: "6px",
      }}
    >
      {member.name}
    </h3>

    <p
      style={{
        fontSize: "14px",
        color: "rgba(255,255,255,0.6)",
        marginBottom: "8px",
      }}
    >
      {member.title}
    </p>

    {member.subtitle && (
      <p
        style={{
          fontSize: "14px",
          color: "#9AFF2E",
        }}
      >
        {member.subtitle}
      </p>
    )}
  </div>
</div>
      {/* DESCRIPTION */}
      <div
  style={{
    flex: 1,
    minWidth: "280px",
    marginTop: "20px",   // 🔥 small top offset (matches Figma)
  }}
>
        <p
          style={{
            fontSize: "36px",
            lineHeight: "1.5",
            color: "#ffffff",
            maxWidth: "694px",
            fontWeight: 400,
          }}
        >
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
