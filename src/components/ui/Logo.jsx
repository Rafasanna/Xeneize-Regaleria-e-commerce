import { Link } from "react-router-dom";

export function Logo({ compact = false }) {
  const circleClass = compact ? "h-16 w-16 md:h-[72px] md:w-[72px]" : "h-20 w-20 md:h-24 md:w-24";

  return (
    <Link to="/" className="flex items-center justify-center group" aria-label="Xeneize Regalería">
      <span className={`${circleClass} grid place-items-center overflow-hidden rounded-full bg-white shadow-[0_10px_24px_rgba(107,67,85,0.10)] ring-1 ring-[#F2E4E8] transition-transform duration-200 group-hover:scale-[1.03]`}>
        <img
          src="/headerxeneize-logo.png"
          alt="Xeneize Regalería"
          className="h-[86%] w-[86%] object-contain object-center"
        />
      </span>
    </Link>
  );
}
