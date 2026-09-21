import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for individuals getting started.",
    features: [
      "Customer Management",
      "Lead Tracking",
      "Dashboard Access",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "Everything growing businesses need.",
    features: [
      "Unlimited Customers",
      "Advanced Analytics",
      "Task Management",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Tailored for large organizations.",
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Premium Support",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I upgrade later?",
    answer: "Yes. You can switch plans anytime without losing your data.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Our Free plan lets you explore the core CRM features without any cost.",
  },
  {
    question: "Do you offer enterprise solutions?",
    answer:
      "Yes. We provide custom integrations, dedicated support, and scalable deployments.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export default function Pricing() {
  return (
    <div className="py-16 lg:py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* ==========================
            HERO
        ========================== */}

        <div className="text-center">

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
              Pricing
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
              Simple, honest pricing
            </h1>

          </ScrollReveal>

          <ScrollReveal delay={0.16}>

            <p
              className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              text-slate-600
              dark:text-slate-400
              lg:text-lg
              "
            >
              Choose the plan that fits your business today and upgrade
              anytime as your team grows.
            </p>

          </ScrollReveal>

        </div>

        {/* ==========================
            PRICING CARDS
        ========================== */}

        <div
          className="
          mt-14
          grid
          items-start
          gap-6
          md:grid-cols-3
          "
        >

          {plans.map((plan, index) => (

            <ScrollReveal
              key={plan.name}
              delay={index * 0.1}
            >

              <div
                className={`
                  relative
                  rounded-3xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  ${
                    plan.popular
                      ? "p-[1px] bg-gradient-to-br from-indigo-400 via-violet-500 to-teal-400 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.5)] md:scale-105"
                      : ""
                  }
                `}
              >

                {/* Most Popular */}

                {plan.popular && (

                  <span
                    className="
                    absolute
                    -top-3.5
                    left-1/2
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    bg-white
                    px-4
                    py-1.5
                    text-xs
                    font-bold
                    tracking-wide
                    text-indigo-700
                    shadow-lg
                    "
                  >
                    MOST POPULAR
                  </span>

                )}

                <div
                  className={`
                    relative
                    h-full
                    rounded-3xl
                    p-8
                    transition-all
                    duration-300
                    ${
                      plan.popular
                        ? "overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 text-white"
                        : "border border-slate-200 bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                    }
                  `}
                >

                  {/* Background Pattern */}

                  {plan.popular && (

                    <div
                      className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-[0.06]
                      "
                      style={{
                        backgroundImage:
                          "radial-gradient(white 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />

                  )}

                  <div className="relative">

                    <h2 className="mt-3 text-xl font-bold">
                      {plan.name}
                    </h2>

                    <p
                      className={`
                        mt-2
                        text-sm
                        ${
                          plan.popular
                            ? "text-indigo-100"
                            : "text-slate-500 dark:text-slate-400"
                        }
                      `}
                    >
                      {plan.description}
                    </p>

                    {/* Price */}

                    <div className="mt-6 flex items-baseline gap-2">

                      <span
                        className="
                        font-mono
                        text-4xl
                        font-semibold
                        tracking-tight
                        "
                      >
                        {plan.price}
                      </span>

                      <span
                        className={`
                          text-sm
                          ${
                            plan.popular
                              ? "text-indigo-200"
                              : "text-slate-500 dark:text-slate-400"
                          }
                        `}
                      >
                        {plan.period}
                      </span>

                    </div>

                    {/* Divider */}

                    <div
                      className={`
                        mt-7
                        h-px
                        ${
                          plan.popular
                            ? "bg-white/15"
                            : "bg-slate-100 dark:bg-zinc-800"
                        }
                      `}
                    />

                    {/* Features */}

                    <ul className="mt-7 space-y-3.5">

                      {plan.features.map((feature) => (

                        <li
                          key={feature}
                          className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          "
                        >

                          <span
                            className={`
                              flex
                              h-5
                              w-5
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              text-xs
                              ${
                                plan.popular
                                  ? "bg-white/15 text-white"
                                  : "bg-gradient-to-br from-indigo-500 to-violet-500 text-white"
                              }
                            `}
                          >
                            <FaCheck className="text-[9px]" />
                          </span>

                          <span
                            className={
                              plan.popular
                                ? "text-white/90"
                                : "text-slate-700 dark:text-slate-300"
                            }
                          >
                            {feature}
                          </span>

                        </li>

                      ))}

                    </ul>

                    {/* Button */}

                    <Link
                      to="/register"
                      className={`
                        mt-9
                        flex
                        w-full
                        items-center
                        justify-center
                        rounded-xl
                        py-3
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          plan.popular
                            ? "bg-white text-indigo-700 hover:-translate-y-0.5 hover:shadow-lg"
                            : "bg-slate-900 text-white hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
                        }
                      `}
                    >
                      Get started
                    </Link>

                  </div>

                </div>

              </div>

            </ScrollReveal>

          ))}

        </div>

        {/* ==========================
            FAQ
        ========================== */}

        <div
          className="
          mx-auto
          mt-20
          max-w-3xl
          lg:mt-24
          "
        >

          <ScrollReveal>

            <div className="text-center">

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
                FAQ
              </span>

              <h2
                className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                dark:text-white
                "
              >
                Frequently asked questions
              </h2>

            </div>

          </ScrollReveal>

          <div className="mt-10 space-y-4">

            {faqs.map((faq, index) => (

              <ScrollReveal
                key={faq.question}
                delay={index * 0.08}
              >

                <div
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  pl-7
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  dark:border-zinc-800
                  dark:bg-zinc-900
                  "
                >

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-1
                    origin-top
                    scale-y-0
                    bg-gradient-to-b
                    from-indigo-500
                    to-violet-500
                    transition-transform
                    duration-300
                    group-hover:scale-y-100
                    "
                  />

                  <h3
                    className="
                    text-base
                    font-bold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {faq.question}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-slate-400
                    "
                  >
                    {faq.answer}
                  </p>

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

        {/* ==========================
            CTA
        ========================== */}

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="
          relative
          mt-20
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-indigo-600
          via-indigo-700
          to-violet-800
          p-10
          text-center
          text-white
          lg:mt-24
          md:p-14
          "
        >

          {/* Background Pattern */}

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

          {/* Background Glow */}

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
              Ready to get started?
            </h2>

            <p className="mt-4 text-indigo-100">
              Build stronger customer relationships with MiniVel today.
            </p>

            <Link
              to="/register"
              className="
              group
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-white
              px-8
              py-4
              font-semibold
              text-indigo-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              Create free account
            </Link>

          </div>

        </motion.div>

      </div>

    </div>
  );
}