import { rulesItems } from "../data/content";
import RevealSection from "../RevealSection";

function RulesSection() {
  return (
    <RevealSection className="rules section" id="rules">
      <div className="section-number">03</div>

      <div className="section-heading">
        <span className="small-label">READ BEFORE YOU ENTER</span>
        <h2>
          RULES & <span> ELIGIBILITY.</span>
        </h2>
      </div>

      <div className="rules-content">
        <ol className="rules-list">
          {rulesItems.map(({ title, text }) => (
            <li key={title}>
              <strong>{title}</strong> {text}
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}

export default RulesSection;