import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const features = [
  {
    icon: "👥",
    accent: "from-indigo-500 to-violet-500",
    title: "Customer Management",
    description:
      "Keep customer information organized in one place and build stronger relationships with your customers.",
  },
  {
    icon: "🎯",
    accent: "from-teal-500 to-emerald-500",
    title: "Lead Tracking",
    description:
      "Track leads from the first interaction to conversion and keep every opportunity moving forward.",
  },
  {
    icon: "📋",
    accent: "from-violet-500 to-fuchsia-500",
    title: "Task Management",
    description:
      "Create, organize, and monitor tasks so your team stays focused and nothing important gets missed.",
  },
  {
    icon: "📊",
    accent: "from-blue-500 to-indigo-500",
    title: "Analytics Dashboard",
    description:
      "Turn your CRM data into clear insights and understand how your business is performing.",
  },
  {
    icon: "🔒",
    accent: "from-amber-500 to-orange-500",
    title: "Secure Authentication",
    description:
      "Keep your CRM protected with secure authentication, JWT-based access, and protected application routes.",
  },
  {
    icon: "⚡",
    accent: "from-emerald-500 to-teal-500",
    title: "Fast & Responsive",
    description:
      "Access your CRM comfortably across desktop, tablet, and mobile with a responsive experience.",
  },
];

const steps = [
  {
    number: "01",
    title: "Add Your Customers",
    description:
      "Bring your customer information into one organized workspace and keep everything easy to manage.",
  },
  {
    number: "02",
    title: "Manage Your Workflow",
    description:
      "Track leads, organize tasks, and stay on top of every customer opportunity from one place.",
  },
  {
    number: "03",
    title: "Make Smarter Decisions",
    description:
      "Use analytics and business insights to understand your performance and plan your next move.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export default function Features() {
  return (
    <section className="bg-slate-50/70 py-16 dark:bg-zinc-950 lg:py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* ==========================
            HERO
        ========================== */}

        <div className="mx-auto max-w-2xl text-center">

          <ScrollReveal>
            <span
              className="
              inline-block
              rounded-full
              bg-indigo-50
              px-3.5
              py-1.5
              text-sm
              font-semibold
              text-indigo-700
              dark:bg-indigo-500/10
              dark:text-indigo-300
              "
            >
              Features
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1
              className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
              lg:text-5xl
              "
            >
              Everything you need to manage and grow
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p
              className="
              mt-5
              text-base
              leading-relaxed
              text-slate-600
              dark:text-slate-400
              lg:text-lg
              "
            >
              MiniVel brings customer management, lead tracking, task
              organization, analytics, and secure workflows together in one
              modern CRM built to help your business work smarter.
            </p>
          </ScrollReveal>

        </div>

        {/* ==========================
            FEATURES GRID
        ========================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...fadeUp}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200/80
              bg-white
              p-7
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:border-transparent
              hover:shadow-xl
              dark:border-zinc-800
              dark:bg-zinc-900
              "
            >

              {/* Gradient Top Line */}

              <div
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-[3px]
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  ${feature.accent}
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                `}
              />

              {/* Icon */}

              <div
                className={`
                  mb-5
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${feature.accent}
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  group-hover:-rotate-6
                `}
              >
                {feature.icon}
              </div>

              {/* Title */}

              <h2
                className="
                text-lg
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {feature.title}
              </h2>

              {/* Description */}

              <p
                className="
                mt-2.5
                text-sm
                leading-6
                text-slate-600
                dark:text-slate-400
                "
              >
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* ==========================
            HOW IT WORKS
        ========================== */}

        <div className="mt-8 lg:mt-10">
          <div className="mx-auto max-w-xl text-center">

            <ScrollReveal>
              <span
                className="
                inline-block
                rounded-full
                bg-indigo-50
                px-3.5
                py-1.5
                text-sm
                font-semibold
                text-indigo-700
                dark:bg-indigo-500/10
                dark:text-indigo-300
                "
              >
                Getting Started
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                dark:text-white
                lg:text-4xl
                "
              >
                Simple tools. Smarter workflow.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p
                className="
                mt-4
                text-base
                leading-7
                text-slate-600
                dark:text-slate-400
                "
              >
                Get your CRM organized, keep your team aligned, and turn
                everyday business activity into meaningful progress.
              </p>
            </ScrollReveal>

          </div>

          <div className="relative mt-6 grid gap-5 md:grid-cols-3">

            {/* Connecting line — desktop only */}

            <div
              className="
              absolute
              left-[16.5%]
              right-[16.5%]
              top-9
              hidden
              h-px
              bg-gradient-to-r
              from-indigo-200
              via-violet-200
              to-teal-200
              dark:from-indigo-500/20
              dark:via-violet-500/20
              dark:to-teal-500/20
              md:block
              "
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
                className="
                relative
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-xl
                dark:border-zinc-800
                dark:bg-zinc-900
                "
              >

                {/* Step Number */}

                <div
                  className="
                  relative
                  z-10
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-indigo-600
                  to-violet-600
                  text-lg
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-indigo-500/30
                  "
                >
                  {step.number}
                </div>

                {/* Title */}

                <h3
                  className="
                  mt-5
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  mt-2.5
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                  "
                >
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

        {/* ==========================
            BOTTOM SUMMARY
        ========================== */}

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="
          relative
          mt-8
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-indigo-600
          via-indigo-700
          to-violet-800
          p-10
          text-center
          text-white
          lg:mt-10
          md:p-14
          "
        >

          {/* Pattern */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
            "
            style={{
              backgroundImage:
                "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Decorative Glow */}

          <div
            className="
            absolute
            -right-16
            -top-16
            h-64
            w-64
            rounded-full
            bg-teal-400/20
            blur-3xl
            "
          />

          <div
            className="
            absolute
            -bottom-16
            -left-16
            h-64
            w-64
            rounded-full
            bg-indigo-400/20
            blur-3xl
            "
          />

          <div className="relative">

            <h2
              className="
              text-3xl
              font-bold
              tracking-tight
              md:text-4xl
              "
            >
              Built to help your business grow
            </h2>

            <p
              className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-relaxed
              text-indigo-100
              lg:text-lg
              "
            >
              MiniVel gives you the tools to manage customer relationships,
              organize your sales workflow, understand your performance,
              and make smarter decisions from one simple CRM platform.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}