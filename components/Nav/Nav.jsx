import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return ( 
    <nav>
      <NavLink to='/'>Star Wars Starships</NavLink>
    </nav>
  )
}
 
export default Nav;