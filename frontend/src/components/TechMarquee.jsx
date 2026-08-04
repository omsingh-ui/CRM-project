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
  {
    icon: <FaReact />,
    name: "React",
    description: "Frontend library used to build Minivel's interface.",
  },
  {
    icon: <SiVite />,
    name: "Vite",
    description: "Fast modern build tool for React applications.",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    description: "Core language powering interactive features.",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "Backend runtime for scalable APIs.",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    description: "Framework used for Minivel backend services.",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    description: "Database used for storing CRM data.",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    description: "Utility framework for responsive UI design.",
  },
  {
    icon: <SiFramer />,
    name: "Framer Motion",
    description: "Used for smooth UI animations.",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    description: "Version control and project management.",
  },
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
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.5 }}
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

        <div className="marquee hover:[animation-play-state:paused]">

          {[...technologies,...technologies].map((tech,index)=>(

            <motion.div
              key={index}

              whileHover={{
                scale:1.08,
                y:-8
              }}

              transition={{
                type:"spring",
                stiffness:250
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
              px-6
              py-4
              shadow-sm
              cursor-pointer
              "
            >


              <motion.div
                whileHover={{
                  rotate:10,
                  scale:1.2
                }}

                className="
                text-3xl
                text-blue-600
                "
              >
                {tech.icon}
              </motion.div>



              <div>

                <h3
                  className="
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


            </motion.div>

          ))}

        </div>

      </div>


    </section>
  );
}