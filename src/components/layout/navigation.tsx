"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/ui/arrow";
import { ButtonLink } from "@/components/ui/button-link";

type NavigationItem = { readonly href: string; readonly label: string };

export function SiteNavigation({
  items,
  resultsUrl,
}: {
  items: readonly NavigationItem[];
  resultsUrl: string;
}) {
  const pathname = usePathname();
  return (
    <>
      <nav
        aria-label="Navegación principal"
        className="hidden items-center gap-7 lg:ml-6 lg:flex"
      >
        {items.map((item) => {
          const current = pathname === item.href;
          const parent =
            item.href !== "/" && pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={current ? "page" : parent ? "true" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <ButtonLink href={resultsUrl} className="header-results">
        Portal de resultados
      </ButtonLink>
      <MobileMenu
        key={pathname}
        pathname={pathname}
        items={items}
        resultsUrl={resultsUrl}
      />
    </>
  );
}

function MobileMenu({
  items,
  resultsUrl,
  pathname,
}: {
  items: readonly NavigationItem[];
  resultsUrl: string;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 64rem)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }
    document.addEventListener("pointerdown", dismiss);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="mobile-navigation lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="menu-trigger"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs font-medium">{open ? "Cerrar" : "Menú"}</span>
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d={open ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <nav
        id="mobile-menu"
        hidden={!open}
        aria-label="Navegación móvil"
        className="mobile-menu"
      >
        <p className="eyebrow mobile-menu-label">Explora CLIMON</p>
        {items.map((item, index) => {
          const current = pathname === item.href;
          const parent =
            item.href !== "/" && pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : parent ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-link-label">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </span>
              <Arrow diagonal />
            </Link>
          );
        })}
        <Link
          href={resultsUrl}
          className="mobile-results"
          onClick={() => setOpen(false)}
        >
          Portal de resultados
          <Arrow />
        </Link>
      </nav>
    </div>
  );
}
