import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
 position: fixed;
  left: 0;
  z-index: 10;
  display: flex;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 60px;
  transform: translateZ(0);
  transition: all .2s ease;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01), 0 1px 8px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 120px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  width: 575px;
  height: 75px;
  margin: 10px 0;
  padding-top: 20px;
  z-index: 10;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
margin: 0 10px;
  padding: 15px 0;
  font-weight: 500;
  font-size: 14px;
  padding: 0px 10px;
  text-transform: uppercase;
`;


export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: right;
  text-decoration: none;
  padding: 0.1rem 0.1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: right;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;