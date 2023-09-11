import { Link } from "react-router-dom"

const Users = ({ users })=> {
    if(!users){
      return null
    }
    return (
      <>
        <ul>
          { users.map(user => {
            return <li key={user.id}><Link to={`/users/${user.id}`} >{user.name} </Link></li>
          })}
        </ul>
      </>
    )
  }
export default Users