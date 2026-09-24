import { useEffect, useState } from "react";
import { MdAdd, MdBusiness } from "react-icons/md";
import { getUser } from "../utils/auth";

export default function DashboardHeader({
  user,
  onCreateCustomer,
}) {
  const loggedInUser = user || getUser();
  const userName = loggedInUser?.name || "User";
  const [company, setCompany] = useState("Tech Marque");

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

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div
      className="
      flex
      min-w-0
      flex-col
      gap-6
      lg:flex-row
      lg:items-end
      lg:justify-between
      "
    >
      {/* Left */}

      <div className="min-w-0">
        <p
          className="
          text-sm
          font-semibold
          tracking-wide
          text-blue-600
          dark:text-blue-400
          "
        >
          {greeting} 👋
        </p>

        <h1
          className="
          mt-2
          text-3xl
          font-black
          tracking-tight
          text-slate-900
          dark:text-white
          sm:text-4xl
          "
        >
          Welcome back, {userName}
        </h1>

        <p
          className="
          mt-3
          max-w-xl
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
          sm:text-base
          "
        >
          Manage your customers, leads, and tasks
          efficiently from one place.
        </p>

        {/* Workspace */}

        <div
          className="
          mt-5
          inline-flex
          max-w-full
          items-center
          gap-2
          rounded-full
          border
          border-blue-100
          bg-blue-50
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
          shadow-sm
          dark:border-blue-900/40
          dark:bg-blue-900/20
          dark:text-blue-300
          "
        >
          <MdBusiness
            size={18}
            className="shrink-0"
          />

          <span className="truncate">
            {company}
          </span>

          <span
            className="
            ml-1
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-emerald-500
            "
          />
        </div>
      </div>

      {/* Right */}

      <div
        className="
        flex
        min-w-0
        flex-col
        items-start
        gap-3
        sm:gap-4
        lg:items-end
        "
      >
        <p
          className="
          text-sm
          font-medium
          text-slate-500
          dark:text-slate-400
          "
        >
          {today}
        </p>

        <button
          onClick={onCreateCustomer}
          className="
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-5
          py-3
          font-semibold
          text-white
          shadow-sm
          transition
          duration-200
          hover:-translate-y-0.5
          hover:bg-blue-700
          hover:shadow-md
          active:translate-y-0
          sm:w-auto
          sm:px-6
          "
        >
          <MdAdd size={20} />

          New Customer
        </button>
      </div>
    </div>
  );
}