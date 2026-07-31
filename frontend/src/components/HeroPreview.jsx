import {
  FaUsers,
  FaBullseye,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    title: "Customers",
    value: "245",
    icon: <FaUsers />,
  },
  {
    title: "Leads",
    value: "58",
    icon: <FaBullseye />,
  },
  {
    title: "Tasks",
    value: "17",
    icon: <FaTasks />,
  },
];

const tasks = [
  "Call Customer",
  "Upload Agreement",
  "Site Visit",
];

const activity = [
  "New Lead Added",
  "Task Completed",
];

export default function HeroPreview() {
  return (
    <div
      className="
      rounded-[32px]
      bg-white
      shadow-2xl
      overflow-hidden
      border
      border-slate-200
    "
    >
      {/* Browser */}

      <div
        className="
        flex
        items-center
        justify-between
        px-6
        py-4
        bg-slate-100
      "
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        <p className="font-semibold text-slate-700">
          Minivel CRM
        </p>

        <div />
      </div>

      <div className="flex">

        {/* Sidebar */}

        <div
          className="
          w-40
          bg-slate-900
          text-white
          p-5
          space-y-5
        "
        >
          <p>📊 Dashboard</p>
          <p>👥 Customers</p>
          <p>🎯 Leads</p>
          <p>📋 Tasks</p>
          <p>⚙ Settings</p>
        </div>

        {/* Content */}

        <div className="flex-1 p-6">

          {/* Cards */}

          <div className="grid grid-cols-3 gap-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="
                bg-blue-50
                rounded-2xl
                p-4
              "
              >
                <div className="text-blue-700 text-xl">
                  {item.icon}
                </div>

                <p className="text-sm text-slate-500 mt-2">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold">
                  {item.value}
                </h3>
              </div>

            ))}

          </div>

          {/* Chart */}

          <div
            className="
            mt-6
            rounded-2xl
            bg-slate-100
            h-32
            flex
            items-center
            justify-center
            text-blue-700
            text-4xl
          "
          >
            <FaChartLine />
          </div>

          {/* Bottom */}

          <div
            className="
            mt-6
            grid
            grid-cols-2
            gap-5
          "
          >
            <div>
              <h3 className="font-bold mb-3">
                Today's Tasks
              </h3>

              <div className="space-y-2">

                {tasks.map(task => (

                  <div
                    key={task}
                    className="
                    bg-slate-100
                    rounded-xl
                    p-3
                  "
                  >
                    ✓ {task}
                  </div>

                ))}

              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3">
                Recent Activity
              </h3>

              <div className="space-y-2">

                {activity.map(item => (

                  <div
                    key={item}
                    className="
                    bg-slate-100
                    rounded-xl
                    p-3
                  "
                  >
                    ● {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}