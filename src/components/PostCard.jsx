import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/Config'

const PostCard = ({ $id, featuredImage, title }) => {
	return (
		<Link to={`/post/${$id}`} className='shadow-md rounded-lg p-5 h-[22rem] py-7'>
			<div className='h-full w-full overflow-hidden object-cover'>
				<img className='h-full w-full object-cover' src={appwriteService.getFilePreview(featuredImage)} alt={title} />
			</div>
			<div className=' font-semibold uppercase tracking-widest'>
				<h2>{title}</h2>
			</div>
		</Link>
	)
}

export default PostCard;