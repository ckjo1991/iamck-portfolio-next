import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import GoogleIcon from "../components/GoogleIcon";

type ProjectOverview = {
  slug: "angkas" | "kuryenteph" | "fastph";
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
};

const projectOverviews: ProjectOverview[] = [
  {
    slug: "angkas",
    title: "Angkas app redesign",
    summary:
      "Improving booking clarity and reducing failed ride attempts through flow and UI changes.",
    problem:
      "Riders hit friction and uncertainty in the request flow, which caused confusion and failed bookings.",
    approach:
      "Mapped the booking journey, identified failure states, and redesigned key screens and feedback moments.",
    outcome:
      "The updated experience reduced uncertainty and improved completion across key booking steps.",
  },
  {
    slug: "kuryenteph",
    title: "KuryentePH dashboard",
    summary:
      "Helping households understand electricity consumption through clearer breakdowns, trends, and insights.",
    problem:
      "Users could not easily interpret usage due to fragmented information and unclear metric labeling.",
    approach:
      "Restructured data views with clearer hierarchy, comparisons, and practical context for everyday decisions.",
    outcome:
      "Users could read their energy patterns faster and make better-informed consumption choices.",
  },
  {
    slug: "fastph",
    title: "FastPH service flow",
    summary:
      "Streamlining service booking to reduce drop-offs and improve confidence for users and providers.",
    problem:
      "Slow responses and unclear task states led to abandonment and lower trust in the service process.",
    approach:
      "Mapped end-to-end flow, removed friction points, and redesigned status communication for key handoffs.",
    outcome:
      "The revised flow improved completion and made progress feel faster without adding complexity.",
  },
];

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
          {projectOverviews.length} project{projectOverviews.length > 1 ? "s" : ""}
        </p>
      </section>

      <div className="projects-page-list">
        {projectOverviews.map((project) => (
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
