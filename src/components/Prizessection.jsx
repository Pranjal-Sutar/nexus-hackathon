import { prizeBreakdown } from "../data/content";
import RevealSection from "../RevealSection";

function PrizesSection() {
  return (
    <RevealSection className="prizes section" id="prizes">
      <div className="section-number">07</div>

      <div className="prize-content">
        <div className="section-heading">
          <span className="small-label">THE REWARD</span>
          <h2>
            BUILD BIG.
            <br />
            <span>WIN BIGGER.</span>
          </h2>
        </div>

        <div className="prize-main">
          <span>PRIZE POOL</span>
          <strong>₹2L+</strong>
          <p>Cash prizes · Swag · Opportunities</p>
        </div>
      </div>

      <div className="prize-row">
        {prizeBreakdown.map(({ place, amount, label }) => (
          <div key={place}>
            <span>{place}</span>
            <strong>{amount}</strong>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

export default PrizesSection;