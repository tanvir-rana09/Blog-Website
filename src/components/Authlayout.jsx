import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Authlayout = ({ children, authentication = true }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authStatus = useSelector(state => state.status)


  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login')

    } else if (!authentication && authStatus !== authentication) {
      navigate('/')

    }
    // dispatch(setLoading(false))
  }, [authStatus, navigate, authentication, dispatch])

  return <>{children}</>
}

export default Authlayout