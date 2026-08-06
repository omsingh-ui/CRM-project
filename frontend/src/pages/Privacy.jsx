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
            🔒 Privacy Policy
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
            Your Privacy Matters
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
            We are committed to protecting your information and being transparent
            about how your data is collected, used, and secured within Minivel.
          </p>

          <p
            className="
            mt-4
            text-sm
            font-medium
            text-blue-600
            dark:text-blue-400
            "
          >
            Last Updated • August 2026
          </p>

        </div>

        {/* Privacy Sections */}

        <div className="mt-16 space-y-6">

          {privacySections.map((section, index) => (

            <AnimatedCard
              key={section.title}
              delay={index * 0.08}
            >

              <div
                className="
                rounded-3xl
                border
                border-slate-200
                dark:border-zinc-800
                bg-white
                dark:bg-zinc-900
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
                "
              >

                <div className="flex items-start gap-5">

                  <div className="text-3xl">
                    {section.icon}
                  </div>

                  <div>

                    <h2
                      className="
                      text-2xl
                      font-bold
                      text-slate-900
                      dark:text-white
                      "
                    >
                      {section.title}
                    </h2>

                    <p
                      className="
                      mt-3
                      leading-7
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
            mt-16
            rounded-3xl
            border
            border-slate-200
            dark:border-zinc-800
            bg-slate-50
            dark:bg-zinc-900
            p-10
            text-center
            "
          >

            <div className="text-5xl">
              🔒
            </div>

            <h2
              className="
              mt-5
              text-3xl
              font-black
              text-slate-900
              dark:text-white
              "
            >
              Your Trust Matters
            </h2>

            <p
              className="
              mt-5
              max-w-2xl
              mx-auto
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
              "
            >
              Protecting your business data is one of our highest priorities.
              We continuously improve our security practices and follow modern
              standards to ensure your information remains safe, private, and
              secure at every step.
            </p>

            <div
              className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-50
              dark:bg-blue-950
              px-5
              py-3
              text-sm
              font-semibold
              text-blue-700
              dark:text-blue-300
              "
            >
              📧 support@minivel.com
            </div>

          </div>

        </AnimatedCard>

      </div>

    </section>
  );
}