import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const initial = { name: "", email: "", company: "", message: "" };

export default function ContactCta() {
  const [form, setForm] = useState(initial);
  const [emailDraftReady, setEmailDraftReady] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = `StrataForge project inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      "",
      "Project details:",
      form.message || "(No project details provided)",
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:strataforge.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailDraftReady(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="diagonal-band absolute -left-16 -top-24 h-[480px] w-[170px] rotate-[-38deg] opacity-80" />
        <div className="diagonal-band absolute left-[18%] -bottom-32 h-[420px] w-[90px] rotate-[-38deg] opacity-70" />
        <div className="diagonal-band absolute -right-10 top-[-40px] h-[360px] w-[140px] rotate-[-38deg] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand" />
              <p className="text-xs font-semibold tracking-[0.22em] text-white/45">
                LET&apos;S WORK TOGETHER
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-[36px] xl:whitespace-nowrap">
              Ready to Build{" "}
              <span className="text-brand">Your Next Project?</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Let&apos;s turn your ideas into a powerful digital solution. Get
              in touch with us today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="#quote-form">
              Get a Free Quote
              <ArrowRight size={16} />
            </Button>
            <Button href="#quote-form" variant="dark">
              Contact Us
            </Button>
          </div>
        </div>

        <form
          id="quote-form"
          onSubmit={onSubmit}
          className="mt-14 grid gap-4 rounded-2xl bg-white/4 p-6 ring-1 ring-white/10 md:grid-cols-2"
        >
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-brand"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email address"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-brand"
          />
          <input
            name="company"
            value={form.company}
            onChange={onChange}
            placeholder="Company (optional)"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-brand"
          />
          <input
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="What do you want to build?"
            className="rounded-xl border-0 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/35 focus:ring-brand"
          />
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <Button type="submit" className="mt-1">
              Send message
              <ArrowRight size={16} />
            </Button>
            {emailDraftReady && (
              <p className="text-sm text-brand">
                Your email app should open with the message addressed to
                strataforge.dev@gmail.com. Review it there and send when ready.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
