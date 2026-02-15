import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  // Extend the scroll range: when the top of the section hits the top of viewport (progress 0)
  // until the bottom of the section hits the bottom of viewport (progress 1).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // now spans the entire visible range
  });

  // Smooth the scroll progress for fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  // More subtle transform ranges
  const yText = useTransform(smoothProgress, [0, 1], ["0%", "150%"]);
  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "40%"]); // planets move less
  const xStars = useTransform(smoothProgress, [0, 1], [0, -150]); // stars drift horizontally

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #000000, #000000)"
            : "linear-gradient(180deg, #000000, #000000)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-white">
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>

      <motion.div className="mountains" />

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />

      <motion.div
        className="stars"
        style={{ x: xStars }}
      />
    </div>
  );
};

export default Parallax;