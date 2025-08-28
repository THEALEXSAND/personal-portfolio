import type { JSX } from "astro/jsx-runtime";
import { TechnologyBadgeItem } from "./TecnologyBadgeItem";
import { StarIcon } from "./icons/StarIcon";

interface Props {
	imageUrl: string;
	name: string;
	description: string;
	technologies: {
		name: string;
		Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
		colors: { primary: string };
	}[];
	featured: boolean;
	onClickShowProject: () => void;
}

export function ProjectCard({
	imageUrl,
	name,
	description,
	technologies,
	featured,
	onClickShowProject,
}: Props) {
	return (
		<article className="max-w-105 h-full flex flex-col rounded-md shadow-lg overflow-hidden [&:hover>img]:scale-110 [&:not(*:hover)_li]:[background-color:_transparent_!important]">
			<div className="relative">
				<img
					className="w-full h-48 object-cover aspect-video transition-transform duration-300"
					src={imageUrl}
					alt="No se pudo cargar la imagen"
					loading="lazy"
				/>
				{featured && (
					<span className="absolute top-2 right-2 p-1 rounded-full bg-primary">
						<StarIcon className="size-5" />
					</span>
				)}
			</div>

			<div className="z-1 bg-black/25 backdrop-blur-md  flex flex-col flex-grow gap-y-4 p-4">
				<h4 className="text-base font-medium">{name}</h4>
				<p className="text-[13px] font-light opacity-80">{description}</p>

				<ul className="flex flex-wrap items-center gap-2">
					{technologies.map(({ Icon, name, colors }) => (
						<TechnologyBadgeItem key={name} Icon={Icon} colors={colors}>
							{name}
						</TechnologyBadgeItem>
					))}
				</ul>

				<button
					onClick={onClickShowProject}
					className="w-full bg-primary text-sm font-medium p-2 mt-auto rounded-sm flex gap-x-2 justify-center items-center"
				>
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
