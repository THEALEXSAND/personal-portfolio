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
		styles: { outlineColor: "outline-[#ff5d01]/50", backgroundColor: "bg-[#ff5d01]/25", color: "text-[color-mix(in_oklab,_#ff5d01_25%,_white)]" },
	},
	CSS: {
		name: "CSS",
		Icon: CSSIcon,
		styles: { outlineColor: "outline-[#663399]/50" ,backgroundColor: "bg-[#663399]/25", color: "text-[color-mix(in_oklab,_#663399_25%,_white)]" },
	},
	HTML: {
		name: "HTML",
		Icon: HTMLIcon,
		styles: { outlineColor: "outline-[#e44d26]/50" ,backgroundColor: "bg-[#e44d26]/25", color: "text-[color-mix(in_oklab,_#e44d26_25%,_white)]" },
	},
	JAVASCRIPT: {
		name: "JavaScript",
		Icon: JavaScriptIcon,
		styles: { outlineColor: "outline-[#F0DC4E]/50" ,backgroundColor: "bg-[#F0DC4E]/25", color: "text-[color-mix(in_oklab,_#F0DC4E_25%,_white)]" },
	},
	LARAVEL: {
		name: "Laravel",
		Icon: LaravelIcon,
		styles: { outlineColor: "outline-[#FF2D20]/50" ,backgroundColor: "bg-[#FF2D20]/25", color: "text-[color-mix(in_oklab,_#FF2D20_25%,_white)]" },
	},
	MY_SQL: {
		name: "MySQL",
		Icon: MySQLIcon,
		styles: { outlineColor: "outline-[#5d87a1]/50" ,backgroundColor: "bg-[#5d87a1]/25", color: "text-[color-mix(in_oklab,_#5d87a1_25%,_white)]" },
	},
	MONGO_DB: {
		name: "MongoDB",
		Icon: MongoIcon,
		styles: { outlineColor: "outline-[#3f9143]/50" ,backgroundColor: "bg-[#3f9143]/25", color: "text-[color-mix(in_oklab,_#3f9143_25%,_white)]" },
	},
	NEXT_JS: {
		name: "Next.js",
		Icon: NextJSIcon,
		styles: { outlineColor: "outline-[#FFFFFF]/50" ,backgroundColor: "bg-[#FFFFFF]/25", color: "text-[color-mix(in_oklab,_#FFFFFF_25%,_white)]" },
	},
	NODE_JS: {
		name: "Node.js",
		Icon: NodeJSIcon,
		styles: { outlineColor: "outline-[#5FA04E]/50" ,backgroundColor: "bg-[#5FA04E]/25", color: "text-[color-mix(in_oklab,_#5FA04E_25%,_white)]" },
	},
	PHP: {
		name: "PHP",
		Icon: PHPIcon,
		styles: { outlineColor: "outline-[#8993be]/50" ,backgroundColor: "bg-[#8993be]/25", color: "text-[color-mix(in_oklab,_#8993be_25%,_white)]" },
	},
	POSTGRE_SQL: {
		name: "PostgreSQL",
		Icon: PostgreSQLIcon,
		styles: { outlineColor: "outline-[#336791]/50" ,backgroundColor: "bg-[#336791]/25", color: "text-[color-mix(in_oklab,_#336791_25%,_white)]" },
	},
	REACT: {
		name: "React",
		Icon: ReactIcon,
		styles: { outlineColor: "outline-[#60DBFA]/50" ,backgroundColor: "bg-[#60DBFA]/25", color: "text-[color-mix(in_oklab,_#60DBFA_25%,_white)]" },
	},
	SASS: {
		name: "SASS",
		Icon: SASSIcon,
		styles: { outlineColor: "outline-[#cd6799]/50" ,backgroundColor: "bg-[#cd6799]/25", color: "text-[color-mix(in_oklab,_#cd6799_25%,_white)]" },
	},
	TAILWIND: {
		name: "Tailwind",
		Icon: TailwindIcon,
		styles: { outlineColor: "outline-[#35BEF8]/50" ,backgroundColor: "bg-[#35BEF8]/25", color: "text-[color-mix(in_oklab,_#35BEF8_25%,_white)]" },
	},
	TYPESCRIPT: {
		name: "TypeScript",
		Icon: TypeScriptIcon,
		styles: { outlineColor: "outline-[#3178c6]/50" ,backgroundColor: "bg-[#3178c6]/25", color: "text-[color-mix(in_oklab,_#3178c6_25%,_white)]" },
	},
} as const;
