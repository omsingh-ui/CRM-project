import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.55,
  distance = 12,
  direction = "up",
  scale = 1,
  once = true,
  amount = 0.18,
  className = "",
}) {
  const directions = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      style={{
        willChange: "transform, opacity",
      }}
      initial={{
        opacity: 0,
        x,
        y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}