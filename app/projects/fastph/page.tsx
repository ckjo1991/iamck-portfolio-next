import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "FastPH Service Flow",
  description:
    "Case study: streamlining the FastPH booking and task-matching flow to reduce drop-offs and uncertainty.",
};

export default function FastPHPage() {
  return (
    <main id="main-content" className="project-page">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "FastPH service flow" },
        ]}
      />
      <section className="project-hero">
        <h1>FastPH service flow</h1>
        <p>
          Streamlining on-demand service booking to reduce drop-offs and speed up
          task matching for users and providers.
        </p>
      </section>

      <section className="project-content">
        <h2>Problem</h2>
        <p>
          Users experienced slow responses and unclear task progress, leading to
          frustration, abandonment, and reduced trust in the service.
        </p>

        <h2>What I did</h2>
        <ul>
          <li>Mapped the end-to-end service request flow</li>
          <li>Identified friction points causing delays and drop-offs</li>
          <li>Redesigned task states and feedback mechanisms</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          The improved flow reduced uncertainty, improved completion rates, and
          made the service feel faster without increasing system complexity.
        </p>
      </section>

      <nav className="project-footer-nav" aria-label="Case study navigation">
        <Link href="/projects/kuryenteph" className="project-switch project-switch--prev">
          <span className="project-switch-arrow" aria-hidden="true">
            ‹
          </span>
          <span className="project-switch-content">
            <span className="project-switch-label">Previous case study</span>
            <span className="project-switch-title">KuryentePH dashboard</span>
          </span>
        </Link>
        <Link href="/projects/angkas" className="project-switch project-switch--next">
          <span className="project-switch-content">
            <span className="project-switch-label">Next case study</span>
            <span className="project-switch-title">Angkas app redesign</span>
          </span>
          <span className="project-switch-arrow" aria-hidden="true">
            ›
          </span>
        </Link>
      </nav>
    </main>
  );
}
