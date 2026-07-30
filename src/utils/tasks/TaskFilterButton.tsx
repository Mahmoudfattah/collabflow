import { useRef, useState } from "react";
import type { FilterButton } from "./type";
import { Check, ChevronDown } from "lucide-react";
import useOutsiseClick from "./useOutsideClick";

interface Props {
  filterButton: FilterButton;
  selected: string[];
  onChange: (values: string[]) => void;
}

const TaskFilterButton = ({ filterButton, selected, onChange }: Props) => {
  const [open, setOpen] = useState(false); //drop down

  const dropdownRef = useRef(null);

  useOutsiseClick(dropdownRef, () => setOpen(false));

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const Icon = filterButton.icon;
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 rounded-md border border-[#2D2F39] bg-[#1E2028] px-4 py-2 text-[#D4D4D8]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon size={16} className="text-[#d4d4d8]" />
        <span>{filterButton.label}</span>

        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
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
            {filterButton.options.map((option) => {
              // 1. Declare logic inside function block {}
              const isSelected = selected.includes(option.value);

              // 2. Explicitly return the JSX
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
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
                  <div
                    className={`
                            flex h-4 w-4 items-center justify-center rounded border transition-colors
                            ${isSelected ? "border-[#6366F1] bg-[#6366F1]" : "border-[#555]"}
                          `}
                  >
                    {isSelected && <Check size={12} className="text-white" />}
                  </div>
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskFilterButton;
