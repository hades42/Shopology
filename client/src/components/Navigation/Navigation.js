import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamBurgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  CartIcon,
  SubMenu,
  SubItem,
  CartCircle,
} from "./Navigation.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../media/logo.svg";
import Button from '@mui/material/Button'
import { useSelector } from "react-redux";

const Navigation = () => {

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  var url = window.location.href.split("/")[3];

  let home = null;
  let shop = null;
  let contact = null;
  let shopCategory = null;
  let productDetails = null;
  let shoppingCart = null;
  let login = null;
  let register = null;

  if (url === "") {
    home = "true";
  } else if (url === "shop") {
    shop = "true";
  } else if (url === "contact") {
    contact = "true";
  } else if (url === "shop-category") {
    shop = "true";
    shopCategory = "true";
  } else if (url === "product-details") {
    shop = "true";
    productDetails = "true";
  } else if (url === "cart") {
    shop = "true";
    shoppingCart = "true";
  } else if (url === "login") {
    login = "true";
  } else {
    home = null;
    shop = null;
    contact = null;
    shopCategory = null;
    shoppingCart = null;
    login = null;
    register = null;
  }

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={logo} />
          </NavLogo>
          <HamBurgerIcon onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </HamBurgerIcon>
          <NavMenu onClick={clickHandler} click={click}>
            <NavItem>
              <NavLinks active={home} to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks active={shop} to="/shop">
                Shop
              </NavLinks>
              <SubMenu>
                <SubItem>
                  <NavLinks active={shopCategory} to="/shop">
                    Shop Category
                  </NavLinks>
                </SubItem>
                <SubItem>
                  <NavLinks active={shoppingCart} to="/cart">
                    Shopping Cart
                  </NavLinks>
                </SubItem>
              </SubMenu>
            </NavItem>
            <NavItem>
              <NavLinks to="/cart">
                <CartIcon />
                <CartCircle>{cartItems.length}</CartCircle>
              </NavLinks>
            </NavItem>
            <NavItem>
              {userInfo != null ?
                <NavLinks to={'/userProfile'}><Button variant="outlined">{userInfo.name}</Button></NavLinks> : 
                <NavLinks active={login} to="/login"><Button>Login</Button></NavLinks>
              }
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navigation;
