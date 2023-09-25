import { BiError } from "react-icons/bi";

interface InputProps {
	id: string;
	label: string;
	placeholder: string;
	type: string;
	errorMsg?: string;
	extraText?: string;
	register: object;
}

const Input = ({
	id,
	label,
	placeholder,
	type,
	errorMsg,
	register,
	extraText,
}: InputProps) => {
	return (
		<div className="flex flex-col justify-center">
			<label
				className="font-extrabold "
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className="border border-[#D9D9D9] p-3 my-1 rounded text-xs"
				style={{ border: errorMsg ? " 1px solid red" : "" }}
				id={id}
				type={type}
				placeholder={placeholder}
				{...register}
			/>
			<p className="extraText">{extraText}</p>
			<div className="flex items-center gap-2">
				{errorMsg && <BiError className="text-red-500" />}
				<p className="text-red-500 text-sm">{errorMsg}</p>
			</div>
		</div>
	);
};
export default Input;