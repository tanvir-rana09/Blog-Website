import { forwardRef, useId } from "react"
const Select = forwardRef(function Select({
	label,
	options,
	className,
	...props
}, ref) {
	const id = useId()
	return (
		<div className="w-full">
			{label && <label htmlFor={id} >{label}</label>}
			<select
				{...props}
				id={id}
				ref={ref}
				className={`${className}`}>
				{options?.map((option) => (
						<option key={option} >{option}</option>
					))}
			</select>
		</div>
	)
})
export default Select

// import { forwardRef, useId } from "react"
// const Select = forwardRef(function Select({
// 	label,
// 	options,
// 	className,
// 	...props
// }, ref) {
// 	const id = useId()
// 	return (
// 		<div className="w-full">
// 			{label && <label htmlFor={id} >{label}</label>}

// 			<select {...props} id={id} ref={ref} className={`${className}`}>
// 				{options?.map((option) => (
// 					<option key={option} value={option}>
// 						{option}
// 					</option>
// 				))}
// 			</select>
// 		</div>
// 	)
// })

// export default Select;