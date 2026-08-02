// import { AtSign, CheckCheck, CircleCheck, MessageSquare } from "lucide-react";
// import { useState } from "react";

// const Inbox = () => {
//   const [active, setActive] = useState("all");

//   return (
//     <section className="min-h-screen px-6 py-5">
//       <div className="flex items-center justify-between">
//         <div className="flex gap-3">
//           <h3 className="text-xl font-semibold">Inbox</h3>
//           <div className=" rounded-full items-center mt-1 inline-flex w-20 justify-center h-6 bg-blue-500/40 text-[#6366F1] text-sm font-semibold">
//             12 unread
//           </div>
//         </div>
//         <button className="flex gap-3 items-center">
//           <CheckCheck size={16} className="text-[#6366F1]" />
//           <span className="text-sm font-bold text-[#6366F1]">
//             Mark all as read
//           </span>
//         </button>
//       </div>

//       <div className=" border-[#71717A] border-b flex gap-6 pt-8 py-3">
//         <button
//           className={`text-sm font-semibold ${active === "all" ? "border-b border-[#6366F1} text-[#6366F1]" : " text-white "} `}
//           onClick={() => setActive("all")}
//         >
//           All
//         </button>
//         <button
//           className={`text-sm font-semibold ${active === "unread" ? "border-b border-[#6366F1} text-[#6366F1]" : " text-white "} `}
//           onClick={() => setActive("unread")}
//         >
//           Unread
//         </button>
//       </div>

//       <div className="pt-6">
//         <span className="text-[#71717A] uppercase text-xs ps-2">Today</span>
//         <ul className="pt-4 space-y-2 ">
//           <li className="bg-[#1E2028] botder-[#2D2F39] rounded-md py-5 px-4 ">
//             <div className="flex items-center justify-between ">
//               <div className="flex gap-4">
//                 <div className="rounded-full h-8 w-8 bg-[#3B82F6]/10 items-center flex justify-center ">
//                   <MessageSquare className="text-[#60A5FA]" size={18} />
//                 </div>
//                 <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#292932]">
//                   <img
//                     src="https://i.pravatar.cc/32?img=11"
//                     alt="Alex Johnson"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="">
//                   <p className="font-bold text-md text-blue-100">
//                     Sarah Chen comment on{" "}
//                     <span className="text-indigo-500">Api Intergration</span>
//                   </p>

//                   <span className="text-xs text-gray-500"> 2 minutes ago</span>
//                 </div>
//               </div>

//                  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
//             </div>
//           </li>
//           <li className="bg-[#1E2028] botder-[#2D2F39] rounded-md py-5 px-4 ">
//             <div className="flex items-center justify-between ">
//               <div className="flex gap-4">
//                 <div className="rounded-full h-8 w-8 bg-[#3B82F6]/10 items-center flex justify-center ">
//                   <MessageSquare className="text-[#60A5FA]" size={18} />
//                 </div>
//                 <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#292932]">
//                   <img
//                     src="https://i.pravatar.cc/32?img=11"
//                     alt="Alex Johnson"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="">
//                   <p className="font-bold text-md text-blue-100">
//                     Sarah Chen comment on{" "}
//                     <span className="text-indigo-500">Api Intergration</span>
//                   </p>

//                   <span className="text-xs text-gray-500"> 2 minutes ago</span>
//                 </div>
//               </div>

//                  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="pt-6">
//         <span className="text-[#71717A] uppercase text-xs ps-2">Yesterday</span>
//         <ul className="pt-4 space-y-2 ">
//           <li className="bg-[#1E2028] botder-[#2D2F39] rounded-md py-5 px-4 ">
//             <div className="flex items-center justify-between ">
//               <div className="flex gap-4">
//                 <div className="rounded-full h-8 w-8 bg-[#3B82F6]/10 items-center flex justify-center ">
//                   <AtSign className="text-[#60A5FA]" size={18} />
//                 </div>
//                 <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#292932]">
//                   <img
//                     src="https://i.pravatar.cc/32?img=11"
//                     alt="Alex Johnson"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="">
//                   <p className="font-bold text-md text-blue-100">
//                     Sarah Chen comment on{" "}
//                     <span className="text-indigo-500">Api Intergration</span>
//                   </p>

//                   <span className="text-xs text-gray-500"> 2 minutes ago</span>
//                 </div>
//               </div>

//                  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
//             </div>
//           </li>

//         </ul>
//       </div>
//       <div className="pt-6">
//         <span className="text-[#71717A] text-xs uppercase ps-2">Earlier</span>
//         <ul className="pt-4 space-y-2 ">
//           <li className="bg-[#1E2028] botder-[#2D2F39] rounded-md py-5 px-4 ">
//             <div className="flex items-center justify-between ">
//               <div className="flex gap-4">
//                 <div className="rounded-full h-8 w-8 bg-[#3B82F6]/10 items-center flex justify-center ">
//                   <CircleCheck className="text-[#60A5FA]" size={18} />
//                 </div>
//                 <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#292932]">
//                   <img
//                     src="https://i.pravatar.cc/32?img=11"
//                     alt="Alex Johnson"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="">
//                   <p className="font-bold text-md text-blue-100">
//                     Sarah Chen comment on{" "}
//                     <span className="text-indigo-500">Api Intergration</span>
//                   </p>

//                   <span className="text-xs text-gray-500"> 2 minutes ago</span>
//                 </div>
//               </div>

//                  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
//             </div>
//           </li>

//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Inbox;

// so this was the v1 now build the reusable coede

import {  CheckCheck,  } from "lucide-react";
import { useEffect, useState } from "react";

import { notifications } from "./notification";
import NotificationGroup from "./NotificationGroup";
import type { NotificationFilter } from "./type";
import { useCountInbox } from "../../../hooks/useCountInbox";

const Inbox = () => {
   console.log("Inbox mounted");
  const [filter, setFilter] = useState<NotificationFilter>("all");

  const [items, setItems] = useState(notifications);

  const filteredNotifications =
    filter === "all" ? items : items.filter((item) => item.unread);

  const handleRead = (id: string) => {
  setItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            unread: false,
          }
        : item,
    ),
  );
};

  const handleReadAll = () => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        unread: false,
      })),
    );
  };

const { setCountInbox  } = useCountInbox();

const unreadCount = items.filter((item) => item.unread).length;

useEffect(() => {
  setCountInbox(unreadCount);
 

}, [unreadCount, setCountInbox]);



  const today = filteredNotifications.filter((item) => item.period === "Today");

  const yesterday = filteredNotifications.filter(
    (item) => item.period === "Yesterday",
  );

  const earlier = filteredNotifications.filter(
    (item) => item.period === "Earlier",
  );

  if (!filteredNotifications.length) {
    return (
      <div className="py-24 text-center">
        <h3 className="text-lg font-semibold">You're all caught up!</h3>

        <p className="mt-2 text-zinc-500">No more notifications.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <h3 className="text-xl font-semibold">Inbox</h3>
          <div className=" rounded-full items-center mt-1 inline-flex w-20 justify-center h-6 bg-blue-500/40 text-[#6366F1] text-sm font-semibold">
            {unreadCount}
          </div>
        </div>
        <button className="flex gap-3 items-center"
          onClick={handleReadAll}
        >
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

      <>
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
      </>
    </section>
  );
};

export default Inbox;
