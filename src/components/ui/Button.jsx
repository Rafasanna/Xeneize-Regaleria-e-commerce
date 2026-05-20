import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-[#6B4355] text-[#FFF9F6] shadow-[0_14px_30px_rgba(107,67,85,0.20)] hover:bg-[#C97A96]",
  secondary: "bg-[#FFF9F6]/80 text-[#4D3A42] ring-1 ring-[#F2E4E8] hover:bg-white hover:ring-[#C97A96]/35",
  blush: "bg-[#F7DCE5] text-[#6B4355] ring-1 ring-[#F2E4E8] hover:bg-[#F8D4C4]",
  ghost: "bg-transparent text-[#4D3A42] hover:bg-[#FCECF2]"
};

export function Button({ className, variant = "primary", children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
