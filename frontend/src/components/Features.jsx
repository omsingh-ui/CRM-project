import {
  FaChartLine,
  FaUsers,
  FaRocket,
  FaBolt,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

import AnimatedCard from "./AnimatedCard";

const items = [
  {
    title: "Dashboard",
    icon: <FaChartLine />,
    desc: "Monitor business performance with real-time insights and smart analytics.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Customers",
    icon: <FaUsers />,
    desc: "Build stronger relationships and organize customer information easily.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Growth",
    icon: <FaRocket />,
    desc: "Discover opportunities and grow your business with powerful tools.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Automation",
    icon: <FaBolt />,
    desc: "Automate repetitive tasks and improve your team's productivity.",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Security",
    icon: <FaShieldAlt />,
    desc: "Keep your business data safe with secure CRM workflows.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Reports",
    icon: <FaDatabase />,
    desc: "Create meaningful reports and make better decisions faster.",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="
            mt-0
            text-4xl
            md:text-5xl
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
            "
          >
            Everything you need to grow smarter
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
            Manage customers, automate workflows,
            and scale your business from one powerful CRM platform.
          </p>
        </div>

        <div
          className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
          "
        >
          {items.map((item, index) => (
            <AnimatedCard
              key={item.title}
              delay={index * 0.08}
            >
              <div
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
                  className={`
                  absolute
                  inset-x-0
                  top-0
                  h-[3px]
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  ${item.color}
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                  `}
                />

                <div
                  className={`
                  absolute
                  -top-16
                  -right-16
                  h-32
                  w-32
                  rounded-full
                  bg-gradient-to-br
                  ${item.color}
                  opacity-10
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:opacity-25
                  `}
                />

                <div
                  className={`
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  text-2xl
                  text-white
                  shadow-lg
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  group-hover:-rotate-6
                  `}
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
                  {item.desc}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}