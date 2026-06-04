import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const rows = [
  { icon: Mail, label: "Email", value: "abdurakhmanovtimur472@gmail.com", href: "mailto:abdurakhmanovtimur472@gmail.com" },
  { icon: Phone, label: "Phone", value: "+31 6 16 95 82 82", href: "tel:+31616958282" },
  { icon: Linkedin, label: "LinkedIn", value: "in/tymur-abdurakhmanov", href: "https://www.linkedin.com/in/tymur-abdurakhmanov-129343356/" },
  { icon: Github, label: "GitHub", value: "@diklinuks", href: "https://github.com/diklinuks" },
];

export default function ContactList() {
  return (
    <div className="flex flex-col gap-3">
      {rows.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-[transform,border-color] duration-500 ease-fluid hover:-translate-y-0.5 hover:border-line-strong"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-ink-muted transition-colors group-hover:text-cyan">
            <Icon size={17} strokeWidth={1.5} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-muted">{label}</span>
            <span className="block truncate text-ink">{value}</span>
          </span>
          <ArrowUpRight size={16} strokeWidth={1.5} className="shrink-0 text-ink-muted transition-transform duration-500 ease-fluid group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </a>
      ))}
    </div>
  );
}
