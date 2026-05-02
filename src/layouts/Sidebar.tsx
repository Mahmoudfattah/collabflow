import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  CheckSquare,
  Inbox,
  Settings,
  HelpCircle,
  LucideCircuitBoard,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────
interface NavItem {
  label: string;
  icon: React.ElementType;
  path: string;
  badge?: number;
}

// ─── Nav Items ────────────────────────────────────────────────
const navItems: NavItem[] = [
  { label: "Projects", icon: LayoutGrid,  path: "/sprint-board"         },
  { label: "My Tasks", icon: CheckSquare, path: "/my-tasks"         },
  { label: "Inbox",    icon: Inbox,       path: "/inbox", badge: 12 },
  { label: "Board",    icon: LucideCircuitBoard,       path: "/board"
  },
  { label: "Settings", icon: Settings,    path: "/settings"         },
];

// ─── Nav Item ─────────────────────────────────────────────────
function SidebarNavItem({ item }: { item: NavItem }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(item.path);
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md
        text-sm transition-all duration-150 group
        ${
          isActive
            ? "bg-[rgba(128,131,255,0.15)] text-[#c0c1ff] font-medium border-l-2 "
            : "text-[#908fa0] hover:bg-[#1f1f27] hover:text-[#e4e1ed]"
        }
      `}
    >
      <Icon
        size={16}
        className={`
          flex-shrink-0 transition-colors duration-150
          ${isActive ? "text-[#8083ff]" : "text-[#908fa0] group-hover:text-[#c7c4d7]"}
        `}
      />
      <span className="flex-1">{item.label}</span>

      {/* Badge */}
      {item.badge !== undefined && item.badge > 0 && (
        <span className="
          min-w-[18px] h-[18px] px-1
          flex items-center justify-center
          rounded-full text-[10px] font-semibold
          bg-[#494bd6] text-white
        ">
          {item.badge > 99 ? "99+" : item.badge}
        </span>
      )}
    </NavLink>
  );
}

// ─── Main Sidebar ─────────────────────────────────────────────
export default function Sidebar() {
  return (
    <aside className="
      fixed top-0 left-0 h-screen w-[230px]
      bg-[#1b1b23]
      border-r border-[#464554]
      flex flex-col
      z-40
    ">
      {/* Logo — text only, no icon box */}
      <div className="px-4 pt-5 pb-4 ">
        <p className="text-base font-bold text-[#e4e1ed] tracking-tight leading-none">
          CollabFlow
        </p>
        <p className="text-[10px] text-[#908fa0] uppercase tracking-widest mt-1 ">
          Production Workspace
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 flex flex-col gap-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <SidebarNavItem key={item.path} item={item} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-3 flex flex-col gap-0.5">
        {/* Help */}
        <button className="
          flex items-center gap-3 px-3 py-2 rounded-md w-full
          text-sm text-[#908fa0]
          hover:bg-[#1f1f27] hover:text-[#e4e1ed]
          transition-all duration-150 group
        ">
          <HelpCircle
            size={16}
            className="flex-shrink-0 group-hover:text-[#c7c4d7] transition-colors"
          />
          <span>Help</span>
        </button>

        {/* User */}
        <div className="
          flex items-center gap-3 px-3 py-2 mt-1
          hover:bg-[#1f1f27] cursor-pointer
          transition-all duration-150 group border-t   border-[#464554] pt-3
        ">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#292932]">
            <img
              src="https://i.pravatar.cc/32?img=11"
              alt="Alex Johnson"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-sm font-medium text-[#e4e1ed] truncate">
              Alex Johnson
            </span>
            <span className="text-[11px] text-[#908fa0] truncate">
              Lead Designer
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}