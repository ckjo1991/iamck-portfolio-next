import type { Metadata } from "next";
import "./globals.css";
import "./styles/scroll-snap.css";
import "./styles/projects.css";
import "./styles/navigation.css";
import Nav from "./sections/Nav";
import "./styles/case-study.css";
import "./styles/about-preview.css";
import "./styles/about.css";
import "./styles/contact-preview.css";
import "./styles/back-to-top.css";
import "./styles/home-enhancements.css";
import "./styles/startup-loader.css";
import "./styles/projects-index.css";
import BackToTop from "./components/BackToTop";
import StartupLoader from "./components/StartupLoader";

export const metadata: Metadata = {
  title: {
    default: "I.AM.CK | UX Designer",
    template: "%s | I.AM.CK",
  },
  description:
    "Portfolio of CK, a UX designer with an analytics background focused on turning messy workflows into clear, measurable products.",
  openGraph: {
    title: "I.AM.CK | UX Designer",
    description:
      "Portfolio of CK, a UX designer with an analytics background focused on turning messy workflows into clear, measurable products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I.AM.CK | UX Designer",
    description:
      "Portfolio of CK, a UX designer with an analytics background focused on turning messy workflows into clear, measurable products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StartupLoader />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
