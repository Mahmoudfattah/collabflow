import { MoreHorizontal, MessageSquare, Paperclip, Plus, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import TaskDetailPanel, { mockTaskDetail, type TaskDetailData } from "./Taskdetailpanel";



// ─── Types ────────────────────────────────────────────────────
type Priority = "HIGH" | "MEDIUM" | "LOW" | "URGENT";
type ColumnId = "todo" | "in-progress" | "in-review" | "done";

interface TaskCard {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  comments?: number;
  attachments?: number;
  dueDate?: string;
  avatars?: string[];
  coverImage?: string;
  subLabel?: string;
  isLive?: boolean;
  progress?: number;
}

interface Column {
  id: ColumnId;
  label: string;
  count: number;
  tasks: TaskCard[];
}

interface ColumnProps {
  column: Column;
  onTaskClick: (task: TaskCard) => void;
}

// ─── Mock Data ────────────────────────────────────────────────
const columns: Column[] = [
  {
    id: "todo",
    label: "Todo",
    count: 3,
    tasks: [
      {
        id: "t1",
        title: "Integrate Stripe Connect for marketplace payouts",
        description: "Complete backend logic for multi-seller distributions and tax calculation engine.",
        priority: "HIGH",
        comments: 4,
        dueDate: "Oct 12",
        avatars: ["https://i.pravatar.cc/24?img=5"],
      },
      {
        id: "t2",
        title: "Design system audit for accessibility compliance",
        priority: "MEDIUM",
        attachments: 2,
        avatars: ["https://i.pravatar.cc/24?img=6"],
      },
    ],
  },
  {
    id: "in-progress",
    label: "In Progress",
    count: 2,
    tasks: [
      {
        id: "t3",
        title: "Refactor authentication flow with Auth0",
        priority: "HIGH",
        comments: 12,
        avatars: [
          "https://i.pravatar.cc/24?img=7",
          "https://i.pravatar.cc/24?img=8",
        ],
        isLive: true,
        progress: 60,
      },
    ],
  },
  {
    id: "in-review",
    label: "In Review",
    count: 4,
    tasks: [
      {
        id: "t4",
        title: "Finalize UI kit for mobile dashboard",
        priority: "MEDIUM",
        subLabel: "Pending Review",
        coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&q=80",
        avatars: ["https://i.pravatar.cc/24?img=9"],
      },
      {
        id: "t5",
        title: "Email notification template redesign",
        priority: "LOW",
        avatars: ["https://i.pravatar.cc/24?img=10"],
      },
      {
        id: "t6",
        title: "Component library documentation",
        priority: "MEDIUM",
        avatars: ["https://i.pravatar.cc/24?img=11"],
      },
    ],
  },
  {
    id: "done",
    label: "Done",
    count: 5,
    tasks: [
      {
        id: "t7",
        title: "Update API endpoint versioning",
        priority: "HIGH",
        avatars: ["https://i.pravatar.cc/24?img=12"],
      },
      {
        id: "t8",
        title: "Setup CI/CD pipeline for staging",
        priority: "MEDIUM",
        avatars: ["https://i.pravatar.cc/24?img=13"],
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
function TaskCardItem({ task, onClick }: { task: TaskCard; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-[#1f1f27] border border-[#464554] rounded-xl
        hover:border-[#908fa0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        hover:-translate-y-0.5
        transition-all duration-150 cursor-pointer
        overflow-hidden
      "
    >
      {/* Cover image */}
      {task.coverImage && (
        <div className="w-full h-32 overflow-hidden">
          <img src={task.coverImage} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-4 flex flex-col gap-3">
        {/* Priority + live dot */}
        <div className="flex items-center justify-between">
          <PriorityChip priority={task.priority} />
          <div className="flex items-center gap-2">
            {task.isLive && (
              <span className="w-2 h-2 rounded-full bg-[#8083ff] animate-pulse" />
            )}
            <button
              onClick={(e) => e.stopPropagation()}
              className="text-[#464554] hover:text-[#908fa0] transition-colors"
            >
              <MoreHorizontal size={14} />
            </button>
          </div>
        </div>

        {/* Title */}
        <p className="text-sm font-semibold text-[#e4e1ed] leading-snug">
          {task.title}
        </p>

        {/* Description */}
        {task.description && (
          <p className="text-xs text-[#908fa0] leading-relaxed line-clamp-2">
            {task.description}
          </p>
        )}

        {/* Sub label */}
        {task.subLabel && (
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full border border-[#464554] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#908fa0]" />
            </span>
            <span className="text-xs text-[#908fa0]">{task.subLabel}</span>
          </div>
        )}

        {/* Progress bar */}
        {task.progress !== undefined && (
          <div className="w-full h-1 bg-[#464554] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8083ff] rounded-full transition-all duration-500"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            {task.comments !== undefined && (
              <span className="flex items-center gap-1 text-xs text-[#908fa0]">
                <MessageSquare size={12} />
                {task.comments}
              </span>
            )}
            {task.attachments !== undefined && (
              <span className="flex items-center gap-1 text-xs text-[#908fa0]">
                <Paperclip size={12} />
                {task.attachments}
              </span>
            )}
            {task.dueDate && (
              <span className="text-xs text-[#908fa0]">{task.dueDate}</span>
            )}
          </div>

          {task.avatars && task.avatars.length > 0 && (
            <div className="flex items-center">
              {task.avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-[#1f1f27] object-cover"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Kanban Column ────────────────────────────────────────────
function KanbanColumn({ column, onTaskClick }: ColumnProps) {
  const isDone = column.id === "done";

  return (
    <div className="flex flex-col gap-3 min-w-[280px] w-[280px]">
      {/* Column header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          {isDone && (
            <span className="w-4 h-4 rounded-full bg-[rgba(76,175,136,0.2)] flex items-center justify-center">
              <span className="text-[#4caf88] text-[10px]">✓</span>
            </span>
          )}
          <h3 className="text-sm font-semibold text-[#e4e1ed]">{column.label}</h3>
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
          <TaskCardItem
            key={task.id}
            task={task}
            onClick={() => onTaskClick(task)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function Board() {
const [selectedTask, setSelectedTask] = useState<TaskDetailData | null>(null);

  return (
    <div className="min-h-screen">
      <div className="px-6 py-5 flex flex-col gap-5">

        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#908fa0] uppercase tracking-widest">
                Project Alpha
              </span>
              <span className="text-[#464554]">/</span>
              <span className="text-sm font-bold text-[#e4e1ed]">
                Q3 Mobile Core Sprint
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {["1", "2", "3"].map((img, i) => (
                  <img
                    key={img}
                    src={`https://i.pravatar.cc/28?img=${i + 1}`}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-[#13131b] object-cover"
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  />
                ))}
                <span
                  className="w-7 h-7 rounded-full border-2 border-[#13131b] bg-[#292932] flex items-center justify-center text-[10px] font-semibold text-[#908fa0]"
                  style={{ marginLeft: -8 }}
                >
                  +4
                </span>
              </div>

              <div className="w-px h-4 bg-[#464554]" />

              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-[#464554] rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-[#8083ff] rounded-full" />
                </div>
                <span className="text-xs font-semibold text-[#908fa0] uppercase tracking-wide">
                  68% Complete
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="
              flex items-center gap-2 px-3 py-2 rounded-lg
              bg-[#1f1f27] border border-[#464554]
              text-sm text-[#908fa0]
              hover:bg-[#292932] hover:text-[#e4e1ed]
              transition-all duration-150
            ">
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <button className="
              flex items-center gap-2 px-3 py-2 rounded-lg
              bg-[#1f1f27] border border-[#464554]
              text-sm text-[#908fa0]
              hover:bg-[#292932] hover:text-[#e4e1ed]
              transition-all duration-150
            ">
              <ArrowUpDown size={14} />
              Sort
            </button>
            <button className="
              flex items-center gap-2 px-4 py-2 rounded-lg
              bg-[#494bd6] hover:bg-[#8083ff]
              text-sm font-semibold text-white
              transition-all duration-150
              shadow-md shadow-[#494bd6]/30
            ">
              <Plus size={15} />
              Add Task
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((col) => (
            <KanbanColumn
              key={col.id}
              column={col}
             onTaskClick={(task) => setSelectedTask({
  ...mockTaskDetail,
  id: task.id,
  title: task.title,
  priority: task.priority,
})}
            />
          ))}
        </div>
      </div>

      {/* FAB */}
      <button className="
        fixed bottom-6 right-6
        w-12 h-12 rounded-full
        bg-[#494bd6] hover:bg-[#8083ff]
        text-white flex items-center justify-center
        shadow-lg shadow-[#494bd6]/30
        transition-all duration-150
        active:scale-95 z-50
      ">
        <Plus size={20} />
      </button>

      {/* Task Detail Panel */}
      {selectedTask && (
        // TODO: replace with <TaskDetailPanel task={selectedTask} onClose={() => setSelectedTask(null)} />
       <TaskDetailPanel
    task={selectedTask}
    onClose={() => setSelectedTask(null)}
  />
      )}
    </div>
  );
}