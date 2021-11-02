import React, { useState, useEffect } from "react";
import Details from "./Details";
import Addresses from "./Addresses";
import Orders from "./Orders";
import { useSelector } from "react-redux";
import Request from "./Request";
import { Container } from "react-bootstrap";
import classes from "../../ProductScreen/ProductScreen.module.css";
import UserListScreen from "../Admin/UserListScreen";
import ProductListScreen from "../Admin/ProductList/ProductListScreen";
import OrderListScreen from "../Admin/OrderList/OrderListScreen";
import { PageContent } from "./UserProfile.elements"

const UserProfile = ({ history }) => {
  let mobile = false

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const [selection, setSelection] = useState("1");

  const changeSelection = (e) => {
    setSelection(e.target.getAttribute("data-selection"));
  };

  let selectionShow;
  if (selection === "1") {
    selectionShow = <Details></Details>;
  } else if (selection === "2") {
    selectionShow = <Addresses />;
  } else if (selection === "3") {
    selectionShow = <Orders />;
  } else if (selection === "4") {
    selectionShow = <Request />;
  } else if (selection === "5") {
    selectionShow = <UserListScreen />;
  } else if (selection === "6") {
    selectionShow = <ProductListScreen />;
  } else if (selection === "7") {
    selectionShow = <OrderListScreen />;
  }

  if(window.screen.width < 1000) {
    mobile = true
  } else {
    mobile = false
  }

  return (
    <Container>
      {mobile
        ?
          <>
            <PageContent>
              {selectionShow}
            </PageContent>
          </>
        :
          <>
            <div className={classes["selection-container"]}>
              <ul className={classes.navSelection}>
                <li
                  className={classes.navItem}
                  data-selection="1"
                  onClick={changeSelection}
                >
                  User Profile
                </li>
                {userInfo && !userInfo.isAdmin && (
                  <li
                    className={classes.navItem}
                    data-selection="2"
                    onClick={changeSelection}
                  >
                    User Addresses
                  </li>
                )}
                {userInfo && !userInfo.isAdmin && (
                  <li
                    className={classes.navItem}
                    data-selection="3"
                    onClick={changeSelection}
                  >
                    User Order
                  </li>
                )}
                {userInfo && !userInfo.isAdmin && (
                  <li
                    className={classes.navItem}
                    data-selection="4"
                    onClick={changeSelection}
                  >
                    User Request
                  </li>
                )}
                {userInfo && userInfo.isAdmin && (
                  <li
                    className={classes.navItem}
                    data-selection="5"
                    onClick={changeSelection}
                  >
                    Manage Users
                  </li>
                )}
                {userInfo && userInfo.isAdmin && (
                  <li
                    className={classes.navItem}
                    data-selection="6"
                    onClick={changeSelection}
                  >
                    Manage Products
                  </li>
                )}
                {userInfo && userInfo.isAdmin && (
                  <li
                    className={classes.navItem}
                    data-selection="7"
                    onClick={changeSelection}
                  >
                    Manage Orders
                  </li>
                )}
              </ul>
              {selectionShow}
            </div>
          </>
      }
    </Container>
  );
};

export default UserProfile;
