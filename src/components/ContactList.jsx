import { Mail, Linkedin, Github } from "lucide-react";

const rows = [
  { icon: Mail, label: "Email", value: "abdurakhmanovtimur472@gmail.com", href: "mailto:abdurakhmanovtimur472@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/diklinuks", href: "https://www.linkedin.com/in/diklinuks/" },
  { icon: Github, label: "GitHub", value: "@diklinuks", href: "https://github.com/diklinuks" },
];

export default function ContactList() {
  return (
    <div className="border-t border-line">
      {rows.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="cursor-grow group grid grid-cols-[1.5rem_5rem_1fr] items-center gap-3 border-b border-line px-2 py-4 text-ink transition-[background-color,padding] hover:bg-elevated hover:pl-4 md:grid-cols-[1.5rem_6rem_1fr]"
        >
          <Icon size={16} className="text-ink-muted" />
          <span className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-muted">{label}</span>
          <span className="truncate font-mono text-[0.88rem] text-ink group-hover:grad-text">{value}</span>
        </a>
      ))}
    </div>
  );
}
