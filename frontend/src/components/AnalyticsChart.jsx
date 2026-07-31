import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AnalyticsChart({
  leadStatus = {},
  loading = false,
}) {
  const data = [
    { status: "New", count: leadStatus.New || 0 },
    { status: "Contacted", count: leadStatus.Contacted || 0 },
    { status: "Qualified", count: leadStatus.Qualified || 0 },
    { status: "Won", count: leadStatus.Won || 0 },
    { status: "Lost", count: leadStatus.Lost || 0 },
  ];

  const hasData = data.some((item) => item.count > 0);

  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl bg-white dark:bg-zinc-900 p-8 h-[400px]">
        <div className="h-6 w-48 rounded bg-slate-200 dark:bg-zinc-700"></div>

        <div className="mt-8 h-[280px] rounded bg-slate-200 dark:bg-zinc-700"></div>
      </div>
    );
  }

  return (
    <div
      className="
      rounded-3xl
      bg-white
      dark:bg-zinc-900
      shadow-md
      p-8
      h-[400px]
      overflow-hidden
      "
    >
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Lead Analytics
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Track lead performance across every stage.
        </p>
      </div>

      {!hasData ? (
        <div className="flex h-[280px] items-center justify-center text-slate-500 dark:text-slate-400">
          No lead data available.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="status" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}