import {Link} from "react-router-dom";
import UserContext from "./UserContext";
import {useContext} from "react";


function Homepage(){
  const {currentUser} = useContext(UserContext)
  console.log("current user", currentUser);

  return(
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place</p>
      {!currentUser && <Link className="btn btn-primary" to="/login">Login</Link>}
      {!currentUser && <Link className="btn btn-primary" to="/signup">Sign Up </Link>}
      {currentUser && <h2>Welcome Back, {currentUser.firstName}</h2>}
    </div>
  )
    
}

export default Homepage;

