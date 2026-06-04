import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";


export default function MagneticButton({
  to,
  href,
  onClick,
  children,
  icon: Icon = ArrowUpRight,
  variant = "primary",
  className = "",
  ...rest
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) / 6}px, ${(e.clientY - r.top - r.height / 2) / 6}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };

  const base =
    "group relative inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2 text-sm font-medium will-change-transform transition-[transform,background-color,color,border-color] duration-500 ease-fluid active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-ink text-bg border border-transparent hover:bg-transparent hover:text-ink hover:border-line-strong"
      : "border border-line-strong bg-white/[0.03] text-ink hover:border-ink";
  const chip = variant === "primary" ? "bg-black/10 group-hover:bg-white/10" : "bg-white/10";
  const iconColor = variant === "primary" ? "text-bg group-hover:text-ink" : "text-ink";

  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`grid h-8 w-8 place-items-center rounded-full ${chip} transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105`}
      >
        <Icon size={15} strokeWidth={1.5} className={iconColor} />
      </span>
    </>
  );

  const cls = `${base} ${styles} ${className}`;
  const handlers = { ref, onMouseMove: onMove, onMouseLeave: reset };

  if (to) return <Link to={to} className={cls} onClick={onClick} {...handlers} {...rest}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...handlers} {...rest}>{inner}</a>;
  return <button type="button" onClick={onClick} className={cls} {...handlers} {...rest}>{inner}</button>;
}
