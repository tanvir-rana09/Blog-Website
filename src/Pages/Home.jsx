import { useEffect } from "react"
import appwriteService from "../appwrite/Config"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "../redux/slice"
import { Container, PostCard } from "../components/Index"


const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const status = useSelector(state => state.status)
  useEffect(() => {
    try {
      appwriteService.getPosts().then((posts) => {

        if (posts) {
          dispatch(setPosts(posts.documents))
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  if (status) {
    if (posts.length > 0) {
      return <Container>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          {
            posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))
          }
        </div>
      </Container>
    } else return <p>Sorry! We Do not have any posts in out site</p>
  } else return <p>Log in to read Posts</p>
}

export default Home