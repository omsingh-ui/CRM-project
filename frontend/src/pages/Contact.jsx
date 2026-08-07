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
    title: "Email",
    value: "support@minivel.com",
    href: "mailto:support@minivel.com",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Mumbai, India",
    href: null,
  },
];

const subjects = ["General Inquiry", "Sales", "Support", "Partnership"];

const inputClasses =
  "w-full rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 pl-12 pr-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all duration-300 hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 focus:outline-none";

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
    <section className="py-24 bg-slate-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HERO ================= */}
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold">
              Contact
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              We'd Love to Hear From You
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Whether you have a question, need support, or want to learn
              more about Minivel, we're always happy to help. Reach out and
              our team will get back to you as soon as possible.
            </p>
          </ScrollReveal>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {contactInfo.map((item, index) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <ScrollReveal key={item.title} delay={index * 0.1 + 0.1}>
                <Wrapper
                  href={item.href || undefined}
                  className="group relative h-full block rounded-[30px] border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-10 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-2xl text-blue-700 dark:text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="relative mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {item.value}
                  </p>
                </Wrapper>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="max-w-4xl mx-auto mt-24">
          <ScrollReveal>
            <div className="relative rounded-[36px] border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700" />

              <div className="text-center">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  Send us a Message
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                  We'd love to hear from you. Fill out the form below and our
                  team will get back to you as soon as possible.
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
                    className="mt-12 flex flex-col items-center text-center py-10"
                  >
                    <FaCheckCircle className="text-5xl text-blue-700 dark:text-blue-400" />
                    <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                      Message Sent
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-sm">
                      Thanks for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1"
                    >
                      Send Another Message
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
                    className="mt-12 space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className={inputClasses}
                        />
                      </div>

                      <div className="relative">
                        <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {subjects.map((subject) => (
                        <button
                          type="button"
                          key={subject}
                          onClick={() => setForm({ ...form, subject })}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                            form.subject === subject
                              ? "bg-blue-700 border-blue-700 text-white"
                              : "border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-400 hover:border-blue-300"
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
                      placeholder="Your Message"
                      required
                      className="w-full rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 resize-none transition-all duration-300 hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 focus:outline-none"
                    />

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-3 rounded-2xl bg-blue-700 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-2xl active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
