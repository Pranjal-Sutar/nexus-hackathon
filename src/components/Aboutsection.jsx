import { featureCards } from "../data/content";
import RevealSection from "../RevealSection";

function AboutSection() {
  return (
    <RevealSection className="about section" id="about">
      <div className="section-number">01</div>

      <div className="section-heading">
        <span className="small-label">ABOUT NEXUS · A DJSCSI HACKATHON</span>
        <h2>
          WHERE
          <br />
          <span>IDEAS CONVERGE.</span>
        </h2>
      </div>

      <div className="about-content">
        <p className="large-text">
          One room. Twenty-four hours. Infinite possibilities.
        </p>

        <p>
          NEXUS, hosted by DJSCSI, brings developers, designers, builders
          and dreamers together to turn ambitious ideas into working
          experiences. Pick a problem. Build a solution. Ship something
          unforgettable.
        </p>

        <div className="feature-grid">
          {featureCards.map(({ Icon, label, text }) => (
            <div className="feature-card" key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default AboutSection;
