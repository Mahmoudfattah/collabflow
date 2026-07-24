import type { LucideIcon } from "lucide-react";


export type NotificationFilter = 'all' | 'unread'


export interface Notification {
  id: string;

  period: "Today" | "Yesterday" | "Earlier";

  title: string;
  highlight?: string;

  time: string;

  avatar: string;

  unread: boolean;

  icon: LucideIcon;
  bg : string
  color:string
}

