import type { JSX } from "astro/jsx-runtime";

interface Props {
	imageUrl: string;
	name: string;
	description: string;
	technologies: {
		name: string;
		Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
		colors: { primary: string };
	}[];
}

export function ProjectCard({
	imageUrl,
	name,
	description,
	technologies,
}: Props) {
	return (
		<article className="max-w-90 rounded-md shadow-lg overflow-hidden [&:hover>img]:scale-110">
			<img
				className="w-full object-cover aspect-video transition-transform duration-300"
				src={imageUrl}
				alt="No se pudo cargar la imagen"
				loading="lazy"
			/>

			<div className="p-4 bg-[#151515]">
				<h4 className="text-base font-medium mb-2">{name}</h4>
				{/* <p className="text-[13px] font-light opacity-80 mb-2">{description}</p> */}

				<ul className="flex flex-wrap justify-center items-center gap-2">
					{technologies.map(({ Icon, name, colors }) => (
						<TechnologyBadgeItem key={name} Icon={Icon} colors={colors}>
							{name}
						</TechnologyBadgeItem>
					))}
				</ul>
			</div>
		</article>
	);
}

interface TechnologyBadgeItemProps {
	children: string;
	Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	colors: { primary: string };
}

function TechnologyBadgeItem({
	children,
	Icon,
	colors,
}: TechnologyBadgeItemProps) {
	return (
		<li
			className="py-1 px-4 flex gap-1.5 items-center text-xs font-medium rounded-full"
			style={{
				backgroundColor: `color-mix(in oklab, ${colors.primary} 25%, transparent)`,
				color: `color-mix(in oklab, ${colors.primary} 25%, white)`,
			}}
			key={Icon.name}
		>
			<Icon className="size-4.5" /> <span className="h-3.5">{children}</span>
		</li>
	);
}

/*
<article className="max-w-90 rounded-md shadow-lg overflow-hidden [&:hover>img]:scale-110">
	<img
		className="w-full object-cover aspect-video transition-transform duration-300"
		src={imageUrl}
		alt="No se pudo cargar la imagen"
		loading="lazy"
	/>
	<div className="p-4 bg-[#151515]">
		<h4 className="text-base font-medium">{name}</h4>
		<p className="text-[13px] font-light opacity-80 mb-2">{description}</p>
		<ul className="flex flex-wrap justify-center items-center gap-2">
			{technologies.map(({ Icon, name, colors }) => (
				<TechnologyBadgeItem Icon={Icon} colors={colors}>
					{name}
				</TechnologyBadgeItem>
			))}
		</ul>
	</div>
</article>
*/
