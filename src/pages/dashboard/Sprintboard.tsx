import {
  MessageSquare,
  Paperclip,
  Clock,
  Plus,
  RefreshCw,
  CheckCircle2,
  Calendar,
  Flag,
  Tag,
  MoreHorizontal,
  User,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────
type Priority = "URGENT" | "HIGH" | "MEDIUM" | "LOW";
type ColumnId = "todo" | "in-progress" | "in-review";

interface Label {
  text: string;
  color: string;
}

interface TaskCard {
  id: string;
  priority: Priority;
  labels: Label[];
  title: string;
  progress: { done: number; total: number };
  progressColor: string;
  comments: number;
  dueDate: string;
  attachments?: number;
  avatar: string;
}

interface Column {
  id: ColumnId;
  label: string;
  count: number;
  tasks: TaskCard[];
}

// ─── Mock Data ────────────────────────────────────────────────
const columns: Column[] = [
  {
    id: "todo",
    label: "TODO",
    count: 4,
    tasks: [
      {
        id: "t1",
        priority: "URGENT",
        labels: [{ text: "DESIGN", color: "bg-[rgba(185,200,222,0.12)] text-[#b9c8de]" }],
        title: "Implement user onboarding flow for mobile app",
        progress: { done: 12, total: 15 },
        progressColor: "bg-[#8083ff]",
        comments: 3,
        dueDate: "Oct 24",
        avatar: "https://i.pravatar.cc/24?img=3",
      },
    ],
  },
  {
    id: "in-progress",
    label: "IN PROGRESS",
    count: 2,
    tasks: [
      {
        id: "t2",
        priority: "MEDIUM",
        labels: [{ text: "BACKEND", color: "bg-[rgba(76,175,136,0.12)] text-[#4caf88]" }],
        title: "Refactor payment processing microservice",
        progress: { done: 4, total: 9 },
        progressColor: "bg-[#8083ff]",
        comments: 14,
        dueDate: "Oct 28",
        avatar: "https://i.pravatar.cc/24?img=4",
      },
    ],
  },
  {
    id: "in-review",
    label: "IN REVIEW",
    count: 3,
    tasks: [
      {
        id: "t3",
        priority: "LOW",
        labels: [{ text: "MARKETING", color: "bg-[rgba(255,183,131,0.12)] text-[#ffb783]" }],
        title: "Draft social media launch campaign assets",
        progress: { done: 5, total: 5 },
        progressColor: "bg-[#4caf88]",
        comments: 2,
        dueDate: "Nov 02",
        attachments: 2,
        avatar: "https://i.pravatar.cc/24?img=5",
      },
    ],
  },
];

// ─── Priority Chip ────────────────────────────────────────────
function PriorityChip({ priority }: { priority: Priority }) {
  const styles: Record<Priority, string> = {
    URGENT: "bg-[rgba(255,107,107,0.12)] text-[#ff6b6b]",
    HIGH:   "bg-[rgba(255,183,131,0.12)] text-[#ffb783]",
    MEDIUM: "bg-[rgba(128,131,255,0.12)] text-[#8083ff]",
    LOW:    "bg-[rgba(76,175,136,0.12)]  text-[#4caf88]",
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded tracking-wider ${styles[priority]}`}>
      {priority}
    </span>
  );
}

// ─── Task Card ────────────────────────────────────────────────
function TaskCardItem({ task }: { task: TaskCard }) {
  const progressPct = Math.round((task.progress.done / task.progress.total) * 100);

  return (
    <div className="
      bg-[#1f1f27] border border-[#464554] rounded-xl p-4
      flex flex-col gap-3
      hover:border-[#908fa0] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)]
      transition-all duration-150 cursor-pointer
    ">
      {/* Priority + Labels */}
      <div className="flex items-center gap-2 flex-wrap">
        <PriorityChip priority={task.priority} />
        {task.labels.map((l) => (
          <span key={l.text} className={`text-[10px] font-bold px-2 py-0.5 rounded tracking-wider ${l.color}`}>
            {l.text}
          </span>
        ))}
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-[#e4e1ed] leading-snug">
        {task.title}
      </p>

      {/* Progress bar + ratio */}
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-1 bg-[#464554] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${task.progressColor} transition-all duration-500`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="text-[10px] text-[#908fa0] self-end">
          {task.progress.done}/{task.progress.total}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Avatar */}
        <img
          src={task.avatar}
          alt=""
          className="w-6 h-6 rounded-full object-cover border border-[#464554]"
        />

        {/* Meta */}
        <div className="flex items-center gap-3">
          {task.attachments !== undefined && (
            <span className="flex items-center gap-1 text-xs text-[#908fa0]">
              <Paperclip size={12} />
              {task.attachments}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-[#908fa0]">
            <MessageSquare size={12} />
            {task.comments}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#908fa0]">
            <Clock size={12} />
            {task.dueDate}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Kanban Column ────────────────────────────────────────────
function KanbanColumn({ column }: { column: Column }) {
  return (
    <div className="flex flex-col gap-3 flex-1 min-w-[260px]">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#908fa0] uppercase tracking-widest">
            {column.label}
          </span>
          <span className="
            min-w-[20px] h-5 px-1.5
            bg-[#292932] rounded-md
            text-[11px] font-semibold text-[#908fa0]
            flex items-center justify-center
          ">
            {column.count}
          </span>
        </div>
        <button className="text-[#464554] hover:text-[#908fa0] transition-colors">
          <MoreHorizontal size={15} />
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {column.tasks.map((task) => (
          <TaskCardItem key={task.id} task={task} />
        ))}
      </div>

      {/* Add Task — only on first column */}
      {column.id === "todo" && (
        <button className="
          flex items-center justify-center gap-2
          border border-dashed border-[#464554]
          rounded-xl py-3 mt-1
          text-sm text-[#908fa0]
          hover:border-[#8083ff] hover:text-[#8083ff]
          transition-all duration-150
        ">
          <Plus size={14} />
          Add Task
        </button>
      )}
    </div>
  );
}

// ─── Filter Chip ─────────────────────────────────────────────
function FilterChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="
      flex items-center gap-1.5 px-3 py-1.5 rounded-lg
      bg-[#1f1f27] border border-[#464554]
      text-xs font-medium text-[#908fa0]
      hover:border-[#8083ff] hover:text-[#8083ff]
      transition-all duration-150
    ">
      {icon}
      {label}
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function SprintBoard() {
  return (
    <div className=" min-h-screen ">
      <div className="px-6 py-5 flex flex-col gap-4">

        {/* Sprint Header */}
        <div className="flex items-start justify-between">
          {/* Left */}
          <div className="flex flex-col gap-2">
            {/* Active Sprint badge + name */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-[#8083ff] uppercase tracking-widest bg-[rgba(128,131,255,0.12)] px-2 py-0.5 rounded">
                Active Sprint
              </span>
              <h1 className="text-xl font-bold text-[#e4e1ed]">Q4 Product Launch</h1>
            </div>

            {/* Date + Milestone */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs text-[#908fa0]">
                <Calendar size={13} />
                Oct 14 – Nov 12
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#908fa0]">
                <Flag size={13} />
                Milestone: Beta Access
              </span>
            </div>
          </div>

          {/* Right — Progress + Complete button */}
          <div className="flex flex-col items-end gap-2">
            {/* Progress bar */}
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-[#464554] rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-[#8083ff] rounded-full" />
              </div>
              <span className="text-sm font-bold text-[#e4e1ed]">65% Progress</span>
            </div>

            {/* Complete Sprint */}
            <button className="
              flex items-center gap-2 px-4 py-2.5 rounded-lg
              bg-[#494bd6] hover:bg-[#8083ff]
              text-sm font-semibold text-white
              transition-all duration-150
              shadow-md shadow-[#494bd6]/30
            ">
              <CheckCircle2 size={15} />
              Complete Sprint
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <FilterChip icon={<User size={12} />}    label="Assignee: All"       />
            <FilterChip icon={<Flag size={12} />}    label="Priority: High"      />
            <FilterChip icon={<Tag size={12} />}     label="Labels: Design, API" />
          </div>

          {/* Updated */}
          <div className="flex items-center gap-1.5 text-xs text-[#908fa0]">
            <span>Updated 2m ago</span>
            <button className="hover:text-[#e4e1ed] transition-colors">
              <RefreshCw size={13} />
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((col) => (
            <KanbanColumn key={col.id} column={col} />
          ))}
        </div>
      </div>
    </div>
  );
}