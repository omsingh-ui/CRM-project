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
    icon: FaPlus,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Create Report",
    description: "Generate CRM reports",
    icon: FaFileAlt,
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    title: "Invite Team",
    description: "Add a new team member",
    icon: FaUsers,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

export default function QuickActions({ onAction }) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200/80
      bg-white
      p-6
      shadow-sm
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      {/* Header */}

      <div>
        <h2
          className="
          text-xl
          font-black
          tracking-tight
          text-slate-900
          dark:text-white
          "
        >
          Quick Actions
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-slate-500
          dark:text-slate-400
          "
        >
          Frequently used shortcuts.
        </p>
        
      </div>

      {/* Actions */}

      <div className="mt-5 space-y-3 sm:mt-6">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              onClick={() => onAction?.(action.title)}
              className="
group
flex
w-full
items-center
justify-between
gap-4
rounded-2xl
border
border-slate-200
bg-slate-50
p-3.5
text-left
transition-all
duration-200
hover:-translate-y-0.5
hover:border-blue-200
hover:bg-white
hover:shadow-md
dark:border-zinc-800
dark:bg-zinc-800/60
dark:hover:border-zinc-700
dark:hover:bg-zinc-800
sm:p-4
"
            >
              <div className="flex min-w-0 items-center gap-4">
                {/* Icon */}

                <div
                  className={`
    ${action.color}
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-xl
    text-base
    transition-transform
    duration-200
    group-hover:scale-105
    sm:h-11
    sm:w-11
  `}
                >
                  <Icon />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <h3
                    className="
                    font-semibold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {action.title}
                  </h3>

                  <p
                    className="
                    mt-0.5
                    truncate
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                    "
                  >
                    {action.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}

              <FaArrowRight
                className="
                shrink-0
                text-slate-400
                transition-transform
                duration-200
                group-hover:translate-x-1
                group-hover:text-blue-500
                "
                size={14}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}