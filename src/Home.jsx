const Home = ({ users, posts }) => {
    return (
      <div id='homeCont'>
        <h1>Welcome!</h1>
        <h3>Showcasing this week, we have {users.length} amazing writers showcasing a total of {posts.length} individual posts! Get to readin.</h3>
      </div>
    )
  }
  export default Home