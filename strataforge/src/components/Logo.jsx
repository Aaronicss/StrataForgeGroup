import logoUrl from "../assets/StrataLogo.png";

export default function Logo({ light = true, className = "", href = "#home" }) {
  const word = light ? "text-white" : "text-navy";
  const sub = light ? "text-white/45" : "text-slate-500";

  return (
    <a href={href} className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoUrl}
        alt="StrataForge logo"
        className="h-[38px] w-[38px] object-contain"
      />
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-[0.04em] ${word}`}>
          STRATA<span className="text-brand">FORGE</span>
        </span>
        <span className={`mt-1 block text-[9px] font-medium tracking-[0.22em] ${sub}`}>
          SOFTWARE SOLUTIONS
        </span>
      </span>
    </a>
  );
}
