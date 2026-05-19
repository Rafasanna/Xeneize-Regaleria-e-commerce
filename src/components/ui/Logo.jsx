import { Link } from "react-router-dom";

export function Logo({ compact = false }) {
  const circleClass = compact ? "h-12 w-12 md:h-14 md:w-14" : "h-16 w-16 md:h-24 md:w-24";
  const imageClass = compact ? "scale-[1.45]" : "scale-[1.4]";

  return (
    <Link to="/" className="flex flex-col items-center justify-center gap-3 group">
      <span className={`${circleClass} grid place-items-center overflow-visible rounded-full bg-white shadow-sm transition-transform group-hover:scale-105`}>
        <img
          src="/logoxeneize.png"
          alt="Xeneize Regaleria"
          className={`h-full w-full object-contain ${imageClass}`}
        />
      </span>
      <div className="flex flex-col items-center text-center gap-2">
        <span className="text-xl md:text-2xl font-serif font-bold uppercase tracking-[0.2em] text-[#222] leading-none">
          Xeneize Regaleria
        </span>
        {!compact ? (
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500 font-medium mt-1">
            El regalo perfecto
          </span>
        ) : null}
      </div>
    </Link>
  );
}
