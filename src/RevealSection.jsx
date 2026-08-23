import { motion } from "framer-motion";

/**
 * Wraps any section in a consistent fade-up scroll reveal.
 * Keeps animation logic in one place instead of repeated per section.
 */
function RevealSection({ as = "section", className, id, children, delay = 0 }) {
  const MotionTag = motion[as] ?? motion.section;

  return (
    <MotionTag
      className={className}
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export default RevealSection;