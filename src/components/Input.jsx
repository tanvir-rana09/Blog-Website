import { forwardRef, useId } from "react";

const Input = forwardRef(function Input({
	label,
	type = "text",
	className,
	...props
}, ref) {
	const id = useId()
	return (
		<div className="flex flex-col justify-center items-center w-full gap-2 mt-3">
			{label && <label className="" htmlFor={id}>{label}</label>}
			<input
				type={type}
				className={`${className}  outline-none border px-4 py-2 w-4/5`}
				id={id}
				{...props}
				ref={ref}
			/>
		</div>
	)
})
Input.propTypes = String;
export default Input;