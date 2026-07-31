import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const navItems = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "Features", href: "#features" },
  { name: "Trusted", href: "#trusted" },
  { name: "Contact", href: "#cta" },
];

export default function Navbar() {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/70
        bg-white/80
        dark:bg-zinc-950/80
        backdrop-blur-xl
        shadow-sm
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
            font-black
            text-2xl
            text-slate-900
            dark:text-white
          "
        >
          <div
            className="
              h-10
              w-10
              rounded-xl
              bg-blue-700
              flex
              items-center
              justify-center
              text-white
              shadow-lg
            "
          >
            M
          </div>

          <span>
            Mini<span className="text-blue-700">vel</span>
          </span>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                text-slate-600
                dark:text-slate-300
                font-medium
                transition-all
                duration-300
                hover:text-blue-700
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="
              hidden
              sm:block
              rounded-xl
              px-5
              py-3
              font-medium
              text-slate-700
              dark:text-white
              transition-all
              duration-300
              hover:bg-slate-100
              dark:hover:bg-zinc-800
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-700
              px-5
              py-3
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-800
            "
          >
            Get Started
            <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </nav>
  );
}