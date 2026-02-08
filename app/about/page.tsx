import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about CK's UX approach: framing messy problems, designing for clarity, and validating with data-informed decisions.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-page">
        <div className="about-container">
          <h1 className="about-title">About</h1>

          <p className="about-lead">
            UX designer with a background in analytics and operations. I focus on
            turning complex systems into clear, usable experiences.
          </p>

          <ul className="about-list">
            <li>Bridges user needs, business constraints, and technical reality</li>
            <li>Designs for clarity, not trends</li>
            <li>Optimizes for real world use, not just polish</li>
          </ul>

          <h2 className="about-section-title">How I work</h2>

          <ul className="about-list">
            <li>Start with problem framing and constraints</li>
            <li>Explore through wireframes and prototypes</li>
            <li>Use data when helpful, not as a crutch</li>
            <li>Make decisions visible and discussable</li>
          </ul>

          <h2 className="about-section-title">What I optimize for</h2>

          <ul className="about-list">
            <li>Clear problems over vague goals</li>
            <li>Simple solutions that scale</li>
            <li>Outcomes that actually ship</li>
          </ul>

          <p className="about-footer">
            Want to see this in action?{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <Link href="/#projects">Explore my projects</Link> or{" "}
              <Link href="/#contact">get in touch</Link>.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
