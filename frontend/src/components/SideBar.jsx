import { NavLink, useNavigate } from "react-router-dom";

import {
  MdDashboard,
  MdPeople,
  MdTrackChanges,
  MdTask,
  MdSettings,
  MdLogout,
  MdClose,
} from "react-icons/md";

import { logout, getUser } from "../utils/Auth";
import Logo from "../components/Logo";

export default function Sidebar({
  mobile = false,
  onNavigate,
}) {
  const navigate = useNavigate();
  const user = getUser();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: MdDashboard,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: MdPeople,
    },
    {
      name: "Leads",
      path: "/leads",
      icon: MdTrackChanges,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: MdTask,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: MdSettings,
    },
  ];

  function handleLogout() {
    logout();
    navigate("/login");
    onNavigate?.();
  }

  return (
    <aside
      className={`
        flex
        h-screen
        w-72
        shrink-0
        flex-col
        justify-between
        overflow-y-auto
        bg-slate-900
        text-white
        ${
          mobile
            ? "fixed inset-y-0 left-0 z-50 w-[280px] shadow-2xl"
            : "hidden md:flex"
        }
      `}
    >
      {/* Top Section */}

      <div>
        {/* Logo */}

        <div className="flex items-center justify-between gap-3 px-6 py-6">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-indigo-700
              text-xl
              font-black
              text-white
              shadow-lg
              "
            >
              M
            </div>

            <div className="min-w-0">
              <Logo
                size="text-xl"
                primary="text-white"
                accent="text-blue-400"
                showTagline={false}
              />

              <div
                className="
                mt-1
                flex
                items-center
                gap-2
                "
              >
                <span
                  className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-emerald-500
                  animate-pulse
                  "
                />

                <span className="truncate text-xs text-slate-400">
                  Workspace Online
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Close Button */}

          {mobile && (
            <button
              type="button"
              onClick={onNavigate}
              className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-slate-400
              transition
              duration-200
              hover:bg-slate-800
              hover:text-white
              "
              aria-label="Close navigation"
            >
              <MdClose size={22} />
            </button>
          )}
        </div>

        {/* Navigation */}

        <nav className="space-y-2 px-4 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => onNavigate?.()}
                className={({ isActive }) =>
                  `
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  px-5
                  py-3.5
                  transition
                  duration-200
                  ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        className="
                        absolute
                        left-0
                        top-3
                        bottom-3
                        w-1
                        rounded-r-full
                        bg-blue-500
                        "
                      />
                    )}

                    <Icon
                      size={22}
                      className="
                      shrink-0
                      transition-transform
                      duration-200
                      group-hover:scale-105
                      "
                    />

                    <span className="font-medium">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer */}

      <div className="mt-4 border-t border-slate-800 p-5">
        <div
          className="
          mb-5
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/60
          p-4
          transition
          duration-300
          hover:border-slate-700
          "
        >
          <div
            className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            to-indigo-700
            text-lg
            font-bold
            text-white
            shadow-lg
            "
          >
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div className="min-w-0">
            <p className="truncate font-semibold">
  {user?.name || "User"}
</p>

<p className="text-sm text-slate-400">
  {user?.role || "User"}
</p>
          </div>
        </div>

        {/* Logout */}

        <button
          type="button"
          onClick={handleLogout}
          className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-red-500/20
          bg-red-500/10
          py-3
          font-medium
          text-red-400
          transition
          duration-300
          hover:border-red-500/40
          hover:bg-red-500/20
          "
        >
          <MdLogout size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}