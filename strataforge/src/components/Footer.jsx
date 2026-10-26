import Logo from "./Logo";

const groups = [
  {
    title: "Pages",
    links: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#portfolio", label: "Portfolio" },
    ],
  },
  {
    title: "Engage",
    links: [
      { href: "#pricing", label: "Pricing" },
      { href: "#contact", label: "Contact" },
      { href: "#contact", label: "Get a Quote" },
    ],
  },
];

export default function Footer() {
  const onProjectsPage = window.location.pathname.replace(/\/$/, "") === "/projects";
  const homeHref = (href) => (onProjectsPage ? `/${href}` : href);
  return (
    <footer className="border-t border-white/8 bg-[#05070d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo href={homeHref("#home")} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
            Custom software, websites, and systems for businesses that want
            tools built around real work.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/company/strataforge-software-solutions/"
              target="_blank"
              rel="noreferrer"
              aria-label="StrataForge on LinkedIn"
              title="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM8.1 18.5H5.15V9h2.96v9.5ZM6.63 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.5 18.5h-2.95v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.27V9h2.83v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56v5.18Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61595916267653"
              target="_blank"
              rel="noreferrer"
              aria-label="StrataForge on Facebook"
              title="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.4 3.05 15.31 3 14.04 3c-2.66 0-4.48 1.62-4.48 4.6v2H6.75v3.2h2.81V21h3.84Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/strataforge.dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="StrataForge on Instagram"
              title="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[#e1306c] hover:bg-[#e1306c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/40">
              {group.title.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={homeHref(link.href)}
                    className="text-sm text-white/65 transition hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/8 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} StrataForge Software Solutions. All rights
        reserved.
      </div>
    </footer>
  );
}
