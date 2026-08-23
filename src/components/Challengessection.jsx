import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { challenges } from "../data/content";
import RevealSection from "../RevealSection";

function ChallengesSection() {
  return (
    <RevealSection className="challenges section" id="challenges">
      <div className="section-number">06</div>

      <div className="section-heading">
        <span className="small-label">CHOOSE YOUR MISSION</span>
        <h2>
          WHAT WILL <span>YOU BUILD?</span>
        </h2>
      </div>

      <div className="challenge-grid">
        {challenges.map(({ Icon, number, title, text }) => (
          <motion.div className="challenge-card" key={title} whileHover={{ y: -8 }}>
            <div className="card-top">
              <span>{number}</span>
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <ArrowUpRight className="card-arrow" size={20} aria-hidden="true" />
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}

export default ChallengesSection;