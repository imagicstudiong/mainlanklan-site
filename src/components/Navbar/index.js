import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Logo from '../../assets/img/logo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);




  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
         <Nav>
           <NavbarContainer>
          <NavLogo to='/' > 
            <img src={Logo} alt='Mainlanklan Entertainment' />
          
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            
              <NavItem>
            <NavLinks to='/'onClick={closeMobileMenu}>Home</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/mainlanklan'onClick={closeMobileMenu}>Mainlanklan</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='/artists'onClick={closeMobileMenu}>Artistes</NavLinks>
            </NavItem>
            
        
            <NavItem>
            <NavLinks to='/services'onClick={closeMobileMenu}>Services</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='/journal'onClick={closeMobileMenu}>Journal</NavLinks>
            </NavItem>
    
            <NavItem>
            <NavLinks to='/shop'onClick={closeMobileMenu}>Shop</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/contact'onClick={closeMobileMenu}>Contact</NavLinks>
            </NavItem>
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;