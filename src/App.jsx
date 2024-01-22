import { useDispatch, useSelector } from "react-redux"
import authService from './appwrite/authenticate';
import { useEffect } from "react";
import { login, logout, setLoading } from "./redux/slice";
import { Footer, Header } from "./components/Index";
import { Outlet } from "react-router-dom";
// import Loading from "./components/Loading";

function App() {

  const dispatch = useDispatch()
  // const loader = useSelector(state => state.loading)

  useEffect(() => {
    authService.getCurrentUser().then((data) => {
      if (data) {
        dispatch(login({ ...data }))
      } else {
        dispatch(logout())
      }
    }).finally(() => {
      dispatch(setLoading(false))
    })
  }, [dispatch])

  return <div>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
  // if (loader) {
  //   return <Loading/>
  // } else {
  //   return <div>
  //     <Header />
  //     <main>
  //       <Outlet />
  //     </main>
  //     <Footer />
  //   </div>
  // }

}

export default App
