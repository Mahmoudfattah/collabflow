

const groups = [
  {
    status: "Todo",
    label: "TODO",
  },

  {
    status: "InProgress",
    label: "IN PROGRESS",
  },

  {
    status: "Done",
    label: "DONE",
  },
];

const currentUser = "user-1";

import { useMemo, useState } from "react";
// import TasksToolBar from "./TasksToolBar";
import type { Task, TaskFilters, TasksFilter } from "./type";
import { tasksFilter } from "./tasksGroup";
import TaskGroupSection from "./TasksGroupSection";
import TaskTabs from "./TaskTabs";
import TaskFilterButton from "./TaskFilterButton";
import { filterButtons } from "./taskFilter";
import {
  isOverdue,
  isThisWeek,
  isToday,
  isTomorrow,
} from "../../../utils/taskDate";

// ─── Main Page ────────────────────────────────────────────────
const Tasks = () => {
  const [activeTap, setActiveTap] = useState<TasksFilter>("all");
  const [tasks, setTasks] = useState<Task[]>(tasksFilter);

  const [filters, setFilters] = useState<TaskFilters>({
    status: [],
    priority: [],
    dueDate: [],
  });

  // Toggle task done/undone
  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        return {
          ...task,
          status: task.status === "Done" ? "Todo" : "Done",
        };
      }),
    );
  }
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusPass =
        filters.status.length === 0 || filters.status.includes(task.status);

      const priorityPass =
        filters.priority.length === 0 ||
        filters.priority.includes(task.priority);

      // const dueDatePass = true;

      const dueDatePass =
        filters.dueDate.length === 0 ||
        filters.dueDate.some((filter) => {
          switch (filter) {
            case "today":
              return isToday(task.dueDate);

            case "tomorrow":
              return isTomorrow(task.dueDate);

            case "this-week":
              return isThisWeek(task.dueDate);

            case "overdue":
              return isOverdue(task.dueDate);

            default:
              return false;
          }
        });

      //  const tabPass =
      //  activeTap === 'all'
      //  ? true
      //  : activeTap === 'to-me'
      //  ?task.assignedTo === currentUser
      //  :activeTap === 'by-me'
      //  ?task.createdBy === currentUser
      //  :true

      let tabPass = true;

      switch (activeTap) {
        case "all":
          tabPass = true;
          break;

        case "to-me":
          tabPass = task.assignedTo === currentUser;
          break;

        case "by-me":
          tabPass = task.createdBy === currentUser;
          break;
      }

      return tabPass && statusPass && priorityPass && dueDatePass;
    });
  }, [tasks, filters, activeTap]);

  return (
    <section className="flex min-h-screen flex-col px-6 py-5">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#e4e1ed]">My Tasks</h1>
        <p className="text-sm text-[#908fa0] mt-0.5">
          Your personal task queue
        </p>
      </div>

      <>
        <div className=" flex items-center justify-between  ">
          <TaskTabs value={activeTap} onChange={setActiveTap} />
          <div className="flex gap-4">
            <TaskFilterButton
              filterButton={filterButtons[0]}
              onChange={(values) =>
                setFilters((prev) => ({
                  ...prev,
                  status: values as Task["status"][],
                }))
              }
              selected={filters.status}
            />
            <TaskFilterButton
              filterButton={filterButtons[1]}
              onChange={(value) =>
                setFilters((prev) => ({
                  ...prev,
                  priority: value as Task["priority"][],
                }))
              }
              selected={filters.priority}
            />
            <TaskFilterButton
              filterButton={filterButtons[2]}
              onChange={(value) =>
                setFilters((prev) => ({
                  ...prev,
                  dueDate: value as Task["dueDate"][],
                }))
              }
              selected={filters.dueDate}
            />
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-[#71717A]" />
      </>

      {/* Groups */}
      <div className="flex flex-col gap-1">
        {groups.map((group) => (
          <TaskGroupSection
            key={group.status}
            group={group}
            tasks={filteredTasks.filter((task) => task.status === group.status)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
