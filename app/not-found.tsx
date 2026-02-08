import Link from "next/link";
import "./styles/not-found.css";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="not-found-inner">
        <h1 className="not-found-title">You found this page?!</h1>

        <p className="not-found-copy">
          However, this page is either a work in progress or no longer exists.
        </p>

        <div className="not-found-actions">
          <Link href="/">Go back home</Link>
          <Link href="/#contact">Get in touch</Link>
        </div>
      </div>
    </main>
  );
}