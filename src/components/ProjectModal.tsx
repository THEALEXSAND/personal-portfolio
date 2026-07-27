import { useState } from "react";
import { TechnologyBadgeItem } from "./TechnologyBadgeItem";
import { StarIcon } from "./icons/StarIcon";
import { Dialog } from "./Dialog";
import type { Project } from "@/types";

interface Props {
	selectedProject: Project | null;
	onClose: () => void;
}

export function ProjectModal({ selectedProject, onClose }: Props) {
	return (
		<>
			{selectedProject && (
				<Dialog
					className="fixed top-1/2 left-1/2 -translate-1/2 w-5xl bg-slate-900 p-5 text-white rounded-lg shadow-lg"
					onClose={onClose}
					isOpen={selectedProject !== null}
				>
					<article>
						<header className="flex justify-between items-start gap-x-4">
							<div>
								<h3 className="mb-4 text-2xl font-semibold">
									{selectedProject.name}
								</h3>
								<p className="max-w-4/5 mb-4 opacity-80 text-sm">
									{selectedProject.description}
								</p>
							</div>

							<div className="flex items-center gap-x-4">
								<span className="flex items-center gap-x-1 py-1 px-2 rounded-full bg-primary text-xs font-medium">
									<StarIcon className="size-4" />
									Destacado
								</span>

								<button
									onClick={onClose}
									className="p-2 rounded transition-colors hover:bg-white/15"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
										/>
									</svg>
								</button>
							</div>
						</header>
						<main className="grid grid-cols-2 gap-8 py-10 border-y border-slate-700">
							<ImagesSection images={selectedProject.images} />
							<div className="flex flex-col gap-y-3">
								<section className="grid grid-cols-2 gap-4">
									<article className="bg-slate-800 p-4 rounded-lg">
										<div className="flex items-center gap-2 mb-2">
											<span className="text-sm font-medium text-gray-300">
												Año
											</span>
										</div>
										<p className="text-white font-semibold">
											{selectedProject.year}
										</p>
									</article>
									<article className="bg-slate-800 p-4 rounded-lg">
										<div className="flex items-center gap-2 mb-2">
											<span className="text-sm font-medium text-gray-300">
												Duración
											</span>
										</div>
										<p className="text-white font-semibold">
											{selectedProject.duration}
										</p>
									</article>
								</section>

								<section>
									<h4 className="flex items-center gap-x-2 mb-2 font-medium">
										<svg
											className="text-primary"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z"
											></path>
										</svg>
										Tecnologías Utilizadas
									</h4>
									<ul className="flex flex-wrap gap-x-2 items-center [&>li:not(*:hover)]:bg-[transparent_!important]">
										{selectedProject.technologies.map((tech) => (
											<TechnologyBadgeItem technology={tech} key={tech.name}>
												{tech.name}
											</TechnologyBadgeItem>
										))}
									</ul>
								</section>

								<h4 className="font-medium">Características Principales</h4>
								<ul className="pl-2">
									{selectedProject.features.map((feature) => (
										<li
											key={feature}
											className="flex mb-2 gap-x-2 items-center text-sm opacity-80"
										>
											<figure className="size-2 bg-primary rounded-full"></figure>
											{feature}
										</li>
									))}
								</ul>
							</div>
						</main>
					</article>
				</Dialog>
			)}
		</>
	);
}

type ImagesSectionProps = Pick<Project, "images">;

function ImagesSection({ images }: ImagesSectionProps) {
	const [currentImageUrl, setCurrentImageUrl] = useState(images[0]);

	return (
		<section>
			<picture className="aspect-video relative">
				<img
					className="rounded-md"
					src={currentImageUrl}
					alt="Imagen Principal del Proyecto"
				/>

				<section className="absolute inset-0 flex p-2 justify-between items-center gap-x-4 [&:hover>*]:opacity-100">
					<button
						className="p-2 rounded transition-all opacity-0 bg-black/50 hover:bg-black/75"
						onClick={() =>
							setCurrentImageUrl(
								images[
									images.indexOf(currentImageUrl) === 0
										? images.length - 1
										: images.indexOf(currentImageUrl) - 1
								],
							)
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M18.464 2.114a1 1 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886M17 19.091L6.757 12L17 4.909z"
							/>
						</svg>
					</button>

					<button
						className="p-2 rounded transition-all opacity-0 bg-black/50 hover:bg-black/75"
						onClick={() =>
							setCurrentImageUrl(
								images[
									images.indexOf(currentImageUrl) === images.length - 1
										? 0
										: images.indexOf(currentImageUrl) + 1
								],
							)
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886M7 4.909L17.243 12L7 19.091z"
							/>
						</svg>
					</button>
				</section>
			</picture>

			<ul className="flex gap-x-2 mt-4">
				{images.map((url, index) => (
					<li className="max-w-25 cursor-pointer" key={url}>
						<picture onClick={() => setCurrentImageUrl(url)}>
							<img
								className={`rounded-md ${
									currentImageUrl === url ? "border-2 border-primary" : ""
								}`}
								src={url}
								alt={`Imagen del Projecto ${index}`}
							/>
						</picture>
					</li>
				))}
			</ul>
		</section>
	);
}
