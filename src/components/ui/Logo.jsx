import { Link } from "react-router-dom";

export function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex flex-col items-center justify-center gap-3 group">
      <img
        src="/logoxeneize.png"
        alt="Xeneize Regaleria"
        className={compact ? "h-14 w-14 md:h-16 md:w-16 object-contain bg-white rounded-full p-0.5 shadow-sm scale-125 transition-transform group-hover:scale-[1.3]" : "h-20 w-20 md:h-28 md:w-28 object-contain bg-white rounded-full p-1 shadow-md scale-125 transition-transform group-hover:scale-[1.3]"}
      />
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
