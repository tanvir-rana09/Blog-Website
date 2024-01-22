
const Button = ({
	children,
	type = "button",
	bgColor = "bg-blue-500",
	textColor = "white",
	className,
	...props
}) => {
	return <button className={`px-5 py-2.5 uppercase tracking-widest font-semibold text-white rounded-md text-sm w-4/5 flex items-center justify-center ${bgColor} ${textColor} ${className}`} type={type} {...props}>{children}</button>
}

export default Button