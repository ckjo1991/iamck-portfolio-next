import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import GoogleIcon from "../../components/GoogleIcon";

export const metadata: Metadata = {
  title: "Angkas App Redesign",
  description:
    "Case study: redesigning the Angkas booking flow to improve clarity and reduce failed ride attempts.",
};

export default function AngkasPage() {
  return (
    <main id="main-content" className="project-page">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Angkas app redesign" },
        ]}
      />
      <section className="project-hero">
        <h1>Angkas app redesign</h1>
        <p>
          Improving booking clarity and reducing failed ride attempts through
          flow and UI changes.
        </p>
      </section>

      <section className="project-content">
        <h2>Problem</h2>
        <p>
          Riders experienced confusion and failed bookings due to unclear
          system feedback and friction in the request flow.
        </p>

        <h2>What I did</h2>
        <ul>
          <li>Mapped the end-to-end booking journey</li>
          <li>Identified friction points and failure states</li>
          <li>Redesigned UI feedback and flow logic</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          The redesigned flow improved booking clarity and reduced failed ride
          attempts by addressing uncertainty at key moments.
        </p>
      </section>

      <nav className="project-footer-nav" aria-label="Case study navigation">
        <Link href="/projects/fastph" className="project-switch project-switch--prev">
          <span className="project-switch-arrow" aria-hidden="true">
            <GoogleIcon name="chevron_left" size={18} />
          </span>
          <span className="project-switch-content">
            <span className="project-switch-label">Previous case study</span>
            <span className="project-switch-title">FastPH service flow</span>
          </span>
        </Link>
        <Link href="/projects/kuryenteph" className="project-switch project-switch--next">
          <span className="project-switch-content">
            <span className="project-switch-label">Next case study</span>
            <span className="project-switch-title">KuryentePH dashboard</span>
          </span>
          <span className="project-switch-arrow" aria-hidden="true">
            <GoogleIcon name="chevron_right" size={18} />
          </span>
        </Link>
      </nav>
    </main>
  );
}
