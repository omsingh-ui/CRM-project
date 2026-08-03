export default function Features() {

  const features = [
    {
      icon: "👥",
      title: "Customer Management",
      description:
        "Store, organize, and manage customer information from one centralized dashboard.",
    },
    {
      icon: "🎯",
      title: "Lead Tracking",
      description:
        "Track every lead from first contact to successful conversion with ease.",
    },
    {
      icon: "📋",
      title: "Task Management",
      description:
        "Create, assign, and monitor tasks to keep your entire team productive.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Visualize business performance with real-time insights and reporting.",
    },
    {
      icon: "🔒",
      title: "Secure Authentication",
      description:
        "Protect business data with secure login, JWT authentication, and protected routes.",
    },
    {
      icon: "⚡",
      title: "Fast & Responsive",
      description:
        "Designed for a seamless experience across desktop, tablet, and mobile devices.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

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
            "
          >
            Features
          </span>

          <h1
            className="
            mt-6
            text-5xl
            font-black
            text-slate-900
            dark:text-white
            "
          >
            Everything You Need To Grow
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            dark:text-slate-400
            leading-relaxed
            "
          >
            Minivel combines customer management, lead tracking,
            analytics, task organization, and secure collaboration
            into one modern CRM platform built for growing businesses.
          </p>

        </div>

        {/* Features */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
              bg-white
              dark:bg-zinc-900
              rounded-3xl
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

              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h2
                className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {feature.title}
              </h2>

              <p
                className="
                mt-4
                leading-relaxed
                text-slate-600
                dark:text-slate-400
                "
              >
                {feature.description}
              </p>

            </div>

          ))}

        </div>

        {/* How It Works */}

        <div className="mt-24">

          <h2
            className="
            text-4xl
            font-bold
            text-center
            text-slate-900
            dark:text-white
            "
          >
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div
              className="
              rounded-3xl
              bg-white
              dark:bg-zinc-900
              border
              border-slate-200
              dark:border-zinc-800
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <div className="text-5xl mb-5">1️⃣</div>

              <h3 className="text-2xl font-bold dark:text-white">
                Add Customers
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Save customer information securely and keep everything organized.
              </p>

            </div>

            <div
              className="
              rounded-3xl
              bg-white
              dark:bg-zinc-900
              border
              border-slate-200
              dark:border-zinc-800
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <div className="text-5xl mb-5">2️⃣</div>

              <h3 className="text-2xl font-bold dark:text-white">
                Track Progress
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Manage leads, monitor tasks, and stay on top of every opportunity.
              </p>

            </div>

            <div
              className="
              rounded-3xl
              bg-white
              dark:bg-zinc-900
              border
              border-slate-200
              dark:border-zinc-800
              p-8
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <div className="text-5xl mb-5">3️⃣</div>

              <h3 className="text-2xl font-bold dark:text-white">
                Grow Your Business
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Use analytics and insights to make smarter business decisions.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Summary */}

        <div
          className="
          mt-24
          rounded-[36px]
          bg-gradient-to-r
          from-blue-700
          via-indigo-700
          to-purple-700
          p-12
          text-center
          text-white
          "
        >

          <h2 className="text-4xl font-black">
            Built for Modern Businesses
          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-relaxed
            text-blue-100
            max-w-3xl
            mx-auto
            "
          >
            Minivel is designed to simplify customer relationships,
            streamline sales workflows, improve team collaboration,
            and provide actionable insights through one secure,
            fast, and intuitive CRM platform.
          </p>

        </div>

      </div>

    </section>
  );
}