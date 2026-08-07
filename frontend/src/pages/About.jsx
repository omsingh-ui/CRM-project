import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const heroCards = [
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Customer First",
    description: "Every feature is designed to simplify customer management.",
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: "Growth Focused",
    description: "Track leads, revenue, and performance from one dashboard.",
  },
  {
    icon: <span className="text-2xl">🔒</span>,
    title: "Secure Platform",
    description: "Authentication, protected routes, and secure data handling.",
  },
];

const whyCards = [
  {
    icon: "👥",
    title: "Customer Management",
    description:
      "Store customer information securely and access it from one centralized dashboard.",
  },
  {
    icon: "📈",
    title: "Lead Tracking",
    description:
      "Track every opportunity from the first inquiry to successful conversion.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Visual dashboards help you understand business performance in real time.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    description:
      "JWT authentication and protected routes keep your business data safe.",
  },
];

const techStack = ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-zinc-950 overflow-x-hidden">
      {/* ==========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-5 py-2 font-medium mb-6">
              <FaUsers />
              About Minivel
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white max-w-4xl">
              Building a Simpler CRM
              <br />
              for Growing Businesses
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              Minivel helps businesses manage customers, track leads, organize
              daily tasks, and monitor growth from one modern, secure, and
              easy-to-use CRM platform.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {heroCards.map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-5 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          OUR STORY
      ========================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold mb-6">
                  Our Story
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  Helping Businesses Stay Organized
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Managing customers, leads, and daily operations shouldn't
                  require multiple spreadsheets or disconnected tools. Minivel
                  was designed to bring everything together into one simple
                  and modern CRM platform.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Our goal is to help teams save time, improve productivity,
                  and focus on building stronger customer relationships with
                  an intuitive, secure, and scalable solution.
                </p>
              </ScrollReveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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

                <div className="h-px bg-slate-200 dark:bg-zinc-800" />

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    🚀 Our Vision
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">
                    Become the preferred CRM platform for growing businesses
                    by combining simplicity, speed, and modern technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================
          WHY CHOOSE MINIVEL
      ========================== */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold mb-6">
                Why Choose Minivel
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                Everything You Need to Grow
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                Minivel combines customer management, lead tracking,
                analytics, and team productivity into one modern platform.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-200 dark:border-zinc-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          TECH STACK
      ========================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold mb-5">
              Built With
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
              Modern Technologies
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-5">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="font-semibold text-slate-800 dark:text-white">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          FINAL CTA
      ========================== */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 md:p-14 text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold">
              Ready to simplify your workflow?
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Join businesses using Minivel to manage customers, leads, and
              daily operations from one modern CRM platform.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Create Free Account
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
