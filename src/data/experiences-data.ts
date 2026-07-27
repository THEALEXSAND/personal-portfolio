import { TECHNOLOGIES } from "./technologies-data";

const {
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

export const experiences = [
	{
		title: "Análista de Informatica",
		company: "Industria Lácteos Valle Verde C.A",
		location: "San Felipe, Yaracuy",
		date: "Febrero 2026 — Julio 2026",
		description:
			"Lideré el desarrollo de una aplicación web para la gestión de recepciones de leche y análisis de su calidad, pasando de un Excel desorganizado a una solución digital que mejoró la eficiencia operativa de la empresa.",
		items: [
			"Diseñé y desarrollé una aplicación web para la gestión de recepciones de leche y análisis de su calidad, mejorando la eficiencia operativa de la empresa.",
			"Desarrollé el frontend con Next.js, TypeScript y Tailwind CSS, implementando interfaces modernas y responsivas.",
			"Diseñé y desarrollé una API REST en Laravel con autenticación JWT.",
			"Desplegado en un servidor de AWS EC2 y certificado SSL de Let's Encrypt, asegurando la disponibilidad y seguridad de la aplicación.",
		],
		stack: [NEXT_JS, TAILWIND, TYPESCRIPT, LARAVEL, PHP, MY_SQL],
	},
	{
		title: "Desarrollador Full-stack",
		company: "MascoClinic C.A",
		location: "Barquisimeto, Lara",
		date: "Enero 2024 — Septiembre 2024",
		description:
			"Encargado de liderar un equipo de desarrollo para una aplicación web de gestión de citas de las mascotas de los clientes de la clínica veterinaria y generación de informes médicos. Mejorando la experiencia de los usuarios y la eficiencia de los veterinarios.",

		items: [
			"Lideré un equipo de desarrollo para crear una aplicación web de gestión de citas de mascotas e historiales médicos.",
			"Desarrollé el frontend con Next.js, TypeScript y Tailwind CSS, implementando interfaces modernas y responsivas.",
			"Diseñé y desarrollé una API REST en Laravel con autenticación JWT.",
			"Mejoré la eficiencia operativa de la clínica al digitalizar sus procesos, reduciendo tiempos de gestión y mejorando la experiencia del cliente.",
		],
		stack: [NEXT_JS, TAILWIND, JAVASCRIPT, LARAVEL, PHP, MY_SQL],
	},
	{
		title: "Desarrollador Front-end",
		company: "Pome Roses",
		location: "San Felipe, Yaracuy",
		date: "Diciembre 2023 — Noviembre 2024",
		description:
			"Responsable del desarrollo y despliegue de una aplicación web para calcular presupuestos y generar PDFs de las facturas de los productos en las sucursales de la empresa.",
		items: [
			"Diseñé y desarrollé una aplicación web para cálculo automático de precios y generación de facturas.",
			"Implementada con React, TypeScript y Tailwind CSS.",
			"Automaticé procesos de facturación, reduciendo el tiempo de gestión manual en un 60%.",
		],
		stack: [REACT, TAILWIND, TYPESCRIPT],
	},
];
