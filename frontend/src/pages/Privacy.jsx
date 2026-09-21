import AnimatedCard from "../components/AnimatedCard";

const privacySections = [
  {
    icon: "🛡️",
    title: "Information We Collect",
    content:
      "Minivel collects essential account information, customer records, and platform usage data required to provide CRM services, improve performance, and deliver a secure user experience.",
  },
  {
    icon: "🔐",
    title: "How We Use Your Information",
    content:
      "Your information is used to manage customer relationships, personalize your experience, provide support, improve platform functionality, and maintain the security of your workspace.",
  },
  {
    icon: "☁️",
    title: "Data Security",
    content:
      "We apply modern security practices, encrypted connections, and secure authentication methods to protect your business data and minimize unauthorized access.",
  },
  {
    icon: "🤝",
    title: "Third-Party Services",
    content:
      "Minivel may use trusted third-party providers for hosting, authentication, analytics, and infrastructure. These services only process information necessary to operate the platform reliably.",
  },
  {
    icon: "📩",
    title: "Contact Us",
    content:
      "If you have any questions regarding this Privacy Policy or how your information is handled, our support team is always available to assist you.",
  },
];

export default function Privacy() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

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
    Privacy & Security
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
    Your privacy matters to us
  </h1>

  <p
    className="
    mt-5
    text-base
    leading-7
    text-slate-600
    dark:text-slate-400
    lg:text-lg
    "
  >
    MiniVel is designed to keep your business information protected
    while giving you a clear understanding of how your data is
    collected, used, and secured.
  </p>

  <p
    className="
    mt-4
    text-sm
    font-medium
    text-indigo-600
    dark:text-indigo-400
    "
  >
    Last updated • August 2026
  </p>

</div>
      {/* Privacy Sections */}

<div className="mt-14 space-y-5">

  {privacySections.map((section, index) => (

    <AnimatedCard
      key={section.title}
      delay={index * 0.08}
    >

      <div
        className="
        group
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-indigo-200
        hover:shadow-xl
        dark:border-zinc-800
        dark:bg-zinc-900
        dark:hover:border-indigo-500/30
        "
      >

        <div className="flex items-start gap-5">

          {/* Icon */}

          <div
            className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-indigo-500
            to-violet-500
            text-xl
            shadow-sm
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:-rotate-6
            "
          >
            {section.icon}
          </div>

          {/* Content */}

          <div className="min-w-0">

            <h2
              className="
              text-lg
              font-bold
              text-slate-900
              dark:text-white
              "
            >
              {section.title}
            </h2>

            <p
              className="
              mt-2.5
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
              "
            >
              {section.content}
            </p>

          </div>

        </div>

      </div>

    </AnimatedCard>

  ))}

</div>

        {/* Trust Section */}

<AnimatedCard delay={0.45}>

  <div
    className="
    relative
    mt-16
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-gradient-to-br
    from-indigo-50
    via-white
    to-violet-50
    p-10
    text-center
    transition-all
    duration-300
    hover:shadow-xl
    dark:border-zinc-800
    dark:from-indigo-950/30
    dark:via-zinc-900
    dark:to-violet-950/30
    "
  >

    {/* Decorative Glow */}

    <div
      className="
      pointer-events-none
      absolute
      -right-20
      -top-20
      h-48
      w-48
      rounded-full
      bg-indigo-400/10
      blur-3xl
      "
    />

    <div
      className="
      pointer-events-none
      absolute
      -bottom-20
      -left-20
      h-48
      w-48
      rounded-full
      bg-violet-400/10
      blur-3xl
      "
    />

    <div className="relative">

      {/* Icon */}

      <div
        className="
        mx-auto
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-indigo-500
        to-violet-500
        text-2xl
        shadow-lg
        shadow-indigo-500/20
        "
      >
        🔒
      </div>

      {/* Heading */}

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
        Your trust matters
      </h2>

      {/* Description */}

      <p
        className="
        mx-auto
        mt-4
        max-w-2xl
        text-base
        leading-7
        text-slate-600
        dark:text-slate-400
        lg:text-lg
        "
      >
        Protecting your business data is one of our highest priorities.
        We continuously improve our security practices and follow modern
        standards to help keep your information safe, private, and secure.
      </p>

      {/* Support */}

      <div
        className="
        mt-7
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-white
        px-5
        py-3
        text-sm
        font-semibold
        text-indigo-700
        shadow-sm
        ring-1
        ring-indigo-100
        dark:bg-zinc-900
        dark:text-indigo-300
        dark:ring-indigo-900/40
        "
      >
        📧 support@minivel.com
      </div>

    </div>

  </div>

</AnimatedCard>

      </div>

    </section>
  );
}