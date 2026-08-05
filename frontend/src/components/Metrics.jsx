import { motion } from "framer-motion";

import {
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";


const metrics = [
  {
    value: "10K+",
    label: "Customers",
    description: "Businesses growing with Minivel",
    icon: <FaUsers />,
    theme:
      "from-blue-500/20 to-blue-500/5",
    iconStyle:
      "from-blue-600 to-indigo-600",
    badge:
      "Trusted worldwide",
  },
  {
    value: "98%",
    label: "Retention",
    description: "Customer satisfaction rate",
    icon: <FaChartLine />,
    theme:
      "from-purple-500/20 to-purple-500/5",
    iconStyle:
      "from-purple-600 to-pink-600",
    badge:
      "High satisfaction",
  },
  {
    value: "120+",
    label: "Countries",
    description: "Global business presence",
    icon: <FaGlobe />,
    theme:
      "from-emerald-500/20 to-emerald-500/5",
    iconStyle:
      "from-emerald-500 to-teal-600",
    badge:
      "Global reach",
  },
  {
    value: "24/7",
    label: "Support",
    description: "Always available assistance",
    icon: <FaHeadset />,
    theme:
      "from-orange-500/20 to-orange-500/5",
    iconStyle:
      "from-orange-500 to-red-500",
    badge:
      "Always online",
  },
];


export default function Metrics() {

  return (

    <section className="py-8">

      <div className="max-w-7xl mx-auto px-6">


        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-white/70
          dark:bg-zinc-900/70
          backdrop-blur-xl
          border
          border-slate-200
          dark:border-zinc-800
          shadow-xl
          p-8
          lg:p-12
          "
        >


          {/* Background glow */}

          <div
            className="
            absolute
            -top-32
            -right-20
            w-80
            h-80
            bg-blue-500/20
            blur-3xl
            rounded-full
            "
          />


          <div
            className="
            relative
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >


            {metrics.map((item,index)=>(

              <motion.div

                key={item.label}


                initial={{
                  opacity:0,
                  y:30
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  duration:0.5,
                  delay:index*0.15
                }}


                whileHover={{
                  y:-10
                }}


                className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                dark:border-zinc-800
                bg-gradient-to-br
                ${item.theme}
                bg-white
                dark:bg-zinc-950
                p-6
                shadow-lg
                hover:shadow-2xl
                transition
                `}
              >


                {/* Card glow */}

                <div
                  className="
                  absolute
                  -right-10
                  -top-10
                  w-32
                  h-32
                  rounded-full
                  bg-white/20
                  blur-3xl
                  "
                />


                {/* Icon */}

                <motion.div

                  whileHover={{
                    scale:1.15,
                    rotate:5
                  }}


                  className={`
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.iconStyle}
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  shadow-lg
                  `}
                >

                  {item.icon}

                </motion.div>



                <h2
                  className="
                  mt-6
                  text-4xl
                  font-black
                  text-slate-900
                  dark:text-white
                  "
                >
                  {item.value}
                </h2>



                <p
                  className="
                  mt-2
                  text-lg
                  font-bold
                  text-slate-800
                  dark:text-white
                  "
                >
                  {item.label}
                </p>



                <p
                  className="
                  mt-2
                  text-sm
                  text-slate-600
                  dark:text-slate-400
                  "
                >
                  {item.description}
                </p>



                <div
                  className="
                  mt-5
                  inline-flex
                  rounded-full
                  bg-white/60
                  dark:bg-black/20
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-slate-700
                  dark:text-slate-300
                  "
                >
                  ● {item.badge}
                </div>


              </motion.div>

            ))}


          </div>


        </div>


      </div>


    </section>

  );
}