import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCard from "../components/ProjectCard";
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
          Featured UX case studies from transport, utilities, and service workflows.
        </p>
        <p className="projects-page-count">
          {projects.length} project{projects.length > 1 ? "s" : ""}
        </p>
      </section>

      <ul className="projects-page-grid">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} variant="index" />
          </li>
        ))}
      </ul>
    </main>
  );
}
