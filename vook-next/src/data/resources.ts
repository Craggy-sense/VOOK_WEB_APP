export type ResourceCategory = "blog" | "book" | "resource";

export interface BlogItem {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  category: ResourceCategory;
  content: string;
  downloadUrl?: string;
  resourceType?: string; // For learning resources e.g., "PDF Guide"
}

export interface VlogItem {
  id: string;
  title: string;
  embedUrl: string;
  duration: string;
  desc: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: "community" | "seminars" | "training" | "leadership";
  desc?: string;
}

export const blogsData: BlogItem[] = [
  {
    id: "empowerment-through-leadership",
    title: "Empowerment Through Ethical Leadership",
    author: "Pastor Sue",
    date: "June 12, 2026",
    excerpt: "Ethical leadership is the cornerstone of sustainable community development. Discover how we train leaders to act with integrity and foresight.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    category: "blog",
    content: "Ethical leadership is not just about making the right decisions; it is about building a culture of transparency, accountability, and empathy. At Vook Voice International, we believe that true leadership starts with self-awareness and organizational integrity. In this article, we explore the principles of stewardship, ethical decision-making, and dynamic communication that form the bedrock of our training programs. By focusing on values-driven leadership, we prepare individuals to inspire trust and lead positive transformations in their communities."
  },
  {
    id: "peacebuilding-in-action",
    title: "Community Peacebuilding: Strategies for Coexistence",
    author: "Dr. Moses Osagiende",
    date: "May 28, 2026",
    excerpt: "Conflict is inevitable, but violence is not. Read our latest insights on grassroots mediation and conflict transformation approaches in Kenya.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600",
    category: "blog",
    content: "Effective conflict management requires moving beyond resolution to conflict transformation. This involves addressing the root causes of tension, rebuilding trust, and fostering cooperative relationships. Our grassroots mediation programs focus on bringing community leaders, youth, and elders together to design collaborative solutions. By equipping participants with negotiation and communication skills, we pave the way for sustainable peace and mutual respect."
  },
  // Books
  {
    id: "stewardship-in-governance-book",
    title: "Stewardship in Modern Governance (E-Book)",
    author: "Pastor Sue Kibii",
    date: "2026",
    excerpt: "A comprehensive handbook on ethical leadership, board effectiveness, and community empowerment.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    category: "book",
    content: "This book provides a blueprint for leaders seeking to build robust organizations and transparent systems. It covers strategic planning, board responsibilities, conflict transformation, and values-based leadership.",
    downloadUrl: "#"
  },
  {
    id: "personal-growth-blueprint",
    title: "The Personal Growth & Character Blueprint",
    author: "Pastor Sue Kibii",
    date: "2025",
    excerpt: "An interactive journal and guide designed to help individuals discover their purpose and cultivate executive-level leadership skills.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600",
    category: "book",
    content: "Discover your personal mission statement, define your core values, and create a roadmap for professional development with this practical, step-by-step guidebook.",
    downloadUrl: "#"
  },
  // Learning Resources
  {
    id: "board-governance-toolkit",
    title: "Board Evaluation & Governance Toolkit",
    author: "Vook Voice International",
    date: "2026",
    excerpt: "An essential PDF toolkit containing evaluation forms, templates, and self-assessment rubrics for NGO boards.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600",
    category: "resource",
    resourceType: "PDF Toolkit",
    content: "Evaluate board meetings, analyze committee structure, and ensure regulatory compliance with our printable templates.",
    downloadUrl: "#"
  },
  {
    id: "mediation-reference-guide",
    title: "Quick-Reference Mediation Guide",
    author: "Vook Voice International",
    date: "2026",
    excerpt: "A step-by-step pocket guide for community mediators dealing with active disputes.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    category: "resource",
    resourceType: "Mediation Sheet",
    content: "A summary of mediation stages, active listening techniques, and de-escalation scripts designed for field officers.",
    downloadUrl: "#"
  }
];

export const vlogsData: VlogItem[] = [
  {
    id: "vlog-1",
    title: "Leadership Summit 2026 Highlights",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with realistic embed or keep simple for demo
    duration: "12:45",
    desc: "A recap of our flagship annual leadership summit in Nairobi, bringing together youth leaders and community elders.",
    date: "June 2, 2026"
  },
  {
    id: "vlog-2",
    title: "Conflict Transformation & Mediation Training Seminar",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "18:20",
    desc: "Hear from our trainees as they describe their journey learning active negotiation and mediation skills.",
    date: "May 15, 2026"
  },
  {
    id: "vlog-3",
    title: "Empowering Rural Communities in Kenya",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:55",
    desc: "A short documentary highlighting Vook Voice's grassroots impact and agricultural stewardship initiatives.",
    date: "April 20, 2026"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Youth Leadership Graduation",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    category: "training",
    desc: "Graduates of our Level 1 Leadership & Personal Development course celebrating their achievements."
  },
  {
    id: "gal-2",
    title: "Community Peace Dialogue",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    category: "community",
    desc: "Facilitators conducting conflict transformation exercises in a community-led town hall."
  },
  {
    id: "gal-3",
    title: "Corporate Governance Seminar",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
    category: "seminars",
    desc: "Board directors and executives discussing compliance, values-based culture, and governance frameworks."
  },
  {
    id: "gal-4",
    title: "Empowering Next-Gen Women Leaders",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    category: "leadership",
    desc: "Mentorship session led by Pastor Sue focusing on executive presence and ethical impact."
  },
  {
    id: "gal-5",
    title: "Peace and Unity Marathon",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
    category: "community",
    desc: "A run organized to foster unity, peaceful coexistence, and community health."
  },
  {
    id: "gal-6",
    title: "Executive Mediation Workshop",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    category: "training",
    desc: "Roleplay simulation designed to teach advanced negotiation tactics and neutral mediation steps."
  }
];
