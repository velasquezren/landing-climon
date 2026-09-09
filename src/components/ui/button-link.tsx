import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./arrow";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "text";
  className?: string;
}) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
