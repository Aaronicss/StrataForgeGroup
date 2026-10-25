import { CloudCog, Code2, Settings2, ShieldCheck } from "lucide-react";

const founders = [
  {
    name: "Zoren Christian C. Magaan",
    role: "Co-Founder & Full-Stack Engineering Lead",
    description:
      "Guides the technical vision, system architecture, repository standards, and day-to-day engineering progress.",
    initials: "ZM",
    icon: Code2,
  },
  {
    name: "Aaron Paul B. Lazaro",
    role: "Co-Founder & Full-Stack Solutions Engineer",
    description:
      "Translates client needs into practical software solutions, manages full-stack integrations, and handles cloud deployments.",
    initials: "AL",
    icon: CloudCog,
  },
  {
    name: "Ber Andrei S. Carpio",
    role: "Co-Founder & Full-Stack Engineer",
    description:
      "Builds and optimizes clean, high-performance features from development through delivery.",
    initials: "BC",
    icon: Settings2,
  },
  {
    name: "Raymond G. Paderon",
    role: "Co-Founder & Full-Stack Engineer in Test (SDET)",
    description:
      "Improves software reliability through automated testing, security checks, and production quality assurance.",
    initials: "RP",
    icon: ShieldCheck,
  },
];

export default function Founders() {
  return (
    <section id="founders" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
                THE PEOPLE BEHIND THE WORK
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px]">
              Meet the <span className="text-brand">Founders</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500 lg:text-right">
            A team of builders bringing together engineering, delivery, and
            quality.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map(({ name, role, description, initials, icon: Icon }) => (
            <article
              key={name}
              className="group flex min-w-0 flex-col rounded-2xl bg-card p-6 ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy text-xl font-extrabold tracking-tight text-white ring-8 ring-white">
                  {initials}
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon size={17} strokeWidth={1.9} />
                </span>
              </div>
              <div className="mt-7 flex flex-1 flex-col">
                <h3 className="text-base font-extrabold leading-snug text-navy">
                  {name}
                </h3>
                <p className="mt-2 min-h-[48px] text-xs font-semibold leading-relaxed text-brand">
                  {role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
