import {
  FiZap,
  FiShield,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";

import { motion } from "framer-motion";

const trustItems = [
  {
    icon: <FiZap />,
    title: "Fast Setup",
    description: "Get started quickly and keep your customer data organized.",
  },
  {
    icon: <FiShield />,
    title: "Reliable Access",
    description: "Keep your team connected with protected and dependable access.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Clear Insights",
    description: "Understand your business with useful performance insights.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Ready to Grow",
    description: "Support your workflow as your customers and business grow.",
  },
];

export default function Trusted() {
  return (
    <section
      id="trusted"
      className="
        pt-12
        pb-12
        bg-gray-50
        dark:bg-gray-950
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            Built around the way your team works
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-slate-500
              dark:text-slate-400
            "
          >
            Manage customers, track performance, and keep everyday
            workflows organized from one place.
          </p>
        </motion.div>

        <div
          className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                dark:border-zinc-800
                bg-white
                dark:bg-zinc-900
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-transparent
                hover:shadow-xl
              "
            >
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-[3px]
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-600
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />

              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  h-32
                  w-32
                  rounded-full
                  bg-gradient-to-br
                  from-blue-500
                  to-indigo-600
                  opacity-10
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:opacity-25
                "
              />

              <div
                className="
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-purple-600
                  text-2xl
                  text-white
                  shadow-lg
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  group-hover:-rotate-6
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-[15px]
                  leading-7
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}