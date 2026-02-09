import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import ExperiencePagination from "./ExperiencePagination";
import GoogleIcon from "../components/GoogleIcon";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Online resume of Ces Karlo Jose Obcena.",
};

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resume" }]} />

      <section className="resume-shell" aria-labelledby="resume-title">
        <header className="resume-hero">
          <div className="resume-title-row">
            <h1 id="resume-title" className="resume-name">Ces Karlo Jose Obcena</h1>
            <a
              href="/Ces-Obcena-2025.pdf"
              download="Ces Obcena 2025.pdf"
              className="resume-inline-cta resume-inline-download"
              aria-label="Download resume"
              title="Download resume"
              data-tooltip="Download resume"
            >
              <GoogleIcon name="download" size={18} />
              <span className="sr-only">Download resume</span>
            </a>
          </div>
          <p className="resume-role">Junior UX Designer</p>
          <ul className="resume-contact-list">
            <li>
              <a href="tel:+639266305280">+63 926 6305280</a>
            </li>
            <li>
              <a href="mailto:ckjobcena@gmail.com">ckjobcena@gmail.com</a>
            </li>
            <li>Cubao, Quezon City</li>
          </ul>
        </header>

        <section className="resume-section" aria-labelledby="resume-about">
          <h2 id="resume-about">About me</h2>
          <p className="resume-intro">
            Confident and results-driven professional with 5+ years in customer
            service and workforce management, with a strong focus on real-time
            analysis in call centers. Now eager to channel my data insights into
            UI/UX design, combining a people-first approach with data-driven design
            decisions. Ready to bring a unique perspective to creating seamless,
            user-centered experiences.
          </p>
        </section>

        <section className="resume-section" aria-labelledby="resume-education">
          <h2 id="resume-education">Education</h2>
          <div className="resume-entries">
            <article className="resume-entry">
              <h3>UI/UX Designs Essential</h3>
              <p className="resume-meta">CIIT College of Arts and Technology</p>
              <p className="resume-meta">Specialist</p>
              <p className="resume-meta">Aug 2024 - Oct 2024</p>
            </article>
            <article className="resume-entry">
              <h3>BS Information Technology</h3>
              <p className="resume-meta">University of the East</p>
              <p className="resume-meta">Undergraduate</p>
              <p className="resume-meta">2007 - 2009</p>
            </article>
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-experience">
          <h2 id="resume-experience">Experience</h2>
          <ExperiencePagination />
        </section>

        <section className="resume-section" aria-labelledby="resume-skills">
          <h2 id="resume-skills">Skills</h2>
          <ul className="resume-skills-chips">
            <li className="resume-skill-chip">Real-Time Analysis for Decision-Making</li>
            <li className="resume-skill-chip">Data Management and Accuracy</li>
            <li className="resume-skill-chip">Multitasking and Critical Thinking</li>
            <li className="resume-skill-chip">Problem Solving</li>
            <li className="resume-skill-chip">Effective Communication</li>
            <li className="resume-skill-chip">Prototyping and Interactions</li>
            <li className="resume-skill-chip">Plugins and Integrations</li>
            <li className="resume-skill-chip">User Experience (UX) Research and Wireframing</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
