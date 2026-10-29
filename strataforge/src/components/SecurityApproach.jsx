import { ArrowDown, ShieldCheck } from "lucide-react";

export default function SecurityApproach() {
  return (
    <section id="security-approach" className="scroll-mt-24 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">SECURITY FROM THE START</p>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[40px]">
            Security decisions belong in the architecture.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600">
            Fast builds can leave gaps when authentication, API boundaries, or data storage are left out of scope. Adding security as a separate package later can also push it beyond a small-business budget.
          </p>
        </div>

        <article className="rounded-3xl bg-navy p-7 text-white shadow-[0_20px_60px_rgba(9,14,25,0.16)] sm:p-9">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
            <ShieldCheck size={24} />
          </div>
          <h3 className="mt-6 text-2xl font-bold">A security-minded build, with a direct line to the team.</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            StrataForge is a lean full-stack software collective with a core focus on cybersecurity. We discuss data flows, access, integrations, and likely threats while shaping the product—then prioritize practical controls that fit its scope.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Fewer handoffs and fewer people touching the codebase",
              "Direct communication with the developers making technical decisions",
              "OWASP Top 10-informed risk review where relevant",
              "Confidentiality and access considered throughout delivery",
            ].map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/80">
                <ArrowDown className="mt-0.5 shrink-0 rotate-[-45deg] text-brand" size={16} />
                {item}
              </p>
            ))}
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
            Security work reduces risk; no development process can guarantee that an application will never be compromised.
          </p>
        </article>
      </div>
    </section>
  );
}
