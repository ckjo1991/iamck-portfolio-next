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
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const height = document.documentElement.scrollHeight || document.body.scrollHeight;
      setVisible(scrolled >= height - 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={handleBackToTop}
    >
      Back to top
    </button>
  );
}
