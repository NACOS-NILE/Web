export interface Initiative {
  label: string;
  title: string;
  description: string;
}

// Categories of activity per README.md — not specific dated events, since no
// real event names/dates/venues have been supplied yet. See CONTENT_NEEDED.md.
export const initiatives: Initiative[] = [
  {
    label: "Skills",
    title: "Bootcamps & coding workshops",
    description:
      "Hands-on sessions across the six disciplines, run by students who've already been through the material.",
  },
  {
    label: "Competition",
    title: "Hackathon & Tech Week",
    description:
      "An annual build sprint for the whole faculty — teams, a deadline, and something shipped by the end of it.",
  },
  {
    label: "Career",
    title: "Industry mentorship & career talks",
    description:
      "Direct lines to people already working in the field, for the questions a lecture won't answer.",
  },
  {
    label: "Academics",
    title: "Tutorials & study groups",
    description:
      "Peer-led sessions timed around the courses students are actually taking, when they need them.",
  },
];
