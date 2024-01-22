import { useDispatch } from "react-redux"
import authService from '../../appwrite/authenticate'
import { logout } from './../../redux/slice';

const LogoutButton = () => {
	const dispatch = useDispatch()
	const logOutHandler = ()=>{
		authService.logout().then(()=>{
			dispatch(logout())
		})
	}
  return <button onClick={logOutHandler} className="px-5 py-2 border bg-blue-500 text-white">Log Out</button>
  
}

export default LogoutButton