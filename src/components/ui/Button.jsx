import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-ink text-white hover:bg-black",
  secondary: "bg-porcelain text-ink ring-1 ring-black/10 hover:bg-cream",
  blush: "bg-nude text-white hover:bg-blush-500",
  ghost: "bg-transparent text-ink hover:bg-cream"
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
