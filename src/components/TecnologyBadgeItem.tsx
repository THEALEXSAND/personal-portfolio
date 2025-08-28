import type { Technology } from "@/types";

interface Props {
	children: string;
	technology: Technology;
}

export function TechnologyBadgeItem({
	children,
	technology
}: Props) {
	const { Icon } = technology;

	return (
		<li
			className="outline-2 py-1 px-4 flex gap-1.5 items-center text-xs font-medium rounded-full transition-color duration-300"
			style={{
				outlineColor: `color-mix(in oklab, ${technology.colors.primary} 50%, transparent)`,
				backgroundColor: `color-mix(in oklab, ${technology.colors.primary} 25%, transparent)`,
				color: `color-mix(in oklab, ${technology.colors.primary} 25%, white)`,
			}}
		>
			<Icon className="size-4" />
			<span>{children}</span>
		</li>
	);
}
