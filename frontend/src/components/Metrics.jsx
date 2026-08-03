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
  },
  {
    value: "98%",
    label: "Retention",
    description: "Customer satisfaction rate",
    icon: <FaChartLine />,
  },
  {
    value: "120+",
    label: "Countries",
    description: "Global business presence",
    icon: <FaGlobe />,
  },
  {
    value: "24/7",
    label: "Support",
    description: "Always available assistance",
    icon: <FaHeadset />,
  },
];


export default function Metrics() {

  return (

    <section
      className="
      py-16
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >


        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-white/80
          dark:bg-zinc-900/80
          backdrop-blur-xl
          border
          border-slate-200
          dark:border-zinc-800
          shadow-xl
          p-8
          lg:p-12
          "
        >


          {/* Background Glow */}

          <div
            className="
            absolute
            -top-20
            -right-20
            w-64
            h-64
            bg-blue-500/20
            rounded-full
            blur-3xl
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
                  y:-8
                }}

                className="
                group
                bg-white
                dark:bg-zinc-950
                rounded-3xl
                p-6
                border
                border-slate-100
                dark:border-zinc-800
                hover:shadow-2xl
                transition
                "
              >


                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  shadow-lg
                  group-hover:scale-110
                  transition
                  "
                >

                  {item.icon}

                </div>



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
                  font-semibold
                  text-blue-700
                  dark:text-blue-400
                  "
                >

                  {item.label}

                </p>



                <p
                  className="
                  mt-2
                  text-sm
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


      </div>


    </section>

  );

}