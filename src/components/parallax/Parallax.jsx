import { useRef, useState, useEffect } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Custom hook for media query detection
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const Parallax = ({ type }) => {
  const ref = useRef();
  const isMobile = useMediaQuery("(max-width: 480px)"); // Mobile breakpoint

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // Full viewport coverage
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // Responsive transform ranges: gentler on mobile
  const yText = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? ["0%", "50%"] : ["0%", "100%"]
  );

  const yBg = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? ["0%", "15%"] : ["0%", "30%"]
  );

  const xStars = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? [0, -50] : [0, -100]
  );

  // Determine background image for planets based on type
  const planetImage =
    type === "services"
      ? "/planets.png"
      : type === "portfolio"
      ? "/sun.png"
      : "/stars.png";

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #000000, #000000)"
            : type === "portfolio"
            ? "linear-gradient(180deg, #000000, #000000)"
            : type === "skills"
            ? "linear-gradient(180deg, #000000, #000000)"
            : "linear-gradient(180deg, #000000, #000000)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
      >
        {type === "services"
          ? "What I Do?"
          : type === "portfolio"
          ? "What I Did?"
          : type === "skills"
          ? "My Expertise"
          : "My Journey"}
      </motion.h1>

      <motion.div className="mountains" />

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${planetImage})`,
        }}
      />

      <motion.div className="stars" style={{ x: xStars }} />
    </div>
  );
};

export default Parallax;