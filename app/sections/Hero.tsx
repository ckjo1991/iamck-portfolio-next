"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "../styles/hero.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = "none";
      }
      if (innerRef.current) {
        innerRef.current.style.transform = "none";
      }
      return;
    }

    let rafId = 0;
    let ticking = false;

    const clamp = (value: number, min: number, max: number) => (
      Math.min(max, Math.max(min, value))
    );

    const getSectionOffset = (section: HTMLElement | null, range: number) => {
      if (!section) return 0;

      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const distance = sectionCenter - viewportCenter;
      const maxDistance = (window.innerHeight + rect.height) / 2;

      if (!maxDistance) return 0;

      const normalized = clamp(distance / maxDistance, -1, 1);
      return -normalized * range;
    };

    const applyTransforms = () => {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${getSectionOffset(sectionRef.current, 16)}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(${getSectionOffset(sectionRef.current, 6)}px)`;
      }
    };

    const requestTransformUpdate = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(() => {
        applyTransforms();
        ticking = false;
      });
    };

    window.addEventListener("scroll", requestTransformUpdate, { passive: true });
    window.addEventListener("resize", requestTransformUpdate);
    requestTransformUpdate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestTransformUpdate);
      window.removeEventListener("resize", requestTransformUpdate);
    };
  }, []);
  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-background" ref={backgroundRef} />
      <div className="hero-inner" ref={innerRef}>
        <p className="hero-eyebrow">Junior UX Designer (Generalist)</p>
        <h1 className="hero-title">CK Obcena</h1>
        <p className="hero-description">
          I turn messy workflows into clear, measurable product experiences. I focus on
          service flows, dashboard UX, and lightweight design systems.
        </p>

        <div className="hero-actions">
          <Link href="#projects" className="btn-primary">
            View case studies
          </Link>
          <Link href="/resume" className="btn-secondary">
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
