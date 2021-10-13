import React from 'react'
import { Link } from 'react-router-dom'
import Message from '../../../components/Message'

const Orders = () => {
    return (
        <>
            <Message>No Products Ordered</Message>   
            <h1>Make a new Purchase now!</h1>
            <Link to="/shop">Shop Now</Link>
        </>
    )
}

export default Orders
