import React from 'react'; 
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink, 
} from './NavbarElements'; 
  
const Navbar = () => { 
  return ( 
    <> 
      <Nav> 
        <Bars /> 
        <NavMenu> 
          <NavLink to='/home' activeStyle> 
            Home 
          </NavLink> 
          <NavLink to='/search' activeStyle> 
            Search 
          </NavLink> 
          <NavLink to='/about' activeStyle> 
            About 
          </NavLink> 
          <NavLink to='/contact' activeStyle> 
            Contact 
          </NavLink> 
         
          <NavLink to='/details' activeStyle> 
            Details 
          </NavLink>
          {/* Second Nav */} 
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */} 
        </NavMenu> 
        <NavBtn> 
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink> 
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> 
        </NavBtn> 
      </Nav> 
    </> 
  ); 
}; 
  
export default Navbar;