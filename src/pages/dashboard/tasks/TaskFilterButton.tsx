




import { useState } from 'react';
import type {  FilterButton } from './type'
import { ChevronDown } from 'lucide-react';
 
interface Props {
  filterButton : FilterButton
}


const TaskFilterButton = ({filterButton} : Props) => {

  const [open, setOpen] = useState(false);

  const Icon = filterButton.icon
  return (
    <div className="relative">

    <button  className="flex items-center gap-2 rounded-md border border-[#2D2F39] bg-[#1E2028] px-4 py-2 text-[#D4D4D8]" 
    onClick={()=>setOpen(prev => !prev)}>
     <Icon size={16}  className="text-[#d4d4d8]"/>
      <span>{filterButton.label}</span>

         <ChevronDown
        size={15}
        className={`transition-transform ${
            open ? "rotate-180" : ""
        }`}
    />
    </button>

    {
    open && (
        <div
            className="
                absolute
                right-0
                top-full
                mt-2
                w-56
                rounded-lg
                border
                border-[#2D2F39]
                bg-[#1E2028]
                shadow-xl
                z-50
            "
        >
         <div className="py-2">
    {filterButton.options.map(option => (
        <button
            key={option.value}
            className="
                flex
                w-full
                items-center
                justify-between
                px-4
                py-2.5
                text-left
                text-sm
                text-[#D4D4D8]
                hover:bg-[#2A2D38]
                transition-colors
            "
        >
            {option.label}
        </button>
    ))}
</div>
        </div>
    )
}
        </div>
  )
}

export default TaskFilterButton