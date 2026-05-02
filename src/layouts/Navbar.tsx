import { Search, Bell } from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────
interface NavbarProps {
  notificationCount?: number;
}

// ─── Main Component ───────────────────────────────────────────
export default function Navbar({ notificationCount = 0 }: NavbarProps) {
  const [query, setQuery] = useState("");

  return (
    <header className="
      fixed top-0 left-[230px] right-0 h-14
      bg-[#0d0d15]
      border-b border-[#464554]
      flex items-center justify-between
      px-6 z-30
    ">
      {/* Left — Search */}
      <div className="flex items-center gap-2 bg-[#1f1f27] border border-[#464554] rounded-lg px-3 py-2 w-80 transition-all duration-150 focus-within:border-[#8083ff] focus-within:shadow-[0_0_0_2px_rgba(128,131,255,0.15)]">
        <Search size={14} className="text-[#908fa0] flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects or tasks..."
          className="
            bg-transparent text-sm text-[#e4e1ed]
            outline-none w-full
            placeholder:text-[#908fa0]
          "
        />
        <kbd className="
          hidden sm:flex text-[10px] text-[#908fa0]
          border border-[#464554] rounded
          px-1.5 py-0.5 font-mono flex-shrink-0
        ">
          ⌘K
        </kbd>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-1">
        {/* Reports link */}
        <a
          href="/reports"
          className="px-3 py-1.5 text-sm text-[#908fa0] hover:text-[#e4e1ed] transition-colors duration-150 font-medium"
        >
          Reports
        </a>

        {/* Team link */}
        <a
          href="/team"
          className="px-3 py-1.5 text-sm text-[#908fa0] hover:text-[#e4e1ed] transition-colors duration-150 font-medium"
        >
          Team
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-[#464554] mx-1" />

        {/* Notifications */}
        <button className="
          relative w-9 h-9 flex items-center justify-center
          rounded-lg text-[#908fa0]
          hover:bg-[#1f1f27] hover:text-[#e4e1ed]
          transition-all duration-150
        ">
          <Bell size={17} />
          {notificationCount > 0 && (
            <span className="
              absolute top-1.5 right-1.5
              w-2 h-2 rounded-full
              bg-[#494bd6]
            " />
          )}
        </button>

        {/* Avatar */}
        <button className="
          w-9 h-9 rounded-full overflow-hidden
          ring-2 ring-transparent
          hover:ring-[#464554]
          transition-all duration-150
          flex-shrink-0 ml-1
        ">
          <img
            src="https://i.pravatar.cc/36?img=11"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}