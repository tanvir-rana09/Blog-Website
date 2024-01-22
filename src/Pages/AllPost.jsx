import { Container, PostCard } from '../components/Index';
import {  useSelector } from 'react-redux';


const AllPost = () => {
  const {posts,status} = useSelector(state =>state)
  
  // const [posts, setPosts] = useState([])
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setLoading(true))
  //   try {
  //     appwriteService.getPosts([]).then((items) => {
  //       if (items) {
  //         dispatch(setPosts(items.documents))
  //       } else console.log("post nhi aye hai");
  //     }).finally(dispatch(setLoading(false)))

  //   } catch (error) {
  //     console.log("fethc all post error " + error)
  //   }
  // }, [dispatch])

  return status ?  <div>
  <Container>
    {posts?.map((post)=>(
      <PostCard key={post.$id} {...post}/>
    ))}
    hi
  </Container>
</div> : <p>Login to see all post</p>
}

export default AllPost