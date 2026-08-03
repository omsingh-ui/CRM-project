export default function Contact(){

return (

<section className="py-20">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold">
      Contact
    </span>

    <h1 className="mt-6 text-5xl font-black text-slate-900 dark:text-white">
      We'd Love to Hear From You
    </h1>

    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
      Have a question, suggestion, or business inquiry? We're here to help.
    </p>

  </div>
  <section className="pb-20">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-8">

      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-4xl mb-5">📧</div>

        <h3 className="text-2xl font-bold dark:text-white">
          Email
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          support@minivel.com
        </p>

      </div>

      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-4xl mb-5">📞</div>

        <h3 className="text-2xl font-bold dark:text-white">
          Phone
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          +91 98765 43210
        </p>

      </div>

      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="text-4xl mb-5">📍</div>

        <h3 className="text-2xl font-bold dark:text-white">
          Location
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Mumbai, India
        </p>

      </div>

    </div>

  </div>
  <section className="pt-20 pb-24">

  <div className="max-w-3xl mx-auto px-6">

    <div
      className="
      rounded-[32px]
      bg-white
      dark:bg-zinc-900
      border
      border-slate-200
      dark:border-zinc-800
      shadow-xl
      p-10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >

      <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center">
        Send us a Message
      </h2>

      <p className="mt-4 text-center text-slate-600 dark:text-slate-400">
        We'd love to hear from you. Fill out the form below and we'll get back to you.
      </p>

      <form className="mt-14 space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="
          w-full
          rounded-xl
          border
          border-slate-300
          dark:border-zinc-700
          bg-white
          dark:bg-zinc-800
          px-5
          py-4
          text-slate-900
          dark:text-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-600
          "
        />

        <input
          type="email"
          placeholder="Email Address"
          className="
          w-full
          rounded-xl
          border
          border-slate-300
          dark:border-zinc-700
          bg-white
          dark:bg-zinc-800
          px-5
          py-4
          text-slate-900
          dark:text-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-600
          "
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="
          w-full
          rounded-xl
          border
          border-slate-300
          dark:border-zinc-700
          bg-white
          dark:bg-zinc-800
          px-5
          py-4
          text-slate-900
          dark:text-white
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-blue-600
          "
        />

        <button
          className="
          w-full
          rounded-xl
          bg-blue-700
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-800
          hover:-translate-y-1
          "
        >
          Send Message
        </button>

      </form>

    </div>

  </div>

</section>

</section>

</section>


)
};