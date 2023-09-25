
interface ButtonProps {
	title: string;
	style?: string;
	icon?: any;
	disabled?: boolean;
	type?: string;
	onClick?: ()=> void
}

const CustomButton = (props: ButtonProps) => {
	return (
		<button
		onClick={props.onClick}
			disabled={props.disabled}
			className={`flex items-center gap-2 leading-none border border-[#D9D9D9] py-3 px-4  cursor-pointer hover:text-[#84BD00] hover:border-[#84BD00] ${props.style}`}
		>
			{props.icon}
			<p>{props.title}</p>
		</button>
	);
};

export default CustomButton;