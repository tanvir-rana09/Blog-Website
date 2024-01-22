import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import appwriteService from "../appwrite/Config"
import { Container, PostForm } from '../components/Index'

const EditPost = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        console.log(post)
        if (post) {
          setPost(post)
        }
      })
    } else navigate('/')
  }, [slug, navigate])
console.log(post)
  return post ? <div>
    <Container>
      <PostForm post={post} />
    </Container>
  </div> : <p>No Post For edit</p>
}

export default EditPost