import { createId } from "./id.js";

export const defaultResume = {
  profile: {
    fullName: "Ariana Stone",
    title: "Senior Product Designer",
    about:
      "Design leader with 8+ years crafting premium digital experiences. Focused on measurable outcomes, clean systems, and user delight.",
    email: "ariana.stone@email.com",
    phone: "+1 (555) 220-1839",
    location: "San Francisco, CA",
    website: "arianastone.com",
    photo: "",
  },
  experience: [
    {
      id: createId(),
      company: "Nimbus Studio",
      role: "Lead Product Designer",
      startDate: "2021",
      endDate: "Present",
      location: "Remote",
      summary:
        "Owned end-to-end design for a global finance platform, improving activation by 28% and retention by 18%.",
      highlights: [
        "Built a tokenized design system adopted across 6 squads.",
        "Partnered with PM and Eng to deliver a 3-month roadmap ahead of schedule.",
      ],
    },
  ],
  education: [
    {
      id: createId(),
      school: "Parsons School of Design",
      degree: "BFA, Communication Design",
      startDate: "2013",
      endDate: "2017",
      location: "New York, NY",
      summary: "Graduated with honors, UX research focus.",
    },
  ],
  skills: ["Product Design", "Design Systems", "Figma", "Prototyping", "UX Research"],
  languages: [
    { id: createId(), name: "English", level: "Native" },
    { id: createId(), name: "Spanish", level: "Professional" }
  ],
  projects: [
    {
      id: createId(),
      name: "Arc Finance",
      role: "Product Lead",
      link: "https://arc.finance",
      description: "Reimagined the onboarding experience for a digital wallet serving 1M+ users.",
    },
  ],
  certificates: [
    {
      id: createId(),
      name: "Human-Centered Design",
      issuer: "IDEO",
      date: "2020",
      link: "",
    },
  ],
  socials: [
    { id: createId(), label: "LinkedIn", url: "https://linkedin.com/in/arianastone" },
    { id: createId(), label: "Dribbble", url: "https://dribbble.com/arianastone" }
  ],
  customSections: [],
  sectionsOrder: [
    "profile",
    "experience",
    "education",
    "skills",
    "languages",
    "projects",
    "certificates",
    "socials",
    "custom"
  ],
  template: "minimal"
};