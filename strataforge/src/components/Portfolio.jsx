import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    type: "Web Application",
    image: "/images/Projects/Project1/ProjectCover.png",
    alt: "Student management dashboard",
    gallery: ["/images/project-sms.jpg", "/images/app-dashboard.png"],
    description:
      "A centralized student management experience for organizing learner records, monitoring activity, and giving staff a clear view of day-to-day operations.",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-Commerce Website",
    type: "Online Store",
    image: "/images/Projects/Project2/ProjectCover.png",
    alt: "E-commerce product catalog",
    shop: true,
    gallery: ["/images/project-ecommerce.jpg", "/images/sneakers.jpg"],
    description:
      "A clean online storefront that makes product discovery, browsing, and shopping feel simple across desktop and mobile.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Stripe"],
  },
  {
    title: "Business Website",
    type: "Corporate Website",
    image: "/images/Projects/Project3/ProjectCover.png",
    alt: "Corporate business website",
    overlay: {
      kicker: "STRATAFORGE",
      heading: "Building Better Solutions Together",
    },
    gallery: ["/images/project-corporate.jpg"],
    description:
      "A polished corporate website designed to explain the business clearly, build trust, and guide prospective clients toward getting in touch.",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Inventory Management System",
    type: "Web Application",
    image: "/images/Projects/Project4/ProjectCover.png",
    alt: "Inventory analytics dashboard",
    gallery: ["/images/project-inventory.jpg", "/images/dashboard.jpg"],
    description:
      "An inventory operations dashboard that brings stock levels, movement, and performance metrics together in one practical workspace.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
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
        <img
          src={project.image}
          alt={project.alt}
          className="h-[calc(100%-33px)] w-full object-cover transition duration-500 group-hover:scale-105"
        />
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

export default function Portfolio({ fullPage = false }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
      if (event.key === "ArrowRight") {
        setActiveImage((index) => (index + 1) % activeProject.gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((index) => (index - 1 + activeProject.gallery.length) % activeProject.gallery.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  const openProject = (project) => {
    setActiveImage(0);
    setActiveProject(project);
  };

  return (
    <section id={fullPage ? "all-projects" : "portfolio"} className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
                {fullPage ? "PROJECT PORTFOLIO" : "FEATURED PROJECTS"}
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-[40px]">
              {fullPage ? (
                <>All <span className="text-brand">Projects</span></>
              ) : (
                <>Some of Our <span className="text-brand">Recent Work</span></>
              )}
            </h2>
          </div>
          {!fullPage && (
            <div className="max-w-sm lg:text-right">
              <p className="text-sm leading-relaxed text-slate-500">
                Take a look at some of the systems and websites we&apos;ve developed.
              </p>
              <a
                href="/projects"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                View All Projects
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                aria-label={`View ${project.title} project details`}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
              >
                <ProjectVisual project={project} />
                <div className="px-4 py-4">
                  <h3 className="text-sm font-bold text-navy">{project.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{project.type}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeProject && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#05080f]/80 p-4 backdrop-blur-[2px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative my-auto max-h-[calc(100svh-2rem)] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-navy/85 text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-slate-100 p-4 sm:p-6">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-200">
                  <img
                    src={activeProject.gallery[activeImage]}
                    alt={`${activeProject.title} preview ${activeImage + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {activeProject.gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous project image"
                        onClick={() => setActiveImage((index) => (index - 1 + activeProject.gallery.length) % activeProject.gallery.length)}
                        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-navy/80 text-white hover:bg-brand"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        aria-label="Next project image"
                        onClick={() => setActiveImage((index) => (index + 1) % activeProject.gallery.length)}
                        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-navy/80 text-white hover:bg-brand"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>
                {activeProject.gallery.length > 1 && (
                  <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                    {activeProject.gallery.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`Show project image ${index + 1}`}
                        aria-pressed={activeImage === index}
                        className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${activeImage === index ? "border-brand" : "border-transparent opacity-70 hover:opacity-100"}`}
                      >
                        <img src={image} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-9 md:p-10">
                <p className="text-xs font-semibold tracking-[0.2em] text-brand">{activeProject.type.toUpperCase()}</p>
                <h2 id="project-dialog-title" className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {activeProject.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600">{activeProject.description}</p>
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-navy">Tech stack</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="#contact" onClick={() => setActiveProject(null)} className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark">
                  Discuss a similar project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </section>
  );
}
