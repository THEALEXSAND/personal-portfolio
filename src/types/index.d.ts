import type { TECHNOLOGIES } from "@/mocks/technologies";

type Technology = typeof TECHNOLOGIES[keyof typeof TECHNOLOGIES];

interface Project {
    name: string;
    description: string;
    images: string[];
    technologies: Technology[];
    features: string[];
    featured: boolean;
    year: number;
}