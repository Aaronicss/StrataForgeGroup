import { ArrowRight, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

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
    <div className="relative w-[132px] overflow-hidden rounded-[30px] bg-black p-[7px] shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:w-[156px]">
      <div className="relative overflow-hidden rounded-[24px] bg-[#0b0f18]">
        <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black" />
        <div className="flex min-h-[280px] flex-col items-center px-4 pb-5 pt-11 text-center sm:min-h-[330px]">
          <div className="mb-4 origin-top scale-75">
            <Logo />
          </div>
          <p className="text-[15px] font-extrabold leading-snug text-white sm:text-[17px]">
            Turning
            <br />
            Ideas Into
            <br />
            Digital Solutions
          </p>
          <span className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-brand py-2 text-[10px] font-semibold text-white">
            Let&apos;s Build Together
          </span>
        </div>
      </div>
    </div>
  );
}

function LaptopMock() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-16 bottom-8 overflow-hidden"
      >
        <div className="diagonal-band absolute right-4 top-0 h-[520px] w-[92px] rotate-[-38deg] opacity-90" />
        <div className="diagonal-band absolute right-28 top-8 h-[480px] w-[42px] rotate-[-38deg] opacity-80" />
        <div className="diagonal-band absolute -right-8 bottom-0 h-[340px] w-[160px] rotate-[-38deg] opacity-70" />
      </div>

      <div className="relative">
        <div className="rounded-t-[18px] bg-[#1b1e24] p-2.5 pb-0 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
          <div className="mb-2 flex justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          </div>
          <img
            src="/images/app-dashboard.png"
            alt="StrataForge operations dashboard"
            className="aspect-[16/10] w-full rounded-t-md bg-white object-cover object-top"
          />
        </div>
        <div className="h-[14px] bg-gradient-to-b from-[#cfd3da] via-[#b8bdc6] to-[#9aa1ab]" />
        <div className="relative mx-[-4%] h-[18px] rounded-b-[16px] bg-gradient-to-b from-[#aeb4be] to-[#7e8590] shadow-[0_18px_30px_rgba(0,0,0,0.35)]">
          <div className="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 rounded-b-md bg-[#6f7682]" />
        </div>
      </div>

      <div className="absolute -right-2 bottom-6 z-10 sm:right-2 lg:-right-2 lg:bottom-8">
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
