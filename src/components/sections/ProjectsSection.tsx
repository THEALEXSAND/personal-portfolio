import { skillCards, projects } from "@/mocks/data";
import { SkillCard } from "../SkillCard";
import { ProjectCard } from "../ProjectCard";
import { useEffect, useState } from "react";

export function ProjectsSection() {
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	useEffect(() => {
		if (selectedSkills.length === 0) {
			setFilteredProjects(projects);
			return;
		}

		const newFilteredProjects = projects.filter((project) => {
			const projectTechs = project.technologies.map((tech) => tech.name);

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
				{skillCards
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((card) => (
						<SkillCard
							isSelected={selectedSkills.includes(card.name)}
							key={card.name}
							onClick={() => handleSelectSkill(card.name)}
						>
							<card.Icon className="transition-[filter] duration-500" />
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
								imageUrl={project.imageUrl}
								name={project.name}
								description={project.description}
								technologies={project.technologies}
							/>
						</li>
					))
				)}
			</ul>
		</>
	);
}
