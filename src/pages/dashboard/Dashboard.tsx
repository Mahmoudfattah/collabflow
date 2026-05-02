import { MoreHorizontal, Plus, Rocket, Calendar, AlertCircle, Users } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────
interface StatCard {
  label: string;
  value: number;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  extra?: React.ReactNode;
}

interface Project {
  id: string;
  initials: string;
  initialsColor: string;
  name: string;
  milestone: string;
  status: "IN PROGRESS" | "PLANNING" | "COMPLETED";
  progress: number;
  progressColor: string;
  avatars: string[];
  extraMembers?: number;
  updatedAt: string;
}

interface CriticalTask {
  id: string;
  title: string;
  subtitle: string;
  dueLabel?: string;
  dueDate?: string;
  isDueToday?: boolean;
  avatar: string;
}

interface ActivityItem {
  id: string;
  avatar: string;
  content: React.ReactNode;
  timestamp: string;
  comment?: string;
}

// ─── Mock Data ────────────────────────────────────────────────
const stats: StatCard[] = [
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
];

const projects: Project[] = [
  {
    id: "1",
    initials: "CF",
    initialsColor: "bg-[#494bd6]",
    name: "Cloud Foundation",
    milestone: "MILESTONE 4 OF 6",
    status: "IN PROGRESS",
    progress: 65,
    progressColor: "bg-[#8083ff]",
    avatars: [
      "https://i.pravatar.cc/24?img=1",
      "https://i.pravatar.cc/24?img=2",
    ],
    extraMembers: 4,
    updatedAt: "Updated 2h ago",
  },
  {
    id: "2",
    initials: "UX",
    initialsColor: "bg-[#d97721]",
    name: "Mobile Overhaul",
    milestone: "MILESTONE 1 OF 3",
    status: "PLANNING",
    progress: 20,
    progressColor: "bg-[#ffb783]",
    avatars: [
      "https://i.pravatar.cc/24?img=3",
    ],
    extraMembers: 12,
    updatedAt: "Created yesterday",
  },
];

const criticalTasks: CriticalTask[] = [
  {
    id: "1",
    title: "Finalize Q3 Security Audit Documentation",
    subtitle: "Security Engineering • High Priority",
    isDueToday: true,
    avatar: "https://i.pravatar.cc/24?img=5",
  },
  {
    id: "2",
    title: "Design System Audit: Typography & Icons",
    subtitle: "UI/UX Kit • Medium Priority",
    dueDate: "JUL 24",
    avatar: "https://i.pravatar.cc/24?img=6",
  },
];

const activityItems: ActivityItem[] = [
  {
    id: "1",
    avatar: "https://i.pravatar.cc/32?img=9",
    content: (
      <>
        <span className="font-semibold text-[#e4e1ed]">Sarah Chen</span>
        {" "}completed{" "}
        <a href="#" className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors">
          Hero Section Redesign
        </a>
      </>
    ),
    timestamp: "12 minutes ago",
  },
  {
    id: "2",
    avatar: "https://i.pravatar.cc/32?img=7",
    content: (
      <>
        <span className="font-semibold text-[#e4e1ed]">Jordan Miller</span>
        {" "}left a comment in{" "}
        <a href="#" className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors">
          API Integration
        </a>
      </>
    ),
    timestamp: "45 minutes ago",
    comment: '"Should we use the GraphQL endpoint for this or stick with REST?"',
  },
  {
    id: "3",
    avatar: "https://i.pravatar.cc/32?img=8",
    content: (
      <>
        <span className="font-semibold text-[#e4e1ed]">David Wright</span>
        {" "}moved{" "}
        <a href="#" className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors">
          Database Schema
        </a>
        {" "}to{" "}
        <a href="#" className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors">
          In Review
        </a>
      </>
    ),
    timestamp: "2 hours ago",
  },
];

// ─── Stat Card ────────────────────────────────────────────────
function StatCardItem({ card }: { card: StatCard }) {
  const Icon = card.icon;
  return (
    <div className="bg-[#1b1b23] border border-[#464554] rounded-xl p-5 flex flex-col gap-3 hover:border-[#908fa0] transition-colors duration-150">
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-md ${card.iconBg} flex items-center justify-center`}>
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

// ─── Status Chip ──────────────────────────────────────────────
function StatusChip({ status }: { status: Project["status"] }) {
  const styles: Record<Project["status"], string> = {
    "IN PROGRESS": "bg-[rgba(128,131,255,0.12)] text-[#8083ff]",
    "PLANNING":    "bg-[rgba(185,200,222,0.12)] text-[#b9c8de]",
    "COMPLETED":   "bg-[rgba(76,175,136,0.12)]  text-[#4caf88]",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide ${styles[status]}`}>
      {status}
    </span>
  );
}

// ─── Project Card ─────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#1b1b23] border border-[#464554] rounded-xl p-5 flex flex-col gap-4 hover:border-[#908fa0] transition-colors duration-150 cursor-pointer">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-md ${project.initialsColor} flex items-center justify-center flex-shrink-0`}>
          <span className="text-sm font-bold text-white">{project.initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold text-[#e4e1ed] truncate">{project.name}</p>
            <StatusChip status={project.status} />
          </div>
          <p className="text-[10px] text-[#908fa0] uppercase tracking-wider mt-0.5">
            {project.milestone}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full h-1.5 bg-[#464554] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${project.progressColor} transition-all duration-500`}
          style={{ width: `${project.progress}%` }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Avatars */}
        <div className="flex items-center">
          {project.avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-6 h-6 rounded-full border-2 border-[#1b1b23] object-cover"
              style={{ marginLeft: i === 0 ? 0 : -8 }}
            />
          ))}
          {project.extraMembers && (
            <span
              className="w-6 h-6 rounded-full border-2 border-[#1b1b23] bg-[#292932] flex items-center justify-center text-[9px] font-semibold text-[#908fa0]"
              style={{ marginLeft: -8 }}
            >
              +{project.extraMembers}
            </span>
          )}
        </div>
        <p className="text-xs text-[#908fa0] italic">{project.updatedAt}</p>
      </div>
    </div>
  );
}

// ─── Critical Task Row ────────────────────────────────────────
function CriticalTaskRow({ task }: { task: CriticalTask }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[#464554] last:border-0 hover:bg-[#1f1f27] px-2 rounded-md transition-colors duration-150 cursor-pointer -mx-2">
      {/* Circle checkbox */}
      <div className="w-5 h-5 rounded-full border-2 border-[#464554] flex-shrink-0" />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#e4e1ed] truncate">{task.title}</p>
        <p className="text-xs text-[#908fa0] mt-0.5">{task.subtitle}</p>
      </div>

      {/* Due */}
      {task.isDueToday ? (
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[rgba(255,183,131,0.12)] text-[#ffb783] flex-shrink-0">
          DUE TODAY
        </span>
      ) : (
        <span className="text-xs text-[#908fa0] flex-shrink-0">{task.dueDate}</span>
      )}

      {/* Avatar */}
      <img src={task.avatar} alt="" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
    </div>
  );
}

// ─── Activity Item ────────────────────────────────────────────
function ActivityItemRow({ item }: { item: ActivityItem }) {
  return (
    <div className="flex gap-3 py-3 border-b border-[#464554] last:border-0">
      <img src={item.avatar} alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[#c7c4d7] leading-snug">{item.content}</p>
        {item.comment && (
          <div className="mt-2 bg-[#1f1f27] border border-[#464554] rounded-md px-3 py-2">
            <p className="text-xs text-[#908fa0] italic">{item.comment}</p>
          </div>
        )}
        <p className="text-xs text-[#464554] mt-1.5">{item.timestamp}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function Dashboard() {
  return (
    <div className="  min-h-screen ">

      {/* Greeting */}
          <div className='pb-6'>
            <h1 className="text-3xl font-bold text-[#e4e1ed]">Good morning, Alex</h1>
            <p className="text-sm text-[#908fa0] mt-1">
              You have 4 tasks that need your immediate attention today.
            </p>
          </div>

            {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 pb-6 gap-4">
            {stats.map((card) => (
              <StatCardItem key={card.label} card={card} />
            ))}
          </div>

        {/* Left Column */}
      <div className=" flex gap-6">

        <div className="flex-1 min-w-0 flex flex-col gap-6">



          {/* Project Portfolio */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-[#e4e1ed]">Project Portfolio</h2>
              <button className="text-sm text-[#8083ff] hover:text-[#c0c1ff] transition-colors font-medium">
                New Project
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>

          {/* Critical Tasks */}
          <div className="bg-[#1b1b23] border border-[#464554] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-[#e4e1ed]">Critical Tasks Due Soon</h2>
              <button className="text-[#908fa0] hover:text-[#e4e1ed] transition-colors">
                <MoreHorizontal size={16} />
              </button>
            </div>
            {criticalTasks.map((task) => (
              <CriticalTaskRow key={task.id} task={task} />
            ))}
          </div>
        </div>

        {/* Right Column — Recent Activity */}
        <div className="w-[300px] flex-shrink-0">
          <div className="bg-[#1b1b23] border border-[#464554] rounded-xl p-5 sticky top-20">
            <h2 className="text-sm font-semibold text-[#e4e1ed] mb-1">Recent Activity</h2>
            <div className="mt-2">
              {activityItems.map((item) => (
                <ActivityItemRow key={item.id} item={item} />
              ))}
            </div>
            <button className="
              w-full mt-4 py-2.5 rounded-md
              text-sm text-[#908fa0]
              border border-[#464554]
              hover:bg-[#1f1f27] hover:text-[#e4e1ed]
              transition-all duration-150
            ">
              View Full History
            </button>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="
        fixed bottom-6 right-6
        flex items-center gap-2
        bg-[#494bd6] hover:bg-[#8083ff]
        text-white text-sm font-semibold
        px-4 py-3 rounded-full
        shadow-lg shadow-[#494bd6]/30
        transition-all duration-150
        active:scale-95
        z-50
      ">
        <Plus size={16} />
        Create Task
      </button>
    </div>
  );
}