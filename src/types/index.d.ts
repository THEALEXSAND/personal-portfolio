import { TECHNOLOGIES } from "@/data/technologies-data";

type Technology = typeof TECHNOLOGIES[keyof typeof TECHNOLOGIES];

interface Project {
	name: string;
	description: string;
	images: string[];
	technologies: Technology[];
	features: string[];
	featured: boolean;
	year: number;
	duration: string;
}
