import { CalendarDays, ListFilter } from "lucide-react";
import SpicialIcon from "./SpicialIcon";
import type {  FilterButton, TaskTab } from "./type";
 



export const tasksTabs : TaskTab [] = [
  {
    id: "all",
    label: "All Tasks",
  },
  {
    id: "to-me",
    label: "Assigned To Me",
  },
  {
    id: "by-me",
    label: "Created By Me",
  },
] ;

export const filterButtons: FilterButton[] = [
    {
        id:"status",
        icon:ListFilter,
        label:"Status",
        multiple:true,
        options:[
            {
                label:"Todo",
                value:"Todo"
            },

            {
                label:"In Progress",
                value:"InProgress"
            },

            {
                label:"Done",
                value:"Done"
            }
        ]
    },

    {
        id:"priority",
        icon: SpicialIcon,
        label:"Priority",
        multiple:true,
        options:[
            {
                label:"Urgent",
                value:"URGENT"
            },

            {
                label:"High",
                value:"HIGH"
            },

            {
                label:"Medium",
                value:"MEDIUM"
            },

            {
                label:"Low",
                value:"LOW"
            }
        ]
    },

    {
        id:"dueDate",
        icon:CalendarDays,
        label:"Due Date",
        multiple:false,
        options:[
            {
                label:"Today",
                value:"today"
            },

            {
                label:"Tomorrow",
                value:"tomorrow"
            },

            {
                label:"This Week",
                value:"this-week"
            },
            {
                label:"Overdue",
                value:"overdue"
            },
        ]
    }
];

