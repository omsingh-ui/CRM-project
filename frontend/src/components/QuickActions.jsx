import {
  FaPlus,
  FaFileAlt,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const actions = [
  {
    title: "New Lead",
    description: "Create a new sales lead",
    icon: <FaPlus />,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Create Report",
    description: "Generate CRM reports",
    icon: <FaFileAlt />,
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    title: "Invite Team",
    description: "Add a new team member",
    icon: <FaUsers />,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

export default function QuickActions({
  onAction,
}) {
  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Frequently used shortcuts.
        </p>
      </div>

      <div className="space-y-4">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => onAction?.(action.title)}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-800
              p-4
              text-left
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-lg
              cursor-pointer
            "
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  ${action.color}
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  text-lg
                `}
              >
                {action.icon}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {action.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {action.description}
                </p>
              </div>
            </div>

            <FaArrowRight className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        ))}
      </div>
    </div>
  );
}