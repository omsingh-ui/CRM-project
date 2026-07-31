import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div
      className="
      flex
      min-h-screen
      bg-slate-100
      dark:bg-zinc-950
      "
    >
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main
        className="
        flex-1
        overflow-y-auto
        p-6
        lg:p-8
        xl:p-10
        transition-all
        duration-300
        "
      >
        <Outlet />
      </main>
    </div>
  );
}