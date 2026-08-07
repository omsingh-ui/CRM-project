import { useEffect, useState } from "react";

import DashboardHeader from "../components/DashboardHeader";
import DashboardCard from "../components/DashboardCard";
import AnalyticsChart from "../components/AnalyticsChart";
import LeadTable from "../components/LeadTable";

import QuickActions from "../components/QuickActions";
import ProgressCard from "../components/ProgressCard";
import ScannerCard from "../components/ScannerCard";
import UploadCenter from "../components/UploadCenter";
import RecentActivity from "../components/RecentActivity";
import SearchBar from "../components/SearchBar";

import { getDashboard } from "../api/dashboardApi";

// Temporary
// We'll remove this after connecting Leads separately.
import { leads } from "../data/dashboardData";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getDashboard();

      setDashboard(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    );
  }

  const stats = [
    {
      title: "Customers",
      value: dashboard?.totalCustomers ?? 0,
    },
    {
      title: "Leads",
      value: dashboard?.totalLeads ?? 0,
    },
    {
      title: "Tasks",
      value: dashboard?.totalTasks ?? 0,
    },
    {
      title: "Completed Tasks",
      value: dashboard?.completedTasks ?? 0,
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      dark:bg-zinc-950
      transition
      p-5
      md:p-8
      xl:p-10
      overflow-x-hidden
    "
    >
      {/* Header */}

      <div
  className="
  sticky
  top-0
  z-20
  pb-4
  backdrop-blur-xl
  bg-slate-50/80
  dark:bg-zinc-950/80
  border-b
  border-slate-200/70
  dark:border-zinc-800/70
  "
>
        <div className="space-y-5">
          <DashboardHeader />

          <SearchBar />
        </div>
      </div>

      {/* Stats */}

      <div
        className="
        mt-5
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
      "
      >
        {stats.map((item) => (
          <div
            key={item.title}
           className="
transition
duration-300
hover:-translate-y-1
hover:scale-[1.02]
"
          >
            <DashboardCard
              title={item.title}
              value={item.value}
            />
          </div>
        ))}
      </div>

      {/* Main Layout */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
        items-start
      "
      >
        {/* Left */}

        <div
          className="
          lg:col-span-2
          space-y-6
        "
        >
          <div className="rounded-3xl overflow-hidden">
            <AnalyticsChart
              leadStatus={dashboard?.leadStatus}
              taskStatus={dashboard?.taskStatus}
            />
          </div>

          <div className="rounded-3xl overflow-hidden">
            <LeadTable data={leads} />
          </div>
        </div>

        {/* Right */}

        <div
          className="
          space-y-6
          lg:self-start
        "
        >
          <QuickActions />

          <ScannerCard />

          <UploadCenter />

          <RecentActivity
            activities={
              dashboard?.recentActivities || []
            }
          />

          <ProgressCard />
        </div>
      </div>
    </div>
  );
}