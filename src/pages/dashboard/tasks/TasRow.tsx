import { Check, Clock4 } from "lucide-react";
import { priorityConfig, statusConfig } from "./tasksGroup";
import type { Task } from "./type";



interface Props {
    task : Task
    onToggle : (id : string)=> void
}

export default function TaskRow({
  task,
  onToggle,
}: Props) {
  const isDone = task.status === "Done";
  const priority = priorityConfig[task.priority];
  const status = statusConfig[task.status];
  const PriorityIcon = priority.icon;

  return (
    <li
      className={`
        flex items-center justify-between
        px-4 py-3 rounded-[6px]
        border border-[#2D2F39]
        transition-all duration-150
        cursor-pointer group
        ${isDone ? "bg-[#1b1b23] opacity-60" : "bg-[#1E2028] hover:border-[#464554]"}
      `}
    >
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        {/* Checkbox */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(task.id);
          }}
          className={`
            flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2
            transition-colors duration-150
            ${
              isDone
                ? "border-[#494bd6] bg-[#494bd6]"
                : "border-[#71717A] hover:border-[#8083ff]"
            }
          `}
        >
          {isDone && <Check size={11} className="text-white" strokeWidth={3} />}
        </button>

        {/* Title */}
        <p
          className={`
          font-semibold text-sm truncate
          ${isDone ? "line-through text-[#71717A]" : "text-[#e4e1ed]"}
        `}
        >
          {task.title}
        </p>

        {/* Label chip */}
        <span
          className={`
          flex-shrink-0 px-2 py-0.5 rounded-[6px] text-xs font-semibold
          ${task.label.color}
        `}
        >
          {task.label.text}
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
        {/* Priority */}
        <span
          className={`
          flex items-center gap-1 px-2 py-1 rounded-[6px] text-xs font-bold uppercase
          ${priority.color}
        `}
        >
          <PriorityIcon size={12} />
          {priority.label}
        </span>

        {/* Avatars */}
        <div className="flex items-center">
          {task.avatar.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-7 h-7 rounded-full object-cover border-2 border-[#1E2028]"
              style={{ marginLeft: i === 0 ? 0 : -8 }}
            />
          ))}
        </div>

        {/* Due date */}
        <span
          className={`
          flex items-center gap-1 text-xs font-semibold
          ${task.isOverdue ? "text-[#ff6b6b]" : "text-[#908fa0]"}
        `}
        >
          <Clock4 size={13} />
          {task.dueDate}
        </span>

        {/* Status chip */}
        <span
          className={`
          px-2.5 py-1 rounded-[6px] text-xs font-bold
          ${status.color}
        `}
        >
          {status.label}
        </span>
      </div>
    </li>
  );
}