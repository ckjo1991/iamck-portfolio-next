export type ProjectSlug = "angkas" | "kuryenteph" | "fastph";

export type Project = {
  slug: ProjectSlug;
  title: string;
  oneLiner: string;
  role: string;
  focus: string[];
  problem: string;
  outcome: string;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    slug: "angkas",
    title: "Angkas app redesign",
    oneLiner: "Improving booking clarity and reducing failed ride attempts through flow + UI changes.",
    role: "UX Designer (Concept case study)",
    focus: ["Service flow", "Interaction design", "UI clarity"],
    problem:
      "Riders hit friction and uncertainty in the request flow, which led to confusion and failed bookings.",
    outcome:
      "A clearer step-by-step request experience with better feedback moments to reduce uncertainty in key steps.",
    thumbnail: "/projects/angkas/thumb.svg",
  },
  {
    slug: "kuryenteph",
    title: "KuryentePH dashboard",
    oneLiner: "Helping households understand daily energy use with clearer breakdowns, trends, and context.",
    role: "UX Designer (Concept case study)",
    focus: ["Dashboard UX", "Information hierarchy", "Data storytelling"],
    problem:
      "Users struggled to interpret usage because information was fragmented and key metrics were not explained well.",
    outcome:
      "A reorganized dashboard that makes trends and comparisons obvious, so users can act on insights faster.",
    thumbnail: "/projects/kuryenteph/thumb.svg",
  },
  {
    slug: "fastph",
    title: "FastPH service flow",
    oneLiner: "Redesigning task matching to reduce drop-offs for both customers and service providers.",
    role: "UX Designer (Concept case study)",
    focus: ["Marketplace flow", "Status communication", "UX writing"],
    problem:
      "Unclear task states and slow responses reduced trust and caused users to abandon the booking process.",
    outcome:
      "A more confident booking-to-fulfillment flow with clearer states, timelines, and handoff communication.",
    thumbnail: "/projects/fastph/thumb.svg",
  },
];

export const featuredProjects = projects;

export function getProject(slug: ProjectSlug) {
  return projects.find((project) => project.slug === slug);
}

