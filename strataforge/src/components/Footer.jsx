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
  return (
    <footer className="border-t border-white/8 bg-[#05070d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
            Custom software, websites, and systems for businesses that want
            tools built around real work.
          </p>
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
                    href={link.href}
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
