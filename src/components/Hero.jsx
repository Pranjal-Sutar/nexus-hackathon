import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { heroMeta } from "../data/content";

const headlineContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const headlineLine = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Portal() {
  const visualRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) return;
    const node = visualRef.current;
    if (!node) return;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: relX * 18, y: relY * -18 });
    };

    const handleLeave = () => setTilt({ x: 0, y: 0 });

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [reduceMotion]);

  return (
    <motion.div
      ref={visualRef}
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      aria-hidden="true"
    >
      <div
        className="portal"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        <div className="portal-ring ring-one" />
        <div className="portal-ring ring-two" />
        <div className="portal-ring ring-three" />

        <div className="portal-core">
          <span>N</span>
        </div>

        <div className="floating-node node-one">01</div>
        <div className="floating-node node-two">24H</div>
        <div className="floating-node node-three">∞</div>
      </div>

      <div className="visual-label">
        <span>01</span>
        <p>ENTER THE<br />UNKNOWN</p>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="eyebrow">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="eyebrow-host">DJSCSI PRESENTS</span>
          <span aria-hidden="true">·</span>
          24 HOUR HACKATHON
        </div>

        <motion.h1 variants={headlineContainer} initial="hidden" animate="show">
          <motion.span className="outline" variants={headlineLine}>BUILD</motion.span>
          <motion.span variants={headlineLine}>BEYOND</motion.span>
          <motion.span className="gradient-text nexus-mark" variants={headlineLine}>
            REALITY.
          </motion.span>
        </motion.h1>

        <p className="hero-description">
          <strong className="hero-name-inline">NEXUS</strong> is where
          ideas converge, teams collide, and technology becomes something
          real - brought to you by <strong>DJSCSI</strong>.
        </p>

        <div className="hero-actions">
          <a href="#register" className="primary-button">
            Enter the Nexus
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>

          <a href="#about" className="secondary-button">
            Explore <ChevronDown size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-meta">
          {heroMeta.map(({ label, value }) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </motion.div>

      <Portal />
    </section>
  );
}

export default Hero;