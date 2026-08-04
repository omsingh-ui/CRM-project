import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


export default function PageTransition({ children }) {

  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}

      initial={{
        opacity:0
      }}

      animate={{
        opacity:1
      }}

      transition={{
        duration:0.5
      }}
    >
      {children}
    </motion.div>
  );
}