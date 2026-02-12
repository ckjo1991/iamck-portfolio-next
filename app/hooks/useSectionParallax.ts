"use client";

import { useEffect, useRef } from "react";

export type ParallaxLayer = {
  sectionRef: React.RefObject<HTMLElement | null>;
  bgRef?: React.RefObject<HTMLDivElement | null>;
  innerRef?: React.RefObject<HTMLDivElement | null>;
  bgRange?: number;
  innerRange?: number;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function getSectionOffset(section: HTMLElement | null, range: number): number {
  if (!section) return 0;
  const rect = section.getBoundingClientRect();
  const viewportCenter = window.innerHeight / 2;
  const sectionCenter = rect.top + rect.height / 2;
  const distance = sectionCenter - viewportCenter;
  const maxDistance = (window.innerHeight + rect.height) / 2;
  if (!maxDistance) return 0;
  const normalized = clamp(distance / maxDistance, -1, 1);
  return -normalized * range;
}

/**
 * Shared scroll-based parallax for section backgrounds and inner content.
 * Respects prefers-reduced-motion (no transforms applied when set).
 * Pass a stable layers array (e.g. from useMemo with refs and ranges).
 */
export function useSectionParallax(layers: ParallaxLayer[]) {
  const rafIdRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      layers.forEach(({ bgRef, innerRef }) => {
        if (bgRef?.current) bgRef.current.style.transform = "none";
        if (innerRef?.current) innerRef.current.style.transform = "none";
      });
      return;
    }

    const applyTransforms = () => {
      layers.forEach(({ sectionRef, bgRef, innerRef, bgRange = 0, innerRange = 0 }) => {
        const section = sectionRef.current;
        if (bgRef?.current && bgRange !== 0) {
          bgRef.current.style.transform = `translateY(${getSectionOffset(section, bgRange)}px)`;
        }
        if (innerRef?.current && innerRange !== 0) {
          innerRef.current.style.transform = `translateY(${getSectionOffset(section, innerRange)}px)`;
        }
      });
    };

    const requestUpdate = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafIdRef.current = window.requestAnimationFrame(() => {
        applyTransforms();
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [layers]);
}
