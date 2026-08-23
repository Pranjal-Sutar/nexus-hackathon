import { judges } from "../data/content";
import RevealSection from "../RevealSection";

function initials(name) {
  const parts = name.split(" ");
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`;
}

function JudgesSection() {
  return (
    <RevealSection className="judges section" id="judges">
      <div className="section-number">05</div>

      <div className="section-heading">
        <span className="small-label">WHO YOU'LL MEET</span>
        <h2>
          JUDGES &<span> MENTORS.</span>
        </h2>
      </div>

      <div className="judges-grid">
        {judges.map(({ name, role }) => (
          <div className="judge-card" key={name}>
            <div className="judge-avatar" aria-hidden="true">{initials(name)}</div>
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

export default JudgesSection;