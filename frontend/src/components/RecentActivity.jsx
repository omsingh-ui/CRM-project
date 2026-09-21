import {
  FaUser,
  FaTasks,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

const activityIcons = {
  Customer: FaUser,
  Lead: FaChartLine,
  Task: FaTasks,
  Document: FaFileAlt,
};

const activityStyles = {
  Customer: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  Lead: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  Task: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  Document: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
};

export default function RecentActivity({
  activities = [],
  loading = false,
}) {
  if (loading) {
    return (
      <div>
        <div className="mt-2 h-4 w-56 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />

        <div className="mt-8 space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex gap-3 sm:gap-4"
            >
              <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-slate-200 dark:bg-zinc-700" />

              <div className="min-w-0 flex-1">
                <div className="h-4 w-32 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />

                <div className="mt-2 h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />

                <div className="mt-2 h-3 w-20 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
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
          Recent Activity
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-slate-500
          dark:text-slate-400
          "
        >
          Latest actions across your CRM.
        </p>
      </div>

      {/* Empty State */}

      {activities.length === 0 ? (
        <div
          className="
          flex
          h-48
          flex-col
          items-center
          justify-center
          text-center
          sm:h-52
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
            bg-slate-100
            text-2xl
            dark:bg-zinc-800
            "
          >
            📭
          </div>

          <p
            className="
            mt-4
            font-semibold
            text-slate-700
            dark:text-slate-300
            "
          >
            No recent activity
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Activity from your CRM will appear here.
          </p>
        </div>
      ) : (
        /* Activity Scroll Area */

        <div
          className="
          mt-6
          max-h-[360px]
          space-y-1
          overflow-y-auto
          pr-2
          sm:mt-8
          sm:max-h-[420px]
          "
        >
          {activities.map((activity, index) => {
            const Icon =
              activityIcons[activity.module] || FaFileAlt;

            const style =
              activityStyles[activity.module] || {
                bg: "bg-slate-100 dark:bg-zinc-800",
                text: "text-slate-600 dark:text-slate-400",
              };

            return (
              <div
                key={
                  activity._id ||
                  `${activity.module}-${index}`
                }
                className="
                group
                relative
                flex
                gap-3
                rounded-2xl
                p-3
                transition
                duration-200
                hover:bg-slate-50
                dark:hover:bg-zinc-800/60
                sm:gap-4
                "
              >
                {/* Timeline */}

                <div className="relative flex shrink-0 flex-col items-center">
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      ${style.bg}
                      ${style.text}
                      transition-transform
                      duration-200
                      group-hover:scale-105
                    `}
                  >
                    <Icon size={15} />
                  </div>

                  {index !== activities.length - 1 && (
                    <div
                      className="
                      absolute
                      top-12
                      bottom-[-12px]
                      w-px
                      bg-slate-200
                      dark:bg-zinc-700
                      "
                    />
                  )}
                </div>

                {/* Content */}

                <div className="min-w-0 flex-1 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="
                      min-w-0
                      font-semibold
                      text-slate-900
                      dark:text-white
                      "
                    >
                      {activity.action}
                    </h3>

                    <span
                      className="
                      shrink-0
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-wide
                      text-slate-400
                      "
                    >
                      {activity.module}
                    </span>
                  </div>

                  <p
                    className="
                    mt-1
                    break-words
                    text-sm
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                    "
                  >
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}