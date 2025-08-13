import type { JSX } from "astro/jsx-runtime";
import { TechnologyBadgeItem } from "./TecnologyBadgeItem";

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
		<article className="max-w-105 h-full bg-black/25 flex flex-col backdrop-blur-md rounded-md shadow-lg overflow-hidden [&:hover>img]:scale-110">
			<img
				className="w-full h-48 object-cover aspect-video transition-transform duration-300"
				src={imageUrl}
				alt="No se pudo cargar la imagen"
				loading="lazy"
			/>

			<div className="flex flex-col flex-grow gap-y-4 p-4">
				<h4 className="text-base font-medium">{name}</h4>
				<p className="text-[13px] font-light opacity-80">{description}</p>

				<ul className="flex flex-wrap items-center gap-2">
					{technologies.map(({ Icon, name, colors }) => (
						<TechnologyBadgeItem key={name} Icon={Icon} colors={colors}>
							{name}
						</TechnologyBadgeItem>
					))}
				</ul>

				<button className="w-full bg-[#9850d3] text-sm font-medium p-2 mt-auto rounded-sm flex gap-x-2 justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
					>
						<g fill="none" stroke="currentColor" strokeWidth="2">
							<path
								strokeLinecap="round"
								d="M9 4.46A9.8 9.8 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.5 14.5 0 0 1 5 6.821"
							/>
							<path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
						</g>
					</svg>
					Ver Proyecto
				</button>
			</div>
		</article>
	);
}
