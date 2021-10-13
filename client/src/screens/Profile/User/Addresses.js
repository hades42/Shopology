import React, { useState } from 'react'
import Message from '../../../components/Message'

const Addresses = () => {
    const [address, setAddress] = useState(false)
    const addAddressHandler = () => {
        setAddress(!address)
    }
    return (
        <>
            <Message>No Addresses Saved!</Message>
            {address 
            ? 
                <>
                    
                </>
            :
                <button onClick={addAddressHandler}>Add a new Address</button>
            }
        </>
    )
}

export default Addresses
