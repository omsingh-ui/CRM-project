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

  const filtered = data.filter((item) => {
    const leadName = item.customer?.name || item.name || "";
    const source = item.source || "";
    const term = search.toLowerCase();
    return (
      leadName.toLowerCase().includes(term) ||
      source.toLowerCase().includes(term)
    );
  });

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
        <div className="flex items-center justify-between">
          <div>
            <div className="h-6 w-36 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />

            <div className="mt-2 h-4 w-56 animate-pulse rounded bg-slate-200 dark:bg-zinc-700" />
          </div>

          <div className="h-11 w-56 animate-pulse rounded-2xl bg-slate-200 dark:bg-zinc-700" />
        </div>

        <div className="mt-8 space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-12 animate-pulse rounded-xl bg-slate-100 dark:bg-zinc-800"
            />
          ))}
        </div>
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

      <div
        className="
        flex
        flex-col
        gap-5
        md:flex-row
        md:items-center
        md:justify-between
        "
      >
        <div>
          <div className="flex items-center gap-3">
            <h2
              className="
              text-xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
              "
            >
              Recent Leads
            </h2>

            <span
              className="
              rounded-full
              bg-slate-100
              px-2.5
              py-1
              text-xs
              font-bold
              text-slate-600
              dark:bg-zinc-800
              dark:text-slate-300
              "
            >
              {filtered.length}
            </span>
          </div>

          <p
            className="
            mt-1
            text-sm
            text-slate-500
            dark:text-slate-400
            "
          >
            View and manage your latest leads.
          </p>
        </div>

        {/* Search */}

        <div className="relative w-full md:w-72">
          <FaSearch
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
            size={14}
          />

          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            py-3
            pl-11
            pr-4
            text-sm
            text-slate-900
            outline-none
            placeholder:text-slate-400
            transition
            duration-200
            focus:border-blue-500
            focus:bg-white
            focus:ring-4
            focus:ring-blue-500/10
            dark:border-zinc-700
            dark:bg-zinc-800
            dark:text-white
            dark:focus:bg-zinc-800
            "
          />
        </div>
      </div>

      {/* Table */}

      {filtered.length === 0 ? (
       <div
  className="
  flex
  h-48
  flex-col
  items-center
  justify-center
  text-center
  sm:h-56
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
            No leads found
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Try another search term.
          </p>
        </div>
      ) : (
       <div className="mt-6 overflow-x-auto sm:mt-8">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-zinc-800">
                <th
                  className="
                  pb-3
                  sm:pb-4
                  text-left
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                  "
                >
                  Lead Name
                </th>

                <th
                  className="
                  pb-4
                  text-left
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                  "
                >
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {filtered.map((item, idx) => (
                <tr
                  key={item._id || item.name || idx}
                  className="
                  group
                  transition-colors
                  duration-200
                  hover:bg-slate-50
                  dark:hover:bg-zinc-800/60
                  "
                >
                 <td
  className="
  py-4
  pr-4
  font-semibold
  text-slate-800
  dark:text-slate-200
  sm:py-5
  sm:pr-6
  "
>
  <div>
    <span className="block">{item.customer?.name || item.name || "Lead"}</span>
    {(item.source || item.customer?.company) && (
      <span className="block text-xs font-normal text-slate-400 dark:text-zinc-500 mt-0.5">
        {item.customer?.company ? `${item.customer.company} • ` : ""}{item.source || ""}
      </span>
    )}
  </div>
</td>

                 <td className="py-4 sm:py-5">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        ${
                          statusStyles[item.status] ||
                          "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300"
                        }
                      `}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />

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