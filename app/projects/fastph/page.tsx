import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FastPH Service Flow",
  description:
    "Case study: streamlining the FastPH booking and task-matching flow to reduce drop-offs and uncertainty.",
};

export default function FastPHPage() {
  return (
    <main id="main-content" className="project-page">
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
        <Link href="/projects" className="project-nav-link project-nav-link--secondary">
          ← Back to all projects
        </Link>
        <Link href="/projects/angkas" className="project-nav-link project-nav-link--primary">
          Next case study: Angkas app redesign →
        </Link>
      </nav>
    </main>
  );
}
