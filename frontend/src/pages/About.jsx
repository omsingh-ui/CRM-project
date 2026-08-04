import { Link } from "react-router-dom";
import { FaArrowRight, FaUsers, FaChartLine } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-zinc-950 overflow-x-hidden">

      {/* ==========================
          HERO
      ========================== */}

      <section className="relative overflow-hidden">

        {/* Background Glow */}

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-5 py-2 font-medium mb-6">

            <FaUsers />

            About Minivel

          </div>

          {/* Heading */}

          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white max-w-4xl">

            Building a Simpler CRM
            <br />

            for Growing Businesses

          </h1>

          {/* Description */}

          <p className="mt-8 text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">

            Minivel helps businesses manage customers, track leads,
            organize daily tasks, and monitor growth from one modern,
            secure, and easy-to-use CRM platform.

          </p>

          {/* Buttons */}

          {/* Stats */}

<div className="mt-16 grid gap-6 md:grid-cols-3">

  {/* Card 1 */}

  <div
    className="
    group
    rounded-3xl
    bg-white
    dark:bg-zinc-900
    border
    border-slate-200
    dark:border-zinc-800
    p-6
    shadow-sm
    cursor-pointer
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
    "
  >

    <FaUsers
      className="
      text-3xl
      text-blue-700
      mb-4
      transition-transform
      duration-300
      group-hover:scale-110
      "
    />

    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
      Customer First
    </h3>

    <p className="mt-2 text-slate-600 dark:text-slate-400">
      Every feature is designed to simplify customer management.
    </p>

  </div>

  {/* Card 2 */}

  <div
    className="
    group
    rounded-3xl
    bg-white
    dark:bg-zinc-900
    border
    border-slate-200
    dark:border-zinc-800
    p-6
    shadow-sm
    cursor-pointer
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
    "
  >

    <FaChartLine
      className="
      text-3xl
      text-blue-700
      mb-4
      transition-transform
      duration-300
      group-hover:scale-110
      "
    />

    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
      Growth Focused
    </h3>

    <p className="mt-2 text-slate-600 dark:text-slate-400">
      Track leads, revenue, and performance from one dashboard.
    </p>

  </div>

  {/* Card 3 */}

  <div
    className="
    group
    rounded-3xl
    bg-white
    dark:bg-zinc-900
    border
    border-slate-200
    dark:border-zinc-800
    p-6
    shadow-sm
    cursor-pointer
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
    "
  >

    <div
      className="
      text-3xl
      mb-4
      transition-transform
      duration-300
      group-hover:scale-110
      "
    >
      🔒
    </div>

    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
      Secure Platform
    </h3>

    <p className="mt-2 text-slate-600 dark:text-slate-400">
      Authentication, protected routes, and secure data handling.
    </p>

  </div>

</div>
        </div>

      </section>
      {/* ==========================
    OUR STORY
========================== */}

<section className="py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}

      <div>

        <span
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-blue-100
          dark:bg-blue-900/30
          text-blue-700
          dark:text-blue-300
          font-semibold
          mb-6
          "
        >
          Our Story
        </span>

        <h2
          className="
          text-4xl
          lg:text-5xl
          font-black
          text-slate-900
          dark:text-white
          leading-tight
          "
        >
          Helping Businesses Stay Organized
        </h2>

        <p
          className="
          mt-8
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-300
          "
        >
          Managing customers, leads, and daily operations shouldn't require
          multiple spreadsheets or disconnected tools. Minivel was designed
          to bring everything together into one simple and modern CRM platform.
        </p>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-300
          "
        >
          Our goal is to help teams save time, improve productivity, and
          focus on building stronger customer relationships with an intuitive,
          secure, and scalable solution.
        </p>

      </div>

      {/* Right Side */}

      <div
       
  className="
  rounded-3xl
  bg-white
  dark:bg-zinc-900
  border
  border-slate-200
  dark:border-zinc-800
  p-8
  shadow-sm
  transition-all
  duration-300
  hover:-translate-y-2
  hover:shadow-2xl
  "
>
      

        <div className="space-y-8">

          <div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              🎯 Our Mission
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">
              Build CRM software that is powerful enough for businesses
              yet simple enough for every team member to use.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              🚀 Our Vision
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">
              Become the preferred CRM platform for growing businesses by
              combining simplicity, speed, and modern technology.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ==========================
    WHY CHOOSE MINIVEL
========================== */}

<section className="py-24 bg-slate-50 dark:bg-zinc-900/40">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <span
        className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-blue-100
        dark:bg-blue-900/30
        text-blue-700
        dark:text-blue-300
        font-semibold
        mb-6
        "
      >
        Why Choose Minivel
      </span>

      <h2
        className="
        text-4xl
        lg:text-5xl
        font-black
        text-slate-900
        dark:text-white
        "
      >
        Everything You Need to Grow
      </h2>

      <p
        className="
        mt-6
        text-lg
        text-slate-600
        dark:text-slate-300
        "
      >
        Minivel combines customer management, lead tracking,
        analytics, and team productivity into one modern platform.
      </p>

    </div>


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {/* Card 1 */}

      <div
        className="
        bg-white
        dark:bg-zinc-900
        rounded-3xl
        p-8
        border
        border-slate-200
        dark:border-zinc-800
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        "
      >

        <div className="text-5xl mb-6">👥</div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

          Customer Management

        </h3>

        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">

          Store customer information securely and access it from one centralized dashboard.

        </p>

      </div>


      {/* Card 2 */}

      <div
        className="
        bg-white
        dark:bg-zinc-900
        rounded-3xl
        p-8
        border
        border-slate-200
        dark:border-zinc-800
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        "
      >

        <div className="text-5xl mb-6">📈</div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

          Lead Tracking

        </h3>

        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">

          Track every opportunity from the first inquiry to successful conversion.

        </p>

      </div>


      {/* Card 3 */}

      <div
        className="
        bg-white
        dark:bg-zinc-900
        rounded-3xl
        p-8
        border
        border-slate-200
        dark:border-zinc-800
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        "
      >

        <div className="text-5xl mb-6">📊</div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

          Smart Analytics

        </h3>

        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">

          Visual dashboards help you understand business performance in real time.

        </p>

      </div>


      {/* Card 4 */}

      <div
        className="
        bg-white
        dark:bg-zinc-900
        rounded-3xl
        p-8
        border
        border-slate-200
        dark:border-zinc-800
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        "
      >

        <div className="text-5xl mb-6">🔒</div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

          Secure Platform

        </h3>

        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">

          JWT authentication and protected routes keep your business data safe.

        </p>

      </div>

    </div>

  </div>

</section>
{/* ==========================
    TECH STACK
========================== */}

<section className="py-20">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold mb-5">
      Built With
    </span>

    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
      Modern Technologies
    </h2>

    <div className="flex flex-wrap justify-center gap-5">

      {[
        "React 19",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT"
      ].map((tech) => (

        <div
          key={tech}
          className="
          px-6
          py-4
          rounded-2xl
          bg-white
          dark:bg-zinc-900
          border
          border-slate-200
          dark:border-zinc-800
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          "
        >
          <span className="font-semibold text-slate-800 dark:text-white">
            {tech}
          </span>
        </div>

      ))}

    </div>

  </div>

</section>
{/* ==========================
    FINAL CTA
========================== */}

<section className="pb-24">

  <div className="max-w-5xl mx-auto px-6">

    <div
      className="
      rounded-[32px]
      bg-gradient-to-r
      from-blue-700
      to-indigo-700
      text-white
      p-10
      text-center
      shadow-2xl
      "
    >

      <h2 className="text-4xl font-bold">
        Ready to simplify your workflow?
      </h2>

      <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
        Join businesses using Minivel to manage customers, leads, and daily operations from one modern CRM platform.
      </p>

      <Link
        to="/register"
        className="
        inline-flex
        items-center
        justify-center
        mt-8
        px-8
        py-4
        rounded-xl
        bg-white
        text-blue-700
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        "
      >
        Create Free Account
      </Link>

    </div>

  </div>

</section>

    </div>
  );
}