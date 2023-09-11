import { Link } from "react-router-dom"

const Posts = ({ posts })=> {
    return (
      <>
        <ul>
          { posts.map(post => {
            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
          })}
        </ul>
      </>
    )
  }
export default Posts