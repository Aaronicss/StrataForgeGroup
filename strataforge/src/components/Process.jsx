import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Plan & Discuss",
    text: "We understand your needs and goals.",
  },
  {
    num: "02",
    title: "Design & Develop",
    text: "We build and keep you updated throughout the process.",
  },
  {
    num: "03",
    title: "Test & Refine",
    text: "We ensure everything works perfectly.",
  },
  {
    num: "04",
    title: "Launch & Support",
    text: "We deploy and provide ongoing support.",
  },
];

export default function Process() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((value) => (value === 0 ? steps.length - 1 : value - 1));
  const next = () => setIndex((value) => (value === steps.length - 1 ? 0 : value + 1));

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy py-20 text-white lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="diagonal-band absolute -left-24 top-0 h-[380px] w-[120px] rotate-[-38deg] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(255,92,22,0.12),transparent_36%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-white/45">
                OUR PROCESS
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-[40px] lg:leading-tight">
              A Simple and Clear
              <br />
              Development Process
            </h2>
          </div>
          <div className="flex items-end justify-between gap-6 lg:max-w-sm lg:flex-col lg:items-end">
            <p className="text-sm leading-relaxed text-white/55 lg:text-right">
              We make the development process smooth and transparent so you
              always know what to expect.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:text-brand"
                aria-label="Previous step"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:text-brand"
                aria-label="Next step"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute top-[18px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-brand to-transparent lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <article
                key={step.num}
                className={`relative pt-1 transition duration-300 ${
                  index === i ? "opacity-100" : "opacity-80 lg:opacity-100"
                }`}
              >
                <div
                  className={`mb-5 flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${
                    index === i
                      ? "border-brand bg-brand text-white"
                      : "border-white/20 bg-navy text-white"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/50">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
