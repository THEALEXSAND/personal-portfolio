import { TechnologyBadgeItem } from "./TechnologyBadgeItem";
import { StarIcon } from "./icons/StarIcon";
import type { Project } from "@/types";

interface Props {
	project: Project;
	onClickShowProject: () => void;
}

export function ProjectCard({ project, onClickShowProject }: Props) {
	const imageUrl: string | undefined = project.images[0];

	return (
		<article className="animate-scroll-fade-in max-w-105 h-full flex flex-col rounded-md shadow-lg overflow-hidden opacity-0 [&:hover>img]:scale-110 [&:not(*:hover)_li]:bg-[transparent_!important]">
			<div className="relative">
				{imageUrl ? (
					<img
						className="w-full h-48 object-top-right object-cover aspect-video transition-transform duration-300"
						src={imageUrl}
						alt="No se pudo cargar la imagen"
						loading="lazy"
					/>
				) : (
					<ProjectCardSkeleton />
				)}
				{project.featured && (
					<span className="absolute top-2 right-2 p-1 rounded-full bg-primary">
						<StarIcon className="size-5" />
					</span>
				)}
			</div>

			<div className="z-1 bg-black/25 backdrop-blur-md  flex flex-col grow gap-y-4 p-4">
				<h4 className="text-base font-medium">{project.name}</h4>
				<p className="text-[13px] font-light opacity-80">
					{project.description}
				</p>

				<ul className="flex flex-wrap items-center gap-2">
					{project.technologies.map((tech) => (
						<TechnologyBadgeItem key={tech.name} technology={tech}>
							{tech.name}
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

function ProjectCardSkeleton() {
	return (
		<div className="relative h-44 bg-linear-to-br from-[#181a26] to-[#0d0e15] p-4 flex flex-col">
			<div className="flex gap-1.5 mb-3">
				<span className="h-2 w-2 rounded-full bg-white/10"></span>
				<span className="h-2 w-2 rounded-full bg-white/10"></span>
				<span className="h-2 w-2 rounded-full bg-white/10"></span>
			</div>
			<div className="flex-1 rounded-lg bg-black/30 border border-white/5 p-3 space-y-2">
				<div className="h-2 w-1/3 rounded bg-white/10"></div>
				<div className="grid grid-cols-3 gap-2 mt-2">
					<div className="h-8 rounded bg-white/5"></div>
					<div className="h-8 rounded bg-white/5"></div>
					<div className="h-8 rounded bg-white/5"></div>
				</div>
				<div className="h-2 w-full rounded bg-white/5 mt-2"></div>
				<div className="h-2 w-5/6 rounded bg-white/5"></div>
			</div>
		</div>
	);
}
