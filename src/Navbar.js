import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar(){

  return(
    <nav className="Navbar-nav">
      <ul className="Navbar-list">
        <li className="Navbar-listitem"><NavLink exact to="/">Jobly </NavLink></li>
        <li className="Navbar-listitem"><NavLink exact to="/companies">Companies</NavLink></li>
        <li className="Navbar-listitem"><NavLink exact to="/jobs">Jobs</NavLink></li>
        <li className="Navbar-listitem"><NavLink exact to="/login">Login</NavLink></li>
        <li className="Navbar-listitem"><NavLink exact to="/signup">Signup</NavLink></li>
        <li className="Navbar-listitem"><NavLink exact to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar;