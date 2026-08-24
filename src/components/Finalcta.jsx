import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import RevealSection from "../RevealSection";

function FinalCta() {
  const [showMessage, setShowMessage] = useState(false);

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

      {/* REGISTER BUTTON */}
      <button
        type="button"
        className="primary-button large"
        onClick={() => setShowMessage(true)}
      >
        Register for NEXUS
        <ArrowUpRight size={20} aria-hidden="true" />
      </button>

      <div className="cta-footer">
        <span>NEXUS 2026</span>
        <span>A DJSCSI HACKATHON</span>
        <span>24 HOURS · 1 MISSION</span>
      </div>

      {/* REGISTRATION POPUP */}
      {showMessage && (
        <div
          className="registration-popup-overlay"
          onClick={() => setShowMessage(false)}
        >
          <div
            className="registration-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="registration-popup-close"
              onClick={(event) => {
                event.stopPropagation();
                setShowMessage(false);
              }}
              aria-label="Close registration message"
            >
              ×
            </button>

            <span className="registration-popup-label">
              REGISTRATION
            </span>

            <h3>Registration forms will open soon.</h3>

            <p>
              Stay tuned. We’ll announce when registration goes live.
            </p>

            <button
              type="button"
              className="registration-popup-ok"
              onClick={() => setShowMessage(false)}
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </RevealSection>
  );
}

export default FinalCta;