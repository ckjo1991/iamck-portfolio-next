"use client";

import { useMemo, useRef } from "react";
import Hero from "./sections/Hero";
import Link from "next/link";
import GoogleIcon from "./components/GoogleIcon";
import { projects } from "./data/projects";
import { useSectionParallax } from "./hooks/useSectionParallax";

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

  const parallaxLayers = useMemo(
    () => [
      { sectionRef: projectsSectionRef, bgRef: projectsBgRef, innerRef: projectsInnerRef, bgRange: 12, innerRange: 4 },
      { sectionRef: aboutSectionRef, bgRef: aboutBgRef, innerRef: aboutInnerRef, bgRange: 10, innerRange: -3 },
      { sectionRef: contactSectionRef, bgRef: contactBgRef, innerRef: contactInnerRef, bgRange: 10, innerRange: 4 },
    ],
    []
  );
  useSectionParallax(parallaxLayers);

  return (
    <main id="main-content">
      <Hero />

      <section id="projects" className="projects-preview" ref={projectsSectionRef} aria-labelledby="projects-heading">
        <div className="projects-bg" ref={projectsBgRef} />
        <div className="projects-inner" ref={projectsInnerRef}>
          <h2 id="projects-heading" className="projects-title">Selected projects</h2>

          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.slug}>
                <article className="project-item" data-project={project.slug}>
                  <span className="project-default-title" aria-hidden="true">
                    {project.title}
                  </span>
                  <div className="project-overlay">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <Link href={`/projects/${project.slug}`} className="project-cta">
                      View full case study <GoogleIcon name="arrow_forward" size={16} />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="projects-actions">
            <Link href="/projects" className="projects-page-cta">
              Explore all projects
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-preview" ref={aboutSectionRef} aria-labelledby="about-heading">
        <div className="about-bg" ref={aboutBgRef} />
        <div className="about-inner" ref={aboutInnerRef}>
          <h2 id="about-heading" className="about-title">About me</h2>

          <p className="about-copy">
            I work on messy, real world problems and turn them into clear,
            usable systems. My analytics background helps me measure what works
            and design with evidence, not guesswork.
          </p>

          <div className="about-actions">
            <Link href="/about" className="about-cta about-cta-primary">
              Read my story
              <span className="about-cta-icon" aria-hidden="true">
                <GoogleIcon name="arrow_forward" size={18} />
              </span>
            </Link>
            <Link href="/resume" className="about-cta about-cta-tertiary">
              My resume
              <span className="about-cta-icon" aria-hidden="true">
                <GoogleIcon name="arrow_forward" size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-preview" ref={contactSectionRef} aria-labelledby="contact-heading">
        <div className="contact-bg" ref={contactBgRef} />
        <div className="contact-inner" ref={contactInnerRef}>
          <h2 id="contact-heading" className="contact-title">Get in touch</h2>

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
