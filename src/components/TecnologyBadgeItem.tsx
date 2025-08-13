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
			className="py-1 px-4 flex gap-1.5 items-center text-xs font-medium rounded-full not-hover:[background-color:_transparent_!important] transition-color duration-300"
			style={{
				outline: `2px solid color-mix(in oklab, ${colors.primary} 50%, transparent)`,
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
