export default function DashboardCard({
  title,
  value,
  icon,
  trend = null,
  subtitle = "Updated today",
  iconBg = "bg-blue-100 dark:bg-blue-900/30",
  iconColor = "text-blue-600",
  loading = false,
}) {
  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl bg-white dark:bg-zinc-900 p-7 shadow">
        <div className="h-4 w-24 rounded bg-slate-200 dark:bg-zinc-700"></div>

        <div className="mt-6 h-10 w-20 rounded bg-slate-200 dark:bg-zinc-700"></div>

        <div className="mt-6 h-4 w-32 rounded bg-slate-200 dark:bg-zinc-700"></div>
      </div>
    );
  }

  return (
    <div
      className="
      group
      rounded-3xl
      bg-white
      dark:bg-zinc-900
      p-6
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p
  className="
  text-sm
  font-semibold
  uppercase
  tracking-[0.12em]
  text-slate-500
  dark:text-slate-400
  "
>
  {title}
</p>

          <h2
  className="
  mt-3
  text-4xl
  font-black
  tracking-tight
  text-slate-900
  dark:text-white
  "
>
  {value}
</h2>
        </div>

        <div
          className={`
            ${iconBg}
            ${iconColor}
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            text-2xl
            transition-transform
            duration-300
            group-hover:scale-110
          `}
        >
          {icon}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {trend ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
            ▲ {trend}
          </span>
        ) : (
          <span></span>
        )}

        <span className="text-xs text-slate-500 dark:text-slate-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
}