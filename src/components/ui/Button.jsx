import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-ink text-white shadow-[0_10px_24px_rgba(47,36,31,0.14)] hover:bg-sage",
  secondary: "bg-porcelain text-ink ring-1 ring-black/10 hover:bg-steel",
  blush: "bg-nude text-ink hover:bg-blush-200",
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
