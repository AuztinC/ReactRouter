import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Link, useLocation, Routes, Route, useParams } from "react-router-dom"
import Home from './Home'
import Post from './Post'
import UserPosts from './UserPosts'
import Posts from './Posts'
import Users from './Users'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const location = useLocation()
  const { pathname } = location;

  useEffect(() => {
    const getUsers = async ()=> {
      const userData = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      setUsers(userData.data)
    }
    getUsers()
    const getPosts = async ()=> {
      const postData = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts")
      setPosts(postData.data)
    }
    getPosts()
  }, [])

  return (
    <>
      <nav>
        <Link to="/" className={ pathname === '/' ? "selected" : ""}>Home</Link>
        <Link to="/users" className={ pathname === '/users' ? "selected" : ""}>Users ({ users.length })</Link>
        <Link to="/posts" className={ pathname === '/posts' ? "selected" : ""}>Posts ({ posts.length })</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home posts={posts} users={users}/>}/>
        <Route path='/users' element={<Users users={users}/>} />
        <Route path='/posts' element={<Posts posts={posts}/>} />
        <Route path='/users/:id' element={<UserPosts posts={posts} users={users}/>} />
        <Route path='/posts/:id' element={<Post posts={posts} users={users}/>} />
      </Routes>
    </>
  )
}

export default App
