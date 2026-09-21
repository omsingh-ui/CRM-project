import { useState } from "react";

const data = [
  "Dashboard",
  "Scanner",
  "Upload Center",
  "Lead Table",
  "Analytics",
  "Progress",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative z-[100] w-full min-w-0">
      {/* Search Input */}

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dashboard"
        className="
        w-full
        min-w-0
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        text-sm
        text-slate-900
        shadow-sm
        outline-none
        transition
        duration-200
        placeholder:text-slate-400
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-500/10
        dark:border-zinc-800
        dark:bg-zinc-900
        dark:text-white
        dark:placeholder:text-slate-500
        sm:py-3.5
        "
      />

      {/* Search Results */}

      {query && (
        <div
          className="
    absolute
    left-0
    right-0
    top-full
    z-[100]
    mt-2
          max-h-64
          overflow-y-auto
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-2
          shadow-xl
          dark:border-zinc-800
          dark:bg-zinc-900
          "
        >
          {filtered.length ? (
            filtered.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setQuery(item)}
                className="
                w-full
                rounded-xl
                px-4
                py-3
                text-left
                text-sm
                font-medium
                text-slate-700
                transition
                duration-150
                hover:bg-slate-50
                hover:text-blue-600
                dark:text-slate-300
                dark:hover:bg-zinc-800
                dark:hover:text-blue-400
                "
              >
                {item}
              </button>
            ))
          ) : (
            <div
              className="
              px-4
              py-4
              text-sm
              text-slate-500
              dark:text-slate-400
              "
            >
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}