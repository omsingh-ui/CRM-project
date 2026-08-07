import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const statusStyles = {
  New: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Contacted:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  Qualified:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Won: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Lost: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

export default function LeadTable({
  data = [],
  loading = false,
}) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl bg-white dark:bg-zinc-900 p-8 h-[350px]" />
    );
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-zinc-900 shadow-md p-8">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <h2
  className="
  text-2xl
  font-black
  tracking-tight
  text-slate-900
  dark:text-white
  "
>
  Recent Leads

  <span className="ml-2 text-base font-medium text-slate-400">
    ({filtered.length})
  </span>
</h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            View and manage your latest leads.
          </p>
        </div>

        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
  placeholder="Search leads..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
  w-72
  rounded-2xl
  border
  border-slate-200
  dark:border-zinc-700
  bg-white
  dark:bg-zinc-900
  py-3
  pl-11
  pr-4
  text-slate-900
  dark:text-white
  placeholder:text-slate-400
  shadow-sm
  transition
  duration-300
  outline-none
  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-500/10
  "
/>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="h-48 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
          <p className="text-4xl">📭</p>

          <p className="mt-3 font-semibold">
            No leads found
          </p>

          <p className="text-sm">
            Try another search term.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="border-b border-slate-200 dark:border-zinc-700">
                <th className="py-4 text-left text-sm uppercase tracking-wider text-slate-500">
                  Lead Name
                </th>

                <th
  className="
  py-4
  text-left
  text-xs
  font-semibold
  uppercase
  tracking-[0.16em]
  text-slate-500
  dark:text-slate-400
  "
>
  Status
</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-zinc-700">
              {filtered.map((item) => (
                <tr
                  key={item.name}
                 className="
transition
duration-200
hover:bg-blue-50/50
dark:hover:bg-zinc-800
"
                >
                  <td className="py-5 font-medium text-slate-900 dark:text-white">
                    {item.name}
                  </td>

                  <td>
  <span
    className={`
      inline-flex
      items-center
      gap-1.5
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold
      ${
        statusStyles[item.status] ||
        "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300"
      }
    `}
  >
    <span className="h-2 w-2 rounded-full bg-current opacity-70" />

    {item.status}
  </span>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}