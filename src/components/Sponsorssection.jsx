import { ArrowUpRight } from "lucide-react";
import { sponsorTiers } from "../data/content";
import RevealSection from "../RevealSection";

function SponsorsSection() {
  return (
    <RevealSection className="sponsors section" id="sponsors">
      <div className="section-number">04</div>

      <div className="section-heading">
        <span className="small-label">BACKED BY</span>
        <h2>
          POWERED BY <span>OUR PARTNERS.</span>
        </h2>
      </div>

      {sponsorTiers.map(({ label, rowClass, sponsors }) => (
        <div className="sponsor-tier" key={label}>
          <span className="tier-label">{label}</span>
          <div className={`sponsor-row ${rowClass}`}>
            {sponsors.map((name, index) => (
              <div className="sponsor-card" key={`${name}-${index}`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}

      <a href="#" className="sponsor-cta">
        Become a sponsor <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </RevealSection>
  );
}

export default SponsorsSection;
