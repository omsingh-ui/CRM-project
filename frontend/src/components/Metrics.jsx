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

    <section className="py-4">

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


           {metrics.map((item, index) => (

  <motion.div
    key={item.label}

    initial={{
      opacity: 0,
      y: 30,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      duration: 0.5,
      delay: index * 0.1,
    }}

    whileHover={{
      y: -8,
      scale: 1.02,
    }}

    className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      dark:border-zinc-800
      bg-white
      dark:bg-zinc-950
      bg-gradient-to-br
      ${item.theme}
      p-6
      shadow-md
      hover:shadow-2xl
      hover:border-blue-300
      dark:hover:border-blue-700
      transition-all
      duration-300
    `}
  >

    {/* Top Accent */}

    <div
      className={`
        absolute
        top-0
        left-0
        h-1
        w-full
        bg-gradient-to-r
        ${item.iconStyle}
        opacity-80
      `}
    />

    


                

                {/* Card Glow */}

{/* Card Glow */}

<div
  className="
    absolute
    -right-12
    -top-12
    h-36
    w-36
    rounded-full
    bg-white/20
    blur-3xl
    opacity-40
    transition-all
    duration-500
    group-hover:opacity-100
    group-hover:scale-125
  "
/>

{/* Bottom Gradient */}

<div
  className="
    absolute
    bottom-0
    left-0
    h-24
    w-full
    bg-gradient-to-t
    from-white/20
    dark:from-white/5
    to-transparent
    pointer-events-none
  "
/>


               {/* Icon */}

<motion.div

  whileHover={{
    scale: 1.08,
  }}

  transition={{
    duration: 0.25,
  }}

  className={`
    relative
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-br
    ${item.iconStyle}
    text-xl
    text-white
    shadow-lg
    ring-1
    ring-white/10
  `}
>

  {/* Icon Glow */}

  <div
    className="
      absolute
      inset-0
      rounded-2xl
      bg-white/10
      opacity-0
      transition-opacity
      duration-300
      group-hover:opacity-100
    "
  />

  <span className="relative z-10">

    {item.icon}

  </span>

</motion.div>



{/* Number */}

<h2
  className="
    mt-6
    text-5xl
    font-black
    tracking-tight
    text-slate-900
    dark:text-white
  "
>

  {item.value}

</h2>



{/* Label */}

<p
  className="
    mt-2
    text-lg
    font-semibold
    text-slate-900
    dark:text-white
  "
>

  {item.label}

</p>



{/* Description */}

<p
  className="
    mt-3
    text-sm
    leading-6
    text-slate-600
    dark:text-slate-400
  "
>

  {item.description}

</p>



{/* Badge */}

<div
  className="
    mt-5
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-slate-200
    dark:border-zinc-700
    bg-white/70
    dark:bg-zinc-900/60
    px-3
    py-1.5
    text-xs
    font-semibold
    text-slate-700
    dark:text-slate-300
    backdrop-blur-sm
  "
>

  <span
    className={`
      h-2
      w-2
      rounded-full
      ${item.color}
    `}
  />

  {item.badge}

</div>

</motion.div>

))}

</div>

</div>

</div>

</section>
  )
};