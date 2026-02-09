"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(query);
      const handler = () => onStoreChange();
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobileQuery = useMemo(() => "(max-width: 768px)", []);
  const isMobile = useMediaQuery(isMobileQuery);
  const [drawerMounted, setDrawerMounted] = useState(true);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const unmountTimerRef = useRef<number | null>(null);

  const sectionHref = (id: "contact") => (
    pathname === "/" ? `#${id}` : `/#${id}`
  );

  const closeMenu = useCallback(() => {
    setOpen(false);
    if (unmountTimerRef.current) {
      window.clearTimeout(unmountTimerRef.current);
      unmountTimerRef.current = null;
    }
    if (isMobile) {
      // Allow fade-out transition before unmounting the drawer to keep animations.
      unmountTimerRef.current = window.setTimeout(() => {
        setDrawerMounted(false);
        unmountTimerRef.current = null;
      }, 260);
    }
    // Return focus to the toggle for keyboard users.
    window.requestAnimationFrame(() => toggleRef.current?.focus());
  }, [isMobile]);

  const openMenu = useCallback(() => {
    if (unmountTimerRef.current) {
      window.clearTimeout(unmountTimerRef.current);
      unmountTimerRef.current = null;
    }
    // Mount first so we can animate the drawer in (hidden -> visible).
    setDrawerMounted(true);
    window.requestAnimationFrame(() => {
      setOpen(true);
      // Move focus into the menu when it opens (helps automated checks + keyboard users).
      window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    });
  }, []);

  useEffect(() => {
    if (open && isMobile) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    return () => document.body.classList.remove("nav-open");
  }, [open, isMobile]);

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
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="Home">
          <span className="nav-brand-icon" aria-hidden="true">
            <Image src="/ck.svg" alt="" width={39} height={39} priority />
          </span>
          <span className="nav-brand-text">I.AM.CK</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          ref={toggleRef}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => {
            if (open) closeMenu();
            else openMenu();
          }}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary navigation"
          className={`nav-drawer ${open ? "is-open" : ""}`}
          hidden={isMobile && !drawerMounted}
          // Prevent accidental focus when the drawer is mounted but closed.
          inert={isMobile && !open ? true : undefined}
        >
          <ul className="nav-list">
            <li className="nav-item-home">
              <Link
                href="/"
                ref={firstLinkRef}
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={() => closeMenu()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                aria-current={pathname === "/projects" ? "page" : undefined}
                onClick={() => closeMenu()}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-current={pathname === "/about" ? "page" : undefined}
                onClick={() => closeMenu()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={sectionHref("contact")}
                className="nav-cta"
                onClick={() => closeMenu()}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>

        {isMobile && open ? (
          <button
            type="button"
            className="nav-overlay"
            aria-label="Close navigation"
            onClick={() => closeMenu()}
          />
        ) : null}
      </div>
    </header>
  );
}
