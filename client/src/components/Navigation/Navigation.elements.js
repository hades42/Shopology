import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";

export const Nav = styled.nav`
  background: #fff;
  height: auto;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1001;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-family: cursive;
`;

export const NavIcon = styled.img`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 40%;
    margin-left: 130px;
  }
`;

export const HamBurgerIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  text-align: center;
  width: 500px;
  @media screen and (max-width: 960px) {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? "-0%" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
export const SubMenu = styled.ul`
  display: block;
  pointer-events: none;
  position: absolute;
  z-index: 998;
  opacity: 0;
  float: left;
  min-width: 10rem;
  padding: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  transform: translateY(20%);
  transition: all 0.4s ease-in;
  :hover {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0%);
  }
`
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
`
export const NavLinks = styled(Link)`
  color: ${({ active }) => (active ? "#4b59f7" : "#000")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  :hover {
    color: #4b59f7;
  }
  :hover + ${SubMenu} {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0%);
  }
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`
export const CartIcon = styled(ImCart)`
  margin-top: 7px;
  font-size: 25px;
  position: relative;
`
export const SubItem = styled.li`
  :hover {
    background-color: #4b59f7;
    ${NavLinks} {
      color: #fff;
    }
  }
`
export const CartCircle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #4b59f7;
  border-radius: 50%;
  margin-top: -27px;
  margin-left: 27px;
  color: #fff;
  font-size: 9px;
`
export const Button = styled.button`
  display: inline-block;
  border: 1px solid #384aeb;
  border-radius: 30px;
  font-weight: 500;
  color: white;
  background-color: #384aeb;
  padding: 10px 35px;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    background-color: white;
    color: #384aeb;
  }
`
export const LogoutButton = styled.li`
  padding: 0.5rem 1rem;
  :hover {
    color: #fff;
  }
`
export const MobileButton = styled(Button)`
  :hover {
    color: #4b59f7;
  }
  :hover + ${SubMenu} {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0%);
  }
`
export const MobileNavItem = styled(NavItem)`
  color: ${({ active }) => (active ? "#4b59f7" : "#000")};
  :hover {
    color: #4b59f7;
  }
  :hover + ${SubMenu} {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(-50%);
  }
`