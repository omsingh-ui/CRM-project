import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      <div>
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div>
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
    <>
      {/* Header */}

     <div
  className="
    relative
    z-50
    -mx-5
    mb-1
    px-5
    pb-4
    pt-1
    backdrop-blur-xl
    bg-slate-50/80
    dark:bg-zinc-950/80
    border-b
    border-slate-200/70
    dark:border-zinc-800/70
    sm:-mx-6
    sm:px-6
    lg:-mx-8
    lg:px-8
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
        mt-6
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-4
        xl:gap-5
        "
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className="
            min-w-0
            transition-transform
            duration-300
            hover:-translate-y-1
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
        min-w-0
        grid-cols-1
        items-start
        gap-5
        lg:grid-cols-3
        lg:gap-6
        "
      >
        {/* Left */}

        <div
          className="
          min-w-0
          space-y-5
          lg:col-span-2
          lg:space-y-6
          "
        >
          <div className="min-w-0 overflow-hidden rounded-3xl">
            <AnalyticsChart
              leadStatus={dashboard?.leadStatus}
              taskStatus={dashboard?.taskStatus}
            />
          </div>

          <div className="min-w-0 overflow-hidden rounded-3xl">
            <LeadTable data={leads} />
          </div>
        </div>

        {/* Right */}

        <div
          className="
          min-w-0
          space-y-5
          lg:self-start
          lg:space-y-6
          "
        >
        <QuickActions
  onAction={(action) => {
    if (action === "New Lead") {
      navigate("/leads?action=create");
    }
  }}
/>
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
    </>
  );
}