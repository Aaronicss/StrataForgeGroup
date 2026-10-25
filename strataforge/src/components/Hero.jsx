import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import strataMark from "../assets/StrataLogo.png";
import Button from "./Button";

const highlights = [
  {
    icon: Zap,
    title: "Modern Solutions",
    text: "Built for your needs",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    text: "Your data, our priority",
  },
  {
    icon: BarChart3,
    title: "Business Focused",
    text: "Solutions that deliver results",
  },
];

function PhoneMock() {
  return (
    <div className="relative w-[116px] overflow-hidden rounded-[27px] border border-white/15 bg-gradient-to-br from-[#202735] via-[#080a0f] to-black p-[6px] shadow-[0_24px_52px_rgba(0,0,0,0.58)] sm:w-[138px]">
      <div className="relative overflow-hidden rounded-[22px] bg-[radial-gradient(ellipse_at_50%_35%,#172235_0%,#0b0f18_68%)]">
        <div className="absolute left-1/2 top-2 z-10 h-[15px] w-[62px] -translate-x-1/2 rounded-full bg-black" />
        <div className="flex min-h-[230px] flex-col items-center px-3 pb-3 pt-9 text-center sm:min-h-[270px] sm:px-4 sm:pt-10">
          <div className="flex w-full items-center justify-center gap-1.5">
            <img src={strataMark} alt="" className="h-5 w-5 shrink-0 object-contain" />
            <span className="min-w-0 text-left leading-none">
              <span className="block whitespace-nowrap text-[6.5px] font-extrabold tracking-[0.02em] text-white sm:text-[7.5px]">STRATA<span className="text-brand">FORGE</span></span>
              <span className="mt-1 block whitespace-nowrap text-[4px] font-medium tracking-[0.13em] text-white/45 sm:text-[4.5px]">SOFTWARE SOLUTIONS</span>
            </span>
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-[5px] font-semibold tracking-[0.16em] text-brand/90 sm:text-[6px]">
            <span className="h-1 w-1 rounded-full bg-brand shadow-[0_0_8px_rgba(255,92,22,.8)]" />
            DIGITAL STUDIO
          </span>
          <p className="mt-2 text-[13px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[15px]">
            Turning Ideas
            <br />
            Into Digital
            <br />
            Solutions
          </p>
          <p className="mt-2 max-w-[100px] text-[6px] leading-relaxed text-white/50 sm:text-[7px]">
            Thoughtful software for ambitious businesses.
          </p>
          <span className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand to-[#ff7b32] py-1.5 text-[8px] font-semibold text-white shadow-[0_6px_16px_rgba(255,92,22,.3)] sm:py-2 sm:text-[9px]">
            Let&apos;s Build Together
          </span>
        </div>
      </div>
    </div>
  );
}

function LaptopMock() {
  return (
    <div className="relative mx-auto w-full max-w-[660px] [perspective:1400px] lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-16 bottom-8 overflow-hidden"
      >
        <div className="diagonal-band absolute right-4 top-0 h-[520px] w-[92px] rotate-[-38deg] opacity-90" />
        <div className="diagonal-band absolute right-28 top-8 h-[480px] w-[42px] rotate-[-38deg] opacity-80" />
        <div className="diagonal-band absolute -right-8 bottom-0 h-[340px] w-[160px] rotate-[-38deg] opacity-70" />
      </div>

      <div className="relative px-3 sm:px-5">
        <div className="relative rounded-t-[22px] border border-white/15 bg-gradient-to-br from-[#343b48] via-[#171c26] to-[#080b11] p-[7px] pb-0 shadow-[0_40px_90px_rgba(0,0,0,0.6)] sm:p-[9px] sm:pb-0">
          <div className="absolute left-1/2 top-[3px] z-10 flex -translate-x-1/2 items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span className="h-1 w-1 rounded-full bg-white/10" />
          </div>
          <div
            role="img"
            aria-label="StrataForge business dashboard displayed on a laptop"
            className="flex aspect-[16/10] overflow-hidden rounded-t-[14px] bg-[#f3f5f9] text-left text-slate-900 sm:rounded-t-[15px]"
          >
            <aside className="flex w-[19%] shrink-0 flex-col bg-[#101827] px-2 py-2.5 text-white sm:px-3 sm:py-4">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 sm:gap-2 sm:pb-3">
                <img src={strataMark} alt="" className="h-5 w-5 shrink-0 object-contain sm:h-6 sm:w-6" />
                <span className="min-w-0 leading-none">
                  <span className="block whitespace-nowrap text-[6px] font-extrabold tracking-tight sm:text-[8px]">STRATA<span className="text-brand">FORGE</span></span>
                  <span className="mt-1 block whitespace-nowrap text-[3.5px] font-medium tracking-[0.08em] text-slate-400 sm:text-[4.5px]">SOFTWARE SOLUTIONS</span>
                </span>
              </div>
              <div className="mt-3 space-y-1 sm:mt-5 sm:space-y-1.5">
                {[["▦", "Overview"], ["◉", "Projects"], ["▤", "Reports"], ["⚙", "Settings"]].map(([icon, label], index) => (
                  <div key={label} className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[6px] sm:gap-2 sm:px-2 sm:py-1.5 sm:text-[9px] ${index === 0 ? "bg-brand text-white shadow-[0_4px_12px_rgba(255,92,22,.28)]" : "text-slate-400"}`}>
                    <span className="text-[8px] sm:text-[11px]">{icon}</span><span>{label}</span>
                  </div>
                ))}
              </div>
            </aside>
            <div className="min-w-0 flex-1 p-2 sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[9px] font-bold sm:text-sm">Good morning, Alex <span aria-hidden="true">✦</span></p>
                  <p className="mt-0.5 text-[5px] text-slate-400 sm:text-[8px]">Here&apos;s what&apos;s happening with your business today.</p>
                </div>
                <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                  <span className="hidden rounded border border-slate-200 bg-white px-1.5 py-1 text-[6px] text-slate-500 sm:block sm:text-[8px]">Last 30 days⌄</span>
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-orange-100 text-[7px] text-brand sm:h-6 sm:w-6 sm:text-[10px]">A</span>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1 sm:mt-4 sm:gap-2">
                {[["Total revenue", "$48,290", "+12.8%"], ["Active projects", "24", "+4 this month"], ["New clients", "186", "+8.2%"]].map(([label, value, trend]) => (
                  <div key={label} className="rounded-md border border-slate-200/80 bg-white p-1.5 shadow-[0_2px_8px_rgba(15,23,42,.03)] sm:rounded-lg sm:p-2.5">
                    <p className="truncate text-[5px] text-slate-400 sm:text-[8px]">{label}</p>
                    <div className="mt-0.5 flex flex-wrap items-baseline gap-1 sm:mt-1">
                      <span className="text-[9px] font-bold tracking-tight sm:text-base">{value}</span>
                      <span className="text-[5px] font-semibold text-emerald-600 sm:text-[7px]">{trend}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-1.5 grid min-h-0 grid-cols-[1.55fr_1fr] gap-1.5 sm:mt-2.5 sm:gap-2">
                <div className="overflow-hidden rounded-md border border-slate-200/80 bg-white p-1.5 sm:rounded-lg sm:p-2.5">
                  <div className="flex items-start justify-between">
                    <div><p className="text-[6px] font-semibold sm:text-[9px]">Revenue overview</p><p className="mt-0.5 text-[5px] text-slate-400 sm:text-[7px]">Monthly performance</p></div>
                    <span className="text-[5px] text-slate-400 sm:text-[7px]">2025⌄</span>
                  </div>
                  <div className="relative mt-1 h-[78%] min-h-[74px] overflow-hidden sm:min-h-[130px]">
                    <div className="absolute inset-0 flex flex-col justify-between py-1">
                      {[0, 1, 2, 3].map((line) => <span key={line} className="border-t border-dashed border-slate-100" />)}
                    </div>
                    <svg aria-hidden="true" viewBox="0 0 320 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
                      <defs><linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#ff5c16" stopOpacity=".22" /><stop offset="100%" stopColor="#ff5c16" stopOpacity="0" /></linearGradient></defs>
                      <path d="M0 78 C18 74 20 56 42 62 S74 68 90 50 S117 54 135 42 S164 55 181 36 S210 46 228 28 S255 40 273 19 S303 27 320 8 V100 H0Z" fill="url(#revenue-fill)" />
                      <path d="M0 78 C18 74 20 56 42 62 S74 68 90 50 S117 54 135 42 S164 55 181 36 S210 46 228 28 S255 40 273 19 S303 27 320 8" fill="none" stroke="#ff5c16" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                      <circle cx="273" cy="19" r="3.5" fill="white" stroke="#ff5c16" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <div className="absolute inset-x-0 bottom-0 flex justify-between text-[5px] text-slate-400 sm:text-[7px]"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
                  </div>
                </div>
                <div className="rounded-md border border-slate-200/80 bg-white p-1.5 sm:rounded-lg sm:p-2.5">
                  <div className="flex items-center justify-between"><p className="text-[6px] font-semibold sm:text-[9px]">Projects</p><span className="text-[5px] text-brand sm:text-[7px]">View all</span></div>
                  <div className="mt-1.5 space-y-1.5 sm:mt-2.5 sm:space-y-2.5">
                    {[["Website redesign", "78%", "w-[78%]", "bg-brand"], ["Mobile app", "54%", "w-[54%]", "bg-amber-400"], ["CRM integration", "92%", "w-[92%]", "bg-emerald-500"]].map(([name, percent, width, color]) => (
                      <div key={name}>
                        <div className="flex justify-between gap-1 text-[5px] sm:text-[7px]"><span className="truncate text-slate-600">{name}</span><span className="text-slate-400">{percent}</span></div>
                        <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-slate-100 sm:mt-1 sm:h-1.5"><div className={`h-full rounded-full ${width} ${color}`} /></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-1 border-t border-slate-100 pt-1.5 sm:mt-3 sm:pt-2.5">
                    <div className="flex -space-x-1"><span className="h-3 w-3 rounded-full border border-white bg-sky-300 sm:h-4 sm:w-4"/><span className="h-3 w-3 rounded-full border border-white bg-violet-300 sm:h-4 sm:w-4"/><span className="h-3 w-3 rounded-full border border-white bg-amber-300 sm:h-4 sm:w-4"/></div>
                    <span className="text-[5px] text-slate-400 sm:text-[7px]">8 team members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 h-1.5 bg-gradient-to-b from-[#d9dde4] to-[#9aa2af] sm:mx-5" />
        <div className="relative mx-[-1%] h-[22px] rounded-b-[18px] border-x border-b border-white/20 bg-gradient-to-b from-[#d5d9e0] via-[#aeb5c0] to-[#646d7a] shadow-[0_24px_35px_rgba(0,0,0,0.42)] sm:h-[27px]">
          <div className="absolute left-1/2 top-0 h-2 w-20 -translate-x-1/2 rounded-b-lg bg-gradient-to-b from-[#929aa7] to-[#bec3cb] sm:h-2.5 sm:w-28" />
          <div className="absolute inset-x-[13%] bottom-[3px] hidden h-[2px] rounded-full bg-white/25 sm:block" />
        </div>
      </div>

      <div className="absolute -right-5 bottom-7 z-10 scale-[.82] origin-bottom-right sm:-right-3 sm:bottom-9 sm:scale-[.88] lg:-right-4">
        <PhoneMock />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-24 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="diagonal-band absolute -right-10 -top-24 h-[620px] w-[140px] rotate-[-38deg] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(255,92,22,0.18),transparent_40%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-white/45">
            BUILDING IDEAS INTO REAL SOLUTIONS
          </p>
          <h1 className="mt-4 text-[38px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
            Custom Software
            <br />
            Development for
            <br />
            <span className="text-brand">Real Businesses</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
            We build modern, reliable, and scalable web solutions that help
            businesses work smarter and grow faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">
              Get a Free Quote
              <ArrowRight size={16} />
            </Button>
            <Button href="#portfolio" variant="dark">
              View Our Work
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/80 text-brand">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-0.5 text-xs text-white/50">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LaptopMock />
      </div>
    </section>
  );
}
