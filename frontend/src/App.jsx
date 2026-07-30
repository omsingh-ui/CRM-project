import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

// New Pages
import Customers from "./pages/Customers";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition">
        <Routes>
          {/* ==========================
              PUBLIC ROUTES
          ========================== */}

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          {/* ==========================
              PROTECTED ROUTES
          ========================== */}

          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Customers */}
            <Route
              path="/customers"
              element={<Customers />}
            />

            {/* Leads */}
            <Route
              path="/leads"
              element={<Leads />}
            />

            {/* Tasks */}
            <Route
              path="/tasks"
              element={<Tasks />}
            />

            {/* Settings */}
            <Route
              path="/settings"
              element={<Settings />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}