export default function Logo({ light = true, className = "" }) {
  const word = light ? "text-white" : "text-navy";
  const sub = light ? "text-white/45" : "text-slate-500";

  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M24 3.5L44 14.2 24 24.8 4 14.2 24 3.5Z" fill="#FF7A38" />
        <path d="M4 14.2V33.8L24 44.5V24.8L4 14.2Z" fill="#C43A00" />
        <path d="M24 24.8V44.5L44 33.8V14.2L24 24.8Z" fill="#FF5C16" />
        <path
          d="M18 19.2h11.2v2.6H20.8v3.1h7.4v2.5H20.8v6.2H18V19.2Z"
          fill="white"
        />
      </svg>
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-[0.04em] ${word}`}>
          STRATA<span className="text-brand">FORGE</span>
        </span>
        <span
          className={`mt-1 block text-[9px] font-medium tracking-[0.22em] ${sub}`}
        >
          SOFTWARE SOLUTIONS
        </span>
      </span>
    </a>
  );
}
