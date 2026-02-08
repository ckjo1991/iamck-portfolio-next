import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KuryentePH Dashboard",
  description:
    "Case study: improving energy-use comprehension in KuryentePH through clearer breakdowns, trends, and context.",
};

export default function KuryentePHPage() {
  return (
    <main id="main-content" className="project-page">
      <section className="project-hero">
        <h1>KuryentePH dashboard</h1>
        <p>
          Helping households understand electricity consumption through clearer
          breakdowns, trends, and actionable insights.
        </p>
      </section>

      <section className="project-content">
        <h2>Problem</h2>
        <p>
          Users struggled to interpret their electricity usage due to fragmented
          data, unclear metrics, and a lack of actionable context.
        </p>

        <h2>What I did</h2>
        <ul>
          <li>Reviewed existing consumption and billing views</li>
          <li>Identified gaps in clarity and mental model mismatches</li>
          <li>Proposed clearer breakdowns and time-based comparisons</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          The redesigned dashboard made energy usage easier to understand,
          helping users make more informed decisions about their consumption.
        </p>
      </section>

      <nav className="project-footer-nav" aria-label="Case study navigation">
        <Link href="/projects" className="project-nav-link project-nav-link--secondary">
          ← Back to all projects
        </Link>
        <Link href="/projects/fastph" className="project-nav-link project-nav-link--primary">
          Next case study: FastPH service flow →
        </Link>
      </nav>
    </main>
  );
}
