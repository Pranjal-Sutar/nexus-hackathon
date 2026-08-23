import { useState } from "react";
import "./App.css";

import NexusIntro from "./components/NexusIntro";
import Background from "./components/Background";
import CustomCursor from "./components/Customcursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountdownSection from "./components/Countdownsection";
import JourneyDivider from "./components/Journeydivider";
import AboutSection from "./components/Aboutsection";
import TimelineSection from "./components/Timelinesection";
import RulesSection from "./components/Rulessection";
import SponsorsSection from "./components/Sponsorssection";
import JudgesSection from "./components/Judgessection";
import ChallengesSection from "./components/Challengessection";
import PrizesSection from "./components/Prizessection";
import FaqSection from "./components/Faqsection";
import FinalCta from "./components/Finalcta";

const INTRO_SESSION_KEY = "nexus-intro-seen";

function hasSeenIntro() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
  } catch {
    // sessionStorage can throw in some privacy modes — fail safe to showing the intro
    return false;
  }
}

function App() {
  const [entered, setEntered] = useState(hasSeenIntro);

  const handleEnter = () => {
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    } catch {
      // ignore — worst case the intro plays again next time
    }
    setEntered(true);
  };

  if (!entered) {
    return <NexusIntro onComplete={handleEnter} />;
  }

  return (
    <div className="app">
      <Background />
      <CustomCursor />
      <Navbar />

      <main id="top">
        <Hero />
        <CountdownSection />

        <JourneyDivider
          phase="PHASE 01 — UNDERSTAND"
          title="Here's what you're actually signing up for."
          text="Who's running it, how the 24 hours unfold, and what's expected of you before you commit."
        />
        <AboutSection />
        <TimelineSection />
        <RulesSection />
        <SponsorsSection />
        <JudgesSection />

        <JourneyDivider
          phase="PHASE 02 — GET EXCITED"
          title="Now for the fun part."
          text="What you could build, and what you could walk away with."
        />
        <ChallengesSection />
        <PrizesSection />

        <JourneyDivider
          phase="PHASE 03 — REGISTER"
          title="Almost there."
          text="A few last questions, then it's your move."
        />
        <FaqSection />
        <FinalCta />
      </main>
    </div>
  );
}

export default App;