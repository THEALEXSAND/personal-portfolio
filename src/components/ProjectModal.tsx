import { useState } from "react";
import { TechnologyBadgeItem } from "./TecnologyBadgeItem";
import type { JSX } from "astro/jsx-runtime";
import { StarIcon } from "./icons/StarIcon";

interface Props {
	images: string[];
	name: string;
	description: string;
	technologies: {
		name: string;
		Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
		colors: { primary: string };
	}[];
	features: string[];
	featured: boolean;
	onClose: () => void;
}

export function ProjectModal({
	images,
	name,
	description,
	technologies,
	features,
	featured,
	onClose,
}: Props) {
	const [currentImageUrl, setCurrentImageUrl] = useState(images[0]);

	return (
		<dialog
			open
			className="fixed inset-0 size-full z-50 flex items-center justify-center bg-black/25 text-white"
		>
			<article className="max-w-5xl bg-slate-900 p-5 rounded-lg shadow-lg overflow-hidden animate-[openModalAnimation_0.3s_ease]">
				<header className="flex justify-between items-start gap-x-4">
					<div>
						<h3 className="mb-4 text-xl font-semibold">{name}</h3>
						<p className="max-w-4/5 mb-4 opacity-80 text-sm">{description}</p>
					</div>

					<div className="flex items-center gap-x-4">
						<span className="flex items-center gap-x-1 py-1 px-2 rounded-full bg-primary text-xs font-medium">
							<StarIcon className="size-4" />
							Destacado
						</span>

						<button
							className="p-2 rounded transition-colors hover:bg-white/15"
							onClick={onClose}
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
				<main className="grid grid-cols-2 gap-8 py-8 border-y border-slate-700">
					<div>
						<picture className="relative">
							<img className="rounded-md" src={currentImageUrl} alt="" />

							<button
								className="absolute right-0 top-1/2 -translate-1/2 p-2 rounded transition-colors hover:bg-black/25"
								onClick={() =>
									setCurrentImageUrl(
										images[
											images.indexOf(currentImageUrl) === images.length - 1
												? 0
												: images.indexOf(currentImageUrl) + 1
										]
									)
								}
							>
								{">"}
							</button>
						</picture>

						<ul className="flex gap-x-2 mt-4">
							{images.map((url) => (
								<li className="max-w-25 cursor-pointer">
									<picture onClick={() => setCurrentImageUrl(url)}>
										<img
											className={`rounded-md ${
												currentImageUrl === url ? "border-2 border-primary" : ""
											}`}
											src={url}
											alt=""
										/>
									</picture>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-y-3">
						<div className="bg-slate-800 p-4 rounded-lg">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-sm font-medium text-gray-300">
									Duración
								</span>
							</div>
							<p className="text-white font-semibold">2025</p>
						</div>

						<section>
							<h4 className="flex items-center gap-x-2 font-medium">
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
							<ul className="flex flex-wrap gap-x-2 items-center [&>li]:[background-color:_transparent_!important]">
								{technologies.map((tech) => (
									<TechnologyBadgeItem
										key={tech.name}
										Icon={tech.Icon}
										colors={tech.colors}
									>
										{tech.name}
									</TechnologyBadgeItem>
								))}
							</ul>
						</section>

						<h4 className="font-medium">Características Principales</h4>
						<ul className="pl-2">
							{features.map((feature) => (
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
		</dialog>
	);
}
