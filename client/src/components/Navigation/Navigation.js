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
  NavSearch,
  SearchIcon,
  SearchInput,
  CartIcon,
  SubMenu,
  SubItem,
  CartCircle,
} from "./Navigation.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../media/logo.svg";
import Button from '@mui/material/Button'

const Navigation = ({ cartQty }) => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  var url = window.location.href.split("/")[3];

  let home = null;
  let shop = null;
  let pages = null;
  let contact = null;
  let shopCategory = null;
  let productDetails = null;
  let productCheckout = null;
  let confirmation = null;
  let shoppingCart = null;
  let login = null;
  let register = null;
  let tracking = null;

  if (url === "") {
    home = "true";
  } else if (url === "shop") {
    shop = "true";
  } else if (url === "pages") {
    pages = "true";
  } else if (url === "contact") {
    contact = "true";
  } else if (url === "shop-category") {
    shop = "true";
    shopCategory = "true";
  } else if (url === "product-details") {
    shop = "true";
    productDetails = "true";
  } else if (url === "product-checkout") {
    shop = "true";
    productCheckout = "true";
  } else if (url === "confirmation") {
    shop = "true";
    confirmation = "true";
  } else if (url === "cart") {
    shop = "true";
    shoppingCart = "true";
  } else if (url === "login") {
    pages = "true";
    login = "true";
  } else if (url === "regsiter") {
    pages = "true";
    register = "true";
  } else if (url === "tracking") {
    pages = "true";
    tracking = "true";
  } else {
    home = null;
    shop = null;
    pages = null;
    contact = null;
    shopCategory = null;
    productDetails = null;
    productCheckout = null;
    confirmation = null;
    shoppingCart = null;
    login = null;
    tracking = null;
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
                  <NavLinks active={productCheckout} to="/product-checkout">
                    Product Checkout
                  </NavLinks>
                </SubItem>
                <SubItem>
                  <NavLinks active={confirmation} to="/confirmation">
                    Confirmation
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
              <NavLinks active={pages} to="/pages">
                Pages
              </NavLinks>
              <SubMenu>
                <SubItem>
                  <NavLinks active={login} to="/login">
                    Login
                  </NavLinks>
                </SubItem>
                <SubItem>
                  <NavLinks active={register} to="/register">
                    Product Details
                  </NavLinks>
                </SubItem>
                <SubItem>
                  <NavLinks active={tracking} to="/tracking">
                    Tracking
                  </NavLinks>
                </SubItem>
              </SubMenu>
            </NavItem>
            <NavItem>
              <NavLinks active={contact} to="/contact">
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavSearch>
                <SearchIcon />
                <SearchInput placeholder="Search..." type="text" name="search"/>
              </NavSearch>
            </NavItem>
            <NavItem>
              <NavLinks to="/cart">
                <CartIcon />
                <CartCircle>{cartQty}</CartCircle>
              </NavLinks>
            </NavItem>
            <NavLinks to="/login"><Button variant="outlined">Login</Button></NavLinks>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navigation;
