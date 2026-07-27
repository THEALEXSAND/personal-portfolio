import type { Technology } from "@/types";

interface Props {
	children: string;
	rounded?: "full" | "xs";
	technology: Technology;
}

export function TechnologyBadgeItem({
	children,
	rounded = "full",
	technology,
}: Props) {
	const { Icon } = technology;

	const currentStyles = `${technology.styles.outlineColor} ${technology.styles.backgroundColor} ${technology.styles.color}`;

	return (
		<li
			className={`w-fit outline-2 py-1 flex gap-1.5 items-center text-xs font-medium transition-color duration-300 ${currentStyles} ${rounded === "full" ? "px-4 rounded-full" : "px-2 rounded-xs"}`}
		>
			<Icon className="size-4" />
			<span>{children}</span>
		</li>
	);
}
