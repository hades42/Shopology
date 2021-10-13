import React, { useState } from 'react'
import {
    ShopCategory,
    ShopBanner,
    ShopDesc,
    ShopDescHome
} from '../Shop/Shop.elements'
import {
    LoginDescCategory,
    Grids
} from './UserProfile.elements'

const UserProfile = () => {
    const [details, setDetails] = useState(true)
    const [addresses, setAddresses] = useState(false)
    const [orders, setOrders] = useState(false)

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
                    <ul>
                        <li>My Details</li>
                        <li>My Addresses</li>
                        <li>My Orders</li>
                    </ul>
                </Grids>
                <Grids item xs={8}>
                    {details == true
                        ?
                            <></>
                        :
                            <></>
                    }
                    {addresses == true
                        ?
                            <></>
                        :
                            <></>
                    }
                    {orders == true
                        ?
                            <></>
                        :
                            <></>
                    }
                </Grids>
            </Grids>
        </>
    )
}

export default UserProfile