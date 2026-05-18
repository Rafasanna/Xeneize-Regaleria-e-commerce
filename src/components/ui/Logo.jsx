import { Link } from "react-router-dom";

export function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/logoxeneize.png"
        alt="Xeneize Regaleria"
        className={compact ? "h-12 w-12 rounded-full object-cover" : "h-14 w-14 rounded-full object-cover"}
      />
      {!compact ? (
        <span className="hidden text-base font-semibold tracking-normal sm:block">
          Xeneize Regaleria
        </span>
      ) : null}
    </Link>
  );
}
