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
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const contactBgRef = useRef<HTMLDivElement | null>(null);
  const contactInnerRef = useRef<HTMLDivElement | null>(null);

  const parallaxLayers = useMemo(
    () => [
      { sectionRef: projectsSectionRef, bgRef: projectsBgRef, innerRef: projectsInnerRef, bgRange: 12, innerRange: 4 },
      { sectionRef: contactSectionRef, bgRef: contactBgRef, innerRef: contactInnerRef, bgRange: 10, innerRange: 4 },
    ],
    []
  );
  useSectionParallax(parallaxLayers);

  return (
    <main id="main-content">
      <Hero />
      {/* Gradient Spacer for visual transition */}
      <div className="h-32 bg-gradient-to-b from-[#0b0b0b] to-[var(--background)]" />

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

      {/* About preview removed from homepage to keep full About page at /about */}

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
