import {Link} from "react-router-dom";

function Homepage({user}){
  console.log(user, "user");

  return(
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place</p>
      {!user && <Link className="btn btn-primary" to="/login">Login</Link>}
      {!user && <Link className="btn btn-primary" to="/signup">Sign Up </Link>}
      {user && <h2>Welcome Back, {user.firstName}</h2>}
    </div>
  )
    
}

export default Homepage;

