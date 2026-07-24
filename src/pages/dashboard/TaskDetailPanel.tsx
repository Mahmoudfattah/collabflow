import { X, ChevronDown, Calendar, Download, Send, FolderOpen, AlignLeft } from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────
type Priority = "HIGH" | "MEDIUM" | "LOW" | "URGENT";
type Status = "Todo" | "In Progress" | "In Review" | "Done";

interface Subtask {
  id: string;
  title: string;
  done: boolean;
}

interface Attachment {
  id: string;
  name: string;
  uploadedAt: string;
  size: string;
}

interface ActivityItem {
  id: string;
  avatar: string;
  author: string;
  timestamp: string;
  comment: string;
}

export interface TaskDetailData {
  id: string;
  title: string;
  project: string;
  module: string;
  status: Status;
  priority: Priority;
  assignee: { name: string; avatar: string };
  dueDate: string;
  description: string;
  descriptionLinks?: string[];
  subtasks: Subtask[];
  attachments: Attachment[];
  activity: ActivityItem[];
}

interface TaskDetailPanelProps {
  task: TaskDetailData;
  onClose: () => void;
}

// ─── Mock detail data factory ─────────────────────────────────
// maps a basic TaskCard id to full detail data
export const mockTaskDetail: TaskDetailData = {
  id: "t3",
  title: "Refactor authentication flow",
  project: "COLLABFLOW",
  module: "AUTH MODULE",
  status: "In Progress",
  priority: "HIGH",
  assignee: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/32?img=5" },
  dueDate: "Oct 24, 2023",
  description:
    "Implement JWT rotation and secure cookie handling. We need to move away from local storage for sensitive session tokens to mitigate XSS risks.",
  descriptionLinks: ["Update auth middleware", "Define token expiration policy"],
  subtasks: [
    { id: "s1", title: "Draft architecture diagram",           done: true  },
    { id: "s2", title: "Set up Redis for token blacklist",     done: true  },
    { id: "s3", title: "Implement Refresh Token rotation logic", done: false },
  ],
  attachments: [
    { id: "a1", name: "architecture_v2.png", uploadedAt: "Oct 18", size: "1.2 MB" },
  ],
  activity: [
    {
      id: "ac1",
      avatar: "https://i.pravatar.cc/32?img=8",
      author: "Marcus Chen",
      timestamp: "2 hours ago",
      comment:
        "I've uploaded the v2 diagram. Let me know if the token flow makes sense to you @Alex.",
    },
  ],
};

// ─── Priority styles ──────────────────────────────────────────
const priorityStyles: Record<Priority, string> = {
  URGENT: "bg-[rgba(255,107,107,0.12)] text-[#ff6b6b] border border-[rgba(255,107,107,0.2)]",
  HIGH:   "bg-[rgba(255,183,131,0.12)] text-[#ffb783] border border-[rgba(255,183,131,0.2)]",
  MEDIUM: "bg-[rgba(128,131,255,0.12)] text-[#8083ff] border border-[rgba(128,131,255,0.2)]",
  LOW:    "bg-[rgba(76,175,136,0.12)]  text-[#4caf88] border border-[rgba(76,175,136,0.2)]",
};

const statusDot: Record<Status, string> = {
  "Todo":        "bg-[#908fa0]",
  "In Progress": "bg-[#8083ff]",
  "In Review":   "bg-[#ffb783]",
  "Done":        "bg-[#4caf88]",
};

// ─── Sub-components ───────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-[#e4e1ed]">{children}</h3>
  );
}

function Divider() {
  return <div className="h-px bg-[#464554] my-1" />;
}

// ─── Main Component ───────────────────────────────────────────
export default function TaskDetailPanel({ task, onClose }: TaskDetailPanelProps) {
  const [subtasks, setSubtasks] = useState<Subtask[]>(task.subtasks);
  const [comment, setComment] = useState("");
  const [newSubtask, setNewSubtask] = useState("");

  const completedCount = subtasks.filter((s) => s.done).length;

  function toggleSubtask(id: string) {
    setSubtasks((prev) =>
      prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s))
    );
  }

  function handleAddSubtask() {
    if (!newSubtask.trim()) return;
    setSubtasks((prev) => [
      ...prev,
      { id: `s${Date.now()}`, title: newSubtask.trim(), done: false },
    ]);
    setNewSubtask("");
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="
        fixed top-0 right-0 h-screen w-[480px]
        bg-[#13131b]
        border-l border-[#464554]
        shadow-[−8px_0_32px_rgba(0,0,0,0.5)]
        z-50
        flex flex-col
        animate-slide-in-right
      ">
        {/* ── Header ── */}
        <div className="flex-shrink-0 px-6 pt-5 pb-4 border-b border-[#464554]">
          {/* Breadcrumb + close */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs text-[#908fa0]">
              <FolderOpen size={13} />
              <span className="uppercase tracking-wider">{task.project}</span>
              <span>/</span>
              <span className="uppercase tracking-wider">{task.module}</span>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-[#908fa0] hover:bg-[#292932] hover:text-[#e4e1ed] transition-all duration-150"
            >
              <X size={15} />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-[#e4e1ed] leading-snug">
            {task.title}
          </h2>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">

          {/* Status + Priority */}
          <div className="grid grid-cols-2 gap-3">
            {/* Status */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-widest">
                Status
              </span>
              <button className="
                flex items-center gap-2 px-3 py-2 rounded-lg
                bg-[#1f1f27] border border-[#464554]
                text-sm text-[#e4e1ed]
                hover:border-[#8083ff] transition-all duration-150
              ">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${statusDot[task.status]}`} />
                <span className="flex-1 text-left">{task.status}</span>
                <ChevronDown size={13} className="text-[#908fa0]" />
              </button>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-widest">
                Priority
              </span>
              <button className={`
                flex items-center gap-2 px-3 py-2 rounded-lg
                text-sm font-semibold
                hover:opacity-80 transition-all duration-150
                ${priorityStyles[task.priority]}
              `}>
                <span className="text-base leading-none">!</span>
                <span className="flex-1 text-left">{task.priority}</span>
              </button>
            </div>
          </div>

          {/* Assignee + Due Date */}
          <div className="grid grid-cols-2 gap-3">
            {/* Assignee */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-widest">
                Assignee
              </span>
              <div className="
                flex items-center gap-2 px-3 py-2 rounded-lg
                bg-[#1f1f27] border border-[#464554]
              ">
                <img
                  src={task.assignee.avatar}
                  alt={task.assignee.name}
                  className="w-5 h-5 rounded-full object-cover flex-shrink-0"
                />
                <span className="text-sm text-[#e4e1ed] truncate">{task.assignee.name}</span>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold text-[#908fa0] uppercase tracking-widest">
                Due Date
              </span>
              <div className="
                flex items-center gap-2 px-3 py-2 rounded-lg
                bg-[#1f1f27] border border-[#464554]
              ">
                <Calendar size={13} className="text-[#908fa0] flex-shrink-0" />
                <span className="text-sm text-[#e4e1ed]">{task.dueDate}</span>
              </div>
            </div>
          </div>

          <Divider />

          {/* Description */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <SectionTitle>Description</SectionTitle>
              <button className="text-[#908fa0] hover:text-[#e4e1ed] transition-colors">
                <AlignLeft size={14} />
              </button>
            </div>
            <div className="
              bg-[#1f1f27] border border-[#464554] rounded-xl
              px-4 py-3 text-sm text-[#c7c4d7] leading-relaxed
            ">
              <p>{task.description}</p>
              {task.descriptionLinks && task.descriptionLinks.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1">
                  {task.descriptionLinks.map((link) => (
                    <li key={link} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#8083ff]" />
                      <a href="#" className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <Divider />

          {/* Subtasks */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <SectionTitle>Subtasks</SectionTitle>
              <span className="text-xs text-[#908fa0]">
                {completedCount} / {subtasks.length} Complete
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {subtasks.map((subtask) => (
                <label
                  key={subtask.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={subtask.done}
                    onChange={() => toggleSubtask(subtask.id)}
                    className="hidden"
                  />
                  <span className={`
                    w-4 h-4 rounded-[4px] border flex-shrink-0
                    flex items-center justify-center
                    transition-all duration-150
                    ${subtask.done
                      ? "bg-[#494bd6] border-[#494bd6]"
                      : "border-[#464554] group-hover:border-[#8083ff]"
                    }
                  `}>
                    {subtask.done && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span className={`text-sm transition-colors duration-150 ${
                    subtask.done
                      ? "line-through text-[#464554]"
                      : "text-[#c7c4d7] group-hover:text-[#e4e1ed]"
                  }`}>
                    {subtask.title}
                  </span>
                </label>
              ))}

              {/* Add subtask */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#464554] text-lg leading-none">+</span>
                <input
                  type="text"
                  placeholder="Add subtask..."
                  value={newSubtask}
                  onChange={(e) => setNewSubtask(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddSubtask()}
                  className="
                    flex-1 bg-transparent text-sm text-[#908fa0]
                    placeholder:text-[#464554] outline-none
                    hover:text-[#e4e1ed] focus:text-[#e4e1ed]
                    transition-colors duration-150
                  "
                />
              </div>
            </div>
          </div>

          <Divider />

          {/* Attachments */}
          <div className="flex flex-col gap-3">
            <SectionTitle>Attachments</SectionTitle>
            <div className="flex flex-col gap-2">
              {task.attachments.map((file) => (
                <div
                  key={file.id}
                  className="
                    flex items-center gap-3 px-4 py-3
                    bg-[#1f1f27] border border-[#464554] rounded-xl
                    hover:border-[#908fa0] transition-colors duration-150
                  "
                >
                  {/* File icon */}
                  <div className="w-8 h-8 rounded-lg bg-[#292932] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8083ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18M9 21V9"/>
                    </svg>
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#e4e1ed] truncate">{file.name}</p>
                    <p className="text-xs text-[#908fa0]">
                      Uploaded {file.uploadedAt} • {file.size}
                    </p>
                  </div>
                  {/* Download */}
                  <button className="text-[#908fa0] hover:text-[#e4e1ed] transition-colors flex-shrink-0">
                    <Download size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* Activity */}
          <div className="flex flex-col gap-3">
            <SectionTitle>Activity</SectionTitle>
            <div className="flex flex-col gap-4">
              {task.activity.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-sm font-semibold text-[#e4e1ed]">{item.author}</span>
                      <span className="text-xs text-[#908fa0]">{item.timestamp}</span>
                    </div>
                    <div className="bg-[#1f1f27] border border-[#464554] rounded-xl px-4 py-3">
                      <p className="text-sm text-[#c7c4d7] leading-relaxed">{item.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom padding */}
          <div className="h-4" />
        </div>

        {/* ── Comment Input ── */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-[#464554]">
          <div className="flex items-center gap-3 bg-[#1f1f27] border border-[#464554] rounded-xl px-4 py-3 focus-within:border-[#8083ff] focus-within:shadow-[0_0_0_2px_rgba(128,131,255,0.15)] transition-all duration-150">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && comment.trim()) {
                  setComment("");
                }
              }}
              className="flex-1 bg-transparent text-sm text-[#e4e1ed] placeholder:text-[#908fa0] outline-none"
            />
            <button
              disabled={!comment.trim()}
              className="
                w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
                bg-[#494bd6] disabled:opacity-30
                hover:bg-[#8083ff] disabled:hover:bg-[#494bd6]
                transition-all duration-150
              "
            >
              <Send size={13} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}