import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import GoogleIcon from "../components/GoogleIcon";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project overview of UX case studies by CK, including Angkas, KuryentePH, and FastPH with links to full case studies.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="projects-page">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
      <section className="projects-page-hero">
        <h1>Projects</h1>
        <p>
          Selected UX case studies from transport, utilities, and service workflows.
        </p>
        <p className="projects-page-count">
          {projects.length} project{projects.length > 1 ? "s" : ""}
        </p>
      </section>

      <div className="projects-page-list">
        {projects.map((project) => (
          <section
            key={project.slug}
            className="project-overview"
            aria-labelledby={`project-${project.slug}`}
            data-project={project.slug}
          >
            <h2 id={`project-${project.slug}`}>{project.title}</h2>
            <p className="project-overview-summary">{project.summary}</p>

            <div className="project-overview-details">
              <div>
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3>Approach</h3>
                <p>{project.approach}</p>
              </div>
              <div>
                <h3>Outcome</h3>
                <p>{project.outcome}</p>
              </div>
            </div>

            <Link href={`/projects/${project.slug}`} className="project-overview-cta">
              View full case study <GoogleIcon name="arrow_forward" size={18} />
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
