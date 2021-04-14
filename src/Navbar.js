import { NavLink, Redirect } from "react-router-dom";
import "./Navbar.css"

function Navbar({ user, logout }) {

  return (
    <nav className="Navbar-nav">
      <ul className="Navbar-list">
        <li className="Navbar-listitem"><NavLink exact to="/">Jobly </NavLink></li>
        {user && (
          <>
            <li className="Navbar-listitem"><NavLink exact to="/companies">Companies</NavLink></li>
            <li className="Navbar-listitem"><NavLink exact to="/jobs">Jobs</NavLink></li>
            <li className="Navbar-listitem"><NavLink exact to="/profile">Profile</NavLink></li>
            <li className="Navbar-listitem"><NavLink exact to="/" onClick={logout}>Logout</NavLink></li>
          </>
        )
        }
        {!user && (
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