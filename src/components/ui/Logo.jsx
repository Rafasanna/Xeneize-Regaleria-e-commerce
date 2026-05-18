import { Link } from "react-router-dom";

export function Logo({ compact = false, variant = "default" }) {
  const isWhite = variant === "white";
  const imageClassName = [
    compact ? "h-14 w-14" : "h-20 w-20",
    "rounded-full object-contain",
    isWhite ? "brightness-0 invert drop-shadow-[0_1px_6px_rgba(62,39,35,0.3)]" : ""
  ].join(" ");

  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/logoxeneize.png"
        alt="Xeneize Regaleria"
        className={imageClassName}
      />
      {!compact ? (
        <span className={`hidden text-base font-black uppercase tracking-wide sm:block ${isWhite ? "text-white drop-shadow-[0_1px_6px_rgba(62,39,35,0.3)]" : "text-ink"}`}>
          Xeneize Regaleria
        </span>
      ) : null}
    </Link>
  );
}
