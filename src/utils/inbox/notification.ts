
import {
  MessageSquare,
  AtSign,
  CircleCheck,
  IdCardLanyard
 
} from "lucide-react";
import type { Notification } from "./type";


export  const notifications: Notification[] = [
  {
    id: "1",
    period: "Today",
    title: "Sarah Chen commented on",
    highlight: "API Integration",
    time: "2 minutes ago",
    unread: true,
    avatar: "https://i.pravatar.cc/32?img=11",
    icon: MessageSquare,
    bg: 'bg-blue-400/10',
    color:'text-blue-400'
  },

  {
    id: "2",
    period: "Today",
    title: "Marcus Wright assigned you to",
    highlight: "Database Migration",
    time: "1 hour ago",
    unread: true,
    avatar: "https://i.pravatar.cc/32?img=12",
    icon: IdCardLanyard,
    bg: 'bg-indigo-400/10',
    color :'text-indigo-400'
  },

  {
    id: "3",
    period: "Yesterday",
    title: "Elena Rodriguez mentioned you in",
    highlight: "Design System Review",
    time: "Yesterday, 4:12 PM",
    unread: false,
    avatar: "https://i.pravatar.cc/32?img=15",
    icon: AtSign,
    bg: 'bg-purple-400/10',
    color :'text-purple-400'
  },

  {
    id: "4",
    period: "Earlier",
    title: "Alex Thompson changed status of",
    highlight: "Deployment Script",
    time: "Oct 24, 10:00 AM",
    unread: false,
    avatar: "https://i.pravatar.cc/32?img=18",
    icon: CircleCheck,
    bg: 'bg-green-400/10',
    color: 'text-green-400'
    
  },
];