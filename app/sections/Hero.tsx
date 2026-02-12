"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import "../styles/hero.css";
import { useSectionParallax } from "../hooks/useSectionParallax";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const layers = useMemo(
    () => [
      {
        sectionRef,
        bgRef: backgroundRef,
        innerRef,
        bgRange: 16,
        innerRange: 6,
      },
    ],
    []
  );
  useSectionParallax(layers);

  return (
    <section className="hero" ref={sectionRef} aria-labelledby="hero-title">
      <div className="hero-background" ref={backgroundRef} />
      <div className="hero-inner" ref={innerRef}>
        <p className="hero-eyebrow">hi, i’m ck</p>

        <h1 id="hero-title" className="hero-title">
          UX Designer With An Analytics Background
          <br />
          I Turn Messy Workflows Into Clear, Measurable Products.
        </h1>

        <div className="hero-actions">
          <Link href="/projects" className="btn-primary">
            View projects
          </Link>
          <Link href="/about" className="btn-secondary">
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}
