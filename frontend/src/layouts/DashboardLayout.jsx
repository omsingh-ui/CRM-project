import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { getUser } from "../utils/auth";

export default function DashboardLayout() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = getUser();
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div
      className="
      flex
      h-screen
      overflow-hidden
      bg-slate-50
      dark:bg-zinc-950
      "
    >
      {/* Desktop Sidebar */}

      <Sidebar />

      {/* Mobile Header */}

      <header
        className="
        fixed
        left-0
        right-0
        top-0
        z-40
        flex
        h-16
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white/90
        px-5
        backdrop-blur-xl
        dark:border-zinc-800
        dark:bg-zinc-950/90
        md:hidden
        "
      >
        <button
          type="button"
          onClick={() => setMobileMenu(true)}
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          text-slate-700
          transition
          hover:bg-slate-100
          dark:text-slate-200
          dark:hover:bg-zinc-800
          "
          aria-label="Open navigation"
        >
          <MdMenu size={26} />
        </button>

        <span
          className="
          text-lg
          font-black
          tracking-tight
          text-slate-900
          dark:text-white
          "
        >
          Tech Marque CRM
        </span>

        <div
          className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-indigo-700
          text-sm
          font-bold
          text-white
          "
        >
          {initial}
        </div>
      </header>

      {/* Mobile Drawer */}

      {mobileMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}

          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            className="
            absolute
            inset-0
            bg-slate-950/60
            backdrop-blur-sm
            "
            aria-label="Close navigation"
          />

          {/* Drawer */}

          <div
            className="
            relative
            h-full
            w-72
            max-w-[85vw]
            "
          >
            <Sidebar
  mobile
  onNavigate={() => setMobileMenu(false)}
/>

            <button
              type="button"
              onClick={() => setMobileMenu(false)}
              className="
              absolute
              right-4
              top-4
              z-10
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-slate-800
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-white
              "
              aria-label="Close navigation"
            >
              <MdClose size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}

      <main
        className="
        min-w-0
        flex-1
        overflow-y-auto
        px-5
        pb-6
        pt-20
        sm:px-6
        md:pt-6
        lg:px-8
        "
      >
        <Outlet />
      </main>
    </div>
  );
}