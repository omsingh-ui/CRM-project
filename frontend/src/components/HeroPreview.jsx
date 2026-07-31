import {
  FaUsers,
  FaBullseye,
  FaTasks,
  FaChartLine,
  FaDollarSign,
  FaBell,
} from "react-icons/fa";

import { motion } from "framer-motion";


const stats = [
  {
    title: "Customers",
    value: "245",
    icon: <FaUsers />,
  },
  {
    title: "Leads",
    value: "58",
    icon: <FaBullseye />,
  },
  {
    title: "Revenue",
    value: "$24K",
    icon: <FaDollarSign />,
  },
];


const activities = [
  "New customer added",
  "Lead converted",
  "Task completed",
];


export default function HeroPreview() {


  return (

    <div
      className="
      relative
      "
    >


     {/* Floating Notification */}

<motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  top-4
  right-4
  bg-white
  text-slate-800
  rounded-2xl
  shadow-[0_15px_35px_rgba(0,0,0,0.15)]
  px-4
  py-3
  z-20
  border
  border-slate-100
  "
>
  <div className="flex items-center gap-3">

    <div
      className="
      w-10
      h-10
      rounded-full
      bg-blue-100
      flex
      items-center
      justify-center
      "
    >
      <FaBell className="text-blue-600" />
    </div>

    <div>

      <p className="text-sm font-semibold">
        New Lead Added
      </p>

      <p className="text-xs text-slate-500">
        Just now
      </p>

    </div>

  </div>
</motion.div>





      {/* Main Dashboard */}


      <motion.div

        initial={{
          opacity:0,
          scale:0.95
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.8
        }}

        className="
        rounded-[32px]
        bg-white/90
        backdrop-blur-xl
        border
        border-white/40
        shadow-2xl
        overflow-hidden
        "
      >



        {/* Browser Header */}


        <div
          className="
          flex
          justify-between
          items-center
          px-6
          py-4
          bg-slate-100
          "
        >

          <div className="flex gap-2">

            <span className="w-3 h-3 rounded-full bg-red-400"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400"/>
            <span className="w-3 h-3 rounded-full bg-green-400"/>

          </div>


          <p className="font-semibold text-slate-700">
            Minivel CRM
          </p>


          <div
            className="
            w-8
            h-8
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            text-xs
            "
          >
            OM
          </div>


        </div>






        <div className="flex">


          {/* Sidebar */}


          <div
            className="
            hidden
            md:block
            w-40
            bg-slate-900
            text-white
            p-5
            space-y-5
            text-sm
            "
          >

            <p>📊 Dashboard</p>
            <p>👥 Customers</p>
            <p>🎯 Leads</p>
            <p>📋 Tasks</p>
            <p>⚙ Settings</p>

          </div>





          {/* Content */}


          <div
            className="
            flex-1
            p-5
            "
          >


            <h3
              className="
              font-bold
              text-lg
              text-slate-800
              "
            >
              Dashboard Overview
            </h3>



            {/* Stats */}


            <div
              className="
              grid
              grid-cols-3
              gap-3
              mt-4
              "
            >

              {stats.map((item,index)=>(

                <motion.div

                  key={item.title}

                  initial={{
                    opacity:0,
                    y:20
                  }}

                  animate={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*0.15
                  }}

                  className="
                  bg-blue-50
                  rounded-2xl
                  p-4
                  "
                >

                  <div className="text-blue-600">
                    {item.icon}
                  </div>


                  <p className="text-xs text-slate-500 mt-2">
                    {item.title}
                  </p>


                  <h4 className="font-bold text-xl">
                    {item.value}
                  </h4>


                </motion.div>


              ))}


            </div>





            {/* Chart */}


            <div
              className="
              mt-5
              h-32
              rounded-2xl
              bg-gradient-to-r
              from-blue-100
              to-indigo-100
              flex
              items-center
              justify-center
              "
            >

              <FaChartLine
                className="
                text-5xl
                text-blue-600
                "
              />


            </div>





            {/* Activity */}


            <div className="mt-5">


              <h4 className="font-bold mb-3">
                Recent Activity
              </h4>


              <div className="space-y-2">


                {activities.map(item=>(

                  <div
                    key={item}
                    className="
                    bg-slate-50
                    rounded-xl
                    p-3
                    text-sm
                    "
                  >

                    ✓ {item}

                  </div>

                ))}


              </div>


            </div>



          </div>


        </div>


      </motion.div>


      {/* Growth Badge */}


      <motion.div

        animate={{
          y:[0,8,0]
        }}

        transition={{
          duration:3,
          repeat:Infinity
        }}

        className="
        absolute
        -bottom-5
        -left-5
        bg-white
        shadow-xl
        rounded-2xl
        px-5
        py-3
        "
      >

        <p className="text-xs text-slate-500">
          Monthly Growth
        </p>

        <p className="font-bold text-green-600">
          +24%
        </p>


      </motion.div>


    </div>

  );
}