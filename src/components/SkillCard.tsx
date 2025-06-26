interface SkillCard {
	isSelected: boolean;
	onClick?: () => void;
	children: React.ReactElement;
}

export function SkillCard({ isSelected, onClick, children }: SkillCard) {
	return (
		<article
			className={`size-18 bg-[#151515] flex justify-center items-center p-4 text-xs rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform duration-500 ${
				isSelected
					? "grayscale-0"
					: "[&>*]:grayscale-[.8] [&:hover>*]:grayscale-0"
			}`}
			onClick={onClick}
		>
			{children}
		</article>
	);
}
