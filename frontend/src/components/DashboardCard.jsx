import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  value,
  icon,
  trend = null,
  trendDirection = "up",
  subtitle = "Updated today",
  accent = "from-indigo-500 to-violet-500",
  loading = false,
}) {
  if (loading) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="h-11 w-11 animate-pulse rounded-2xl bg-slate-200 dark:bg-zinc-700 sm:h-12 sm:w-12" />
        </div>

        <div className="mt-5 h-9 w-24 animate-pulse rounded-lg bg-slate-200 dark:bg-zinc-700 sm:mt-6" />
        <div className="mt-3 h-3 w-28 animate-pulse rounded-lg bg-slate-200 dark:bg-zinc-700" />

        <div className="mt-5 h-6 w-32 animate-pulse rounded-full bg-slate-200 dark:bg-zinc-700 sm:mt-6" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200/80
      bg-white
      p-7
      transition-all
      duration-300
      hover:-translate-y-1.5
      hover:border-transparent
      hover:shadow-xl
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      {/* Gradient top line */}
      <div
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${accent} transition-transform duration-300 group-hover:scale-x-100`}
      />

      {/* Top */}
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${accent}
            text-xl
            text-white
            shadow-lg
            shadow-indigo-500/20
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:-rotate-6
            sm:h-12
            sm:w-12
          `}
        >
          {icon}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex min-h-6 items-center justify-between gap-2 sm:mt-6 sm:gap-3">
        {trend ? (
          <span
            className={`
            inline-flex
            shrink-0
            items-center
            gap-1
            rounded-full
            px-3
            py-1
            text-xs
            font-bold
            ${
              trendDirection === "down"
                ? "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
                : "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
            }
            `}
          >
            {trendDirection === "down" ? "↓" : "↑"} {trend}
          </span>
        ) : (
          <span />
        )}

        <span className="min-w-0 truncate text-right text-xs font-medium text-slate-400 dark:text-slate-500">
          {subtitle}
        </span>
      </div>
    </motion.div>
  );
}
