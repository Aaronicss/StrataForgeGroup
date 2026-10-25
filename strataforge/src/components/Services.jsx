import { ArrowRight, Globe, Code2, Database, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    text: "Modern, responsive, and professional websites for businesses, portfolios, and online stores.",
  },
  {
    icon: Code2,
    title: "Custom Systems",
    text: "Tailored web applications such as inventory, student management, POS, and more.",
  },
  {
    icon: Database,
    title: "Database & Integration",
    text: "MySQL databases, API integrations, QR systems, and automation solutions.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    text: "Ongoing support, updates, bug fixes, and system enhancements to keep your business running smoothly.",
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
                OUR SERVICES
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px] lg:leading-tight">
              Complete Software Solutions
              <br />
              <span className="text-brand">for Your Business</span>
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-relaxed text-slate-500">
              From websites to custom systems, we provide reliable and scalable
              solutions tailored to your goals.
            </p>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View All Services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl bg-card p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              <span className="text-brand">
                <Icon size={26} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
