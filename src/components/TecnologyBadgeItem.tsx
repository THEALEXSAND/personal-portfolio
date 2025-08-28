import type { JSX } from "astro/jsx-runtime";

interface TechnologyBadgeItemProps {
	children: string;
	Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	colors: { primary: string };
}

export function TechnologyBadgeItem({
	children,
	Icon,
	colors,
}: TechnologyBadgeItemProps) {
	return (
		<li
			className="outline-2 py-1 px-4 flex gap-1.5 items-center text-xs font-medium rounded-full transition-color duration-300"
			style={{
				outlineColor: `color-mix(in oklab, ${colors.primary} 50%, transparent)`,
				backgroundColor: `color-mix(in oklab, ${colors.primary} 25%, transparent)`,
				color: `color-mix(in oklab, ${colors.primary} 25%, white)`,
			}}
			key={Icon.name}
		>
			<Icon className="size-4" />
			<span>{children}</span>
		</li>
	);
}
