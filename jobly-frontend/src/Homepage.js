import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";
import "./Homepage.css"


function Homepage() {
  const { currentUser } = useContext(UserContext)
  console.log("current user", currentUser);

  return (
    <section className="Homepage-home">
      <div className="Homepage-text-container text-center">
        <h1 className="Homepage-header">Jobly</h1>
        <p className="Homepage-text">All the jobs in one convenient place</p>
        {!currentUser && <Link className="btn btn-primary m-2" to="/login">Login</Link>}
        {!currentUser && <Link className="btn btn-primary m-2" to="/signup">Sign Up </Link>}
        {currentUser && <h2>Welcome Back, {currentUser.firstName}</h2>}
      </div>
    </section>
  )
}

export default Homepage;

