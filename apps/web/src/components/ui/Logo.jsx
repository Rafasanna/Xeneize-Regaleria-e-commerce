import { Link } from "react-router-dom";

export function Logo({ compact = false }) {
  const circleClass = compact ? "h-14 w-14 md:h-[64px] md:w-[64px]" : "h-20 w-20 md:h-24 md:w-24";

  return (
    <Link to="/" className="flex items-center justify-center group" aria-label="Xeneize Regalería">
      <span className={`${circleClass} grid place-items-center overflow-hidden rounded-full bg-white shadow-[0_12px_30px_rgba(252,45,175,0.14)] ring-1 ring-[#FE72A9]/20 transition-transform duration-200 group-hover:scale-[1.03]`}>
        <img
          src="/fwdlogoxeneizeregaleria/xeneize-pink.png"
          alt="Xeneize Regalería"
          className="h-[90%] w-[90%] object-contain object-center"
        />
      </span>
    </Link>
  );
}
