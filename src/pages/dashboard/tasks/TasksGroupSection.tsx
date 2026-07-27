import {useState } from "react";
import type { Group, Task } from "./type";
import { ChevronDown, ChevronRight } from "lucide-react";
import TaskRow from "./TasRow";


interface Props {
  tasks: Task[];
  group : Group
  onToggle: (id: string) => void;
}


export default function TaskGroupSection({
  tasks,
  group,
  onToggle,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);




 

  const count = tasks.length


  return (
    <div className="flex flex-col gap-2">
      {/* Group header */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="flex items-center gap-2 pt-4 pb-1 w-fit"
      >
        {collapsed ? (
          <ChevronRight size={16} className="text-[#71717A]" />
        ) : (
          <ChevronDown size={16} className="text-[#71717A]" />
        )}
        <span className="text-xs font-bold text-[#71717A] uppercase tracking-widest">
          {group.label}
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2D2F39] text-[10px] font-bold text-[#908fa0]">
          {count}
        </span>
      </button>

      {/* Tasks */}
      {!collapsed && (
        <ul className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} onToggle={onToggle} />
          ))}
        </ul>
      )}
    </div>
  );
}
