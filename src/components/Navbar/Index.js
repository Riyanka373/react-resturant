import React from 'react';
import { Bars, Nav, NavIcon, Navlink } from '../NavbarElement';

const Navbar = ({toggle}) => {
 return(
   <>
    <Nav>
     <Navlink to='/'>Pizza</Navlink>
     <NavIcon onClick={toggle}>
      <p>Menu</p>
      <Bars />
     </NavIcon>
    </Nav>
   </>  
 )
}

export default Navbar