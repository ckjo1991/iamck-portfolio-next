import Hero from "./sections/Hero";
import "./styles/projects.css";


export default function Page() {
  return (
    <>
      <Hero />

      <section id="projects" className="projects-preview">
        <div className="projects-inner">
          <h2 className="projects-title">Selected projects</h2>

          <ul className="projects-list">
            <li className="project-item">
              <h3 className="project-name">Angkas app redesign</h3>
              <p className="project-summary">
                Improving booking clarity and reducing failed ride attempts
                through flow and UI changes.
              </p>
            </li>

            <li className="project-item">
              <h3 className="project-name">KuryentePH dashboard</h3>
              <p className="project-summary">
                Helping households understand daily energy use with clearer
                breakdowns and trends.
              </p>
            </li>

            <li className="project-item">
              <h3 className="project-name">Herogetgo service flow</h3>
              <p className="project-summary">
                Redesigning task matching to reduce drop-offs for both customers
                and workers.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}