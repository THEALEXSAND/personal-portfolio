import { AstroIcon } from "@/components/icons/AstroIcon";
import { CSSIcon } from "@/components/icons/CSSIcon";
import { HTMLIcon } from "@/components/icons/HTMLIcon";
import { JavaScriptIcon } from "@/components/icons/JavaScriptIcon";
import { LaravelIcon } from "@/components/icons/LaravelIcon";
import { MongoIcon } from "@/components/icons/MongoIcon";
import { MySQLIcon } from "@/components/icons/MySQLIcon";
import { NextJSIcon } from "@/components/icons/NextJSIcon";
import { NodeJSIcon } from "@/components/icons/NodeJSIcon";
import { PHPIcon } from "@/components/icons/PHPIcon";
import { PostgreSQLIcon } from "@/components/icons/PostgreSQLIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { SASSIcon } from "@/components/icons/SASSIcon";
import { TailwindIcon } from "@/components/icons/TailwindIcon";
import { TypeScriptIcon } from "@/components/icons/TypeScriptIcon";

export const skillCards = [
	{ name: "HTML", Icon: HTMLIcon, colors: { primary: "#e44d26" } },
	{ name: "CSS", Icon: CSSIcon, colors: { primary: "#663399" } },
	{
		name: "JavaScript",
		Icon: JavaScriptIcon,
		colors: { primary: "#F0DC4E" },
	},
	{
		name: "TypeScript",
		Icon: TypeScriptIcon,
		colors: { primary: "#3178c6" },
	},
	{
		name: "Node.js",
		Icon: NodeJSIcon,
		colors: { primary: "#5FA04E" },
	},
	{
		name: "React",
		Icon: ReactIcon,
		colors: { primary: "#60DBFA" },
	},
	{
		name: "Next.js",
		Icon: NextJSIcon,
		colors: { primary: "#FFFFFF" },
	},
	{
		name: "Astro",
		Icon: AstroIcon,
		colors: { primary: "#ff5d01" },
	},
	{ name: "SASS", Icon: SASSIcon, colors: { primary: "#cd6799" } },
	{
		name: "Tailwind",
		Icon: TailwindIcon,
		colors: { primary: "#35BEF8" },
	},
	{ name: "PHP", Icon: PHPIcon, colors: { primary: "#8993be" } },
	{
		name: "Laravel",
		Icon: LaravelIcon,
		colors: { primary: "#FF2D20" },
	},
	{
		name: "MySQL",
		Icon: MySQLIcon,
		colors: { primary: "#5d87a1" },
	},
	{
		name: "PostgreSQL",
		Icon: PostgreSQLIcon,
		colors: { primary: "#336791" },
	},
	{
		name: "MongoDB",
		Icon: MongoIcon,
		colors: { primary: "#3f9143" },
	},
];

export const projects = [
	{
		name: "ECOMODA - ERP",
		imageUrl: "screenshots/pome-roses-price-calculator.png",
		description:
			"Aplicación web para la gestión de diversos departamentos (RRHH, Sucursales, Finanzas, Compra y Venta, Producción, Inventario, etc.) de una empresa de diseño de moda.",
		technologies: [skillCards[6], skillCards[9], skillCards[3]],
	},
	{
		name: "Pome Roses - Price Calculator",
		imageUrl: "screenshots/pome-roses-price-calculator.png",
		description:
			"Aplicación para calcular el precio de detalles y arreglos florales. Incluye la generación de PDFs con los detalles de la cotización y facturización.",
		technologies: [skillCards[5], skillCards[9], skillCards[3]],
	},
	{
		name: "MascoClinic APP",
		imageUrl:
			"screenshots/masco-clinic-app.png",
		description:
			"Front-end de la aplicación web de MascoClinic. Incluye conexión con su API y funcionalidades de usuario, como la gestion de mascotas y dueños, citas y la visualización de historiales médicos.",
		technologies: [skillCards[6], skillCards[9], skillCards[2]],
	},
	{
		name: "MascoClinic API",
		imageUrl:
			"screenshots/masco-clinic-api.png",
		description:
			"Backend de la aplicación web de MascoClinic. Proporciona servicios para la gestión de datos de mascotas y dueños.",
		technologies: [skillCards[10], skillCards[11], skillCards[12]],
	},
	{
		name: "AnimLibrary",
		imageUrl: "screenshots/animlibrary-project.png",
		description:
			"Mi primer proyecto. Una aplicación monolitica con catálogo y streaming de animes, OVAS y peliculas.",
		technologies: [
			skillCards[0],
			skillCards[8],
			skillCards[2],
			skillCards[4],
			skillCards[14],
		],
	},
];
