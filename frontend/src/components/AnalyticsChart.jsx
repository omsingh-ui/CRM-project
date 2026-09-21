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
      <div
        className="
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        p-6
        dark:border-zinc-800
        dark:bg-zinc-900
        "
      >
        <div className="h-6 w-40 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />

        <div className="mt-2 h-4 w-64 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />

        <div
  className="
  mt-6
  h-[240px]
  animate-pulse
  rounded-2xl
  bg-slate-100
  dark:bg-zinc-800
  sm:h-[280px]
  lg:h-[320px]
  "
/>
      </div>
    );
  }

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

      <div className="flex items-start justify-between gap-4">
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
            Lead Analytics
          </h2>

          <p
            className="
            mt-1
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
            "
          >
            Track lead performance across every stage.
          </p>
        </div>

        <div
          className="
          hidden
          rounded-full
          bg-blue-50
          px-3
          py-1.5
          text-xs
          font-semibold
          text-blue-600
          sm:block
          dark:bg-blue-900/20
          dark:text-blue-400
          "
        >
          Lead Pipeline
        </div>
      </div>

      {/* Chart */}

      {!hasData ? (
        <div
          className="
flex
h-[240px]
flex-col
items-center
justify-center
text-center
sm:h-[280px]
lg:h-[320px]
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
            bg-slate-100
            text-xl
            dark:bg-zinc-800
            "
          >
            📊
          </div>

          <p
            className="
            mt-4
            font-semibold
            text-slate-700
            dark:text-slate-300
            "
          >
            No lead data available
          </p>

          <p
            className="
            mt-1
            text-sm
            text-slate-400
            "
          >
            Your lead analytics will appear here.
          </p>
        </div>
      ) : (
        <div
  className="
  mt-6
  h-[240px]
  sm:h-[280px]
  lg:h-[320px]
  "
>
          <ResponsiveContainer
  width="100%"
  height="100%"
>
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="status"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 12,
                  fontWeight: 500,
                }}
                dy={10}
              />

<YAxis
  allowDecimals={false}
  axisLine={false}
  tickLine={false}
  width={30}
  tick={{
    fill: "#94a3b8",
    fontSize: 12,
  }}
/>
              <Tooltip
                cursor={{
                  fill: "rgba(37, 99, 235, 0.06)",
                }}
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  boxShadow:
                    "0 12px 30px rgba(15,23,42,0.12)",
                  padding: "10px 14px",
                }}
                labelStyle={{
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "4px",
                }}
              />

              <Bar
                dataKey="count"
                fill="#2563eb"
                radius={[10, 10, 0, 0]}
                barSize={42}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}