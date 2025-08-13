import { TECHNOLOGIES } from "./technologies";

export const projects = [
	{
		name: "ECOMODA - ERP",
		imageUrl: "screenshots/pome-roses-price-calculator.png",
		description:
			"Aplicación web para la gestión de diversos departamentos (RRHH, Sucursales, Finanzas, Compra y Venta, Producción, Inventario, etc.) de una empresa de diseño de moda.",
		technologies: [
			TECHNOLOGIES.NEXT_JS,
			TECHNOLOGIES.TAILWIND,
			TECHNOLOGIES.TYPESCRIPT,
			TECHNOLOGIES.POSTGRE_SQL,
		],
	},
	{
		name: "Pome Roses - Price Calculator",
		imageUrl: "screenshots/pome-roses-price-calculator.png",
		description:
			"Aplicación para calcular el precio de detalles y arreglos florales. Incluye la generación de PDFs con los detalles de la cotización y facturización.",
		technologies: [
			TECHNOLOGIES.REACT,
			TECHNOLOGIES.TAILWIND,
			TECHNOLOGIES.TYPESCRIPT,
		],
	},
	{
		name: "MascoClinic APP",
		imageUrl: "screenshots/masco-clinic-app.png",
		description:
			"Front-end de la aplicación web de MascoClinic. Incluye conexión con su API y funcionalidades de usuario, como la gestion de mascotas y dueños, citas y la visualización de historiales médicos.",
		technologies: [
			TECHNOLOGIES.NEXT_JS,
			TECHNOLOGIES.TAILWIND,
			TECHNOLOGIES.JAVASCRIPT,
		],
	},
	{
		name: "MascoClinic API",
		imageUrl: "screenshots/masco-clinic-api.png",
		description:
			"Backend de la aplicación web de MascoClinic. Proporciona servicios para la gestión de datos de mascotas y dueños.",
		technologies: [TECHNOLOGIES.PHP, TECHNOLOGIES.LARAVEL, TECHNOLOGIES.MY_SQL],
	},
	{
		name: "AnimLibrary",
		imageUrl: "screenshots/animlibrary-project.png",
		description:
			"Mi primer proyecto. Una aplicación monolitica con catálogo y streaming de animes, OVAS y peliculas.",
		technologies: [
			TECHNOLOGIES.HTML,
			TECHNOLOGIES.SASS,
			TECHNOLOGIES.JAVASCRIPT,
			TECHNOLOGIES.NODE_JS,
			TECHNOLOGIES.MONGO_DB,
		],
	},
];
