import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects delivered" },
  { value: "Years of experience", label: "Building software" },
  { value: "100%", label: "Client-focused" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/team.jpg"
            alt="StrataForge team collaborating"
            className="h-full max-h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <p className="text-xs font-semibold tracking-[0.22em] text-brand">
              ABOUT US
            </p>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-4xl">
            A software partner for
            <span className="text-brand"> growing businesses</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
            StrataForge is a custom software development agency. We design and
            build websites, internal systems, and integrations that match the
            way your team actually works — not generic templates that get in
            the way.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
            From the first conversation to launch and support, we keep the
            process clear, the code maintainable, and the outcome tied to real
            business results.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-x-3 gap-y-4 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p
                  className="min-h-[42px] text-xl font-extrabold leading-[1.05] text-navy sm:min-h-[50px] sm:text-2xl"
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
