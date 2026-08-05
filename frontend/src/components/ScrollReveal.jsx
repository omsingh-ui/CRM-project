import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 50,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}