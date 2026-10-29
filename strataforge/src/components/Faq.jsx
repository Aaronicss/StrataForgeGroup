import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "How do you make a custom web application more secure?",
    answer:
      "We consider threats and data flows during planning, then make risk-based choices for authentication, authorization, input validation, APIs, dependencies, and deployment. The right controls depend on the application. No process can guarantee zero risk.",
  },
  {
    question: "What are the benefits of a cybersecurity-focused software collective?",
    answer:
      "You work directly with the people making technical decisions. A lean team means fewer handoffs and fewer people need access to project details and code, while security stays part of everyday development conversations.",
  },
  {
    question: "Do you offer secure MVP development for startups?",
    answer:
      "Yes. We can scope a focused first release and plan its key data, user, and API boundaries early, so important security decisions are included without overbuilding features you do not yet need.",
  },
  {
    question: "Can you help with data protection or compliance requirements?",
    answer:
      "We can discuss technical controls that support your stated requirements, such as access controls, encryption choices, and data handling. We do not provide legal advice or compliance certification; involve your privacy or compliance adviser for formal interpretation and validation.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">QUESTIONS, ANSWERED</p>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy lg:text-4xl">
            Secure software development FAQs
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 sm:px-8">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown className="shrink-0 text-brand transition-transform group-open:rotate-180" size={20} />
              </summary>
              <p className="max-w-3xl pr-8 pt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
