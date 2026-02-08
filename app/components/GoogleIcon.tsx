"use client";

type GoogleIconName =
  | "arrow_forward"
  | "arrow_upward"
  | "chevron_left"
  | "chevron_right"
  | "download"
  | "add"
  | "remove";

type Props = {
  name: GoogleIconName;
  size?: number;
  className?: string;
  title?: string;
  "aria-hidden"?: boolean;
};

// Material Icons (Google Icons) as inline SVG paths.
// Source: https://fonts.google.com/icons (Material Icons / Material Symbols)
const PATHS: Record<GoogleIconName, string> = {
  arrow_forward:
    "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  arrow_upward:
    "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8z",
  chevron_left: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  chevron_right: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  download: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z",
  add: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  remove: "M19 13H5V11H19V13Z",
};

export default function GoogleIcon({
  name,
  size = 20,
  className,
  title,
  "aria-hidden": ariaHidden = true,
}: Props) {
  const labelled = Boolean(title);
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      focusable="false"
      aria-hidden={ariaHidden}
      aria-label={labelled ? title : undefined}
      role={labelled ? "img" : undefined}
    >
      {labelled ? <title>{title}</title> : null}
      <path d={PATHS[name]} fill="currentColor" />
    </svg>
  );
}
