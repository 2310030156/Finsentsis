import React from "react";
import TeamGrid from "../../components/Leadership/TeamGrid";
import type { TeamMember } from "../../components/Leadership/TeamCard";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";

import ushodharImg from "../../assets/Leadership/ushodhar.png";
import vidhiImg from "../../assets/leadership/vidhi.png";
import estherImg from "../../assets/leadership/esther.png";
import karishmaImg from "../../assets/leadership/karishma.png";



/* ─── TEAM DATA ───────────────── */

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ushodhar Raju",
    title: "Founder & CEO",
    subtitle: "Leads product vision and strategy",
    description:
      "Leads product vision and enterprise strategy, building AI-powered governance systems that simplify complex regulatory environments. He focuses on scalable architecture, strategic partnerships, and long-term institutional impact.",
    image: ushodharImg,
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Vidhi Vallechha",
    title: "Business Development",
    subtitle: "Drives growth and ecosystem collaborations",
    description:
      "Plays a key role in stakeholder engagement and business development at Finsentsis. With strong communication and relationship-building skills, she supports client acquisition, ecosystem collaborations, and strategic expansion efforts.",
    image: vidhiImg,
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Esther Rosalin Narmeta",
    title: "Head of HR",
    subtitle: "People & Organizational Development",
    description:
      "Leads all HR functions at Finsentsis, overseeing talent acquisition, employee engagement, and organizational structure. Ensures strong internal processes, team alignment, and a performance-driven culture that supports the company’s long-term growth and execution excellence..",
    image: estherImg,
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Karishma Shaik",
    title: "Client Success & Growth",
    subtitle: "Client-Focused Strategy Expert",
    description:
      "Leads client acquisition and business outreach initiatives at Finsentsis. Manages LinkedIn engagement, partnership conversations, and meeting coordination with prospective clients. Plays a key role in expanding market presence and building strong business relationships.",
    image: karishmaImg,
    linkedIn: "https://linkedin.com",
  },
];


  const OurStory: React.FC = () => (
  <section
    style={{
      maxWidth: "760px",
      margin: "0 auto",
      padding: "5rem 1.5rem",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
        fontWeight: 700,
        marginBottom: "1.5rem",
      }}
    >
      Our Story
    </h2>

    <p
      style={{
        color: "rgba(255,255,255,0.65)",
        lineHeight: "1.8",
        marginBottom: "1rem",
      }}
    >
      Finsentsis OS was founded with a mission to make regulatory compliance
      intelligent, autonomous, and global. Traditional compliance processes are
      slow, manual, and fragmented across tools and geographies.
    </p>

    <p
      style={{
        color: "rgba(255,255,255,0.65)",
        lineHeight: "1.8",
      }}
    >
      Our team combines deep compliance expertise with cutting-edge technology
      to deliver solutions that actually work. We’re working with leading
      enterprises to simplify compliance, reduce costs, and minimize risk.
    </p>
  </section>




);


/* ─── PAGE ───────────────── */

const TeamPage: React.FC = () => {
  return (
    
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        color: "#ffffff",
        backgroundColor: "#000",
        position: "relative",
        overflowX: "hidden",
      }}
    >

      <Navbar/>


      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        
        {/* HEADER */}
        <header style={{ textAlign: "center", padding: "6rem 1.5rem 3rem" }}>
          <p
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9AFF2E",
              marginBottom: "1rem",
            }}
          >
            LEADERSHIP
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Meet the Innovators Behind Finsentsis OS
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Finsentsis OS is led by visionary leaders and compliance experts
            dedicated to transforming how enterprises manage global regulatory obligations.
          </p>
        </header>

        {/* TEAM */}
        <TeamGrid members={TEAM_MEMBERS} />

    

       {/* OUR STORY */}
       <OurStory />


     


        
<Footer/>

      </div>
    </div>
  );
};

export default TeamPage;