import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "VioTrack: A Student Violation Tracking and Monitoring System Using QR Code and Dashboard",
    type: "Student Discipline System",
    image: "/images/Projects/Project3/ProjectCover.png",
    alt: "Corporate business website",
    gallery: [
      "/images/Projects/Project3/ProjectCover.png",
      "/images/Projects/Project3/858427395_943921188513261_8216259075947768121_n.png",
      "/images/Projects/Project3/860058892_1502309408456690_1123298593948926784_n.png",
      "/images/Projects/Project3/860402820_1849551289555915_2208688962598916051_n.png",
      "/images/Projects/Project3/861681083_4642733529379081_4614302481936312381_n.png",
      "/images/Projects/Project3/862759647_29190451233917732_2698232689448480865_n.png",
      "/images/Projects/Project3/865981602_1506180888229759_644943503975115658_n.png",
      "/images/Projects/Project3/866941062_1832347901252703_5706034088596423859_n.png",
    ],
    shortDescription: "QR-enabled student discipline and incident management system.",
    description:
      "VioTrack is a web-based student discipline and incident management system for tracking violations from initial report through investigation, conferences, resolution, and clearance. It includes role-specific tools for administrators, teachers, advisers, and students, with responsive interfaces for mobile use.",
    details:
      "Personal Project | Full-Stack Developer | React, Vite, TypeScript, Node.js, Prisma, MySQL/MariaDB\n\n➢ Built incident reporting and case management workflows with status tracking, student records, and adviser views.\n➢ Created tools for generating parent summons, conference summaries, and resolution certificates.\n➢ Added QR-based student lookup, dashboard analytics, and searchable audit logs.\n➢ Implemented account security features, including two-factor authentication and session management.\n➢ Designed responsive layouts for desktop and mobile screens.",
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Prisma", "MySQL/MariaDB"],
  },
  {
    title: "PanelCrusher.",
    type: "AI Web Application",
    image: "/images/Projects/Project1/ProjectCover.png",
    alt: "Student management dashboard",
    gallery: [
      "/images/Projects/Project1/ProjectCover.png",
      "/images/Projects/Project1/858378698_1437195047745346_3926851943311135082_n.png",
      "/images/Projects/Project1/861094277_1125189483780472_6972899317806996070_n.png",
      "/images/Projects/Project1/861972351_1418167196610634_4106385652027774149_n.png",
      "/images/Projects/Project1/863607151_2214032979457495_6025927476997492990_n.png",
      "/images/Projects/Project1/863897817_1159604249749241_5220737200806896690_n.png",
      "/images/Projects/Project1/863897829_1132145459386912_3511420706612106902_n.png",
      "/images/Projects/Project1/863924028_1589714548981405_1864214016880892108_n.png",
      "/images/Projects/Project1/864135051_1456870532991259_2741881975745851050_n.png",
      "/images/Projects/Project1/864465212_1799136691027746_6346681185248354417_n.png",
      "/images/Projects/Project1/864653217_29445784275007089_4336250782086566799_n.png",
      "/images/Projects/Project1/864928562_2558899504617356_2600468587812658483_n.png",
      "/images/Projects/Project1/865098614_941197455484316_2146976188296842841_n.png",
      "/images/Projects/Project1/865409362_1113915717662298_7628473202816405671_n.png",
      "/images/Projects/Project1/865604695_1643339660727975_6146496635242400613_n.png",
      "/images/Projects/Project1/865809379_1792112455408586_7272448000726509725_n.png",
      "/images/Projects/Project1/865898323_1454228423318669_450389851860953359_n.png",
    ],
    shortDescription: "AI-powered thesis defense simulations from research documents.",
    description:
      "PanelCrusherAI is an AI-powered website application that generates panel questions from uploaded research documents. It supports solo and collaborative group defense simulations with voice synthesis, adaptive LLM follow-ups, and comprehensive rubric scoring.",
    details:
      "Personal Project | Solo Developer | Next.js, TypeScript, Supabase, Vercel, Namecheap, Groq API, Hugging Face API\n\n➢ Designed and developed a full-stack AI-powered thesis defense simulation platform that generates panel questions from uploaded research documents using multiple LLM APIs.\n➢ Implemented solo and collaborative defense simulations featuring shared sessions, real-time communication, adaptive questioning, and automated evaluation.\n➢ Integrated LLM APIs for question generation, adaptive follow-up questions, answer scoring, and personalized feedback.",
    link: "https://panelcrusherai.online/",
    technologies: ["Next.js", "TypeScript", "Supabase", "Groq API", "Hugging Face API"],
  },
  {
    title: "In-Vento: An AI-Powered Automated Inventory Management System for Small and Medium-Sized Enterprises (SMEs)",
    type: "Thesis Project",
    image: "/images/Projects/Project2/ProjectCover.png",
    alt: "E-commerce product catalog",
    shop: true,
    video: "/images/Projects/Project2/In-Vento.mp4",
    gallery: [
      "/images/Projects/Project2/In-Vento.mp4",
      "/images/Projects/Project2/ProjectCover.png",
      "/images/Projects/Project2/120a863a-bd9f-47ba-8430-3bc789b16ef0.jpeg",
      "/images/Projects/Project2/4c34a289-4b08-4045-b54f-a4559bb7040d.jpeg",
      "/images/Projects/Project2/6d2092e8-6c56-499b-a6c9-9bed3598884a.jpeg",
      "/images/Projects/Project2/81245af6-0afb-4fed-8480-f9f122b55027.jpeg",
      "/images/Projects/Project2/92ff49f1-ae96-424d-8505-785764737aa3.jpeg",
      "/images/Projects/Project2/b222696d-cb99-44e7-a154-d3903c253635.jpeg",
      "/images/Projects/Project2/b9ba2c20-a620-4efa-a2b2-99516ca21a52.jpeg",
      "/images/Projects/Project2/eec59df9-7a55-4bcd-8ac3-1d7247921cea.jpeg",
    ],
    shortDescription: "AI-powered inventory management for small and medium-sized businesses.",
    description:
      "In-Vento is an AI-powered inventory management application designed to help small and medium-sized businesses monitor ingredient inventory, streamline stock management, and predict ingredient shelf life. It integrates computer vision and machine learning to automate ingredient identification and estimate freshness, helping businesses make informed inventory decisions and reduce potential food waste.",
    details:
      "Thesis Project | AI/Full-Stack Developer | React Native, Python, YOLOv11, Random Forest, Computer Vision, Machine Learning, REST APIs, Database Integration\n\n➢ Integrated YOLOv11 for AI-powered ingredient detection to support automated inventory management.\n➢ Developed a Random Forest machine learning model to predict the shelf life of burger ingredients.\n➢ Built mobile application features for user authentication, inventory management, and dashboard reporting.\n➢ Integrated the frontend, backend, database, and AI models to support end-to-end inventory management workflows.\n➢ Tested critical application features, including login, inventory input, dashboard functionality, and AI model integration, to improve system reliability.",
    technologies: ["React Native", "Python", "YOLOv11", "Random Forest", "Computer Vision"],
  },
  {
    title: "TALA HOTEL - Website Booking System",
    type: "Hotel Booking System",
    image: "/images/Projects/Project4/ProjectCover.png",
    alt: "Inventory analytics dashboard",
    gallery: [
      "/images/Projects/Project4/ProjectCover.png",
      "/images/Projects/Project4/853748309_1613644372959333_446718600908643001_n.jpg",
      "/images/Projects/Project4/854772971_2457933554731611_9137480829681488072_n.jpg",
      "/images/Projects/Project4/856690775_28567671826237248_3169082521655449893_n.jpg",
      "/images/Projects/Project4/857638514_1269051142080740_1741911387963374653_n.jpg",
      "/images/Projects/Project4/857743108_4620284171626269_6413041660880748025_n.jpg",
      "/images/Projects/Project4/858065906_4583837528593984_5675102636427549057_n.jpg",
      "/images/Projects/Project4/858150402_2236200047322233_5679652605912957721_n.jpg",
      "/images/Projects/Project4/858261854_1499711742038322_4248328233784012225_n.jpg",
      "/images/Projects/Project4/859494211_962320236497332_360579369052798051_n.jpg",
      "/images/Projects/Project4/859846464_1663372788790709_59925056616214451_n.jpg",
      "/images/Projects/Project4/861355452_1826102531716583_6010392504225640187_n.jpg",
      "/images/Projects/Project4/861399523_982399548247987_1779758941196153628_n.jpg",
      "/images/Projects/Project4/861590497_1110851618583248_6619123741493536694_n.jpg",
      "/images/Projects/Project4/861700671_1681605476922563_6970888698475107408_n.jpg",
      "/images/Projects/Project4/863097580_1823418505623701_4112887850063703995_n.jpg",
      "/images/Projects/Project4/863132864_1828380618578537_3796387382664724482_n.jpg",
      "/images/Projects/Project4/865898312_1812405489975050_5274676164679152279_n.jpg",
      "/images/Projects/Project4/866179687_1098117959516470_8474444020236996223_n.jpg",
      "/images/Projects/Project4/866472799_1785406909219134_1780032383438708542_n.jpg",
      "/images/Projects/Project4/867873561_1626177725673960_1807477650899301888_n.jpg",
    ],
    shortDescription: "Hotel booking and reservation management with an operations dashboard.",
    description:
      "Tala Hotel is a web-based hotel booking and reservation management system that enables guests to check room availability and submit online reservations, featuring a comprehensive admin dashboard for managing property operations.",
    details:
      "HTML, CSS, JavaScript, PHP, Bootstrap, MySQL\n\nKey Features & Contributions:\n- Developed a hotel booking platform enabling guests to check room availability, select standard or package rooms, and submit online reservations.\n- Implemented booking and reservation management using PHP and MySQL, ensuring accurate data processing and secure records.\n- Designed a responsive user interface with HTML, CSS, JavaScript, and Bootstrap to optimize accessibility across devices.\n- Built a centralized admin dashboard and analytics to monitor total revenue, user growth, and guest bookings.\n- Integrated administrative tools for room and package management, user accounts, and an interactive calendar scheduler.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
  },
];

function ProjectVisual({ project }) {
  if (project.shop) {
    return (
      <div className="relative h-44 overflow-hidden bg-white">
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
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
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">{project.shortDescription}</p>
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

            <div className="grid min-w-0 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="min-w-0 bg-slate-100 p-4 sm:p-6">
                <div className="relative flex h-[min(60vh,32rem)] min-h-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-200">
                  {activeProject.gallery[activeImage].endsWith(".mp4") ? (
                    <video
                      controls
                      preload="metadata"
                      className="max-h-full max-w-full object-contain"
                    >
                      <source src={activeProject.gallery[activeImage]} type="video/mp4" />
                      Your browser does not support the project video.
                    </video>
                  ) : (
                    <img
                      src={activeProject.gallery[activeImage]}
                      alt={`${activeProject.title} preview ${activeImage + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
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
                        {image.endsWith(".mp4") ? (
                          <video src={image} muted preload="metadata" className="h-full w-full object-cover" />
                        ) : (
                          <img src={image} alt="" className="h-full w-full object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="min-w-0 p-6 sm:p-9 md:p-10">
                <p className="text-xs font-semibold tracking-[0.2em] text-brand">{activeProject.type.toUpperCase()}</p>
                <h2 id="project-dialog-title" className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {activeProject.title}
                </h2>
                <p className="mt-5 whitespace-pre-line text-sm leading-7 text-slate-600">{activeProject.description}</p>
                {activeProject.details && (
                  <p className="mt-5 whitespace-pre-line text-sm leading-7 text-slate-600">{activeProject.details}</p>
                )}
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
                <div className="mt-9 flex flex-wrap gap-3">
                  {activeProject.link && (
                    <a href={activeProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-brand px-5 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">
                      Visit project <ArrowRight size={16} />
                    </a>
                  )}
                  <a href="#contact" onClick={() => setActiveProject(null)} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark">
                    Discuss a similar project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </section>
  );
}
