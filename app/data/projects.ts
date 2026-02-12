/**
 * Single source of truth for project/case study data.
 * Used by: home page (preview list), projects index, footer case studies, and dynamic case study route.
 */

export type ProjectSlug = "angkas" | "kuryenteph" | "fastph";

export type Project = {
  slug: ProjectSlug;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  /** Case study page: "What I did" bullet items */
  approachItems: string[];
  /** Case study page: full problem paragraph (can differ slightly from problem) */
  problemDetail: string;
  /** Case study page: full outcome paragraph */
  outcomeDetail: string;
  metaTitle: string;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "angkas",
    title: "Angkas app redesign",
    summary:
      "Improving booking clarity and reducing failed ride attempts through flow and UI changes.",
    problem:
      "Riders hit friction and uncertainty in the request flow, which caused confusion and failed bookings.",
    approach:
      "Mapped the booking journey, identified failure states, and redesigned key screens and feedback moments.",
    outcome:
      "The updated experience reduced uncertainty and improved completion across key booking steps.",
    problemDetail:
      "Riders experienced confusion and failed bookings due to unclear system feedback and friction in the request flow.",
    approachItems: [
      "Mapped the end-to-end booking journey",
      "Identified friction points and failure states",
      "Redesigned UI feedback and flow logic",
    ],
    outcomeDetail:
      "The redesigned flow improved booking clarity and reduced failed ride attempts by addressing uncertainty at key moments.",
    metaTitle: "Angkas App Redesign",
    metaDescription:
      "Case study: redesigning the Angkas booking flow to improve clarity and reduce failed ride attempts.",
  },
  {
    slug: "kuryenteph",
    title: "KuryentePH dashboard",
    summary:
      "Helping households understand daily energy use with clearer breakdowns and trends.",
    problem:
      "Users could not easily interpret usage due to fragmented information and unclear metric labeling.",
    approach:
      "Restructured data views with clearer hierarchy, comparisons, and practical context for everyday decisions.",
    outcome:
      "Users could read their energy patterns faster and make better-informed consumption choices.",
    problemDetail:
      "Users struggled to interpret their electricity usage due to fragmented data, unclear metrics, and a lack of actionable context.",
    approachItems: [
      "Reviewed existing consumption and billing views",
      "Identified gaps in clarity and mental model mismatches",
      "Proposed clearer breakdowns and time-based comparisons",
    ],
    outcomeDetail:
      "The redesigned dashboard made energy usage easier to understand, helping users make more informed decisions about their consumption.",
    metaTitle: "KuryentePH Dashboard",
    metaDescription:
      "Case study: improving energy-use comprehension in KuryentePH through clearer breakdowns, trends, and context.",
  },
  {
    slug: "fastph",
    title: "FastPH service flow",
    summary:
      "Redesigning task matching to reduce drop-offs for both customers and workers.",
    problem:
      "Slow responses and unclear task states led to abandonment and lower trust in the service process.",
    approach:
      "Mapped end-to-end flow, removed friction points, and redesigned status communication for key handoffs.",
    outcome:
      "The revised flow improved completion and made progress feel faster without adding complexity.",
    problemDetail:
      "Users experienced slow responses and unclear task progress, leading to frustration, abandonment, and reduced trust in the service.",
    approachItems: [
      "Mapped the end-to-end service request flow",
      "Identified friction points causing delays and drop-offs",
      "Redesigned task states and feedback mechanisms",
    ],
    outcomeDetail:
      "The improved flow reduced uncertainty, improved completion rates, and made the service feel faster without increasing system complexity.",
    metaTitle: "FastPH Service Flow",
    metaDescription:
      "Case study: streamlining the FastPH booking and task-matching flow to reduce drop-offs and uncertainty.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPrevNextProjects(slug: ProjectSlug): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}
