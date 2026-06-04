
export default function ColorLine({ color }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-24 overflow-hidden" aria-hidden>
      {/* the steady colored line + glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: color, boxShadow: `0 0 26px 2px ${color}, 0 0 6px 0 ${color}` }}
      />
      {/* a white highlight travelling along it */}
      <div
        className="cl-travel absolute bottom-0 h-px w-1/4"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
      />
    </div>
  );
}
