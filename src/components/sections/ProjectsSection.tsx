import { TECHNOLOGIES } from "@/mocks/technologies";
import { projects } from "@/mocks/projects";
import { SkillCard } from "../SkillCard";
import { ProjectCard } from "../ProjectCard";
import { useEffect, useState } from "react";
import { ProjectModal } from "../ProjectModal";
import type { Project } from "@/types";

export function ProjectsSection() {
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	useEffect(() => {
		if (selectedSkills.length === 0) {
			setFilteredProjects(projects);
			return;
		}

		const newFilteredProjects = projects.filter((project) => {
			const projectTechs = project.technologies.map(
				(tech) => tech.name
			) as string[];

			return selectedSkills.every((selectedSkill) =>
				projectTechs.includes(selectedSkill)
			);
		});

		console.log({ selectedSkills, newFilteredProjects });

		setFilteredProjects(newFilteredProjects);
	}, [selectedSkills]);

	const handleSelectSkill = (techName: string) => {
		if (selectedSkills.includes(techName)) {
			const newSelectedSkills = selectedSkills.filter(
				(selectedTechName) => selectedTechName !== techName
			);

			setSelectedSkills(newSelectedSkills);

			return;
		}

		const newSelectedSkills = [...selectedSkills, techName];

		setSelectedSkills(newSelectedSkills);
	};

	return (
		<>
			<section className="mb-6 flex flex-wrap gap-6 justify-center" id="skills">
				{Object.values(TECHNOLOGIES)
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((tech) => (
						<SkillCard
							isSelected={selectedSkills.includes(tech.name)}
							key={tech.name}
							onClick={() => handleSelectSkill(tech.name)}
						>
							<tech.Icon className="transition-[filter] duration-500" />
						</SkillCard>
					))}
			</section>

			<ul
				className="flex flex-wrap justify-center overflow-x-auto px-4 gap-6"
				id="projects"
			>
				{filteredProjects.length === 0 ? (
					<p className="mx-auto my-10 text-sm">
						No se encontraron proyectos con esas tecnologías...
					</p>
				) : (
					filteredProjects.map((project) => (
						<li key={project.name}>
							<ProjectCard
								project={project}
								onClickShowProject={() => setSelectedProject(project)}
							/>
						</li>
					))
				)}
			</ul>

			{selectedProject && (
				<ProjectModal
					selectedProject={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</>
	);
}
