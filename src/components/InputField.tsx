
interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  rightSlot?: React.ReactNode;
  autoComplete?: string;
}


export default function InputField({
  id,
  type,
  placeholder,
  value,
  onChange,
  icon,
  rightSlot,
  autoComplete,
}: InputFieldProps) {
  return (
    <div className="relative flex items-center">
      {/* Left Icon */}
      <span className="absolute left-3 text-[#908fa0] pointer-events-none">
        {icon}
      </span>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="
          w-full
          bg-[#0d0d15]
          border border-[#464554]
          rounded-md
          pl-10 pr-10 py-2.5
          text-sm text-[#e4e1ed]
          placeholder:text-[#908fa0]
          outline-none
          transition-all duration-150
          focus:border-[#8083ff]
          focus:shadow-[0_0_0_2px_rgba(128,131,255,0.2)]
        "
      />

      {/* Right slot (e.g. show/hide password) */}
      {rightSlot && (
        <span className="absolute right-3">{rightSlot}</span>
      )}
    </div>
  );
}