import {
  FaUsers,
  FaEnvelope,
  FaMoneyBill,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    title: "Customers",
    value: "4,280",
    change: "+12%",
    status: "Updated just now",
  },
  {
    icon: <FaEnvelope />,
    title: "Leads",
    value: "980",
    change: "+8%",
    status: "2 mins ago",
  },
  {
    icon: <FaMoneyBill />,
    title: "Revenue",
    value: "$48K",
    change: "+18%",
    status: "Live",
  },
  {
    icon: <FaChartLine />,
    title: "Growth",
    value: "+23%",
    change: "+5%",
    status: "This Month",
  },
];

const activity = [
  {
    initials: "JS",
    name: "John Smith",
    action: "New customer registered",
    time: "2 min",
    color: "bg-blue-100 text-blue-700",
  },
  {
    initials: "EW",
    name: "Emma Wilson",
    action: "Lead converted successfully",
    time: "8 min",
    color: "bg-green-100 text-green-700",
  },
  {
    initials: "AD",
    name: "Alex Davis",
    action: "Invoice paid • $2,400",
    time: "18 min",
    color: "bg-purple-100 text-purple-700",
  },
  {
    initials: "MR",
    name: "Michael Ross",
    action: "Follow-up meeting scheduled",
    time: "1 hr",
    color: "bg-orange-100 text-orange-700",
  },
];

const chartData = [
  { month: "Jan", value: 35 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 70 },
  { month: "May", value: 62 },
  { month: "Jun", value: 82 },
  { month: "Jul", value: 95 },
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-slate-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-950
          shadow-[0_30px_80px_rgba(15,23,42,0.12)]
          p-10
          "
        >

          {/* Background Glow */}

          <div
            className="
            absolute
            -top-32
            right-0
            w-96
            h-96
            rounded-full
            bg-blue-200/30
            blur-3xl
            pointer-events-none
            "
          />

          <div className="relative">
{/* Header */}

<div
  className="
  flex
  flex-col
  lg:flex-row
  lg:items-center
  lg:justify-between
  gap-8
  mb-12
  "
>

  {/* Left */}

  <div>

    <span
      className="
      inline-flex
      items-center
      rounded-full
      bg-blue-100
      px-4
      py-2
      text-sm
      font-semibold
      text-blue-700
      "
    >
      Live Dashboard
    </span>

    <h2
      className="
      mt-5
      text-4xl
      md:text-5xl
      font-black
      tracking-tight
      text-slate-900
      dark:text-white
      "
    >
      Everything Your
      <br />
      Business Needs
    </h2>

    <p
      className="
      mt-5
      max-w-2xl
      text-lg
      leading-8
      text-slate-600
      dark:text-slate-400
      "
    >
      Monitor customers, track revenue,
      manage leads and measure business
      performance from one modern dashboard.
    </p>

  </div>

  {/* Right */}

  <div
    className="
    flex
    items-center
    gap-5
    rounded-3xl
    border
    border-slate-200
    dark:border-zinc-800
    bg-white
    dark:bg-zinc-900
    px-6
    py-5
    shadow-sm
    "
  >

    <div
      className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-br
      from-emerald-500
      to-green-600
      text-white
      text-xl
      "
    >
      ✓
    </div>

    <div>

      <p
        className="
        text-sm
        text-slate-500
        "
      >
        System Status
      </p>

      <div
        className="
        mt-1
        flex
        items-center
        gap-2
        "
      >

        <span
          className="
          h-2.5
          w-2.5
          rounded-full
          bg-green-500
          animate-pulse
          "
        />

        <span
          className="
          font-semibold
          text-slate-900
          dark:text-white
          "
        >
          All Systems Operational
        </span>

      </div>

    </div>

  </div>

</div>

<div
  className="
  mb-10
  border-b
  border-slate-200
  dark:border-zinc-800
  "
/>

{/* KPI Cards */}

<div
  className="
  grid
  gap-6
  md:grid-cols-2
  xl:grid-cols-4
  "
>

  {stats.map((item) => (

    <div
      key={item.title}
      className="
      group
      rounded-3xl
      border
      border-slate-200
      dark:border-zinc-800
      bg-white
      dark:bg-zinc-900
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-200
      hover:shadow-xl
      "
    >

      {/* Top */}

      <div
        className="
        flex
        items-center
        justify-between
        "
      >

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          to-indigo-700
          text-white
          text-lg
          shadow-md
          "
        >
          {item.icon}
        </div>

        <span
          className="
          rounded-full
          bg-emerald-100
          px-3
          py-1
          text-xs
          font-semibold
          text-emerald-700
          "
        >
          {item.change}
        </span>

      </div>

      {/* Content */}

      <div className="mt-5">

        <p
          className="
          text-sm
          font-medium
          text-slate-500
          dark:text-slate-400
          "
        >
          {item.title}
        </p>

        <h3
          className="
          mt-2
          text-4xl
          font-black
          tracking-tight
          text-slate-900
          dark:text-white
          "
        >
          {item.value}
        </h3>

      </div>

      {/* Footer */}

      <div
        className="
        mt-6
        flex
        items-center
        justify-between
        border-t
        border-slate-100
        dark:border-zinc-800
        pt-4
        "
      >

        <span
          className="
          text-xs
          text-slate-500
          "
        >
          {item.status}
        </span>

        <span
          className="
          flex
          items-center
          gap-2
          "
        >

          <span
            className="
            h-2
            w-2
            rounded-full
            bg-green-500
            "
          />

          <span
            className="
            text-xs
            font-semibold
            text-slate-700
            dark:text-slate-300
            "
          >
            Live
          </span>

        </span>

      </div>

    </div>

  ))}

</div>

{/* Analytics Section */}

<div
  className="
  mt-14
  grid
  gap-6
  lg:grid-cols-3
  "
>

  {/* Analytics */}

  <div
    className="
    lg:col-span-2
    rounded-[32px]
    bg-gradient-to-br
    from-blue-600
    via-indigo-700
    to-blue-900
    p-8
    text-white
    overflow-hidden
    relative
    "
  >

    {/* Background Glow */}

    <div
      className="
      absolute
      -top-24
      -right-24
      h-64
      w-64
      rounded-full
      bg-white/10
      blur-3xl
      "
    />

    {/* Header */}

    <div className="relative flex items-start justify-between">

      <div>

        <p
          className="
          uppercase
          tracking-[0.2em]
          text-blue-200
          text-sm
          "
        >
          Revenue Analytics
        </p>

        <h3
          className="
          mt-2
          text-3xl
          font-black
          "
        >
          Monthly Performance
        </h3>

        <p
          className="
          mt-3
          max-w-md
          text-blue-100
          leading-7
          "
        >
          Customer growth and revenue continue
          to increase month after month.
        </p>

      </div>

      <div
        className="
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        px-5
        py-4
        "
      >

        <p className="text-xs text-blue-100">
          Total Growth
        </p>

        <h4
          className="
          mt-1
          text-3xl
          font-black
          "
        >
          +18.4%
        </h4>

      </div>

    </div>

    {/* Chart */}

    <div className="mt-12">

      <div
        className="
        flex
        items-end
        justify-between
        h-60
        "
      >

        {chartData.map((item) => (

          <div
            key={item.month}
            className="
            flex
            flex-col
            items-center
            gap-3
            group
            "
          >

            <div
              className="
              flex
              items-end
              h-48
              "
            >

              <div
                style={{
                  height: `${item.value}%`,
                }}
                className="
                w-10
                rounded-t-full
                bg-gradient-to-t
                from-white/40
                to-white
                transition-all
                duration-300
                group-hover:scale-105
                "
              />

            </div>

            <span
              className="
              text-sm
              text-blue-200
              "
            >
              {item.month}
            </span>

          </div>

        ))}

      </div>

    </div>

  </div>
    {/* Activity */}

  <div
    className="
    rounded-[32px]
    border
    border-slate-200
    dark:border-zinc-800
    bg-white
    dark:bg-zinc-900
    p-7
    "
  >

    {/* Header */}

    <div className="flex items-center justify-between">

      <div>

        <p
          className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-blue-600
          "
        >
          Activity
        </p>

        <h3
          className="
          mt-2
          text-2xl
          font-black
          text-slate-900
          dark:text-white
          "
        >
          Live Feed
        </h3>

      </div>

      <span
        className="
        flex
        items-center
        gap-2
        rounded-full
        bg-green-100
        px-3
        py-1
        text-xs
        font-semibold
        text-green-700
        "
      >
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        Live
      </span>

    </div>

    {/* Timeline */}

    <div className="mt-8 space-y-6">

      {activity.map((item) => (

        <div
          key={item.name}
          className="
          flex
          items-start
          gap-4
          "
        >

          <div
            className={`
            h-11
            w-11
            rounded-full
            flex
            items-center
            justify-center
            font-semibold
            text-sm
            ${item.color}
            `}
          >
            {item.initials}
          </div>

          <div className="flex-1">

            <div className="flex items-center justify-between">

              <h4
                className="
                font-semibold
                text-slate-900
                dark:text-white
                "
              >
                {item.name}
              </h4>

              <span
                className="
                text-xs
                text-slate-400
                "
              >
                {item.time}
              </span>

            </div>

            <p
              className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
              "
            >
              {item.action}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

</div>

</div>
</div>
</section>
  );
}