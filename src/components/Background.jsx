import { motion, useScroll, useTransform } from "framer-motion";

function Background() {
  const { scrollY } = useScroll();

  // Different speeds per layer = parallax depth, not just decoration
  const orbOneY = useTransform(scrollY, [0, 3000], [0, 420]);
  const orbTwoY = useTransform(scrollY, [0, 3000], [0, -260]);
  const gridY = useTransform(scrollY, [0, 3000], [0, 140]);

  return (
    <>
      <motion.div className="grid-background" style={{ y: gridY }} aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <motion.div className="orb orb-one" style={{ y: orbOneY }} aria-hidden="true" />
      <motion.div className="orb orb-two" style={{ y: orbTwoY }} aria-hidden="true" />
    </>
  );
}

export default Background;