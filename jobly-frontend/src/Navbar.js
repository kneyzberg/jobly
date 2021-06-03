import { NavLink, Redirect } from "react-router-dom";
import "./Navbar.css"
import UserContext from "./UserContext";
import { useContext } from "react";


function Navbar({ logout }) {

  const { currentUser } = useContext(UserContext)

  return (
    <nav className="Navbar-nav">
      <NavLink className="Navbar-listitem Navbar-name" exact to="/">Jobly </NavLink>
        <ul className="Navbar-list">
          {currentUser && (
            <>
              <li className="Navbar-listitem"><NavLink exact to="/companies">Companies</NavLink></li>
              <li className="Navbar-listitem"><NavLink exact to="/jobs">Jobs</NavLink></li>
              <li className="Navbar-listitem"><NavLink exact to="/profile">Profile</NavLink></li>
              <li className="Navbar-listitem"><NavLink exact to="/" onClick={logout}>Logout</NavLink></li>
            </>
          )
          }
          {!currentUser && (
            <>
              <li className="Navbar-listitem"><NavLink exact to="/login">Login</NavLink></li>
              <li className="Navbar-listitem"><NavLink exact to="/signup">Signup</NavLink></li>
            </>
          )}
        </ul>

    </nav>
  )
}
export default Navbar;