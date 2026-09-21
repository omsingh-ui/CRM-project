import { FaBullseye } from "react-icons/fa";

export default function ProgressCard() {
  const progress = 72;

  return (
    <div>
      {/* Header */}

      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-orange-100
            text-orange-600
            dark:bg-orange-900/30
            dark:text-orange-400
            sm:h-11
            sm:w-11
            "
          >
            <FaBullseye size={16} />
          </div>

          <div className="min-w-0">
            <h2
              className="
              text-lg
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
              "
            >
              Monthly Goal
            </h2>

            <p
              className="
              mt-0.5
              text-xs
              text-slate-500
              dark:text-slate-400
              "
            >
              Overall performance
            </p>
          </div>
        </div>

        {/* Percentage */}

        <span
          className="
          shrink-0
          rounded-full
          bg-orange-50
          px-3
          py-1
          text-sm
          font-bold
          text-orange-600
          dark:bg-orange-900/20
          dark:text-orange-400
          "
        >
          {progress}%
        </span>
      </div>

      {/* Progress */}

      <div className="mt-6 sm:mt-7">
        <div
          className="
          h-3
          overflow-hidden
          rounded-full
          bg-slate-100
          dark:bg-zinc-800
          "
        >
          <div
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-amber-400
            transition-all
            duration-700
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span
            className="
            text-xs
            font-medium
            text-slate-500
            dark:text-slate-400
            "
          >
            Monthly progress
          </span>

          <span
            className="
            shrink-0
            text-xs
            font-semibold
            text-slate-700
            dark:text-slate-300
            "
          >
            {progress}% completed
          </span>
        </div>
      </div>
    </div>
  );
}