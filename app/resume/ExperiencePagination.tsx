"use client";

import { useState } from "react";
import GoogleIcon from "../components/GoogleIcon";

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};
const ITEMS_PER_PAGE = 3;

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Junior UX Designer",
    company: "Ingnius Systems",
    duration: "January 2025 to November 2025",
    points: [
      "Work with the product designer to brainstorm and plan new feature ideas.",
      "Create wireframes, mock-ups, and prototypes for both new and current products.",
      "Improve designs based on what users say and do.",
      "Keep design specs and system docs up to date.",
      "Explain design choices clearly using data and insights.",
    ],
  },
  {
    role: "UI Designer",
    company: "Freelance",
    duration: "November 2024 to December 2024",
    points: [
      "Designed detailed UI mock-ups that captured the platform's key workflows.",
      "Built interactive prototypes to demonstrate how users would navigate core services.",
      "Focused on intuitive interactions to make the platform easy to use.",
      "Ensured that every design decision supported business goals without compromising usability.",
    ],
  },
  {
    role: "Real-Time Analyst",
    company: "BroadPath",
    duration: "December 2022 to July 2024",
    points: [
      "Monitor and analyze real-time data to ensure optimal performance in meeting business objectives.",
      "Generate timely reports and provide insights to support informed decision-making.",
      "Collaborate with operations to address challenges, implement improvements, and achieve performance targets.",
    ],
  },
  {
    role: "Associate Real-time Management",
    company: "Concentrix",
    duration: "January 2022 to November 2022",
    points: [
      "Gives an overview of the business where the target of the business is visible.",
      "Generating reports to help management in making decisions that are critical to the business.",
      "Working closely with operations, to help monitor the incoming volumes and ensure that client targets are achieved.",
      "Recognize and communicate challenges and areas of improvement during, and after scheduling cycles; provide solutions to meet staffing expectations at the interval level.",
    ],
  },
  {
    role: "Client Services Coordinator",
    company: "Satellite Office",
    duration: "June 2021 to October 2021",
    points: [
      "Provided customized merchandise solutions to clients.",
      "Created presentation decks using MS PowerPoint and/or Canva.",
      "Engaged in ideation and sourcing as integral parts of delivering client solutions.",
    ],
  },
  {
    role: "Reporting Analyst",
    company: "Sutherland Global Services",
    duration: "March 2019 to May 2021",
    points: [
      "Designed and generated daily comprehensive reports offering an overview of the entire business.",
      "Delivered analytical solutions-based suggestions to assist in critical business decision-making.",
    ],
  },
  {
    role: "Real-Time Analyst",
    company: "Stellar Philippines Inc.",
    duration: "October 2016 to March 2019",
    points: [
      "Designed and generated daily transparent standard reports.",
      "Provided analytical suggestions for critical business decisions.",
      "Collaborated with operations to enhance real-time processes and performance.",
      "Contributed to team efficiency through proactive problem-solving.",
      "Ensured accurate and timely communication of data insights to relevant stakeholders.",
    ],
  },
  {
    role: "Travel Specialist",
    company: "Stellar Philippines Inc.",
    duration: "June 2013 to October 2016",
    points: [
      "Managed travel arrangements for groups, couples, executives, and special needs clients.",
      "Maintained a high level of customer satisfaction through efficient services.",
      "Responded promptly to clients' questions, issues, and complaints, providing effective solutions.",
      "Addressed inquiries and resolved issues and complaints related to various travel arrangements.",
      "Conducted thorough research on travel destinations, ensuring accurate and up-to-date information for clients' itineraries.",
    ],
  },
  {
    role: "Data Encoder",
    company: "Sykes Inc.",
    duration: "March 2010 to April 2011",
    points: [
      "Detected and rectified data entry errors, preventing duplication across systems.",
      "Reviewed and updated account information within the company's computer system.",
      "Identified, corrected, and reported data entry errors, ensuring data accuracy and integrity.",
    ],
  },
];

export default function ExperiencePagination() {
  const [showAll, setShowAll] = useState(false);
  const recentItems = EXPERIENCE_ITEMS.slice(0, ITEMS_PER_PAGE);
  const olderItems = EXPERIENCE_ITEMS.slice(ITEMS_PER_PAGE);

  const renderItem = (item: ExperienceItem) => (
    <details
      key={`${item.role}-${item.company}-${item.duration}`}
      className="resume-entry resume-entry-collapsible"
      name="resume-experience"
    >
      <summary className="resume-entry-summary">
        <span className="resume-entry-role">{item.role}</span>
        <span className="resume-meta">{item.company}</span>
        <span className="resume-meta">{item.duration}</span>
        <span className="resume-entry-toggle" aria-hidden="true">
          <span className="resume-entry-toggle-icon resume-entry-toggle-icon--closed">
            <GoogleIcon name="add" size={18} />
          </span>
          <span className="resume-entry-toggle-icon resume-entry-toggle-icon--open">
            <GoogleIcon name="remove" size={18} />
          </span>
        </span>
      </summary>
      <div className="resume-entry-details">
        <ul className="resume-list">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </details>
  );

  return (
    <div className="resume-experience-groups">
      <div className="resume-entries">
        {recentItems.map(renderItem)}
      </div>

      {olderItems.length > 0 ? (
        <>
          <div
            id="older-experience-list"
            className="resume-entries resume-more-content"
            hidden={!showAll}
          >
            {olderItems.map(renderItem)}
          </div>

          {showAll ? (
            <button
              type="button"
              className="resume-more-toggle"
              aria-expanded={showAll}
              aria-controls="older-experience-list"
              onClick={() => setShowAll(false)}
            >
              Show fewer roles
            </button>
          ) : (
            <button
              type="button"
              className="resume-more-toggle"
              aria-expanded={showAll}
              aria-controls="older-experience-list"
              onClick={() => setShowAll(true)}
            >
              Show more
            </button>
          )}
        </>
      ) : null}
    </div>
  );
}
