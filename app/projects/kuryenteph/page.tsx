import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import GoogleIcon from "../../components/GoogleIcon";

export const metadata: Metadata = {
  title: "KuryentePH Dashboard",
  description:
    "Case study: improving energy-use comprehension in KuryentePH through clearer breakdowns, trends, and context.",
};

export default function KuryentePHPage() {
  return (
    <main id="main-content" className="project-page">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "KuryentePH dashboard" },
        ]}
      />
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
        <Link href="/projects/angkas" className="project-switch project-switch--prev">
          <span className="project-switch-arrow" aria-hidden="true">
            <GoogleIcon name="chevron_left" size={18} />
          </span>
          <span className="project-switch-content">
            <span className="project-switch-label">Previous case study</span>
            <span className="project-switch-title">Angkas app redesign</span>
          </span>
        </Link>
        <Link href="/projects/fastph" className="project-switch project-switch--next">
          <span className="project-switch-content">
            <span className="project-switch-label">Next case study</span>
            <span className="project-switch-title">FastPH service flow</span>
          </span>
          <span className="project-switch-arrow" aria-hidden="true">
            <GoogleIcon name="chevron_right" size={18} />
          </span>
        </Link>
      </nav>
    </main>
  );
}
