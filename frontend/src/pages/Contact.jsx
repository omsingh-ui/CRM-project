import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    accent: "from-indigo-500 to-violet-500",
    title: "Email",
    value: "support@minivel.com",
    href: "mailto:support@minivel.com",
  },
  {
    icon: <FaPhone />,
    accent: "from-teal-500 to-emerald-500",
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <FaMapMarkerAlt />,
    accent: "from-violet-500 to-fuchsia-500",
    title: "Location",
    value: "Mumbai, India",
    href: null,
  },
];

const subjects = ["General Inquiry", "Sales", "Support", "Partnership"];

const inputClasses =
  "w-full rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 pl-12 pr-5 py-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-all duration-300 hover:border-indigo-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulated submit — wire up to your API endpoint here
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: subjects[0], message: "" });
    }, 1200);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50/70 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HERO ================= */}
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-semibold">
              Contact
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="mt-5 text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Let's talk about your CRM
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-5 text-base lg:text-lg leading-7 text-slate-600 dark:text-slate-400">
              Have a question about MiniVel, need support, or want to learn
              more about the platform? Let's start a conversation and our team will
              be happy to help.
            </p>
          </ScrollReveal>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {contactInfo.map((item, index) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <Wrapper
                  href={item.href || undefined}
                  className="group relative h-full block rounded-3xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                  />

                  <div
                    className={`relative inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} text-white text-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.value}
                  </p>
                </Wrapper>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="max-w-4xl mx-auto mt-16 lg:mt-20">
          <ScrollReveal>
            <div className="rounded-[32px] p-[1px] bg-gradient-to-br from-indigo-400/60 via-violet-500/30 to-teal-400/50 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.35)]">
              <div className="relative rounded-[31px] bg-white dark:bg-zinc-900 p-8 md:p-12 overflow-hidden">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Let's start a conversation
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Tell us a little about what you need and our team will
                    get back to you as soon as possible.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="mt-10 flex flex-col items-center text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center text-white text-2xl">
                        <FaCheckCircle />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                        Message sent
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                        Thanks for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-8 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="mt-10 space-y-5"
                    >
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="relative">
                          <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className={inputClasses}
                          />
                        </div>

                        <div className="relative">
                          <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {subjects.map((subject) => (
                          <button
                            type="button"
                            key={subject}
                            onClick={() => setForm({ ...form, subject })}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                              form.subject === subject
                                ? "bg-gradient-to-r from-indigo-600 to-violet-600 border-transparent text-white shadow-md shadow-indigo-500/20"
                                : "border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-400 hover:border-indigo-300"
                            }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Your message"
                        required
                        className="w-full rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 resize-none transition-all duration-300 hover:border-indigo-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none"
                      />

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-sm" />
                            Send message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
