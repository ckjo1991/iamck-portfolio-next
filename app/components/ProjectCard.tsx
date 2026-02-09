import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "./GoogleIcon";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "home" | "index";
};

export default function ProjectCard({ project, variant = "home" }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  const unoptimized = project.thumbnail.endsWith(".svg");

  return (
    <article className={`project-card project-card--${variant}`} data-project={project.slug}>
      <Link href={href} className="project-card-link" aria-label={`View case study: ${project.title}`}>
        <div className="project-card-media" aria-hidden="true">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            unoptimized={unoptimized}
            sizes={variant === "home" ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 1024px) 100vw, 50vw"}
            className="project-card-image"
          />
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-summary">{project.oneLiner}</p>

          <dl className="project-card-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{project.focus.join(" · ")}</dd>
            </div>
          </dl>

          {variant === "index" ? (
            <p className="project-card-proof">
              <span className="project-card-proof-label">Outcome:</span> {project.outcome}
            </p>
          ) : null}

          <span className="project-card-cta">
            View full case study <GoogleIcon name="arrow_forward" size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
