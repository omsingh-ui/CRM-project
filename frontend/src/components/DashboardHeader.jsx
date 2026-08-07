import { useEffect, useState } from "react";
import { MdAdd, MdBusiness } from "react-icons/md";

export default function DashboardHeader({
  user = { name: "Om Singh" },
  onCreateCustomer,
}) {
  const [company, setCompany] = useState("MiniVel");

  useEffect(() => {
    const settings = JSON.parse(
      localStorage.getItem("minivel_settings")
    );

    if (settings?.company) {
      setCompany(settings.company);
    }
  }, []);

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-slate-200 dark:border-zinc-800 pb-8">
      {/* Left */}
      <div>
        <p className="text-blue-600 font-semibold">
          {greeting} 👋
        </p>

        <h1
  className="
  mt-1
  text-3xl
  md:text-4xl
  font-black
  tracking-tight
  text-slate-900
  dark:text-white
  "
>
  Welcome back, {user.name}
</h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400 leading-relaxed">
          Manage your customers, leads and tasks efficiently.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
          <MdBusiness size={18} />
          {company}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-start lg:items-end gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {today}
        </p>

        <button
          onClick={onCreateCustomer}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
        >
          <MdAdd size={20} />
          New Customer
        </button>
      </div>
    </div>
  );
}