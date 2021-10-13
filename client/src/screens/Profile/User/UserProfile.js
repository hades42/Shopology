import React, { useState, useEffect } from 'react'
import {
    ShopCategory,
    ShopBanner,
    ShopDesc,
    ShopDescHome
} from '../../../components/Shop/Shop.elements'
import {
    LoginDescCategory,
    Grids,
    List,
    ListItem,
    LogoutButton
} from './UserProfile.elements'
import Details from './Details'
import Addresses from './Addresses'
import Orders from './Orders'
import { logout } from '../../../actions/userAction'
import { useDispatch, useSelector } from "react-redux";

const UserProfile = ({ location, history }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
          history.push("/login");
        }
      }, [history, userInfo]);

    const [details, setDetails] = useState(true)
    const [addresses, setAddresses] = useState(false)
    const [orders, setOrders] = useState(false)

    const detailsHandler = () => {
        setDetails(true)
        setAddresses(false)
        setOrders(false)
    }

    const addressesHandler = () => {
        setDetails(false)
        setAddresses(true)
        setOrders(false)
    }

    const ordersHandler = () => {
        setDetails(false)
        setAddresses(false)
        setOrders(true)
    }

    const logoutHandler = (e) => {
        dispatch(logout())
    }

    return (
        <>
            <ShopCategory>
                <ShopBanner>
                    My Account
                </ShopBanner>
                <ShopDesc>
                    <ShopDescHome to="/">
                        Home
                    </ShopDescHome>
                    <LoginDescCategory />
                </ShopDesc>
            </ShopCategory>
            <LogoutButton variant="text" onClick={logoutHandler}>Log Out</LogoutButton>
            <Grids container spacing={2}>
                <Grids item xs={4}>
                    <List>
                        <ListItem active={details} onClick={detailsHandler}>My Details</ListItem>
                        <ListItem active={addresses} onClick={addressesHandler}>My Addresses</ListItem>
                        <ListItem active={orders} onClick={ordersHandler}>My Orders</ListItem>
                    </List>
                </Grids>
                <Grids item xs={8}>
                    {details == true
                        ?
                            <Details />
                        :
                            <></>
                    }
                    {addresses == true
                        ?
                            <Addresses />
                        :
                            <></>
                    }
                    {orders == true
                        ?
                            <Orders />
                        :
                            <></>
                    }
                </Grids>
            </Grids>
        </>
    )
}

export default UserProfile