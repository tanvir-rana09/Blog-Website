import { useDispatch } from 'react-redux';
import authService from '../appwrite/authenticate';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { login, setLoading } from '../redux/slice';
import { Input, Button } from './Index'

const LoginCom = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [error, setError] = useState()

	const loginFunc = async (data) => {
		setError("")
		// dispatch(setLoading(true))
		try {
			const session = await authService.login(data)
			navigate('/')
			if (session) {
				const userData = authService.getCurrentUser()
				if (userData) {
					dispatch(login(userData))
				}
				navigate('/')
			}
			// dispatch(setLoading(false))
		} catch (error) {
			setError(error)
		}
	}
	return (
		<div>
			<form
			className='w-[30rem] mx-auto mb-5 bg-slate-100 rounded-lg p-3'
			onSubmit={handleSubmit(loginFunc)}>
				<h2 className='text-xl'>Sign in to Your Account</h2>
				<div className='w-full flex flex-col '>
					<div className=''>
						<Input
							label="Email :"
							type="email"
							placeholder="Enter Your Email"
							{...register("email", {
								required: true,
								// validate: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value) || "Email address must be validate",
							})}
						/>
						{errors.mail && <p role="alert">{errors.mail?.message}</p>}
					</div>
					<div>
						<Input
							label="Password :"
							type="password"
							placeholder="Enter your password"
							{...register("password", {
								required: true,
								// pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
							})} />
						{errors.password && <p>{errors.password?.message}</p>}
					</div>
					<div className='text-center mt-6'>
						<Button type='submit'>Login</Button>
					</div>
					<div className='text-center mt-3'>
						<p>Dont have any account ?<Link className='underline ' to='/sign-up'>Sign up</Link></p>
					</div>
				</div>

			</form>
		</div>
	)
}

export default LoginCom