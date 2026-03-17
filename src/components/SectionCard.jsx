export default function SectionCard({ title, subtitle, actions, children }) {
  return (
    <div className="card space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="section-title">{title}</p>
          {subtitle && <p className="text-sm text-steel mt-1">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}