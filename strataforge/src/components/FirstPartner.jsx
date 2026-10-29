import { ArrowRight, ClipboardCheck, MessageCircle, SlidersHorizontal } from "lucide-react";
import Button from "./Button";

const offers = [
  {
    icon: ClipboardCheck,
    title: "Complimentary first-pass review",
    text: "We’ll map key data flows, trust boundaries, likely threats, and practical safeguards for your project idea.",
  },
  {
    icon: MessageCircle,
    title: "Work directly with the builders",
    text: "Talk with the people shaping the architecture and writing the code, with fewer handoffs along the way.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible scope and milestones",
    text: "Shape the first release around your priorities, with flexible scope and milestone-based pricing agreed before work begins.",
  },
];

export default function FirstPartner() {
  return (
    <section id="first-partner" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-navy text-white">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand" />
                <p className="text-xs font-semibold tracking-[0.22em] text-white/45">FIRST PARTNER INITIATIVE</p>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight lg:text-4xl">
                Be our first client partner. Get our focused attention.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/65">
                We’re opening StrataForge’s first client engagement. Your project will be our priority, with direct access to the team, a flexible plan, and security considered from the first conversation.
              </p>
              <div className="mt-7">
                <Button href="#quote-form">
                  Discuss Your Project
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {offers.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className={`rounded-2xl border border-white/10 bg-white/5 p-5 ${index === 0 ? "sm:col-span-2" : ""}`}>
                  <Icon className="text-brand" size={22} />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
                </article>
              ))}
              <p className="sm:col-span-2 text-xs leading-relaxed text-white/40">
                The complimentary review is an initial project discussion, not a penetration test, formal security audit, certification, or guarantee. We’ll agree on any paid work and scope before it starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
