import { NavLink } from "react-router-dom";


function Navbar(){

  return(
    <nav>
      <li><NavLink to="/">Jobly </NavLink></li>
      <li><NavLink to="/companies">Companies</NavLink></li>
      <li><NavLink to="/jobs">Jobs</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </nav>
  )
}
export default Navbar;