import {
  FaChartLine,
  FaUsers,
  FaRocket,
  FaBolt,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

import { motion } from "framer-motion";


const items = [
  {
    title: "Dashboard",
    category: "Analytics",
    icon: <FaChartLine />,
    desc: "Monitor business performance with real-time insights and smart analytics.",
    color: "from-blue-500 to-indigo-600",
  },

  {
    title: "Customers",
    category: "CRM Management",
    icon: <FaUsers />,
    desc: "Build stronger relationships and organize customer information easily.",
    color: "from-indigo-500 to-purple-600",
  },

  {
    title: "Growth",
    category: "Business Scale",
    icon: <FaRocket />,
    desc: "Discover opportunities and grow your business with powerful tools.",
    color: "from-cyan-500 to-blue-600",
  },

  {
    title: "Automation",
    category: "Smart Workflow",
    icon: <FaBolt />,
    desc: "Automate repetitive tasks and improve your team's productivity.",
    color: "from-violet-500 to-purple-600",
  },

  {
    title: "Security",
    category: "Data Protection",
    icon: <FaShieldAlt />,
    desc: "Keep your business data safe with secure CRM workflows.",
    color: "from-blue-600 to-indigo-700",
  },

  {
    title: "Reports",
    category: "Business Insights",
    icon: <FaDatabase />,
    desc: "Create meaningful reports and make better decisions faster.",
    color: "from-purple-500 to-indigo-600",
  },
];


export default function Features() {

  return (

    <section
      id="features"
      className="
      py-24
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">


          <span
            className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            bg-blue-50
            text-blue-700
            text-sm
            font-semibold
            dark:bg-blue-950
            dark:text-blue-300
            "
          >

            ✨ Platform Features

          </span>



          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-black
            text-slate-900
            dark:text-white
            "
          >

            Everything you need to grow smarter

          </h2>



          <p
            className="
            mt-5
            text-slate-500
            dark:text-slate-400
            text-lg
            "
          >

            Manage customers, automate workflows,
            and scale your business from one powerful CRM platform.

          </p>


        </div>




        {/* Cards */}


        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >


          {
            items.map((item,index)=>(


              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:40,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  duration:0.5,
                  delay:index * 0.1,
                }}


                whileHover={{
                  y:-10,
                }}


                className="
                group
                relative
                overflow-hidden
                bg-white
                dark:bg-zinc-900
                rounded-[32px]
                p-8
                border
                border-slate-200
                dark:border-zinc-800
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >



                {/* Glow */}

                <div
                  className={`
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-gradient-to-br
                  ${item.color}
                  opacity-10
                  blur-3xl
                  group-hover:opacity-30
                  transition
                  `}
                />



                {/* Icon */}

                <div
                  className={`
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  text-white
                  flex
                  items-center
                  justify-center
                  text-3xl
                  shadow-lg
                  group-hover:scale-110
                  transition
                  `}
                >

                  {item.icon}

                </div>



                <p
                  className="
                  mt-7
                  text-sm
                  font-semibold
                  text-blue-600
                  dark:text-blue-400
                  "
                >

                  {item.category}

                </p>



                <h3
                  className="
                  mt-2
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                  "
                >

                  {item.title}

                </h3>



                <p
                  className="
                  mt-4
                  text-slate-500
                  dark:text-slate-400
                  leading-relaxed
                  "
                >

                  {item.desc}

                </p>



                <div
                  className="
                  mt-6
                  text-blue-600
                  dark:text-blue-400
                  font-semibold
                  text-sm
                  group-hover:translate-x-2
                  transition
                  "
                >

                  Learn more →

                </div>



              </motion.div>


            ))
          }


        </div>


      </div>


    </section>

  );

}