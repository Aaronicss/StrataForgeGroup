import { ArrowRight, Braces, Database, LockKeyhole, Smartphone } from "lucide-react";

const services = [
  {
    icon: Braces,
    title: "Secure Web Applications",
    text: "Custom business platforms and internal tools, with security requirements considered during architecture and implementation.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps & MVPs",
    text: "Web and mobile product experiences scoped around your users, workflows, data, and launch priorities.",
  },
  {
    icon: Database,
    title: "Backend & API Integrations",
    text: "Data models, integrations, authentication, and authorization designed around clear trust boundaries.",
  },
  {
    icon: LockKeyhole,
    title: "Cloud & Secure Delivery",
    text: "Threat modeling, relevant OWASP Top 10 risk reviews, dependency checks, and cloud deployment planning.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
                SECURE SOFTWARE SERVICES
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px] lg:leading-tight">
              Secure Full-Stack Software
              <br />
              <span className="text-brand">Development</span>
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-relaxed text-slate-500">
              Need to hire a secure app development team? Our freelance collective builds web and mobile products with data protection considered from architecture through delivery.
            </p>
            <a
              href="#first-partner"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Discuss your project
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-2xl bg-card p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              <span className="text-brand">
                <Icon size={26} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{text}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Capabilities & example technology stack
          </p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
              { label: "Backend & data", items: ["Node.js", "PHP", "PostgreSQL", "MySQL / MariaDB"] },
              { label: "Cloud & security", items: ["Cloud deployment planning", "Secure API integrations", "Authentication & authorization", "Encryption where appropriate", "OWASP Top 10-informed reviews", "DevSecOps practices scoped to your project"] },
            ].map(({ label, items }) => (
              <div key={label}>
                <h3 className="mb-2 text-sm font-bold text-navy">{label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
