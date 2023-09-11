import { useParams, Link } from "react-router-dom"

const UserPosts = ({ posts, users })=> {
    const params = useParams()
    const user = users.find(user => user.id === params.id*1)
    if(!user){
      return null
    }
    return (
      <>
        <h2> { user.name }'s Posts</h2>
        <ul>
          {
            posts.map((post) => {
              return post.userId === params.id*1 ?
              <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
              : null
            })
          }
        </ul>
      </>
    )
  }
export default UserPosts