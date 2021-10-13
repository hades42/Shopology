import React, { useState } from 'react'
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
import { useHistory } from "react-router-dom";

const UserProfile = () => {
    let history = useHistory()

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
        localStorage.removeItem('userInfo');
        history.push('/')
        window.location.reload()
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