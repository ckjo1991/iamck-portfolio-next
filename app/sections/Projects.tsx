import Link from "next/link";
import GoogleIcon from "../components/GoogleIcon";

export default function Projects() {
  return (
    <section className="projects-preview" id="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Selected projects</h2>

        <ul className="projects-list">
          <li>
            <Link href="/projects/angkas" className="project-item" data-project="angkas">
              <h3 className="project-name">Angkas</h3>
              <p className="project-summary">
                Improving booking clarity and reducing rider confusion in a
                high-pressure, real-time transport app.
              </p>
              <span className="project-cta">
                View case study <GoogleIcon name="arrow_forward" size={16} />
              </span>
            </Link>
          </li>

          <li>
            <Link href="/projects/kuryenteph" className="project-item" data-project="kuryenteph">
              <h3 className="project-name">KuryentePH</h3>
              <p className="project-summary">
                Helping households understand electricity usage through clearer
                data visualization and actionable insights.
              </p>
              <span className="project-cta">
                View case study <GoogleIcon name="arrow_forward" size={16} />
              </span>
            </Link>
          </li>

          <li>
            <Link href="/projects/fastph" className="project-item" data-project="fastph">
              <h3 className="project-name">FastPH</h3>
              <p className="project-summary">
                Streamlining on-demand service booking to reduce drop-offs and speed up
                task matching for users and providers.
              </p>
              <span className="project-cta">
                View case study <GoogleIcon name="arrow_forward" size={16} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
