import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  id,
}: {
  eyebrow: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {children}
      </h2>
    </div>
  );
}
