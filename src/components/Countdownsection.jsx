import Countdown from "./Countdown";

function CountdownSection() {
  return (
    <section className="countdown-section" aria-label="Countdown to hackathon start">
      <div className="section-tag">THE CLOCK IS TICKING</div>
      <Countdown />
      <p>UNTIL THE BUILD BEGINS</p>
    </section>
  );
}

export default CountdownSection;