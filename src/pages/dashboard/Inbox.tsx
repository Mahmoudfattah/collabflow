import {  CheckCheck } from "lucide-react";
import { useState } from "react";
import type { NotificationFilter } from "./inbox/type";
import { notifications } from "./inbox/notification";
import NotificationGroup from "./inbox/NotificationGroup";

const Inbox = () => {
  const [filter, setFilter] = useState<NotificationFilter>("all");

  const [items,setItems] = useState(notifications)


  const filterNotification = 
  filter === "all" ? items : items.filter(item=> item.unread)

  const handleRead = (id : string)=>
  {

 setItems((prev)=> prev.map((item)=> item.id === id ?
{...item,
    unread : false
} : item
))

  }

  const handleAllRead = ()=>{


setItems((prev)=> prev.map((item)=>   
(       {...item,
    unread : false
} )
    
    ))

  }

  const unreadCount = items.filter(item=> item.unread).length


  const today = filterNotification.filter(items=> items.period === 'Today')
  const yesterday = filterNotification.filter(items=> items.period === 'Yesterday')
  const earlier = filterNotification.filter(items=> items.period === 'Earlier')






  

  return (
    <section className="min-h-screen px-6 py-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <h3 className="text-xl font-semibold">Inbox</h3>
          <div className=" rounded-full items-center mt-1 inline-flex w-20 justify-center h-6 bg-blue-500/40 text-[#6366F1] text-sm font-semibold">
            {unreadCount}
          </div>
        </div>
        <button className="flex gap-3 items-center"  onClick={handleAllRead}>
          <CheckCheck size={16} className="text-[#6366F1]" />
          <span className="text-sm font-bold text-[#6366F1]">
            Mark all as read
          </span>
        </button>
      </div>

      <div className=" border-[#71717A] border-b flex gap-6 pt-8 py-3">
        <button
          className={`text-sm font-semibold ${filter === "all" ? "border-b border-[#6366F1} text-[#6366F1]" : " text-white "} `}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`text-sm font-semibold ${filter === "unread" ? "border-b border-[#6366F1} text-[#6366F1]" : " text-white "} `}
          onClick={() => setFilter("unread")}
        >
          Unread
        </button>
      </div>

       <NotificationGroup 
       title="Today"
       notifications={today}
       onRead={handleRead}
       />
       <NotificationGroup 
       title="Yesterday"
       notifications={yesterday}
       onRead={handleRead}
       />
       <NotificationGroup 
       title="Earlier"
       notifications={earlier}
       onRead={handleRead}
       />
    </section>
  );
};

export default Inbox;