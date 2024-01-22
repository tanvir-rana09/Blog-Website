import { useSelector } from 'react-redux'
import Container from '../Container'
import { useNavigate } from 'react-router-dom'
import LogoutButton from './LogoutButton'


const Header = () => {
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.status)

  const navitems = [
    {
      status: true,
      slug: '/',
      name: 'Home'
    },
    {
      status: authStatus,
      slug: '/all-post',
      name: 'All Post'
    },
    {
      status: authStatus,
      slug: '/add-post',
      name: 'Add Post'
    },
    {
      status: !authStatus,
      slug: '/login',
      name: 'Login'
    },
    {
      status: !authStatus,
      slug: '/sign-up',
      name: 'Signup'
    },
  ]
  return (
    <Container>
      <div className='flex w-full justify-between shadow-xl mb-5 px-5 py-4 items-center'>
        <div className='uppercase tracking-widest font-semibold '>Star creation</div>
        <div>
          <ul className='flex gap-5 items-center'>
            {
              navitems.map((item) => (
                item.status ? <li key={item.slug}>
                  <button className=''
                    onClick={() => navigate(item.slug)}
                    > {item.name}
                  </button>
                </li> : null
              ))
            }
            {authStatus&& <LogoutButton/>}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header