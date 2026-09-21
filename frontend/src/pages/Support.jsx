import AnimatedCard from "../components/AnimatedCard";
import { useState } from "react";
import { Link } from "react-router-dom";
const helpCards = [
  {
    title: "Getting Started",
    desc: "Learn how to create your account and set up your CRM workspace.",
    icon: "🚀",
  },
  {
    title: "Customer Management",
    desc: "Manage customers, organize contacts, and track every interaction.",
    icon: "👥",
  },
  {
    title: "Account Settings",
    desc: "Update your profile, change preferences, and manage your account.",
    icon: "⚙️",
  },
  {
    title: "Security",
    desc: "Learn how Minivel protects your data and keeps your account secure.",
    icon: "🔒",
  },
];

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click the 'Create Free Account' button on the homepage and complete the registration form to get started.",
  },
  {
    question: "How do I manage customers?",
    answer:
      "Navigate to the Dashboard and use the Customers section to add, edit, organize, and manage customer information.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Minivel follows modern security practices to protect your account and business data.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can use the Contact page or email our support team for assistance with your account.",
  },
];
export default function Support() {
    const [open, setOpen] = useState(null);
  return (
    <section className="py-24">
      {/* Hero */}

{/* Hero */}

<div className="mx-auto max-w-3xl text-center">

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
    Support Center
  </span>

  <h1
    className="
    mt-5
    text-4xl
    font-bold
    tracking-tight
    text-slate-900
    dark:text-white
    md:text-5xl
    "
  >
    We're here to help
  </h1>

  <p
    className="
    mx-auto
    mt-5
    max-w-2xl
    text-base
    leading-7
    text-slate-600
    dark:text-slate-400
    lg:text-lg
    "
  >
    Find answers, explore helpful resources, or get support
    for your MiniVel workspace.
  </p>

</div>
   

{/* Quick Help */}

<div
  className="
  mt-14
  grid
  gap-5
  md:grid-cols-2
  lg:grid-cols-4
"
>
  {helpCards.map((item, index) => (
    <AnimatedCard
      key={item.title}
      delay={index * 0.08}
    >
      <div
        className="
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        p-7
        shadow-sm
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
          className="
          absolute
          inset-x-0
          top-0
          h-[3px]
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-indigo-500
          to-violet-500
          transition-transform
          duration-300
          group-hover:scale-x-100
          "
        />

        {/* Icon */}

        <div
          className="
          inline-flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-500
          to-violet-500
          text-xl
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:-rotate-6
          "
        >
          {item.icon}
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
          {item.title}
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
          {item.desc}
        </p>

      </div>
    </AnimatedCard>
  ))}
</div>

{/* FAQ */}

<div className="mt-20 lg:mt-24">

  {/* FAQ Header */}

  <div className="mx-auto max-w-3xl text-center">

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
      Frequently Asked Questions
    </span>

    <h2
      className="
      mt-5
      text-3xl
      font-bold
      tracking-tight
      text-slate-900
      dark:text-white
      md:text-4xl
      "
    >
      Answers to common questions
    </h2>

    <p
      className="
      mx-auto
      mt-4
      max-w-2xl
      text-base
      leading-7
      text-slate-600
      dark:text-slate-400
      "
    >
      Find quick answers about getting started, managing your
      workspace, and using MiniVel.
    </p>

  </div>

  {/* Questions */}

  <div
    className="
    mx-auto
    mt-10
    max-w-4xl
    space-y-4
    "
  >

    {faqs.map((item, index) => (

      <AnimatedCard
        key={item.question}
        delay={index * 0.05}
      >

        <div
          className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:shadow-md
          dark:border-zinc-800
          dark:bg-zinc-900
          "
        >

          <button
            type="button"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            px-6
            py-5
            text-left
            "
          >

            <span
              className="
              text-base
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              {item.question}
            </span>

            <span
              className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-indigo-50
              text-xl
              font-medium
              text-indigo-600
              transition-transform
              duration-300
              dark:bg-indigo-500/10
              dark:text-indigo-400
              ${open === index ? "rotate-45" : ""}
              `}
            >
              +
            </span>

          </button>

          {open === index && (

            <div
              className="
              border-t
              border-slate-200
              px-6
              pb-6
              pt-4
              dark:border-zinc-800
              "
            >

              <p
                className="
                text-sm
                leading-6
                text-slate-600
                dark:text-slate-400
                "
              >
                {item.answer}
              </p>

            </div>

          )}

        </div>

      </AnimatedCard>

    ))}

  </div>

</div>

{/* Contact Support */}

<AnimatedCard delay={0.2}>

  <div
    className="
    relative
    mt-20
    overflow-hidden
    rounded-[32px]
    bg-gradient-to-br
    from-indigo-600
    via-indigo-700
    to-violet-800
    px-8
    py-12
    text-center
    text-white
    lg:mt-24
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
      pointer-events-none
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
      pointer-events-none
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

      {/* Badge */}

      <span
        className="
        inline-block
        rounded-full
        border
        border-white/20
        bg-white/10
        px-3.5
        py-1.5
        text-sm
        font-semibold
        backdrop-blur
        "
      >
        Need More Help?
      </span>

      {/* Heading */}

      <h2
        className="
        mt-5
        text-3xl
        font-bold
        tracking-tight
        md:text-4xl
        "
      >
        We're here when you need us
      </h2>

      {/* Description */}

      <p
        className="
        mx-auto
        mt-5
        max-w-2xl
        text-base
        leading-7
        text-indigo-100
        lg:text-lg
        "
      >
        Can't find what you're looking for?
        Reach out to our support team and
        we'll help you get the answers you need.
      </p>

      {/* Actions */}

      <div
        className="
        mt-8
        flex
        flex-col
        justify-center
        gap-3
        sm:flex-row
        "
      >

        <a
          href="mailto:support@minivel.com"
          className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-white
          px-6
          py-3.5
          font-semibold
          text-indigo-700
          shadow-lg
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-xl
          "
        >
          support@minivel.com
        </a>

        <Link
          to="/contact"
          className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          border
          border-white/30
          bg-white/10
          px-6
          py-3.5
          font-semibold
          text-white
          backdrop-blur
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-white/20
          "
        >
          Contact Us
        </Link>

      </div>

    </div>

  </div>

</AnimatedCard>

</section>
  );
}