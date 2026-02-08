import Link from "next/link";

export default function AngkasPage() {
  return (
    <main id="main-content" className="project-page">
      <Link href="/#projects" className="back-link">
        ← Back to projects
      </Link>

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
    </main>
  );
}