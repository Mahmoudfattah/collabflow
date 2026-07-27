import { tasksTabs } from "./taskFilter"
import type { TasksFilter } from "./type"




interface Props {
    value : TasksFilter
    onChange : (value : TasksFilter)=>void
}
const TaskTabs = ({value,onChange} : Props) => {
  return (
    <div className="flex gap-6">
      {tasksTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`pb-2 text-md font-semibold transition-colors ${
            value === tab.id
              ? "border-b border-[#6366F1] text-[#6366F1]"
              : "text-[#A1A1AA]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TaskTabs