import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-blue-600
        via-blue-700
        to-indigo-800
        text-white
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/5
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/3
          h-[380px]
          w-[380px]
          rounded-full
          bg-blue-400/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          right-0
          h-[340px]
          w-[340px]
          rounded-full
          bg-indigo-400/15
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          px-6
          py-14
          lg:grid-cols-[1fr_1.1fr]
          lg:gap-8
          lg:py-14
          xl:gap-14
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            z-10
            max-w-xl
          "
        >
          <h1
            className="
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              md:text-[44px]
              lg:text-[50px]
              xl:text-[54px]
            "
          >
            Manage Customers
            <br />
            Convert Leads
            <br />
            Grow Your Business
          </h1>

          <p
            className="
              mt-5
              max-w-lg
              text-base
              font-medium
              leading-7
              text-blue-100
              md:text-lg
            "
          >
            Manage customers, track leads, and organize your team's workflow
            with a powerful CRM platform built for modern businesses.
          </p>

          <div className="mt-7">
            <Link
              to="/register"
              className="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-white
                px-8
                py-4
                font-bold
                text-blue-800
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:bg-blue-50
                hover:shadow-2xl
                active:scale-[0.98]
              "
            >
              Create Free Account
            </Link>
          </div>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-blue-100
                backdrop-blur-md
              "
            >
              ✓ Secure Platform
            </span>

            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-blue-100
                backdrop-blur-md
              "
            >
              ✓ Easy Setup
            </span>

            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3.5
                py-1.5
                text-xs
                font-medium
                text-blue-100
                backdrop-blur-md
              "
            >
              ✓ Real-time Updates
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            lg:justify-end
          "
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              w-full
              max-w-[480px]
              sm:max-w-[520px]
              lg:max-w-[540px]
              xl:max-w-[580px]
            "
          >
            <HeroPreview />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
