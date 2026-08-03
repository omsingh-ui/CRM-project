import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

const Customers = lazy(() => import("./pages/Customers"));
const Leads = lazy(() => import("./pages/Leads"));
const Tasks = lazy(() => import("./pages/Tasks"));

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
 return (
  <BrowserRouter>
    <ScrollToTop />

    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition">

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div
              className="
              w-12
              h-12
              border-4
              border-blue-600
              border-t-transparent
              rounded-full
              animate-spin
              "
            />
          </div>
        }
      >

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

      </Suspense>

    </div>

  </BrowserRouter>
);
}