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
import Logo from "./Logo";

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

const navItems = [
  { icon: <FaChartLine className="shrink-0" />, label: "Dashboard", active: true },
  { icon: <FaUsers className="shrink-0" />, label: "Customers" },
  { icon: <FaBullseye className="shrink-0" />, label: "Leads" },
  { icon: <FaTasks className="shrink-0" />, label: "Tasks" },
  { icon: <FaCog className="shrink-0" />, label: "Settings" },
];

const bars = [
  { height: "h-6", color: "bg-blue-300" },
  { height: "h-9", color: "bg-blue-400" },
  { height: "h-7", color: "bg-blue-500" },
  { height: "h-11", color: "bg-indigo-500" },
  { height: "h-8", color: "bg-blue-500" },
  { height: "h-14", color: "bg-indigo-600" },
];

export default function HeroPreview() {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{
          opacity: 0,
          y: -8,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1.3,
        }}
        className="
          absolute
          right-2
          top-2
          z-20
          hidden
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200/80
          bg-white/90
          px-2.5
          py-1.5
          shadow-lg
          backdrop-blur-xl
          sm:flex
        "
      >
        <div
          className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-blue-100
          "
        >
          <FaBell className="text-[10px] text-blue-600" />
        </div>

        <div>
          <p className="text-[10px] font-semibold leading-tight text-slate-800">
            New Lead Added
          </p>

          <p className="text-[9px] leading-tight text-slate-400">
            Just now
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-white/40
          bg-white/95
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="
            flex
            items-center
            justify-between
            bg-slate-100
            px-4
            py-2.5
          "
        >
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
          </div>

          <div
            className="
              hidden
              h-6
              w-32
              items-center
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              md:flex
            "
          >
            <span className="truncate text-[9px] text-slate-400">
              Search customers...
            </span>
          </div>

          <div
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-[9px]
              font-bold
              text-white
              shadow-md
            "
          >
            OM
          </div>
        </motion.div>

        <div className="flex">
          <div
            className="
              hidden
              w-28
              shrink-0
              flex-col
              bg-slate-900
              p-3
              text-white
              md:flex
            "
          >
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mb-4 flex items-center gap-2"
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-gradient-to-br
                  from-blue-500
                  to-purple-600
                  text-xs
                  font-black
                  shadow-lg
                "
              >
                M
              </div>

              <Logo
                size="text-xs"
                primary="text-white"
                accent="text-blue-400"
                showTagline={false}
              />
            </motion.div>

            <div className="space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.35 + index * 0.07 }}
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    px-2
                    py-1.5
                    text-[10px]
                    transition
                    ${
                      item.active
                        ? "bg-blue-600"
                        : "hover:bg-slate-800"
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1 p-4">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center justify-between"
            >
              <h3 className="text-sm font-bold text-slate-800">
                Dashboard Overview
              </h3>

              <span className="hidden text-[9px] font-medium text-slate-400 sm:block">
                This month
              </span>
            </motion.div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + index * 0.12,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-md
                        bg-blue-100
                        text-[10px]
                        text-blue-700
                      "
                    >
                      {item.icon}
                    </div>

                    <span
                      className="
                        rounded-full
                        bg-emerald-100
                        px-1.5
                        py-0.5
                        text-[7px]
                        font-semibold
                        text-emerald-700
                      "
                    >
                      +12%
                    </span>
                  </div>

                  <p className="mt-1.5 text-[9px] font-medium text-slate-500">
                    {item.title}
                  </p>

                  <h4 className="mt-0.5 text-sm font-bold text-slate-900">
                    {item.value}
                  </h4>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.85 }}
              className="
                mt-3
                rounded-lg
                bg-gradient-to-r
                from-blue-50
                to-indigo-50
                p-3
              "
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Sales Analytics
                  </h4>

                  <p className="mt-0.5 text-[8px] text-slate-500">
                    Revenue performance · Last 6 months
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    bg-emerald-100
                    px-1.5
                    py-0.5
                    text-[8px]
                    font-semibold
                    text-emerald-700
                  "
                >
                  ↑ 18.4%
                </span>
              </div>

              <div
                className="
                  flex
                  h-14
                  items-end
                  justify-between
                  gap-1.5
                "
              >
                {bars.map((bar, index) => (
                  <motion.div
                    key={index}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.0 + index * 0.06,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "bottom" }}
                    className={`w-2.5 origin-bottom rounded-full ${bar.height} ${bar.color}`}
                  />
                ))}
              </div>
            </motion.div>

            <div className="mt-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.35 }}
                className="mb-1.5 flex items-center justify-between"
              >
                <h4 className="text-xs font-bold text-slate-800">
                  Recent Activity
                </h4>

                <button className="text-[9px] font-medium text-blue-600">
                  View All
                </button>
              </motion.div>

              <div className="space-y-1.5">
                {activities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 1.45 + index * 0.1,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-lg
                      bg-slate-50
                      px-2.5
                      py-1.5
                      transition
                      hover:bg-slate-100
                    "
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <div
                        className={`
                          h-1.5
                          w-1.5
                          shrink-0
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

                      <span className="truncate text-[9px] text-slate-700">
                        {item}
                      </span>
                    </div>

                    <span className="ml-2 shrink-0 text-[8px] text-slate-400">
                      {index === 0
                        ? "2 min"
                        : index === 1
                        ? "10 min"
                        : "1 hr"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 8,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1.75,
        }}
        className="
          absolute
          bottom-2
          left-2
          z-20
          rounded-xl
          bg-white/95
          px-3
          py-1.5
          shadow-lg
          backdrop-blur-xl
        "
      >
        <p className="text-[9px] leading-tight text-slate-500">
          Monthly Growth
        </p>

        <p className="text-xs font-bold leading-tight text-green-600">
          +24%
        </p>
      </motion.div>
    </div>
  );
}
