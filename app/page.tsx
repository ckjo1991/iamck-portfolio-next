"use client";

import { useEffect, useRef } from "react";
import Hero from "./sections/Hero";
import Link from "next/link";

export default function Page() {
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const projectsBgRef = useRef<HTMLDivElement | null>(null);
  const projectsInnerRef = useRef<HTMLDivElement | null>(null);

  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const aboutBgRef = useRef<HTMLDivElement | null>(null);
  const aboutInnerRef = useRef<HTMLDivElement | null>(null);

  const contactSectionRef = useRef<HTMLElement | null>(null);
  const contactBgRef = useRef<HTMLDivElement | null>(null);
  const contactInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (projectsBgRef.current) projectsBgRef.current.style.transform = "none";
      if (projectsInnerRef.current) projectsInnerRef.current.style.transform = "none";
      if (aboutBgRef.current) aboutBgRef.current.style.transform = "none";
      if (aboutInnerRef.current) aboutInnerRef.current.style.transform = "none";
      if (contactBgRef.current) contactBgRef.current.style.transform = "none";
      if (contactInnerRef.current) contactInnerRef.current.style.transform = "none";
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
      if (projectsBgRef.current) {
        projectsBgRef.current.style.transform = `translateY(${getSectionOffset(projectsSectionRef.current, 12)}px)`;
      }
      if (projectsInnerRef.current) {
        projectsInnerRef.current.style.transform = `translateY(${getSectionOffset(projectsSectionRef.current, 4)}px)`;
      }

      if (aboutBgRef.current) {
        aboutBgRef.current.style.transform = `translateY(${getSectionOffset(aboutSectionRef.current, 10)}px)`;
      }
      if (aboutInnerRef.current) {
        aboutInnerRef.current.style.transform = `translateY(${getSectionOffset(aboutSectionRef.current, -3)}px)`;
      }

      if (contactBgRef.current) {
        contactBgRef.current.style.transform = `translateY(${getSectionOffset(contactSectionRef.current, 10)}px)`;
      }
      if (contactInnerRef.current) {
        contactInnerRef.current.style.transform = `translateY(${getSectionOffset(contactSectionRef.current, 4)}px)`;
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
    <main id="main-content">
      <Hero />

      <section id="projects" className="projects-preview" ref={projectsSectionRef}>
        <div className="projects-bg" ref={projectsBgRef} />
        <div className="projects-inner" ref={projectsInnerRef}>
          <h2 className="projects-title">Selected projects</h2>

          <ul className="projects-list">
            <li>
              <article className="project-item">
                <span className="project-default-title" aria-hidden="true">
                  Angkas app redesign
                </span>
                <div className="project-overlay">
                  <h3 className="project-name">Angkas app redesign</h3>
                  <p className="project-summary">
                    Improving booking clarity and reducing failed ride attempts
                    through flow and UI changes.
                  </p>
                  <Link href="/projects/angkas" className="project-cta">
                    View full case study →
                  </Link>
                </div>
              </article>
            </li>

            <li>
              <article className="project-item">
                <span className="project-default-title" aria-hidden="true">
                  KuryentePH dashboard
                </span>
                <div className="project-overlay">
                  <h3 className="project-name">KuryentePH dashboard</h3>
                  <p className="project-summary">
                    Helping households understand daily energy use with clearer
                    breakdowns and trends.
                  </p>
                  <Link href="/projects/kuryenteph" className="project-cta">
                    View full case study →
                  </Link>
                </div>
              </article>
            </li>

            <li>
              <article className="project-item">
                <span className="project-default-title" aria-hidden="true">
                  FastPH service flow
                </span>
                <div className="project-overlay">
                  <h3 className="project-name">FastPH service flow</h3>
                  <p className="project-summary">
                    Redesigning task matching to reduce drop-offs for both
                    customers and workers.
                  </p>
                  <Link href="/projects/fastph" className="project-cta">
                    View full case study →
                  </Link>
                </div>
              </article>
            </li>
          </ul>

          <div className="projects-actions">
            <Link href="/projects" className="projects-page-cta">
              Explore all projects
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-preview" ref={aboutSectionRef}>
        <div className="about-bg" ref={aboutBgRef} />
        <div className="about-inner" ref={aboutInnerRef}>
          <h2 className="about-title">About me</h2>

          <p className="about-copy">
            I work on messy, real world problems and turn them into clear,
            usable systems. My analytics background helps me measure what works
            and design with evidence, not guesswork.
          </p>

          <div className="about-actions">
            <Link href="/about" className="about-cta about-cta-primary">
              Read my story
              <span className="about-cta-icon" aria-hidden="true">→</span>
            </Link>
            <Link href="/resume" className="about-cta about-cta-tertiary">
              My resume
              <span className="about-cta-icon" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-preview" ref={contactSectionRef}>
        <div className="contact-bg" ref={contactBgRef} />
        <div className="contact-inner" ref={contactInnerRef}>
          <h2 className="contact-title">Get in touch</h2>

          <p className="contact-copy">
            If you want to talk about a project, collaboration, or just compare
            notes on UX and product thinking, feel free to reach out.
          </p>

          <a href="mailto:ckjobcena@gmail.com" className="cta-primary contact-cta-primary">
            Let&apos;s work together
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/ckjobcena/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              LinkedIn <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="https://dribbble.com/CKJObcena"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              Dribbble <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="https://www.instagram.com/ckobcena/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-btn"
            >
              Instagram <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
