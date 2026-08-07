import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="cta" className="py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-blue-700
          via-indigo-700
          to-purple-800
          px-10
          py-16
          text-center
          text-white
          shadow-2xl
          "
        >

          {/* Background Glow */}

          <motion.div
  animate={{
    x: [0, 15, 0],
    y: [0, -10, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    -top-16
    -left-16
    h-64
    w-64
    rounded-full
    bg-white/10
    blur-3xl
  "
/>

        <motion.div
  animate={{
    x: [0, -15, 0],
    y: [0, 10, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    -bottom-20
    -right-20
    h-72
    w-72
    rounded-full
    bg-cyan-400/20
    blur-3xl
  "
/>

          {/* Content */}

          <div className="relative">

            <span
              className="
              inline-block
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-sm
              font-semibold
              backdrop-blur
              "
            >
              ✨ Start Growing Today
            </span>

            <h2
              className="
              mt-8
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              "
            >
              Build Stronger
              <br />
              Customer Relationships
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
              leading-8
              "
            >
              Manage customers, track leads, organize tasks, and grow your
              business from one modern CRM platform.
            </p>

            <div
              className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
              "
            >

              <Link
                to="/register"
               className="
group
inline-flex
items-center
justify-center
gap-2
rounded-xl
bg-white
px-8
py-4
font-semibold
text-blue-700
shadow-lg
transition
duration-300
hover:-translate-y-1
hover:scale-[1.02]
hover:bg-blue-50
hover:shadow-2xl
active:scale-[0.98]
"
              >
                <>
  Create Free Account

  <FaArrowRight
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</>
              </Link>

              <Link
                to="/features"
                className="
                rounded-xl
                border
                border-white/30
                bg-white/10
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/20
                "
              >
                Explore Features
              </Link>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}