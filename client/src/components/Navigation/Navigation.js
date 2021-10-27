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
  Button,
  LogoutButton,
  NavDrop
} from "./Navigation.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../media/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../actions/userAction'

const Navigation = () => {
  let mobile = false

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const [click, setClick] = useState(false)

  const clickHandler = () => setClick(!click)

  const logoutHandler = () => {
    console.log("logout")
    dispatch(logout())
  }

  const dropdownHandler = () => {
    alert("dropped")
  }
  
  var url = window.location.href.split("/")[3];

  let home = null;
  let shop = null;
  let shopCategory = null;
  let productDetails = null;
  let shoppingCart = null;

  if (url === "") {
    home = "true";
  } else if (url === "shop") {
    shop = "true";
  } else if (url === "shop-category") {
    shop = "true";
    shopCategory = "true";
  } else if (url === "product-details") {
    shop = "true";
    productDetails = "true";
  } else if (url === "cart") {
    shop = "true";
    shoppingCart = "true";
  } else {
    home = null;
    shop = null;
    shopCategory = null;
    shoppingCart = null;
  }

  if(window.screen.width < 1000) {
    mobile = true
  } else {
    mobile = false
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
              {mobile
                ?
                  <NavDrop onClick={dropdownHandler}>Shop</NavDrop>
                :
                  <NavLinks active={shop} to="/shop">Shop</NavLinks>
              }
              
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
              {userInfo != null
                ?
                  <>
                    <NavLinks to={'/userProfile'}>
                      <Button>{userInfo.name}</Button>
                    </NavLinks>
                    <SubMenu>
                      <SubItem>
                        <NavLinks to="/userProfile">
                          User Profile
                        </NavLinks>
                      </SubItem>
                      <SubItem>
                        <LogoutButton onClick={logoutHandler}>
                          Logout
                        </LogoutButton>
                      </SubItem>
                    </SubMenu>
                  </>
                :
                  <>
                    <NavLinks to="/login">
                      <Button>Login</Button>
                    </NavLinks>
                    <SubMenu>
                      <SubItem>
                        <NavLinks to="/login">
                          Login
                        </NavLinks>
                      </SubItem>
                      <SubItem>
                        <NavLinks to="/register">
                          Register
                        </NavLinks>
                      </SubItem>
                    </SubMenu>
                  </>
              }
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navigation;
