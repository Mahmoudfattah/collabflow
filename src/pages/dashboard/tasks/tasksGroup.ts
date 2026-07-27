import { AlertCircle, Minus, Zap } from "lucide-react";
import type {
  Task,
 
  TaskPriority,
  TaskPriorityConfig,
  TaskStatus,
  TaskStatusConfig,
} from "./type";

export const tasksFilter: Task[] = [
  {
    id: "t1",
    status: "Todo",
    title: "Optimize database queries for V2 API",
    avatar: ["https://i.pravatar.cc/32?img=11"],
    priority: "URGENT",
    label: {
      text: "Cloud Foundation",
      color: "text-[#8083ff] bg-[#8083ff]/10 border border-[#8083ff]/20",
    },
    dueDate: "Overdue(2d)",
    isOverdue: true,
    overdueDays: 2,
  },
  
  {
    id: "t2",
    status: "Todo",
    title: "Security audit of auth modules",
    avatar: ["https://i.pravatar.cc/32?img=5"],
    priority: "HIGH",
    label: {
      text: "Security",
      color: "text-[#4caf88] bg-[#4caf88]/10 border border-[#4caf88]/20",
    },
    dueDate: "Oct 24",
    isOverdue: false,
  },

  {
    id: "t3",
    status: "InProgress",
    title: "Design system documentation sync",
    avatar: [
      "https://i.pravatar.cc/32?img=7",
      "https://i.pravatar.cc/32?img=8",
    ],
    priority: "MEDIUM",
    label: {
      text: "DesignOps",
      color: "text-[#ffb783] bg-[#ffb783]/10 border border-[#ffb783]/20",
    },
    dueDate: "Tomorrow",
    isOverdue: false,
  },

  {
    id: "t4",
    status: "Done",
    title: "Refactor CSS utility classes",
    avatar: ["https://i.pravatar.cc/32?img=3"],
    priority: "LOW",
    label: {
      text: "Core UI",
      color: "text-[#908fa0] bg-[#908fa0]/10 border border-[#908fa0]/20",
    },
    dueDate: "Oct 12",
    isOverdue: false,
  },
];

// ─── Priority Config ──────────────────────────────────────────
export const priorityConfig: Record<TaskPriority, TaskPriorityConfig> = {
  URGENT: {
    icon: Zap,
    color: "text-[#ff6b6b] bg-[#ff6b6b]/10",
    label: "URGENT",
  },
  HIGH: {
    icon: AlertCircle,
    color: "text-[#ffb783] bg-[#ffb783]/10",
    label: "HIGH",
  },
  MEDIUM: {
    icon: Minus,
    color: "text-[#8083ff] bg-[#8083ff]/10",
    label: "MEDIUM",
  },
  LOW: { icon: Minus, color: "text-[#4caf88] bg-[#4caf88]/10", label: "LOW" },
};

// ─── Status Config ────────────────────────────────────────────
export const statusConfig: Record<TaskStatus, TaskStatusConfig> = {
  Todo: { color: "text-[#908fa0] bg-[#292932]", label: "TODO" },

  InProgress: {
    color: "text-[#8083ff] bg-[#8083ff]/10 border border-[#8083ff]/30",
    label: "IN PROGRESS",
  },

  Done: {
    color: "text-[#4caf88] bg-[#4caf88]/10 border border-[#4caf88]/30",
    label: "DONE",
  },
};
