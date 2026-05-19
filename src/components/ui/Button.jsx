import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-coral text-white shadow-[0_12px_26px_rgba(223,23,111,0.24)] hover:bg-sage",
  secondary: "bg-porcelain text-coral ring-1 ring-coral/25 hover:bg-blush-50 hover:ring-coral/40",
  blush: "bg-blush-100 text-ink ring-1 ring-coral/15 hover:bg-blush-200",
  ghost: "bg-transparent text-ink hover:bg-steel"
};

export function Button({ className, variant = "primary", children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
