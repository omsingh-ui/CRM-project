export default function CustomerTable({
  customers = [],
  loading,
}) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow">
        <p className="text-center text-gray-500">
          Loading customers...
        </p>
      </div>
    );
  }

  if (customers.length === 0) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow">
        <p className="text-center text-gray-500">
          No customers found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100 dark:bg-zinc-800">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Company</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer._id}
              className="border-t border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition"
            >
              <td className="p-4">{customer.name}</td>

              <td className="p-4">
                {customer.email}
              </td>

              <td className="p-4">
                {customer.phone}
              </td>

              <td className="p-4">
                {customer.company || "-"}
              </td>

              <td className="p-4">
                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                  bg-blue-100
                  text-blue-700
                "
                >
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}