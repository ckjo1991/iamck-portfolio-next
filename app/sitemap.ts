import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iamck-portfolio-next.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/projects`, changeFrequency: "weekly", priority: 0.9 },
    ...projectEntries,
  ];
}
