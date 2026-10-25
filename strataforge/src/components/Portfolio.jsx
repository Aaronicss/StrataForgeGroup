import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    type: "Web Application",
    image: "/images/project-sms.jpg",
    alt: "Student management dashboard",
  },
  {
    title: "E-Commerce Website",
    type: "Online Store",
    image: "/images/sneakers.jpg",
    alt: "E-commerce product catalog",
    shop: true,
  },
  {
    title: "Business Website",
    type: "Corporate Website",
    image: "/images/project-corporate.jpg",
    alt: "Corporate business website",
    overlay: {
      kicker: "STRATAFORGE",
      heading: "Building Better Solutions Together",
    },
  },
  {
    title: "Inventory Management System",
    type: "Web Application",
    image: "/images/dashboard.jpg",
    alt: "Inventory analytics dashboard",
  },
];

function ProjectVisual({ project }) {
  if (project.shop) {
    return (
      <div className="relative h-44 overflow-hidden bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 text-[10px] font-semibold text-slate-500">
          <span>SneakerCo</span>
          <span className="rounded-full bg-navy px-2 py-0.5 text-[9px] text-white">
            Shop
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="overflow-hidden rounded-md bg-slate-50">
              <img
                src={project.image}
                alt=""
                className="h-14 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden">
      <img
        src={project.image}
        alt={project.alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      {project.overlay && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy via-navy/55 to-navy/10 p-4">
          <p className="text-[9px] font-semibold tracking-[0.18em] text-white/70">
            {project.overlay.kicker}
          </p>
          <p className="mt-1 text-sm font-extrabold leading-snug text-white">
            {project.overlay.heading}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
                FEATURED PROJECTS
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px]">
              Some of Our <span className="text-brand">Recent Work</span>
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-relaxed text-slate-500">
              Take a look at some of the systems and websites we&apos;ve developed.
            </p>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View All Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
            >
              <ProjectVisual project={project} />
              <div className="px-4 py-4">
                <h3 className="text-sm font-bold text-navy">{project.title}</h3>
                <p className="mt-1 text-xs text-slate-400">{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
