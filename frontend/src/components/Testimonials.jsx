import AnimatedCard from "./AnimatedCard";
import { FaCheckCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Founder",
    company: "Nova Labs",
    text: "Minivel helped us organize leads faster and streamline our customer workflow. The dashboard gives our team complete visibility into every opportunity.",
    avatar: "AM",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Manager",
    company: "BrightWorks",
    text: "The interface is incredibly intuitive. We reduced manual work and improved collaboration across our sales and marketing teams.",
    avatar: "EW",
  },
  {
    name: "Lucas Smith",
    role: "Startup Owner",
    company: "LaunchFlow",
    text: "Real-time analytics helped us make faster decisions and improve customer engagement. It's become an essential part of our business.",
    avatar: "LS",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        pt-12
        pb-12
        bg-slate-50
        dark:bg-zinc-950
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            What businesses are saying
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-slate-500
              dark:text-slate-400
            "
          >
            See how teams use Minivel to simplify customer management,
            improve collaboration, and keep their business moving.
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <AnimatedCard
              key={item.name}
              delay={index * 0.08}
            >
              <div
                className="
                  group
                  flex
                  h-full
                  flex-col
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
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    text-lg
                    tracking-wide
                    text-yellow-400
                  "
                >
                  ★★★★★
                </div>

                <p
                  className="
                    mt-4
                    flex-1
                    text-[15px]
                    leading-7
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  "{item.text}"
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-blue-600
                        to-indigo-700
                        text-base
                        font-bold
                        text-white
                        shadow-lg
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      {item.avatar}
                    </div>

                    <div>
                      <h3
                        className="
                          font-bold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        {item.name}
                      </h3>

                      <p
                        className="
                          text-sm
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        {item.role}
                      </p>

                      <p
                        className="
                          text-xs
                          text-blue-600
                          dark:text-blue-400
                        "
                      >
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-emerald-600
                  "
                >
                  <FaCheckCircle />
                  Verified Customer
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}