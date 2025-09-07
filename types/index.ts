interface Project{
    id: number;
    title: string;
    category:string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    featured: boolean;
    liveUrl: string;
    githubUrl: string;
    duration: string;
    teamSize: string;
    achievements: string[];
    challenges: string;
    technologies: {
        frontend: string[];
        backend: string[];
        deployment: string[];
    };
} 