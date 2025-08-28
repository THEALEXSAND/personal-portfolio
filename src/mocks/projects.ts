import type { Project } from "@/types";
import { TECHNOLOGIES } from "./technologies";

export const projects: Project[] = [
	{
		name: "ECOMODA - ERP",
		images: [
			"screenshots/pome-roses-price-calculator.png",
			"screenshots/masco-clinic-app.png",
			"screenshots/animlibrary-project.png",
		],
		description:
			"Aplicación web para la gestión de diversos departamentos (RRHH, Sucursales, Finanzas, Compra y Venta, Producción, Inventario, etc.) de una empresa de diseño de moda.",
		technologies: [
			TECHNOLOGIES.NEXT_JS,
			TECHNOLOGIES.TAILWIND,
			TECHNOLOGIES.TYPESCRIPT,
			TECHNOLOGIES.POSTGRE_SQL,
		],
		features: [
			"Dashboard interactivo",
			"Gestión de inventario y contable",
			"Reportes en tiempo real",
			"Sistema de roles",
		],
		featured: true,
		year: 2025,
	},
	{
		name: "Pome Roses - Price Calculator",
		images: ["screenshots/pome-roses-price-calculator.png"],
		description:
			"Aplicación para calcular el precio de detalles y arreglos florales. Incluye la generación de PDFs con los detalles de la cotización y facturización.",
		technologies: [
			TECHNOLOGIES.REACT,
			TECHNOLOGIES.TAILWIND,
			TECHNOLOGIES.TYPESCRIPT,
		],
		features: [],
		featured: true,
		year: 2024,
	},
	{
		name: "MascoClinic APP",
		images: ["screenshots/masco-clinic-app.png"],
		description:
			"Front-end de la aplicación web de MascoClinic. Incluye conexión con su API y funcionalidades de usuario, como la gestion de mascotas y dueños, citas y la visualización de historiales médicos.",
		technologies: [
			TECHNOLOGIES.NEXT_JS,
			TECHNOLOGIES.TAILWIND,
			TECHNOLOGIES.JAVASCRIPT,
		],
		features: [],
		featured: false,
		year: 2024,
	},
	{
		name: "MascoClinic API",
		images: ["screenshots/masco-clinic-api.png"],
		description:
			"Backend para el ecosistema de MascoClinic. Una API RESTful robusta que proporciona servicios para la gestión de datos de mascotas, dueños, etc.",
		technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.LARAVEL, TECHNOLOGIES.MY_SQL],
		features: [],
		featured: false,
		year: 2023,
	},
	{
		name: "AnimLibrary",
		images: ["screenshots/animlibrary-project.png"],
		description:
			"Mi primer proyecto. Una aplicación monolitica con catálogo y streaming de animes, OVAS y peliculas.",
		technologies: [
			TECHNOLOGIES.HTML,
			TECHNOLOGIES.SASS,
			TECHNOLOGIES.JAVASCRIPT,
			TECHNOLOGIES.NODE_JS,
			TECHNOLOGIES.MONGO_DB,
		],
		features: [],
		featured: false,
		year: 2022,
	},
];
