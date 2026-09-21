import { Link } from "react-router-dom";

export default function Logo({
  size = "text-3xl",
  primary = "text-slate-900 dark:text-white",
  accent = "text-blue-600",
  showTagline = true,
}) {
  return (
    <Link
      to="/"
      className="
      inline-block
      transition-transform
      duration-300
      hover:scale-105
      "
    >
      <div className="leading-tight">

        <h1
          className={`
            ${size}
            font-black
            tracking-tight
            select-none
          `}
        >
          <span className={primary}>
            Mini
          </span>

          <span className={accent}>
            vel
          </span>
        </h1>

        {showTagline && (
          <p
            className="
            mt-1
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.4em]
            text-slate-600
            dark:text-slate-500
            select-none
            "
          >
            SMART CRM
          </p>
        )}

      </div>
    </Link>
  );
}