import { ArrowUpRight } from "lucide-react";
import { registrationUrl } from "../data/content";
import RevealSection from "../RevealSection";

function FinalCta() {
  return (
    <RevealSection className="final-cta" id="register">
      <div className="cta-grid" aria-hidden="true" />

      <span className="small-label">YOUR NEXT MOVE</span>

      <h2>
        READY TO
        <br />
        <span>ENTER NEXUS?</span>
      </h2>

      <p>Bring an idea. Leave with something real.</p>

      <a
        href={registrationUrl}
        className="primary-button large"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register for NEXUS
        <ArrowUpRight size={20} aria-hidden="true" />
      </a>

      <div className="cta-footer">
        <span>NEXUS 2026</span>
        <span>A DJSCSI HACKATHON</span>
        <span>24 HOURS · 1 MISSION</span>
      </div>
    </RevealSection>
  );
}

export default FinalCta;