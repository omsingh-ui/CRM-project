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
}) {
  const data = [
    {
      status: "New",
      count: leadStatus.New || 0,
    },
    {
      status: "Contacted",
      count: leadStatus.Contacted || 0,
    },
    {
      status: "Qualified",
      count: leadStatus.Qualified || 0,
    },
    {
      status: "Won",
      count: leadStatus.Won || 0,
    },
    {
      status: "Lost",
      count: leadStatus.Lost || 0,
    },
  ];

  return (
    <div
      className="
      bg-white
      dark:bg-zinc-900
      rounded-3xl
      shadow
      p-8
      h-[400px]
    "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-8
        text-slate-900
        dark:text-white
      "
      >
        Lead Analytics
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="status" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}