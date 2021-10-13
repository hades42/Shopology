import React, { useState } from 'react'
import Message from '../../../components/Message'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Addresses = () => {
    const [address, setAddress] = useState(false)
    const [state, setState] = useState('')

    const addAddressHandler = () => {
        setAddress(!address)
    }

    const saveAddressHandler = (e) => {
        setAddress(!address)
        // content to add addresses
    }

    const stateHandler = (e) => {
        setState(e.target.value)
    }

    return (
        <>
            <Message>No Addresses Saved!</Message>
            {address 
            ? 
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        Add a new Address
                    </Typography>
                    
                    <form onSubmit={saveAddressHandler}>
                        <TextField fullWidth label="Full Name" variant="filled" />
                        <TextField fullWidth label="Mobile Number" variant="filled" />
                        <TextField fullWidth label="Pin Code" variant="filled" />
                        <TextField fullWidth label="Flat, House no., Building, Company, Apartment" variant="filled" />
                        <TextField fullWidth label="Area, Street, Sector, Village" variant="filled" />
                        <TextField fullWidth label="Landmark" variant="filled" />
                        <TextField label="Town/City" variant="filled" />
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
                            <Select
                                autoWidth
                                value={state}
                                label="State"
                                onChange={stateHandler}
                                >
                                <MenuItem value={1}>New South Wales</MenuItem>
                                <MenuItem value={2}>Queensland</MenuItem>
                                <MenuItem value={3}>Northern Territory</MenuItem>
                                <MenuItem value={4}>Western Australia</MenuItem>
                                <MenuItem value={5}>South Australia</MenuItem>
                                <MenuItem value={6}>Victoria</MenuItem>
                                <MenuItem value={7}>Australian Capital Territory</MenuItem>
                                <MenuItem value={8}>Tasmania</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Make this my Default Address" />
                        <br/ >
                        <Button type="submit" variant="contained">Add new Address</Button>
                    </form>
                </>
            :
                <Button variant="outlined" onClick={addAddressHandler}>Add a new Address</Button>
            }
        </>
    )
}

export default Addresses
