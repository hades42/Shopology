import React, { useState } from 'react'
import {
    ShopCategory,
    ShopBanner,
    ShopDesc,
    ShopDescHome
} from '../Shop/Shop.elements'
import {
    LoginDescCategory,
    Grids,
    List,
    ListItem
} from './UserProfile.elements'

const UserProfile = () => {
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
                            <>1</>
                        :
                            <></>
                    }
                    {addresses == true
                        ?
                            <>2</>
                        :
                            <></>
                    }
                    {orders == true
                        ?
                            <>3</>
                        :
                            <></>
                    }
                </Grids>
            </Grids>
        </>
    )
}

export default UserProfile