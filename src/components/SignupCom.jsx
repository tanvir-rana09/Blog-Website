import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import authService from "../appwrite/authenticate";
import { Input, Button } from './Index'
import { useState } from "react";
import { login } from "../redux/slice";

const SignupCom = () => {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const dispatch = useDispatch()
	const loader = useSelector(state => state.userData)
	const [errorbucket, setErrorbucket] = useState('')

	const signupFunc = async (data) => {
		setErrorbucket('')
		console.log(data);
		try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                navigate("/")
                if(userData) dispatch(login(userData));
				console.log(loader)
            }
        } catch (error) {
            errorbucket(error.message)
        }
	}

	return (
		<div>
			<form onSubmit={handleSubmit(signupFunc)} className="w-[30rem] mx-auto mb-5 bg-slate-100 rounded-lg p-3">
				<h2 className="text-xl">Create Your Account</h2>
				<div>
					<Input
						label="Name"
						placeholder="Enter your Name"
						{...register("name", {
							required: true,
						})}
					/>
					{errors.name && <p>Enter A valid name</p>}
				</div>
				<div>
					<Input
						label="Email "
						type="email"
						placeholder="Enter Your Email"
						{...register("email", {
							required: true,
							// validate: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value) || "Email address must be validate",
						})}
					/>
					{errors.mail && <p>{errors.mail?.message}</p>}
				</div>
				<div>
					<Input
						label="password"
						placeholder="Enter your password"
						type="password"
						{...register("password", {
							required: true,
							// pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
						})}
					/>
					{errors.password && <p>{errors.password?.message}</p>}
				</div>
				<div className="text-center mt-6"><Button  type="submit">Signup</Button></div>
				<div className="text-center mt-3">Have a accouunt ? <Link className="underline" to='/login'> Login</Link></div>
			</form>
		</div>
	)
}

export default SignupCom