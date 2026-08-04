import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiFramer,
} from "react-icons/si";

import { motion } from "framer-motion";

const technologies = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <FaGithub />, name: "GitHub" },
];

export default function TechMarquee() {
  return (
    <section
      className="
      py-16
      overflow-hidden
      bg-white
      dark:bg-zinc-950
      "
    >

     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-center mb-10"
>

  <p
    className="
    text-sm
    uppercase
    tracking-[0.3em]
    font-semibold
    text-blue-600
    dark:text-blue-400
    "
  >
    Built With Modern Technologies
  </p>

  <h2
    className="
    mt-4
    text-3xl
    md:text-4xl
    font-bold
    text-slate-900
    dark:text-white
    "
  >
    Powered By The Best Tools
  </h2>

  <p
    className="
    mt-4
    max-w-2xl
    mx-auto
    text-slate-600
    dark:text-slate-400
    "
  >
    Minivel is built using modern frontend and backend technologies
    to deliver a fast, secure, and scalable CRM experience.
  </p>

</motion.div>

<div className="overflow-hidden">

  <div className="marquee">

    {[...technologies, ...technologies].map((tech, index) => (

      <div
        key={index}
        className="
        flex
        items-center
        gap-3
        mx-4
        rounded-2xl
        border
        border-slate-200
        dark:border-zinc-800
        bg-white
        dark:bg-zinc-900
        px-6
        py-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >

        <div
          className="
          text-3xl
          text-blue-600
          "
        >
          {tech.icon}
        </div>

        <span
          className="
          font-semibold
          text-slate-700
          dark:text-slate-200
          whitespace-nowrap
          "
        >
          {tech.name}
        </span>

      </div>

    ))}

  </div>

</div>

    </section>
  );
}