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

<div className="max-w-3xl mx-auto text-center">

  <span
    className="
    inline-flex
    items-center
    rounded-full
    bg-blue-50
    dark:bg-blue-950
    px-4
    py-2
    text-sm
    font-semibold
    text-blue-700
    dark:text-blue-300
    "
  >
    💬 Support Center
  </span>

  <h1
    className="
    mt-6
    text-4xl
    md:text-5xl
    font-black
    tracking-tight
    text-slate-900
    dark:text-white
    "
  >
    How can we help you today?
  </h1>

  <p
    className="
    mt-5
    text-lg
    leading-8
    text-slate-500
    dark:text-slate-400
    "
  >
    Browse documentation, find answers to common questions,
    and get support for your Minivel workspace.
  </p>

</div>
   

{/* Quick Help */}

<div
  className="
  mt-16
  grid
  gap-6
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
        h-full
        rounded-3xl
        border
        border-slate-200
        dark:border-zinc-800
        bg-white
        dark:bg-zinc-900
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-xl
        "
      >
        <div className="text-4xl">
          {item.icon}
        </div>

        <h3
          className="
          mt-5
          text-xl
          font-bold
          text-slate-900
          dark:text-white
          "
        >
          {item.title}
        </h3>

        <p
          className="
          mt-3
          text-sm
          leading-7
          text-slate-500
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

<div className="mt-24">

  <div className="max-w-3xl mx-auto text-center">

    <h2
      className="
      text-3xl
      md:text-4xl
      font-black
      text-slate-900
      dark:text-white
      "
    >
      Frequently Asked Questions
    </h2>

    <p
      className="
      mt-4
      text-slate-500
      dark:text-slate-400
      "
    >
      Find quick answers to the questions we receive most often.
    </p>

  </div>

  <div
    className="
    max-w-4xl
    mx-auto
    mt-12
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
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          shadow-sm
          "
        >

          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="
            flex
            w-full
            items-center
            justify-between
            px-6
            py-5
            text-left
            "
          >

            <span
              className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              {item.question}
            </span>

            <span
              className={`
              text-2xl
              transition-transform
              duration-300
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
              dark:border-zinc-800
              px-6
              pb-6
              pt-4
              "
            >

              <p
                className="
                leading-7
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
    mt-24
    overflow-hidden
    rounded-[36px]
    bg-gradient-to-r
    from-blue-700
    via-indigo-700
    to-purple-800
    px-8
    py-12
    text-center
    text-white
    relative
    "
  >

    {/* Background Glow */}

    <div
      className="
      absolute
      -top-20
      -left-20
      h-60
      w-60
      rounded-full
      bg-white/10
      blur-3xl
      "
    />

    <div
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

    <div className="relative">

      <span
        className="
        inline-flex
        items-center
        rounded-full
        bg-white/10
        border
        border-white/20
        px-4
        py-2
        text-sm
        font-semibold
        backdrop-blur
        "
      >
        💬 Need More Help?
      </span>

      <h2
        className="
        mt-6
        text-3xl
        md:text-5xl
        font-black
        "
      >
        Our team is here to help.
      </h2>

      <p
        className="
        mt-5
        max-w-2xl
        mx-auto
        text-blue-100
        text-lg
        leading-8
        "
      >
        Can't find what you're looking for?
        Reach out to our support team and
        we'll help you as quickly as possible.
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

        <a
          href="mailto:support@minivel.com"
          className="
          rounded-xl
          bg-white
          px-8
          py-4
          font-semibold
          text-blue-700
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          "
        >
          support@minivel.com
        </a>

        
         <Link
  to="/contact"
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