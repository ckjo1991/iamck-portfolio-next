import "../styles/hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">hi, i’m ck</p>

        <h1 className="hero-title">
          junior ux generalist
          <br />
          with an analytics background
        </h1>

        <p className="hero-description">
          I work through messy problems, data, and constraints to design interfaces
          that are easier to understand and easier to use.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href="#about" className="btn-secondary">
            About me
          </a>
        </div>
      </div>
    </section>
  );
}