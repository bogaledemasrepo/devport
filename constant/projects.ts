export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  sourceCodeLink?: string;
  previewLink?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    category: "Frontend",
    thumbnail: "/placeholder.svg?key=j0dk5",
    sourceCodeLink: "https://github.com/example/ecommerce",
    previewLink: "https://ecommerce-demo.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Task Management API",
    description: "RESTful API built with Express.js and PostgreSQL for managing tasks and projects. Includes JWT authentication and role-based access control.",
    category: "Backend",
    thumbnail: "/placeholder.svg?key=z01xp",
    sourceCodeLink: "https://github.com/example/task-api",
    previewLink: "https://api-docs.example.com",
    technologies: ["Express.js", "PostgreSQL", "JWT", "Docker"]
  },
  {
    id: 3,
    title: "Weather Mobile App",
    description: "Cross-platform mobile app built with React Native. Features real-time weather data, location services, and beautiful animations.",
    category: "Mobile",
    thumbnail: "/placeholder.svg?key=oy0ll",
    sourceCodeLink: "https://github.com/example/weather-app",
    previewLink: "https://play.google.com/store/apps/weather",
    technologies: ["React Native", "Expo", "Weather API", "AsyncStorage"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
    category: "Frontend",
    thumbnail: "/placeholder.svg?key=klr4d",
    sourceCodeLink: "https://github.com/example/portfolio",
    previewLink: "https://portfolio.example.com",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    id: 5,
    title: "Chat Application Backend",
    description: "Real-time chat application backend with Socket.io, Redis, and MongoDB. Supports group chats, file sharing, and message encryption.",
    category: "Backend",
    thumbnail: "/placeholder.svg?key=67th8",
    sourceCodeLink: "https://github.com/example/chat-backend",
    previewLink: "https://chat-api.example.com",
    technologies: ["Socket.io", "Redis", "MongoDB", "Express.js"]
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description: "Mobile fitness tracking app with workout logging, progress charts, and social features. Built with Flutter for iOS and Android.",
    category: "Mobile",
    thumbnail: "/placeholder.svg?key=kwe9z",
    sourceCodeLink: "https://github.com/example/fitness-tracker",
    previewLink: "https://apps.apple.com/fitness-tracker",
    technologies: ["Flutter", "Dart", "Firebase", "Health Kit"]
  }
];

export default projects;
