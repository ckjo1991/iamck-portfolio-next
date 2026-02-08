"use client";

import { useEffect, useState } from "react";
import GoogleIcon from "./GoogleIcon";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleBackToTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
  };

  useEffect(() => {
    let unmountTimer: number | undefined;

    const getTriggerY = () => {
      const hero = document.querySelector(".hero") as HTMLElement | null;
      const header = document.querySelector(".site-header") as HTMLElement | null;
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      if (!hero) return 120;
      return Math.max(120, hero.offsetTop + hero.offsetHeight - headerHeight);
    };

    const onScroll = () => {
      const shouldShow = window.scrollY >= getTriggerY();
      setVisible(shouldShow);

      if (shouldShow) {
        setMounted(true);
        if (unmountTimer) window.clearTimeout(unmountTimer);
      } else {
        // Let the exit transition finish before removing it from the DOM.
        if (unmountTimer) window.clearTimeout(unmountTimer);
        unmountTimer = window.setTimeout(() => setMounted(false), 260);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (unmountTimer) window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      tabIndex={visible ? 0 : -1}
      onClick={handleBackToTop}
    >
      <span className="back-to-top-icon" aria-hidden="true">
        <GoogleIcon name="arrow_upward" size={18} />
      </span>
      <span className="back-to-top-label" aria-hidden="true">Top</span>
      <span className="sr-only">Back to top</span>
    </button>
  );
}
