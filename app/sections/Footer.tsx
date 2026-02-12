import Link from "next/link";
import { projects } from "../data/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-panel">
          <div className="site-footer-shell">
            <section className="site-footer-brand" aria-label="Brand">
              <p className="site-footer-brand-mark">I.AM.CK</p>
              <p className="site-footer-brand-copy">
                UX designer focused on turning complex workflows into clear, measurable product experiences.
              </p>
              <a href="mailto:ckjobcena@gmail.com" className="site-footer-email">
                ckjobcena@gmail.com
              </a>
            </section>

            <nav className="site-footer-navgrid" aria-label="Footer navigation">
              <div className="site-footer-col">
                <h2 className="site-footer-col-title">Explore</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/#contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="site-footer-col">
                <h2 className="site-footer-col-title">Case Studies</h2>
                <ul>
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="site-footer-bottom">
            <p>© 2026 CKJObcena. All rights reserved.</p>
            <Link href="/sitemap.xml">View sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
