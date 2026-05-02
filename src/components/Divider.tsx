
interface DividerProps {
    content: string;
}

export default function Divider({content}: DividerProps) {
  return (
    <div className="relative flex items-center gap-3 my-1">
      <div className="flex-1 h-px bg-[#464554]" />
      <span className="text-xs text-[#908fa0] tracking-widest uppercase">{content}</span>
      <div className="flex-1 h-px bg-[#464554]" />
    </div>
  );
}