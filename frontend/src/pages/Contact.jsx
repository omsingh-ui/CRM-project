import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}

        <div className="max-w-3xl mx-auto text-center">

          <ScrollReveal>

            <span
              className="
              inline-flex
              items-center
              justify-center
              px-5
              py-2.5
              rounded-full
              bg-blue-100
              dark:bg-blue-900/30
              text-blue-700
              dark:text-blue-300
              font-semibold
              "
            >
              Contact
            </span>

          </ScrollReveal>

          <ScrollReveal delay={0.1}>

            <h1
              className="
              mt-6
              text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
              "
            >
              We'd Love to Hear From You
            </h1>

          </ScrollReveal>

          <ScrollReveal delay={0.2}>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
              "
            >
              Whether you have a question, need support, or want to
              learn more about Minivel, we're always happy to help.
              Reach out and our team will get back to you as soon as possible.
            </p>

          </ScrollReveal>

        </div>

        {/* ================= CONTACT CARDS ================= */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {/* Email */}

          <ScrollReveal delay={0.1}>

            <div
              className="
              group
              h-full
              rounded-[30px]
              border
              border-slate-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              p-10
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-50
                dark:bg-blue-900/20
                flex
                items-center
                justify-center
                text-3xl
                transition-transform
                duration-300
                group-hover:scale-110
                "
              >
                📧
              </div>

              <h3
                className="
                mt-8
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                Email
              </h3>

              <p
                className="
                mt-4
                leading-7
                text-slate-600
                dark:text-slate-400
                "
              >
                support@minivel.com
              </p>

            </div>

          </ScrollReveal>

          {/* Phone */}

          <ScrollReveal delay={0.2}>

            <div
              className="
              group
              h-full
              rounded-[30px]
              border
              border-slate-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              p-10
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-50
                dark:bg-blue-900/20
                flex
                items-center
                justify-center
                text-3xl
                transition-transform
                duration-300
                group-hover:scale-110
                "
              >
                📞
              </div>

              <h3
                className="
                mt-8
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                Phone
              </h3>

              <p
                className="
                mt-4
                leading-7
                text-slate-600
                dark:text-slate-400
                "
              >
                +91 98765 43210
              </p>

            </div>

          </ScrollReveal>

          {/* Location */}

          <ScrollReveal delay={0.3}>

            <div
              className="
              group
              h-full
              rounded-[30px]
              border
              border-slate-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              p-10
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-50
                dark:bg-blue-900/20
                flex
                items-center
                justify-center
                text-3xl
                transition-transform
                duration-300
                group-hover:scale-110
                "
              >
                📍
              </div>

              <h3
                className="
                mt-8
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                Location
              </h3>

              <p
                className="
                mt-4
                leading-7
                text-slate-600
                dark:text-slate-400
                "
              >
                Mumbai, India
              </p>

            </div>

          </ScrollReveal>

        </div>

        {/* ================= CONTACT FORM ================= */}

        

              <div className="max-w-4xl mx-auto mt-24">

          <ScrollReveal>

            <div
              className="
              rounded-[36px]
              border
              border-slate-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              shadow-xl
              p-8
              md:p-12
              "
            >

              <div className="text-center">

                <h2
                  className="
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                  dark:text-white
                  "
                >
                  Send us a Message
                </h2>

                <p
                  className="
                  mt-5
                  text-lg
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                  "
                >
                  We'd love to hear from you. Fill out the form below and our
                  team will get back to you as soon as possible.
                </p>

              </div>

              <form className="mt-12 space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-zinc-700
                  bg-white
                  dark:bg-zinc-800
                  px-5
                  py-4
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  transition-all
                  duration-300
                  hover:border-blue-300
                  focus:border-blue-600
                  focus:ring-4
                  focus:ring-blue-500/10
                  focus:outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-zinc-700
                  bg-white
                  dark:bg-zinc-800
                  px-5
                  py-4
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  transition-all
                  duration-300
                  hover:border-blue-300
                  focus:border-blue-600
                  focus:ring-4
                  focus:ring-blue-500/10
                  focus:outline-none
                  "
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-zinc-700
                  bg-white
                  dark:bg-zinc-800
                  px-5
                  py-4
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  resize-none
                  transition-all
                  duration-300
                  hover:border-blue-300
                  focus:border-blue-600
                  focus:ring-4
                  focus:ring-blue-500/10
                  focus:outline-none
                  "
                />

                <button
                  type="submit"
                  className="
                  w-full
                  rounded-2xl
                  bg-blue-700
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-800
                  hover:shadow-2xl
                  active:translate-y-0
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

          </ScrollReveal>

        </div>

      </div>

    </section>

  );
}