import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiFramer,
} from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/*
  Each technology keeps its original content (icon, name, description)
  and now also carries its official brand color.
  - color      → brand color used in light mode
  - darkColor  → optional override when the brand color is black
                 (Express, GitHub) and would disappear on a dark card
*/
const technologies = [
  {
    icon: <FaReact />,
    name: "React",
    description: "Frontend library used to build Minivel's interface.",
    color: "#61DAFB",
  },
  {
    // Vite's real logo is a purple → blue gradient (defined in <BrandDefs />)
    icon: <SiVite style={{ fill: "url(#vite-gradient)" }} />,
    name: "Vite",
    description: "Fast modern build tool for React applications.",
    color: "#7C6CFF",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    description: "Core language powering interactive features.",
    color: "#F7DF1E",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "Backend runtime for scalable APIs.",
    color: "#5FA04E",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    description: "Framework used for Minivel backend services.",
    color: "#1E293B",
    darkColor: "#F8FAFC",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    description: "Database used for storing CRM data.",
    color: "#47A248",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    description: "Utility framework for responsive UI design.",
    color: "#06B6D4",
  },
  {
    icon: <SiFramer />,
    name: "Framer Motion",
    description: "Used for smooth UI animations.",
    color: "#0055FF",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    description: "Version control and project management.",
    color: "#181717",
    darkColor: "#F8FAFC",
  },
];

/* Picks dark or white text depending on how light the brand color is */
const readableOn = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.2 ? "#0f172a" : "#ffffff";
};

/* CSS variables that every card / the modal reads its colors from */
const brandVars = (tech) => {
  const dark = tech.darkColor ?? tech.color;
  return {
    "--brand": tech.color,
    "--brand-dark": dark,
    "--on": readableOn(tech.color),
    "--on-dark": readableOn(dark),
  };
};

/* Hidden SVG defs so icons can use real gradients */
const BrandDefs = () => (
  <svg
    width="0"
    height="0"
    className="absolute"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="vite-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#41D1FF" />
        <stop offset="100%" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

export default function TechMarquee() {
  const [selectedTech, setSelectedTech] = useState(null);

  /* Close the modal with the Escape key */
  useEffect(() => {
    if (!selectedTech) return;
    const onKey = (e) => e.key === "Escape" && setSelectedTech(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedTech]);

  return (
    <section
      className="
      py-12
      overflow-x-clip
      bg-white
      dark:bg-zinc-950
      "
    >
      <BrandDefs />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5"
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

      {/* overflow-x-clip hides the scrolling edge but lets hover lift,
          glow and tooltips show vertically instead of being cut off */}
      <div className="relative mt-1 py-4 overflow-x-clip">
        {/* soft edge fades */}
        <div
          className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-16
          md:w-32
          bg-gradient-to-r
          from-white
          dark:from-zinc-950
          to-transparent
          "
        />
        <div
          className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-16
          md:w-32
          bg-gradient-to-l
          from-white
          dark:from-zinc-950
          to-transparent
          "
        />

        <div className="marquee hover:[animation-play-state:paused]">
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${tech.name} — open details`}
              onClick={() => setSelectedTech(tech)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTech(tech);
                }
              }}
              style={brandVars(tech)}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="
              group
              relative
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
              pl-4
              pr-6
              py-3
              shadow-sm
              cursor-pointer
              outline-none
              transition-all
              duration-300
              hover:border-[color:var(--brand)]
              dark:hover:border-[color:var(--brand-dark)]
              focus-visible:border-[color:var(--brand)]
              dark:focus-visible:border-[color:var(--brand-dark)]
              hover:shadow-[0_16px_36px_-14px_var(--brand)]
              dark:hover:shadow-[0_16px_36px_-14px_var(--brand-dark)]
              "
            >
              {/* faint brand wash that fades in on hover */}
              <span
                className="
                pointer-events-none
                absolute
                inset-0
                rounded-2xl
                bg-[color:var(--brand)]
                dark:bg-[color:var(--brand-dark)]
                opacity-0
                group-hover:opacity-[0.07]
                transition-opacity
                duration-300
                "
              />

              {/* logo tile */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.2,
                }}
                className="
                relative
                grid
                h-12
                w-12
                shrink-0
                place-items-center
                overflow-hidden
                rounded-xl
                bg-slate-50
                dark:bg-zinc-800
                ring-1
                ring-slate-200/70
                dark:ring-zinc-700
                text-3xl
                text-[color:var(--brand)]
                dark:text-[color:var(--brand-dark)]
                "
              >
                <span
                  className="
                  absolute
                  inset-0
                  bg-[color:var(--brand)]
                  dark:bg-[color:var(--brand-dark)]
                  opacity-[0.12]
                  "
                />
                <span className="relative">{tech.icon}</span>
              </motion.div>

              <div>
                <h3
                  className="
                  relative
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                  whitespace-nowrap
                  "
                >
                  {tech.name}
                </h3>

                <p
                  className="
                  absolute
                  left-0
                  top-full
                  mt-3
                  w-64
                  rounded-xl
                  bg-white
                  dark:bg-zinc-900
                  border
                  border-slate-200
                  dark:border-zinc-800
                  border-t-2
                  border-t-[color:var(--brand)]
                  dark:border-t-[color:var(--brand-dark)]
                  p-4
                  text-sm
                  text-slate-600
                  dark:text-slate-400
                  opacity-0
                  group-hover:opacity-100
                  pointer-events-none
                  transition
                  shadow-xl
                  z-20
                  "
                >
                  {tech.description}
                </p>
              </div>

              {/* brand-colored underline: visible at rest, grows on hover */}
              <span
                className="
                pointer-events-none
                absolute
                inset-x-5
                bottom-0
                h-[3px]
                rounded-full
                bg-[color:var(--brand)]
                dark:bg-[color:var(--brand-dark)]
                opacity-70
                group-hover:opacity-100
                scale-x-50
                group-hover:scale-x-100
                origin-center
                transition-all
                duration-300
                "
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            key="tech-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            backdrop-blur-sm
            px-6
            "
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedTech.name}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              onClick={(e) => e.stopPropagation()}
              style={brandVars(selectedTech)}
              className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-3xl
              bg-white
              dark:bg-zinc-900
              border
              border-slate-200
              dark:border-zinc-800
              p-8
              text-center
              shadow-2xl
              "
            >
              {/* brand color bar on top */}
              <div
                className="
                absolute
                inset-x-0
                top-0
                h-1.5
                bg-[color:var(--brand)]
                dark:bg-[color:var(--brand-dark)]
                "
              />

              {/* brand glow behind the logo */}
              <div
                className="
                pointer-events-none
                absolute
                -top-10
                left-1/2
                h-44
                w-44
                -translate-x-1/2
                rounded-full
                bg-[color:var(--brand)]
                dark:bg-[color:var(--brand-dark)]
                opacity-25
                blur-3xl
                "
              />

              <div
                className="
                relative
                mx-auto
                grid
                h-24
                w-24
                place-items-center
                rounded-3xl
                bg-slate-50
                dark:bg-zinc-800
                ring-1
                ring-slate-200
                dark:ring-zinc-700
                text-6xl
                text-[color:var(--brand)]
                dark:text-[color:var(--brand-dark)]
                mb-5
                "
              >
                {selectedTech.icon}
              </div>

              <h2
                className="
                relative
                text-3xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {selectedTech.name}
              </h2>

              <p
                className="
                relative
                mt-4
                text-slate-600
                dark:text-slate-400
                "
              >
                {selectedTech.description}
              </p>

              <button
                onClick={() => setSelectedTech(null)}
                className="
                relative
                mt-6
                rounded-xl
                bg-[color:var(--brand)]
                dark:bg-[color:var(--brand-dark)]
                text-[color:var(--on)]
                dark:text-[color:var(--on-dark)]
                px-6
                py-2
                font-semibold
                hover:brightness-110
                transition
                "
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
