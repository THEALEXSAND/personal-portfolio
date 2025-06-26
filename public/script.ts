import { skillCards, projects } from "../src/mocks/data";

const $skillsContainer = document.getElementById("skills");

const selectedTechnologies = [];
export let filteredProjects = projects;

const setProjectFilters = () => {
	if (selectedTechnologies.length === 0) {
		filteredProjects = projects;
		return;
	}

	filteredProjects = projects.filter((project) => {
		const projectTechnologies = project.technologies.map((tech) => tech.name);

		return selectedTechnologies.some((filter) =>
			projectTechnologies.includes(filter)
		);
	});

	console.log({ filteredProjects, selectedTechnologies });
};

$skillsContainer.childNodes.forEach((card) => {
	card.addEventListener("click", () => {
		const cardName = card.getAttribute("aria-label");

		if (selectedTechnologies.includes(cardName)) {
			selectedTechnologies.splice(selectedTechnologies.indexOf(cardName), 1);
			card.classList.add("[&>*]:grayscale-[.8]");
		} else {
			selectedTechnologies.push(cardName);
			card.classList.remove("[&>*]:grayscale-[.8]");
		}

		setProjectFilters();
	});
});
