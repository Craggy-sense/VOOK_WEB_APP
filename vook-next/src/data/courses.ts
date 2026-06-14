export type Course = {
  title: string;
  category: string;
  icon: string;
  desc: string;
};

export const allCourses: Course[] = [
  // Leadership and Governance
  {
    title: "Level 1: Foundations of Leadership & Personal Development",
    category: "leadership",
    icon: "fas fa-seedling",
    desc: "Build a strong foundation in leadership principles and personal growth strategies.",
  },
  {
    title: "Level 2: Applied Leadership & Professional Growth",
    category: "leadership",
    icon: "fas fa-chart-line",
    desc: "Apply leadership skills in real-world professional contexts to drive growth.",
  },
  {
    title: "Level 3: Executive Leadership & Sustainable Influence",
    category: "leadership",
    icon: "fas fa-crown",
    desc: "Master executive leadership and create lasting, sustainable influence.",
  },

  // Peace Building
  {
    title: "Level 1: Foundations of Conflict Resolution",
    category: "peace-building",
    icon: "fas fa-handshake",
    desc: "Learn the core principles and approaches to resolving conflicts peacefully.",
  },
  {
    title: "Level 2: Conflict Management, Negotiation & Mediation",
    category: "peace-building",
    icon: "fas fa-balance-scale",
    desc: "Develop practical skills in negotiation and mediation for conflict management.",
  },
  {
    title: "Level 3: Advanced Mediation, Peacebuilding & Conflict Transformation",
    category: "peace-building",
    icon: "fas fa-dove",
    desc: "Transform conflicts into opportunities for lasting peace and community healing.",
  },

  // Governance
  {
    title: "Level 1: Foundations Of Board Governance",
    category: "governance",
    icon: "fas fa-landmark",
    desc: "Understand the fundamentals of board governance, roles, and responsibilities.",
  },
  {
    title: "Level 2: Strategic Board Leadership & Effectiveness",
    category: "governance",
    icon: "fas fa-chess",
    desc: "Enhance board performance through strategic leadership and effective governance.",
  },
  {
    title: "Level 3: Advanced Governance, Ethics & Organizational Stewardship",
    category: "governance",
    icon: "fas fa-shield-alt",
    desc: "Lead with integrity through advanced governance principles and ethical stewardship.",
  },
];

export const categoryTitles: Record<string, string> = {
  leadership: "Leadership and Governance",
  "peace-building": "Peace Building",
  governance: "Governance",
};
