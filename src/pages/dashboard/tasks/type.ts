// import type { LucideIcon } from "lucide-react";

import type { ElementType } from "react";


export type TasksFilter = 'all' | 'to-me' | 'by-me' //this will used in useState

export type TaskStatus = "Todo" | "InProgress" | "Done";

export type TaskPriority = "URGENT" | "HIGH" | "MEDIUM" | "LOW";

export interface TaskTab {
    id : TasksFilter;
    label : string
} //this is a type for array of tasktap

// export interface FilterButton{
//     icon : React.ElementType;
//     label : string
    
// } //this is a type for array of filterButton

 
export interface Task {
  id: string;
  status: TaskStatus;
  title: string;
  avatar: string[];
  priority: TaskPriority;
  label: { text: string; color: string };
  dueDate: string;
  isOverdue?: boolean;
  overdueDays?: number;
}

export interface TaskGroup {
  status: TaskStatus;
  label: string;
  count: number;
  tasks: Task[];
}

export interface TaskPriorityConfig {
  icon: ElementType;
  color: string;
  label: string;
}

export interface TaskStatusConfig {
  color: string; 
  label: string 
}

export interface Group {
   status: string,
    label:string,
}

export interface FilterOption {
  label: string;
  value: string;
  icon?: ElementType;
}

export interface FilterButton {
  id: string;
  icon:ElementType;
  label: string;
  options: FilterOption[];
  multiple?: boolean;
}