import {

  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Clock4,
  ListFilter,
  Zap,
} from "lucide-react";
import { useState } from "react";

const Tasks = () => {
  const [filter, setFilter] = useState("all");
  const [checked, setChecked] = useState(false);

  return (
    <section className="flex flex-col min-h-screen px-6 py-5 ">
      <div className=" flex items-center justify-between  ">
        <div className="flex gap-6">
          <button
            className={`text-md  ${filter === "all" ? "text-[#6366F1] border-b border-[#6366F1] " : "text-[#A1A1AA] "} font-semibold `}
          >
            All Tasks
          </button>
          <button
            className={`text-md  ${filter === "to-me" ? "text-[#6366F1] border-b border-[#6366F1] " : "text-[#A1A1AA] "} font-semibold `}
          >
            Assigned To Me
          </button>
          <button
            className={`text-md  ${filter === "by-me" ? "text-[#6366F1] border-b border-[#6366F1] " : "text-[#A1A1AA] "} font-semibold `}
          >
            Created By Me
          </button>
        </div>
        <div className="flex gap-4">
          <button className="text-md text-[#D4D4D8] flex items-center justify-center gap-1 py-2 px-4 bg-[#1E2028] rounded-[8px] border-[#2D2F39] ">
            <ListFilter className="text-[#d4d4d8]" size={16} /> Status
          </button>
          <button className="text-md text-[#D4D4D8] flex items-center justify-center gap-2 py-2 px-4 bg-[#1E2028] rounded-[8px] border-[#2D2F39] ">
            <div className="flex flex-col space-y-0.5">
              <span className="text-[#d4d4d8] icon" />
              <span className="text-[#d4d4d8] icon2" />
            </div>{" "}
            Priority
          </button>
          <button className="text-md text-[#D4D4D8] flex items-center justify-center gap-1 py-2 px-4 bg-[#1E2028] rounded-[8px] border-[#2D2F39] ">
            <CalendarDays className="text-[#d4d4d8]" size={16} /> Status
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#71717A] mt-4 "></div>

      <div className="flex flex-col space-y-5">
        <div className="flex items-center gap-2 pt-8">
          <ChevronDown size={18} className="text-[#71717A] cursor-pointer" />

          <p className="text-md font-bold text-[#A1A1AA] uppercase"> Todo</p>
          <p className="text-md h-5 flex items-center justify-center w-5 font-bold rounded-full bg-[#2D2F39] text-[#A1A1AA] uppercase">
            {" "}
            3
          </p>
        </div>

        <div className="">
          <ul className="  ">
            <li className="bg-[#1E2028] border-[#2D2F39] rounded-md py-4 px-4 ">
              <div className="flex items-center justify-between ">
                <div className="flex gap-4 items-center">
                  <button
                    className={`flex h-5 cursor-pointer w-5 items-center justify-center rounded-full border-2  ${
                      checked
                        ? "border-[#6366F1] bg-[#6366F1]"
                        : "border-[#71717A]"
                    } transition-colors   `}

                    onClick={()=>setChecked(c=> !c)}
                  >
                       {checked && <Check size={16} className="text-white" />}
                  </button>

                  <p className="font-bold text-md text-blue-100">
                    Optimize database queries for V2 APi
                  </p>

                  <p className=" px-2 py-1 bg-[#6366F1]/10 border-[#6366F1]/20 border text-xs text-[#6366F1] rounded-[5px] font-bold ">
                    {" "}
                    Cloud Foundation
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <p className=" px-2 py-1.5 bg-[#EF4444]/10  text-xs text-[#EF4444] rounded-[5px] uppercase font-bold  flex items-center gap-1 ">
                    <Zap className=" text-[#ef4444]" size={14} />
                    unrgent
                  </p>

                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 bg-[#292932]">
                    <img
                      src="https://i.pravatar.cc/32?img=11"
                      alt="Alex Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="   text-md font-semibold text-[#EF4444]   flex items-center gap-1 ">
                    <Clock4 className=" text-[#ef4444]" size={14} />
                    Overdue(2d)
                  </p>

                  <p className=" px-2 py-2 bg-[#34343D]  text-md text-[#C7C4D7] rounded-[5px] font-bold ">
                    {" "}
                    Todo
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <span className="text-[#71717A] text-xs uppercase ps-2">Earlier</span>
          <ul className="pt-4 space-y-2 ">
            <li className="bg-[#1E2028] botder-[#2D2F39] rounded-md py-5 px-4 ">
              <div className="flex items-center justify-between ">
                <div className="flex gap-4">
                  <div className="rounded-full h-8 w-8 bg-[#3B82F6]/10 items-center flex justify-center ">
                    <CircleCheck className="text-[#60A5FA]" size={18} />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#292932]">
                    <img
                      src="https//:i.pravatar.cc/32?img=11"
                      alt="Alex Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="">
                    <p className="font-bold text-md text-blue-100">
                      Sarah Chen comment on{" "}
                      <span className="text-indigo-500">Api Intergration</span>
                    </p>

                    <span className="text-xs text-gray-500">
                      {" "}
                      2 minutes ago
                    </span>
                  </div>
                </div>

                <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
