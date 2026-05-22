import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-[#FC2DAF] text-white shadow-[0_16px_34px_rgba(252,45,175,0.24)] hover:bg-[#FE72A9]",
  secondary: "bg-white text-[#18121D] ring-1 ring-[#98C3D6]/50 hover:bg-[#EAF6FB] hover:ring-[#28A4DC]/45",
  blush: "bg-[#FE72A9]/16 text-[#18121D] ring-1 ring-[#FE72A9]/25 hover:bg-[#FE72A9]/26",
  ghost: "bg-transparent text-[#18121D] hover:bg-[#FDE7F1]"
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
