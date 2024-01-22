import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/Config";
import { Container, Button } from "../components/Index";
import parse from "html-react-parser";


const Post = () => {

  const [post, setPost] = useState(null);
  const { slug } = useParams()
  const navigate = useNavigate()
  const userData = useSelector(state => state.userData)
  const isAuther = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    const data = async () => {
      if (slug) {
        await appwriteService.getPost(slug).then((post) => {
          if (post) {
            setPost(post)
          } else navigate('/');
        }).catch(error => console.log(error))
      } else navigate('/')
    }
    data()
  }, [navigate,slug])
  const deletePost = () => {
    try {
      if (isAuther) {
        appwriteService.deletePost(post.$Id).then((status) => {
          if (status) {
            appwriteService.deleteFile(post.featuredImage);
            navigate('/')
          }
        })
      } else navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return post ? <div>
    <Container>
      <div className="relative">
        <div>
          <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} />
        </div>
        <div>
          {isAuther && (
            <div className="flex gap-5 absolute right-0 top-0">
              <Link to={`/edit-post/${post.$id}`}><Button>Edit</Button></Link>
              <div onClick={deletePost}> <Button >Delete</Button> </div>
            </div>
          )}

        </div>
        <div className="font-semibold uppercase tracking-widest">
          {post.title}
        </div>
        <div>{parse(post.content)}</div>
      </div>
    </Container>
  </div> : null
}

export default Post