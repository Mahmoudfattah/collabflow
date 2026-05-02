import { MoreHorizontal, Plus, Rocket, Calendar, AlertCircle, Users } from "lucide-react";

interface StatCard {
 label: string;
    value: string | number;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    extra? : React.ReactNode;

}


const stats : StatCard[] = [
     {
    label: "Active Sprints",
    value: 12,
    icon: Rocket,
    iconBg: "bg-[rgba(128,131,255,0.15)]",
    iconColor: "text-[#8083ff]",
    extra: (
      <a href="#" className="text-xs text-[#8083ff] hover:text-[#c0c1ff] transition-colors">
        View All
      </a>
    ),
  },
  {
    label: "Tasks Due Today",
    value: 8,
    icon: Calendar,
    iconBg: "bg-[rgba(185,200,222,0.15)]",
    iconColor: "text-[#b9c8de]",
  },
  {
    label: "Overdue Tasks",
    value: 3,
    icon: AlertCircle,
    iconBg: "bg-[rgba(255,183,131,0.15)]",
    iconColor: "text-[#ffb783]",
  },
  {
    label: "Team Members",
    value: 24,
    icon: Users,
    iconBg: "bg-[rgba(185,200,222,0.12)]",
    iconColor: "text-[#b9c8de]",
  },
]


// ─── Stat Card ────────────────────────────────────────────────
export default function StatCardItem({ card }: { card: StatCard }) {
  const Icon = card.icon;
  return (
    <div className="bg-[#1b1b23] border border-[#464554] rounded-xl p-5 flex flex-col gap-3 hover:border-[#908fa0] transition-colors duration-150">
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center`}>
          <Icon size={18} className={card.iconColor} />
        </div>
        {card.extra}
      </div>
      <div>
        <p className="text-xs text-[#908fa0] uppercase tracking-wider mb-1">{card.label}</p>
        <p className="text-3xl font-bold text-[#e4e1ed]">{card.value}</p>
      </div>
    </div>
  );
}