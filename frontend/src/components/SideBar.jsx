
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
  sticky
  top-0
  flex
  flex-col
  justify-between
  w-full
  md:w-72
  h-screen
  bg-slate-950
  text-white
  border-r
  border-slate-800/70
  shadow-[8px_0_30px_rgba(15,23,42,0.18)]
  "
>
      {/* Logo */}
     <div className="px-8 py-8 border-b border-slate-800">

  <div className="flex items-center gap-3">

  <div
  className="
  border-b
  border-slate-800/70
  px-6
  py-6
  "
>

  <div className="flex items-center gap-4">

    <div
      className="
      flex
      h-12
      w-12
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

    <div>

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
          rounded-full
          bg-emerald-500
          animate-pulse
          "
        />

        <span
          className="
          text-xs
          text-slate-400
          "
        >
          Workspace Online
        </span>

      </div>

    </div>

  </div>

</div>
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
  ? "relative bg-slate-800 text-white"
  : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }
                  `
                }
              >
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
        <div
  className="
  flex
  items-center
  gap-4
  mb-5
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