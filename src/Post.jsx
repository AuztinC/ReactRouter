import { useParams } from "react-router-dom"

const Post = ({ posts, users }) => {
    const params = useParams()
    const post = posts.find(post => post.id === params.id*1)
    const user = users.find(user => user.id === post.userId)
    if(!post){
      return null
    }
    return (
      <>
        <h1>{ post.title }</h1>
        <p> { post.body } </p>
        <p>Written By: {user.name}</p>
      </>
    )
  }
export default Post