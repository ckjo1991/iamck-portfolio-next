import Link from "next/link";

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
                <p className="site-footer-col-title">Explore</p>
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
                <p className="site-footer-col-title">Case Studies</p>
                <ul>
                  <li>
                    <Link href="/projects/angkas">Angkas app redesign</Link>
                  </li>
                  <li>
                    <Link href="/projects/kuryenteph">KuryentePH dashboard</Link>
                  </li>
                  <li>
                    <Link href="/projects/fastph">FastPH service flow</Link>
                  </li>
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
