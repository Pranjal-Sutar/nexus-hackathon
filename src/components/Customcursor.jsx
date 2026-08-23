import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, summary, .challenge-card, .sponsor-card, .judge-card";

function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canUseCursor);
    if (!canUseCursor) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let frame;

    const handleMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      }
    };

    const handleOver = (event) => {
      if (event.target.closest?.(INTERACTIVE_SELECTOR)) setHovering(true);
    };

    const handleOut = (event) => {
      if (event.target.closest?.(INTERACTIVE_SELECTOR)) setHovering(false);
    };

    const tick = () => {
      // lerp for a soft trailing ring, snappy dot
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? "cursor-ring-active" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;