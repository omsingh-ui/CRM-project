
import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  MdDashboard,
  MdPeople,
  MdTrackChanges,
  MdTask,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import { logout } from "../utils/auth";
import Logo from "../components/Logo";

export default function Sidebar() {
  const navigate = useNavigate();

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
  }

  return (
    <aside
      className="
      flex
      flex-col
      justify-between
      w-full
      md:w-72
      min-h-screen
      bg-slate-900
      text-white
      border-r
      border-slate-800
      "
    >
      {/* Logo */}
     <div className="px-8 py-8 border-b border-slate-800">

  <div className="flex items-center gap-3">

    <div
      className="
      h-12
      w-12
      rounded-2xl
      bg-gradient-to-br
      from-blue-500
      to-purple-600
      flex
      items-center
      justify-center
      text-2xl
      font-black
      text-white
      shadow-lg
      "
    >
      M
    </div>

    <Logo
      size="text-2xl"
      primary="text-white"
      accent="text-blue-400"
      showTagline={false}
    />

  </div>



        {/* Navigation */}
        <nav className="px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  px-5
                  py-3.5
                  rounded-xl
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                  `
                }
              >
                <Icon size={22} />

                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-4 mb-5">
          <div
            className="
            w-12
            h-12
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            text-lg
            font-bold
            "
          >
            O
          </div>

          <div>
            <p className="font-semibold">
              Om Singh
            </p>

            <p className="text-sm text-slate-400">
              Administrator
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          rounded-xl
          bg-red-600
          py-3
          font-medium
          transition
          hover:bg-red-700
          "
        >
          <MdLogout size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}