import type { Project } from "@/types";
import { TECHNOLOGIES } from "./technologies-data";

const {
	EXPRESS_JS,
	HTML,
	JAVASCRIPT,
	LARAVEL,
	MONGO_DB,
	MY_SQL,
	NEXT_JS,
	NODE_JS,
	PHP,
	POSTGRE_SQL,
	REACT,
	SASS,
	TAILWIND,
	TYPESCRIPT,
} = TECHNOLOGIES;

export const projects: Project[] = [
	{
		name: "Valle Verde Laboratorio",
		images: ["screenshots/valle-verde-lab.png"],
		description:
			"Aplicación web para la gestión de recepciones de leche y análisis de su calidad. Incluye la generación de reportes y un modulo de acceso para los productores de leche, donde pueden consultar el estado de sus recepciones y los resultados de los análisis de calidad.",
		technologies: [NEXT_JS, TAILWIND, TYPESCRIPT, LARAVEL, PHP, MY_SQL],
		features: [
			"Dashboard interactivo",
			"Gestión de inventario y contable",
			"Reportes en tiempo real",
			"Sistema de roles",
		],
		featured: true,
		year: 2025,
		duration: "4 meses",
	},
	{
		name: "ECOMODA - ERP",
		images: [],
		description:
			"Aplicación web para la gestión de diversos departamentos (RRHH, Sucursales, Finanzas, Compra y Venta, Producción, Inventario, etc.) de una empresa de diseño de moda.",
		technologies: [
			NEXT_JS,
			TAILWIND,
			TYPESCRIPT,
			NODE_JS,
			EXPRESS_JS,
			POSTGRE_SQL,
		],
		features: [
			"Dashboard interactivo",
			"Gestión de inventario y contable",
			"Reportes en tiempo real",
			"Sistema de roles",
		],
		featured: true,
		year: 2025,
		duration: "4 meses",
	},
	{
		name: "Pome Roses - Price Calculator",
		images: ["screenshots/pome-roses-price-calculator.png"],
		description:
			"App para calcular el precio de detalles y arreglos florales. Incluye la generación de reportes en PDF con los detalles de la cotización y facturización.",
		technologies: [REACT, TAILWIND, TYPESCRIPT],
		features: [],
		featured: true,
		year: 2024,
		duration: "2 meses",
	},
	{
		name: "MascoClinic APP",
		images: ["screenshots/masco-clinic-app.png"],
		description:
			"Front-end de la aplicación web de MascoClinic. Incluye conexión con una API RESTful robusta que proporciona servicios para la gestión de datos de mascotas, dueños, etc.",
		technologies: [NEXT_JS, TAILWIND, JAVASCRIPT, PHP, LARAVEL, MY_SQL],
		features: [],
		featured: false,
		year: 2024,
		duration: "4 meses",
	},
	{
		name: "AnimLibrary",
		images: ["screenshots/animlibrary-project.png"],
		description:
			"Mi primer proyecto. Una aplicación monolitica con catálogo y streaming de animes, OVAS y peliculas.",
		technologies: [HTML, SASS, JAVASCRIPT, NODE_JS, EXPRESS_JS, MONGO_DB],
		features: [],
		featured: false,
		year: 2022,
		duration: "6 meses",
	},
];
