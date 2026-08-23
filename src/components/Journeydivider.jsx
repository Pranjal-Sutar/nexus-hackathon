import RevealSection from "../RevealSection";

function JourneyDivider({ phase, title, text }) {
  return (
    <RevealSection as="div" className="journey-divider">
      <span className="journey-phase">{phase}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </RevealSection>
  );
}

export default JourneyDivider;