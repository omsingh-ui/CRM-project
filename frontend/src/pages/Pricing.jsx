import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function Pricing() {

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for individuals getting started.",
      features: [
        "Customer Management",
        "Lead Tracking",
        "Dashboard Access",
        "Email Support",
      ],
      popular: false,
    },

    {
      name: "Pro",
      price: "₹999/mo",
      description: "Everything growing businesses need.",
      features: [
        "Unlimited Customers",
        "Advanced Analytics",
        "Task Management",
        "Priority Support",
      ],
      popular: true,
    },

    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for large organizations.",
      features: [
        "Everything in Pro",
        "Dedicated Account Manager",
        "Custom Integrations",
        "24/7 Premium Support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div className="text-center">

         <ScrollReveal>
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
            Pricing
          </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
          <h1
            className="
            mt-6
            text-5xl
            font-black
            text-slate-900
            dark:text-white
            "
          >
            Simple Pricing
          </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            dark:text-slate-400
            max-w-2xl
            mx-auto
            "
          >
            Choose the plan that fits your business today and
            upgrade anytime as your team grows.
          </p>

          </ScrollReveal>

        </div>

        {/* Pricing Cards */}

       <div className="grid gap-8 md:grid-cols-3 mt-20">

  {plans.map((plan, index) => (

    <ScrollReveal
      key={plan.name}
      delay={index * 0.12}
    >

      <div
        className={`
          relative
          rounded-3xl
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
          ${
            plan.popular
              ? "bg-blue-700 text-white shadow-2xl"
              : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
          }
        `}
      >

        {plan.popular && (

          <span
            className="
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            bg-white
            text-blue-700
            px-4
            py-2
            rounded-full
            text-sm
            font-bold
            shadow-lg
            "
          >
            Most Popular
          </span>

        )}

        <h2
          className="
          text-3xl
          font-bold
          mt-4
          "
        >
          {plan.name}
        </h2>

        <p
          className="
          mt-6
          text-5xl
          font-black
          "
        >
          {plan.price}
        </p>

        <p
          className={`mt-4 ${
            plan.popular
              ? "text-blue-100"
              : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {plan.description}
        </p>

        <ul className="mt-8 space-y-4">

          {plan.features.map((feature) => (

            <li key={feature}>
              ✓ {feature}
            </li>

          ))}

        </ul>

        <Link
          to="/register"
          className={`
            mt-10
            w-full
            flex
            justify-center
            items-center
            py-3
            rounded-xl
            font-semibold
            transition
            ${
              plan.popular
                ? "bg-white text-blue-700 hover:bg-slate-100"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }
          `}
        >
          Get Started
        </Link>

      </div>

    </ScrollReveal>

  ))}

</div>

        {/* FAQ */}

        <div className="mt-24 max-w-3xl mx-auto">

  <ScrollReveal>

    <h2
      className="
      text-3xl
      font-bold
      text-center
      text-slate-900
      dark:text-white
      "
    >
      Frequently Asked Questions
    </h2>

  </ScrollReveal>

  <div className="mt-10 space-y-6">

    <ScrollReveal delay={0.1}>

      <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">

        <h3 className="font-bold text-lg dark:text-white">
          Can I upgrade later?
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Yes. You can switch plans anytime without losing your data.
        </p>

      </div>

    </ScrollReveal>

    <ScrollReveal delay={0.2}>

      <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">

        <h3 className="font-bold text-lg dark:text-white">
          Is there a free trial?
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Our Free plan lets you explore the core CRM features without any cost.
        </p>

      </div>

    </ScrollReveal>

    <ScrollReveal delay={0.3}>

      <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-6">

        <h3 className="font-bold text-lg dark:text-white">
          Do you offer enterprise solutions?
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Yes. We provide custom integrations, dedicated support, and scalable deployments.
        </p>

      </div>

    </ScrollReveal>

  </div>

</div>

       
            
            
            

         
        {/* CTA */}


        <ScrollReveal>
        <div
          className="
          mt-24
          rounded-[32px]
          bg-gradient-to-r
          from-blue-700
          to-indigo-700
          text-white
          text-center
          p-12
          "
        >

          <h2 className="text-4xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-4 text-blue-100">
            Build stronger customer relationships with Minivel today.
          </p>

          <Link
            to="/register"
            className="
            inline-flex
            mt-8
            px-8
            py-4
            rounded-xl
            bg-white
            text-blue-700
            font-semibold
            hover:-translate-y-1
            transition-all
            "
          >
            Create Free Account
          </Link>

        </div>
        </ScrollReveal>

      </div>

    </div>
  );
}