import {
  FaUsers,
  FaBullseye,
  FaTasks,
  FaChartLine,
  FaDollarSign,
  FaBell,
  FaCog,
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

  {/* Browser Buttons */}

  <div className="flex gap-2">

    <span className="w-3 h-3 rounded-full bg-red-400" />
    <span className="w-3 h-3 rounded-full bg-yellow-400" />
    <span className="w-3 h-3 rounded-full bg-green-400" />

  </div>

  {/* Search Bar */}

  <div
    className="
    hidden
    md:flex
    items-center
    bg-white
    border
    border-slate-200
    rounded-xl
    px-4
    py-2
    w-52
    "
  >

    <span className="text-slate-400 text-sm">
      🔍 Search customers...
    </span>

  </div>

  {/* Profile */}

  <div
    className="
    w-9
    h-9
    rounded-full
    bg-blue-600
    text-white
    flex
    items-center
    justify-center
    text-sm
    font-semibold
    shadow-md
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
  md:flex
  flex-col
  w-44
  bg-slate-900
  text-white
  p-5
  "
>

  <h2
    className="
    text-xl
    font-bold
    text-blue-400
    mb-8
    "
  >
    Minivel
  </h2>

  <div className="space-y-2">

    <div
      className="
      flex
      items-center
      gap-3
      bg-blue-600
      px-3
      py-2
      rounded-xl
      "
    >
      <FaChartLine />
      <span>Dashboard</span>
    </div>

    <div
      className="
      flex
      items-center
      gap-3
      px-3
      py-2
      rounded-xl
      hover:bg-slate-800
      transition
      "
    >
      <FaUsers />
      <span>Customers</span>
    </div>

    <div
      className="
      flex
      items-center
      gap-3
      px-3
      py-2
      rounded-xl
      hover:bg-slate-800
      transition
      "
    >
      <FaBullseye />
      <span>Leads</span>
    </div>

    <div
      className="
      flex
      items-center
      gap-3
      px-3
      py-2
      rounded-xl
      hover:bg-slate-800
      transition
      "
    >
      <FaTasks />
      <span>Tasks</span>
    </div>

    <div
      className="
      flex
      items-center
      gap-3
      px-3
      py-2
      rounded-xl
      hover:bg-slate-800
      transition
      "
    >
      <FaCog />
      <span>Settings</span>
    </div>

  </div>

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

              {stats.map((item, index) => (

  <motion.div

    key={item.title}

    initial={{
      opacity: 0,
      y: 20
    }}

    animate={{
      opacity: 1,
      y: 0
    }}

    transition={{
      delay: index * 0.15
    }}

    whileHover={{
      y: -5,
      scale: 1.03
    }}

    className="
    bg-blue-50
    rounded-2xl
    p-4
    shadow-sm
    hover:shadow-lg
    transition-all
    duration-300
    cursor-pointer
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


           {/* Analytics */}

<div
  className="
  mt-5
  rounded-2xl
  bg-gradient-to-r
  from-blue-50
  to-indigo-50
  p-5
  "
>

  <div className="flex justify-between items-center mb-4">

    <div>

      <h4 className="font-semibold text-slate-700">
        Sales Analytics
      </h4>

      <p className="text-xs text-slate-500">
        Last 6 Months
      </p>

    </div>

    <span
      className="
      text-green-600
      text-sm
      font-semibold
      "
    >
      +18%
    </span>

  </div>

  <div
    className="
    flex
    items-end
    justify-between
    h-24
    "
  >

    <div className="w-4 h-10 bg-blue-300 rounded-full"></div>
    <div className="w-4 h-16 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-12 bg-blue-500 rounded-full"></div>
    <div className="w-4 h-20 bg-indigo-500 rounded-full"></div>
    <div className="w-4 h-14 bg-blue-500 rounded-full"></div>
    <div className="w-4 h-24 bg-indigo-600 rounded-full"></div>

  </div>

</div>





            {/* Activity */}

{/* Recent Activity */}

<div className="mt-5">

  <div className="flex justify-between items-center mb-3">

    <h4 className="font-bold text-slate-800">
      Recent Activity
    </h4>

    <button className="text-xs text-blue-600 font-medium">
      View All
    </button>

  </div>

  <div className="space-y-3">

    {activities.map((item, index) => (

      <div
        key={item}
        className="
        flex
        items-center
        justify-between
        bg-slate-50
        rounded-xl
        px-4
        py-3
        hover:bg-slate-100
        transition
        "
      >

        <div className="flex items-center gap-3">

          <div
            className={`
              w-2.5
              h-2.5
              rounded-full
              ${
                index === 0
                  ? "bg-green-500"
                  : index === 1
                  ? "bg-blue-500"
                  : "bg-purple-500"
              }
            `}
          />

          <span className="text-sm text-slate-700">
            {item}
          </span>

        </div>

        <span className="text-xs text-slate-400">
          {index === 0
            ? "2 min"
            : index === 1
            ? "10 min"
            : "1 hr"}
        </span>

      </div>

    ))}

  </div>

</div>

{/* Close Content */}
</div>

{/* Close Main Layout */}
</div>

</motion.div>

{/* Growth Badge */}

<motion.div
  animate={{
    y: [0, 8, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
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