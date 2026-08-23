import { motion } from "framer-motion";
import { timelineItems } from "../data/content";
import RevealSection from "../RevealSection";

function TimelineSection() {
  return (
    <RevealSection className="timeline section" id="timeline">
      <div className="section-number">02</div>

      <div className="section-heading">
        <span className="small-label">THE JOURNEY</span>
        <h2 className="journey-title">
        <span>24 HOURS.</span>{" "}
        <span>ONE MISSION.</span>
      </h2>
      </div>

      <div className="timeline-list">
        {timelineItems.map(({ time, title, description }, index) => (
          <motion.div
            className="timeline-item"
            key={title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="timeline-time">{time}</span>
            <div className="timeline-dot" aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}

export default TimelineSection;
