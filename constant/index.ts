import { Code, Database, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
export const SKILLS = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3",
    proficiency: 92,
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Spring Boot, Node.js, Express, FastAPI, PostgreSQL, REST APIs",
    proficiency: 88,
    color: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Expo, Cross-Platform Architecture",
    proficiency: 85,
    color: "text-primary",
  },
  {
    icon: ShieldCheck, // Or Terminal / Server icon depending on your icon package
    title: "IT Infrastructure & Security",
    description:
      "Linux (Kali), Network Maintenance, Vulnerability Analysis, Penetration Testing",
    proficiency: 82,
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Tools & DevOps",
    description: "Git/GitHub, Docker, Bash Scripting, Nmap, Figma",
    proficiency: 86,
    color: "text-accent",
  },
];
export const TIMELINEEVENT = [
  {
    year: "2026 - Present",
    title: "Information Technology Teacher",
    company: "Gibson School",
    location: "Addis Ababa, Ethiopia",
    type: "work",
    description:
      "Developed and delivered comprehensive IT curriculum while mentoring students through hands-on technical projects.",
    achievements: [
      "Guided and mentored students through practical, real-world IT projects",
      "Organized industry workshops and seminars on modern IT trends",
      "Conducted ongoing performance evaluations and constructive student feedback",
    ],
  },
  {
    year: "2025 - 2026",
    title: "Full Stack Developer",
    company: "Abol Technologies",
    location: "Addis Ababa, Ethiopia",
    type: "work",
    description:
      "Engineered pixel-perfect, responsive web and mobile application features with a strong focus on security and user experience.",
    achievements: [
      "Increased user engagement by 5% via responsive UI/UX designs",
      "Reduced system vulnerabilities by 7% through input sanitization and bug analysis",
    ],
  },
  {
    year: "2024",
    title: "Web Developer",
    company: "Team Work",
    location: "Bahir Dar, Ethiopia",
    type: "work",
    description:
      "Collaborated with design and senior engineering teams to build corporate web solutions and resolve complex codebase issues.",
    achievements: [
      "Boosted user engagement by 15% through streamlined interface designs",
      "Enhanced overall software efficiency by 10% via effective code troubleshooting",
      "Managed design project workflows in collaboration with senior developers",
    ],
  },
  {
    year: "2019 - 2023",
    title: "B.Sc. in Computer Science",
    company: "Bahir Dar University",
    location: "Bahir Dar, Ethiopia",
    type: "education",
    description:
      "Completed undergraduate studies specializing in computer science, software engineering, and system fundamentals.",
    achievements: [
      "Graduated with a Cumulative GPA of 3.15 / 4.0",
      "Passed the National Exit Examination with a 77% score",
    ],
  },
];

export const CONTACTDETAIL = [
  {
    icon: Mail,
    title: "Email",
    content: "bogidemas@gmail.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+251923872187",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "Bole, Gerji",
    description: "Addis Ababa, Ethiopia",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "8:00 AM - 5:00 PM PST",
  },
];

export const FOOTERNAV = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/bogaledemasrepo",
        icon: VscGithubAlt,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/bogale-demas",
        icon: CiLinkedin,
      },
      {
        name: "Telegram",
        href: "https://bogaledemas.t.me",
        icon: RiTelegramLine,
      },
    ],
  },
];

export const SERVICES = [
  {
    title: "Backend Development",
    description:
      "Robust, scalable server-side systems using Spring Boot and Node.js. Focused on performance and event-driven architecture.",
    icon: `/backend-server-icon.png`,
    link: "/projects/?filter=backend",
  },
  {
    title: "Frontend Development",
    description:
      "Modern, performant UIs with React and Tailwind CSS. Crafting modular, responsive experiences with precision.",
    icon: `/frontend-icon.jpeg`,
    link: "/projects/?filter=frontend",
  },
  {
    title: "Mobile App Development",
    description:
      "Native-like iOS and Android apps using React Native. Seamless integration and intuitive UX from a single codebase.",
    icon: `/mobile-development.jpg`,
    link: "/projects/?filter=mobile",
  },
];
