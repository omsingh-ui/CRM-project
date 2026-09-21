import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaShieldAlt, FaBolt, FaArrowRight, FaUserPlus, FaDatabase, FaRocket } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

/* ==========================
   DATA
========================== */
const heroChips = [
  { icon: <FaUsers />, label: "Customer First" },
  { icon: <FaChartLine />, label: "Growth Focused" },
  { icon: <FaShieldAlt />, label: "Secure by Default" },
];

const whyCards = [
  {
    icon: <FaUsers />,
    accent: "from-indigo-500 to-violet-500",
    title: "Customer Management",
    description:
      "Store customer information securely and access it from one centralized dashboard.",
  },
  {
    icon: <FaChartLine />,
    accent: "from-teal-500 to-emerald-500",
    title: "Lead Tracking",
    description:
      "Track every opportunity from the first inquiry to successful conversion.",
  },
  {
    icon: <FaBolt />,
    accent: "from-violet-500 to-fuchsia-500",
    title: "Smart Analytics",
    description:
      "Visual dashboards help you understand business performance in real time.",
  },
  {
    icon: <FaShieldAlt />,
    accent: "from-blue-500 to-indigo-500",
    title: "Secure Platform",
    description:
      "JWT authentication and protected routes keep your business data safe.",
  },
];

const howItWorks = [
  {
    icon: <FaUserPlus />,
    accent: "from-indigo-500 to-violet-500",
    step: "01",
    title: "Create your account",
    description:
      "Sign up in minutes and set up your workspace, no credit card or setup calls required.",
  },
  {
    icon: <FaDatabase />,
    accent: "from-teal-500 to-emerald-500",
    step: "02",
    title: "Bring in your data",
    description:
      "Import your customers and leads, or start fresh, everything lands in one organized place.",
  },
  {
    icon: <FaRocket />,
    accent: "from-violet-500 to-fuchsia-500",
    step: "03",
    title: "Track, manage, grow",
    description:
      "Follow every lead, manage your pipeline, and watch your business performance in real time.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

/* ==========================
   ANIMATED STAT
========================== */
function StatCounter({ value, suffix = "", decimals = 0, label }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let raf;
    let start;
    const duration = 1200;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col"
    >
      <span className="font-mono text-2xl md:text-3xl font-semibold text-white tabular-nums">
        {display.toFixed(decimals)}
        {suffix}
      </span>
      <span className="mt-1 text-xs uppercase tracking-wider text-white/50">
        {label}
      </span>
    </motion.div>
  );
}

/* ==========================
   SIGNATURE PANEL — LIVE SNAPSHOT
========================== */
function LiveSnapshotPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* gradient border wrapper */}
      <div className="rounded-[28px] p-[1px] bg-gradient-to-br from-indigo-500/70 via-violet-500/40 to-teal-400/60 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.45)]">
        <div className="rounded-[27px] bg-[#0B0F1E] p-6 md:p-7 overflow-hidden relative">
          {/* subtle dot grain */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                Live snapshot
              </span>
            </div>
            <span className="text-xs font-mono text-white/30">
              minivel.io/dashboard
            </span>
          </div>

          <div className="relative mt-6 grid grid-cols-3 gap-4">
            <StatCounter value={2400} suffix="+" label="Customers" />
            <StatCounter value={68} suffix="%" label="Conversion" />
            <StatCounter value={99.9} suffix="%" decimals={1} label="Uptime" />
          </div>

          {/* sparkline */}
          <div className="relative mt-7">
            <svg viewBox="0 0 300 80" className="w-full h-20">
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,60 L30,52 L60,55 L90,40 L120,45 L150,28 L180,32 L210,18 L240,22 L270,10 L300,14"
                fill="none"
                stroke="#A5B4FC"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <path
                d="M0,60 L30,52 L60,55 L90,40 L120,45 L150,28 L180,32 L210,18 L240,22 L270,10 L300,14 L300,80 L0,80 Z"
                fill="url(#sparkFill)"
                stroke="none"
              />
            </svg>
          </div>

          <div className="relative mt-4 flex items-center justify-between text-xs text-white/40 font-mono">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 px-4 py-3 shadow-xl"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs">
          <FaChartLine />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">+24% growth</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">this quarter</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ==========================
   PAGE
========================== */
export default function About() {
  return (
    <div className="bg-white dark:bg-zinc-950 overflow-x-hidden">
      {/* ==========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden pt-12 pb-7 lg:pt-14 lg:pb-9">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-indigo-400/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-teal-400/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 text-sm font-medium mb-5">
                  <FaUsers className="text-xs" />
                  About Minivel
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white">
                  Building a simpler CRM
                  <br />
                  for growing businesses
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                  Minivel helps businesses manage customers, track leads,
                  organize daily tasks, and monitor growth from one modern,
                  secure, and easy-to-use CRM platform.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {heroChips.map((chip) => (
                    <div
                      key={chip.label}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 text-xs">
                        {chip.icon}
                      </span>
                      {chip.label}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link
                  to="/register"
                  className="group inline-flex items-center gap-2 mt-9 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                >
                  Get started with Minivel
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>

            <LiveSnapshotPanel />
          </div>
        </div>
      </section>

      {/* ==========================
          OUR STORY
      ========================== */}
      <section className="py-7 lg:py-9">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-5">
                  Our Story
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                  Everything your business needs, in one place
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Managing customers, leads, and daily operations shouldn't
                  require multiple spreadsheets or disconnected tools. Minivel
                  was designed to bring everything together into one simple
                  and modern CRM platform.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.22}>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Our goal is to help teams save time, improve productivity,
                  and focus on building stronger customer relationships with
                  an intuitive, secure, and scalable solution.
                </p>
              </ScrollReveal>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="rounded-[26px] p-[1px] bg-gradient-to-br from-slate-200 dark:from-zinc-800 to-transparent"
            >
              <div className="rounded-[25px] bg-white dark:bg-zinc-900 p-8 shadow-sm">
                <div className="space-y-7">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm">
                        🎯
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Our Mission
                      </h3>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7 text-sm">
                      Make CRM software powerful enough for growing businesses while keeping it simple enough for every team member to use.
                    </p>
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-zinc-800" />

                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-sm">
                        🚀
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Our Vision
                      </h3>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7 text-sm">
                      Help growing businesses manage their work with a CRM that combines simplicity, speed, and modern technology.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================
          WHY CHOOSE MINIVEL
      ========================== */}
      <section className="py-7 lg:py-9 bg-slate-50/70 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-5">
                Why Choose Minivel
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Everything you need to manage and grow
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                MiniVel brings customer management, lead tracking, analytics, and team productivity together in one modern CRM.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {whyCards.map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent overflow-hidden"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${card.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                />

                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br ${card.accent} text-white text-lg mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {card.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-6">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          HOW IT WORKS
      ========================== */}
      <section className="py-7 lg:py-9">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-5">
                How It Works
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Up and running in three simple steps
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                No lengthy onboarding, no training sessions. Just a straightforward path from sign-up to a fully organized pipeline.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {/* Connecting line — desktop only */}
            <div className="absolute left-[16.5%] right-[16.5%] top-9 hidden h-px bg-gradient-to-r from-indigo-200 via-violet-200 to-teal-200 dark:from-indigo-500/20 dark:via-violet-500/20 dark:to-teal-500/20 md:block" />

            {howItWorks.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="relative rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className={`relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white text-lg shadow-lg shadow-indigo-500/30`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          FINAL CTA
      ========================== */}
      <section className="pb-10 pt-1 lg:pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="relative rounded-[32px] bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white p-10 md:p-14 text-center shadow-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to manage your business more simply?
              </h2>

              <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
                Bring your customers, leads, tasks, and business insights together with MiniVel.
              </p>

              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Create your free account
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
