import {
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaMoneyBill,
} from "react-icons/fa";

export default function DashboardPreview() {
  const cards = [
    {
      icon: <FaUsers />,
      title: "Customers",
      value: "4,280",
    },
    {
      icon: <FaEnvelope />,
      title: "Leads",
      value: "980",
    },
    {
      icon: <FaMoneyBill />,
      title: "Revenue",
      value: "$48K",
    },
    {
      icon: <FaChartLine />,
      title: "Growth",
      value: "+23%",
    },
  ];

  return (
    <section
      id="dashboard"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          bg-white
          dark:bg-zinc-950
          border
          border-slate-200
          dark:border-zinc-800
          shadow-2xl
          p-10
          "
        >

          {/* Header */}

          <div className="flex items-center justify-between mb-10">

            <div>

              <p className="font-semibold text-blue-700">
                Live Dashboard Preview
              </p>

              <h2
                className="
                mt-2
                text-4xl
                font-black
                text-slate-900
                dark:text-white
                "
              >
                Everything at a Glance
              </h2>

            </div>

            <div
              className="
              hidden
              md:flex
              items-center
              gap-2
              rounded-full
              bg-green-100
              dark:bg-green-900/20
              px-4
              py-2
              "
            >

              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                Live Data
              </span>

            </div>

          </div>

          {/* Stats */}

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >

            {cards.map((card) => (

              <div
                key={card.title}
                className="
                rounded-3xl
                bg-blue-50
                dark:bg-zinc-900
                border
                border-blue-100
                dark:border-zinc-800
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                <div className="text-3xl text-blue-700 mb-6">
                  {card.icon}
                </div>

                <p
                  className="
                  text-slate-500
                  dark:text-slate-400
                  font-medium
                  "
                >
                  {card.title}
                </p>

                <h3
                  className="
                  mt-2
                  text-4xl
                  font-black
                  text-slate-900
                  dark:text-white
                  "
                >
                  {card.value}
                </h3>

              </div>

            ))}

          </div>

          {/* Analytics */}

          <div
            className="
            mt-10
            grid
            lg:grid-cols-3
            gap-6
            "
          >

            {/* Chart */}

            <div
              className="
              lg:col-span-2
              rounded-3xl
              bg-gradient-to-r
              from-blue-600
              via-indigo-700
              to-purple-700
              p-8
              text-white
              "
            >

              <h3 className="text-3xl font-bold">
                Sales Analytics
              </h3>

              <p className="mt-3 text-blue-100">
                Monthly performance continues to improve with
                stronger customer engagement and lead conversions.
              </p>

              <div
                className="
                flex
                items-end
                gap-3
                mt-12
                h-32
                "
              >

                <div className="w-8 h-12 rounded bg-white/30"></div>
                <div className="w-8 h-20 rounded bg-white/40"></div>
                <div className="w-8 h-16 rounded bg-white/40"></div>
                <div className="w-8 h-28 rounded bg-white"></div>
                <div className="w-8 h-18 rounded bg-white/40"></div>
                <div className="w-8 h-24 rounded bg-white"></div>
                <div className="w-8 h-32 rounded bg-white"></div>

              </div>

            </div>

            {/* Activity */}

            <div
              className="
              rounded-3xl
              bg-slate-50
              dark:bg-zinc-900
              border
              border-slate-200
              dark:border-zinc-800
              p-8
              "
            >

              <h3
                className="
                text-xl
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                Recent Activity
              </h3>

              <div className="space-y-5 mt-8">

                <div className="flex justify-between">

                  <span className="text-slate-600 dark:text-slate-400">
                    New Customer
                  </span>

                  <span className="font-semibold text-green-600">
                    Active
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-600 dark:text-slate-400">
                    Lead Converted
                  </span>

                  <span className="font-semibold text-blue-700">
                    Today
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-600 dark:text-slate-400">
                    Tasks Completed
                  </span>

                  <span className="font-semibold text-purple-700">
                    18
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-600 dark:text-slate-400">
                    Revenue
                  </span>

                  <span className="font-bold text-slate-900 dark:text-white">
                    +$4,200
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}