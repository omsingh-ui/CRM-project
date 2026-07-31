import {
  FaUser,
  FaTasks,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

const activityIcons = {
  Customer: <FaUser />,
  Lead: <FaChartLine />,
  Task: <FaTasks />,
  Document: <FaFileAlt />,
};

export default function RecentActivity({
  activities = [],
  loading = false,
}) {
  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl bg-white dark:bg-zinc-900 p-8">
        <div className="h-6 w-40 rounded bg-slate-200 dark:bg-zinc-700"></div>

        <div className="mt-8 space-y-5">
          <div className="h-16 rounded bg-slate-200 dark:bg-zinc-700"></div>
          <div className="h-16 rounded bg-slate-200 dark:bg-zinc-700"></div>
          <div className="h-16 rounded bg-slate-200 dark:bg-zinc-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 shadow-md p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Latest actions across your CRM.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="h-52 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
          <p className="text-4xl">📭</p>

          <p className="mt-3 font-semibold">
            No recent activity
          </p>

          <p className="text-sm">
            Activity from your CRM will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={activity._id}
              className="relative flex gap-4"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {activityIcons[activity.module] || <FaFileAlt />}
                </div>

                {index !== activities.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-slate-300 dark:bg-zinc-700"></div>
                )}
              </div>

              {/* Content */}

              <div className="pb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {activity.action}
                </h3>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {activity.description}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  {activity.module}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}