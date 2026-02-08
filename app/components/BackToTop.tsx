"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const handleBackToTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
  };

  useEffect(() => {
    const getTriggerY = () => {
      const hero = document.querySelector(".hero") as HTMLElement | null;
      const header = document.querySelector(".site-header") as HTMLElement | null;
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      if (!hero) return 120;
      return Math.max(120, hero.offsetTop + hero.offsetHeight - headerHeight);
    };

    const onScroll = () => {
      setVisible(window.scrollY >= getTriggerY());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={handleBackToTop}
    >
      ↑ Top
    </button>
  );
}
