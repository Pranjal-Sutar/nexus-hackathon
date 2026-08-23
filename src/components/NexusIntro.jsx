import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./NexusIntro.css";

const ENTER_DELAY_MS = 6600;
const EXIT_DURATION_MS = 850;

function NexusIntro({ onComplete }) {
  const [showEnter, setShowEnter] = useState(false);
  const [exiting, setExiting] = useState(false);

  const letters = ["N", "E", "X", "U", "S"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnter(true);
    }, ENTER_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const enterNexus = () => {
    setExiting(true);

    setTimeout(() => {
      onComplete();
    }, EXIT_DURATION_MS);
  };

  return (
    <AnimatePresence mode="wait">
      {!exiting && (
        <motion.div
          className="nexus-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* BACKGROUND */}

          <div className="intro-grid" aria-hidden="true" />

          <div className="intro-noise" aria-hidden="true" />

          <div className="intro-vignette" aria-hidden="true" />

          <motion.div
            className="intro-scan"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
            }}
            aria-hidden="true"
          />

          {/* MAIN CONTENT */}

          <div className="intro-content">

            {/* DJSCSI */}

            <motion.div
              className="intro-djcsi"
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(10px)",
                letterSpacing: "0.35em",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                letterSpacing: "0.12em",
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              DJSCSI
            </motion.div>

            {/* PRESENTS */}

            <motion.div
              className="intro-presents"
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
            >
              PRESENTS
            </motion.div>

            {/* ORBITAL SYSTEM */}

            <div className="intro-core" aria-hidden="true">

              {/* Energy pulse */}

              <motion.div
                className="intro-energy"
                initial={{
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0.3, 1.3, 2],
                }}
                transition={{
                  duration: 2,
                  delay: 0.7,
                  ease: "easeOut",
                }}
              />

              {/* Outer orbit */}

              <motion.div
                className="intro-orbit orbit-outer"
                initial={{
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    delay: 0.75,
                  },
                  scale: {
                    duration: 1.2,
                    delay: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  rotate: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />

              {/* Middle orbit */}

              <motion.div
                className="intro-orbit orbit-middle"
                initial={{
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: 1,
                  },
                  scale: {
                    duration: 1,
                    delay: 1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />

              {/* Inner orbit */}

              <motion.div
                className="intro-orbit orbit-inner"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                }}
                transition={{
                  opacity: {
                    duration: 0.5,
                    delay: 1.2,
                  },
                  scale: {
                    duration: 0.8,
                    delay: 1.2,
                    type: "spring",
                  },
                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />

              {/* N inside orbital */}

              <motion.div
                className="intro-core-letter"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.25,
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                }}
              >
                N
              </motion.div>

              {/* Infinity */}

              <motion.div
                className="intro-infinity"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: [0, 1.2, 1],
                  rotate: 360,
                }}
                transition={{
                  opacity: {
                    duration: 0.4,
                    delay: 1.5,
                  },
                  scale: {
                    duration: 0.6,
                    delay: 1.5,
                  },
                  rotate: {
                    duration: 7,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                ∞
              </motion.div>
            </div>

            {/* NEXUS */}

            <div className="intro-title">

              <div className="intro-title-line">
                {letters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className="nexus-letter"
                    initial={{
                        opacity: 0,
                        visibility: "hidden",
                        y: 30,
                        scale: 0.7,
                        filter: "blur(18px)",
                    }}
                    animate={{
                        opacity: 1,
                        visibility: "visible",
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 2.0 + index * 0.48,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* TAGLINE */}

              <motion.div
                className="intro-subtitle"
                initial={{
                  opacity: 0,
                  y: 8,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: 4.65,
                }}
              >
                WHERE IDEAS CONVERGE.
              </motion.div>

            </div>
          </div>

          {/* ENTER BUTTON */}

          <AnimatePresence>
            {showEnter && (
              <motion.div
                className="intro-bottom"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <motion.button
                  className="intro-enter"
                  onClick={enterNexus}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow:
                      "0 0 35px rgba(150, 100, 255, 0.25)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  aria-label="Enter the Nexus"
                >
                  <span>ENTER THE NEXUS</span>

                  <motion.span
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />
                  </motion.span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CORNER TEXT */}

          <motion.div
            className="intro-corner intro-corner-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.8,
              duration: 0.6,
            }}
          >
          
          </motion.div>

          <motion.div
            className="intro-corner intro-corner-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.8,
              duration: 0.6,
            }}
          >
            
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NexusIntro;