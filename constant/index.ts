import { Code, Database, Smartphone, Zap } from "lucide-react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
export const SKILLS = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    proficiency: 95,
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    proficiency: 88,
    color: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, iOS/Android",
    proficiency: 78,
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "DevOps & Tools",
    description: "Docker, AWS, CI/CD, Git, Testing",
    proficiency: 85,
    color: "text-secondary",
  },
];

export const TIMELINEEVENT = [
  {
    year: "2025",
    title: "Full-Stack Developer",
    company: "Abole Technology plc",
    location: "Addis Ababa, Ethiopia",
    type: "work",
    description:
      "Built the entire frontend and backend infrastructure from scratch using modern technologies.",
    achievements: [
      "Improved app performance by 40%",
      "Scaled to 10k+ users",
      "Integrated payment systems",
    ],
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    company: "Teamwork SOftwareplc",
    location: "Bahir Dar, Ethiopia",
    type: "work",
    description:
      "Specialized in creating responsive, accessible web applications for diverse clients.",
    achievements: [
      "Delivered 15+ client projects",
      "Improved accessibility scores",
      "Mentored interns",
    ],
  },
  {
    year: "2023",
    title: "Computer Science Degree",
    company: "Bahir Dar University",
    location: "Bahir Dar, Ethiopia",
    type: "education",
    description:
      "Bachelor's degree with focus on software engineering and cyber security.",
    achievements: [
      "Magna Cum Laude",
      "Dean's List 4 semesters",
      "Capstone project award",
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
                    { name: "Contact", href: "/contact" }
                    ]
                },
     { 
        title: "Socials", 
        links: [
                { name: "GitHub", href: "https://github.com/bogaledemasrepo", icon: VscGithubAlt },
                { name: "LinkedIn", href: "https://linkedin.com/in/bogale-demas", icon: CiLinkedin },
                { name: "Telegram", href: "https://bogaledemas.t.me", icon: RiTelegramLine }
                ]
            }
  ];

export  const SERVICES = [
      {
        title: "Backend Development",
        description: "Robust, scalable server-side systems using Spring Boot and Node.js. Focused on performance and event-driven architecture.",
        icon: `/backend-server-icon.png`,
        link: "/projects/?filter=backend",
      },
      {
        title: "Frontend Development",
        description: "Modern, performant UIs with React and Tailwind CSS. Crafting modular, responsive experiences with precision.",
        icon: `/frontend-icon.jpeg`,
        link: "/projects/?filter=frontend",
      },
      {
        title: "Mobile App Development",
        description: "Native-like iOS and Android apps using React Native. Seamless integration and intuitive UX from a single codebase.",
        icon: `/mobile-development.jpg`,
        link: "/projects/?filter=mobile",
      },
    ];