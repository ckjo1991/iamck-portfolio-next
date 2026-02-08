"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const sectionHref = (id: "projects" | "about" | "contact") => (
    pathname === "/" ? `#${id}` : `/#${id}`
  );

  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <span className="nav-brand-icon" aria-hidden="true">
            <Image src="/ck.svg" alt="" width={39} height={39} priority />
          </span>
          <span className="nav-brand-text">I.AM.CK</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary navigation"
          className={`nav-drawer ${open ? "is-open" : ""}`}
        >
          <ul className="nav-list">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={sectionHref("projects")} onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href={sectionHref("about")} onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href={sectionHref("contact")} onClick={() => setOpen(false)}>
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
