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

export const TECHNOLOGIES = {
	ASTRO: {
		name: "Astro",
		Icon: AstroIcon,
		colors: { primary: "#ff5d01" },
	},
	CSS: {
		name: "CSS",
		Icon: CSSIcon,
		colors: { primary: "#663399" },
	},
	HTML: {
		name: "HTML",
		Icon: HTMLIcon,
		colors: { primary: "#e44d26" },
	},
	JAVASCRIPT: {
		name: "JavaScript",
		Icon: JavaScriptIcon,
		colors: { primary: "#F0DC4E" },
	},
	LARAVEL: {
		name: "Laravel",
		Icon: LaravelIcon,
		colors: { primary: "#FF2D20" },
	},
	MY_SQL: {
		name: "MySQL",
		Icon: MySQLIcon,
		colors: { primary: "#5d87a1" },
	},
	MONGO_DB: {
		name: "MongoDB",
		Icon: MongoIcon,
		colors: { primary: "#3f9143" },
	},
	NEXT_JS: {
		name: "Next.js",
		Icon: NextJSIcon,
		colors: { primary: "#FFFFFF" },
	},
	NODE_JS: {
		name: "Node.js",
		Icon: NodeJSIcon,
		colors: { primary: "#5FA04E" },
	},
	PHP: {
		name: "PHP",
		Icon: PHPIcon,
		colors: { primary: "#8993be" },
	},
	POSTGRE_SQL: {
		name: "PostgreSQL",
		Icon: PostgreSQLIcon,
		colors: { primary: "#336791" },
	},
	REACT: {
		name: "React",
		Icon: ReactIcon,
		colors: { primary: "#60DBFA" },
	},
	SASS: {
		name: "SASS",
		Icon: SASSIcon,
		colors: { primary: "#cd6799" },
	},
	TAILWIND: {
		name: "Tailwind",
		Icon: TailwindIcon,
		colors: { primary: "#35BEF8" },
	},
	TYPESCRIPT: {
		name: "TypeScript",
		Icon: TypeScriptIcon,
		colors: { primary: "#3178c6" },
	},
} as const;
