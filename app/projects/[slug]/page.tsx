import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import GoogleIcon from "../../components/GoogleIcon";
import {
  projects,
  getProjectBySlug,
  getPrevNextProjects,
  type ProjectSlug,
} from "../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getPrevNextProjects(project.slug as ProjectSlug);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title },
  ];

  return (
    <main id="main-content" className="project-page">
      <Breadcrumbs items={breadcrumbs} />
      <section className="project-hero">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </section>

      <section className="project-content">
        <h2>Problem</h2>
        <p>{project.problemDetail}</p>

        <h2>What I did</h2>
        <ul>
          {project.approachItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>Outcome</h2>
        <p>{project.outcomeDetail}</p>
      </section>

      <nav className="project-footer-nav" aria-label="Case study navigation">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="project-switch project-switch--prev"
          >
            <span className="project-switch-arrow" aria-hidden="true">
              <GoogleIcon name="chevron_left" size={18} />
            </span>
            <span className="project-switch-content">
              <span className="project-switch-label">Previous case study</span>
              <span className="project-switch-title">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="project-switch project-switch--next"
          >
            <span className="project-switch-content">
              <span className="project-switch-label">Next case study</span>
              <span className="project-switch-title">{next.title}</span>
            </span>
            <span className="project-switch-arrow" aria-hidden="true">
              <GoogleIcon name="chevron_right" size={18} />
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
