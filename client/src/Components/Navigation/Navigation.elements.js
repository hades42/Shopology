import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImSearch, ImCart } from "react-icons/im";

export const Nav = styled.nav`
  background: #fff;
  height: auto;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
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
    transform: translate(-100%, 60%);
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
  min-width: 800px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? "-5%" : "-110%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
export const SubMenu = styled.ul`
  position: absolute;
  z-index: 998;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  &:before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #eee transparent transparent transparent;
    position: absolute;
    z-index: 3;
    opacity: 0;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  :hover {
    ${SubMenu} {
      display: flex;
      flex-direction: column;
    }
  }
`;
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
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    display: table;
  }
`;
export const NavSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SearchIcon = styled(ImSearch)`
  margin-top: 40px;
`;
export const SearchInput = styled.input`
  height: 20px;
  margin-top: 37px;
  border: 1px solid black;
  border-radius: 15px;
  &:focus,
  &:active {
    outline: none;
  }
`;
export const CartIcon = styled(ImCart)`
  margin-top: 7px;
  position: relative;
`;
export const SubItem = styled.li`
  :hover {
    background-color: #4b59f7;
    ${NavLinks} {
      color: #fff;
    }
  }
`;
export const CartCircle = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
  margin-top: -20px;
  margin-left: 20px;
  color: #fff;
  font-size: 9px;
`;

