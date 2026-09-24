import { MdEdit, MdDelete, MdPerson } from "react-icons/md";

const statusBadges = {
  Active:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50",
  Lead:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50",
  Inactive:
    "bg-slate-100 text-slate-600 border-slate-200 dark:bg-zinc-800 dark:text-slate-400 dark:border-zinc-700",
};

export default function CustomerTable({
  customers = [],
  loading = false,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm">
        <div className="space-y-4">
          <div className="h-6 w-48 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse" />
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-14 bg-slate-100 dark:bg-zinc-800/60 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (customers.length === 0) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 border border-slate-100 dark:border-zinc-800 shadow-sm text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-zinc-800 dark:text-blue-400 text-2xl">
          👥
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
          No Customers Found
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Start building your customer list or adjust your search filter.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-950/40 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-4 px-6">Customer</th>
              <th className="py-4 px-6">Phone</th>
              <th className="py-4 px-6">Company</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/80 text-sm">
            {customers.map((customer) => {
              const initial = customer.name
                ? customer.name.charAt(0).toUpperCase()
                : "C";
              const badgeClass =
                statusBadges[customer.status] || statusBadges.Lead;

              return (
                <tr
                  key={customer._id}
                  className="hover:bg-slate-50/80 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  {/* Name + Email + Avatar */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white shadow-sm">
                        {initial}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white truncate">
                          {customer.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {customer.phone}
                  </td>

                  {/* Company */}
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                    {customer.company || (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                      {customer.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => onEdit?.(customer)}
                        className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                        title="Edit Customer"
                        aria-label="Edit Customer"
                      >
                        <MdEdit size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete?.(customer)}
                        className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                        title="Delete Customer"
                        aria-label="Delete Customer"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}