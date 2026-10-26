import {
  CloudCog,
  Code2,
  Settings2,
  ShieldCheck,
} from "lucide-react";

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM8.1 18.5H5.15V9h2.96v9.5ZM6.63 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.5 18.5h-2.95v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.27V9h2.83v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56v5.18Z" />
    </svg>
  );
}

const founders = [
  {
    name: "Zoren Christian C. Magaan",
    role: "Co-Founder & Lead Full-Stack Engineer",
    description:
      "Guides the technical vision, system architecture, repository standards, and day-to-day engineering progress.",
    initials: "ZM",
    icon: Code2,
    linkedin: "https://www.linkedin.com/in/zoren-christian-magaan/",
    github: "https://github.com/zorenzki",
  },
  {
    name: "Aaron Paul B. Lazaro",
    role: "Co-Founder & Full-Stack Solutions Engineer",
    description:
      "Translates client needs into practical software solutions, manages full-stack integrations, and handles cloud deployments.",
    initials: "AL",
    icon: CloudCog,
    linkedin: "https://www.linkedin.com/in/aaron-lazaro/",
    github: "https://github.com/Aaronicss",
  },
  {
    name: "Ber Andrei S. Carpio",
    role: "Co-Founder & Full-Stack Engineer",
    description:
      "Builds and optimizes clean, high-performance features from development through delivery.",
    initials: "BC",
    icon: Settings2,
    linkedin: "https://www.linkedin.com/in/berandreicarpio/",
    github: "https://github.com/andreicrp",
  },
  {
    name: "Raymond G. Paderon",
    role: "Co-Founder & Software Development Engineer in Test",
    description:
      "Improves software reliability through automated testing, security checks, and production quality assurance.",
    initials: "RP",
    icon: ShieldCheck,
    linkedin: "https://www.linkedin.com/in/raymond-paderon-8a9518411/",
    github: "https://github.com/Empire01",
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
          {founders.map(({ name, role, description, initials, icon: Icon, linkedin, github }) => (
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
                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on GitHub`}
                    title="GitHub"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-navy hover:text-white hover:ring-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    title="LinkedIn"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:bg-[#0a66c2] hover:text-white hover:ring-[#0a66c2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
