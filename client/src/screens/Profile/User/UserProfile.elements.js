import styled from "styled-components"
import Grid from '@mui/material/Grid'

export const LoginDescCategory = styled.p`
    &:before {
        content: '- My Account';
    }
`
export const Grids = styled(Grid)`
    padding: 5% 3%;
`
export const List = styled.ul`
    list-style: none;
    list-style-position:inside;
`
export const ListItem = styled.li`
    cursor: pointer;
    margin-top: 100px;
    text-decoration: ${({active}) => (active ? 'underline': 'none')};
    color: ${({active}) => (active ? 'red': 'black')};

    :hover {
        color: #4b59f7;
    }
`
export const LogoutButton = styled.button`
    color: #fff;
    float: right;
    margin: 50px;
    font-family: inherit;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 7px 25px 7px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    :after {
        content: "";
        background-color: #4b59f7;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.2s;
    }
    :hover::after {
        top: 0px;
        left: 0px;
    }
`