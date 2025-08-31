interface SkillCard {
	isSelected: boolean;
	onClick?: () => void;
	children: React.ReactElement;
}

export function SkillCard({ isSelected, onClick, children }: SkillCard) {
	return (
		<article
			className={`size-18 bg-black/50 backdrop-blur-md flex justify-center items-center p-4 text-xs rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-all duration-500 ${
				isSelected ? "outline-2 outline-primary" : ""
			}`}
			onClick={onClick}
		>
			{children}
		</article>
	);
}
