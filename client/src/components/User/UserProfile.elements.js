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
    width: 100px;
    margin-top: 100px;
    border-bottom: ${({active}) => (active ? '1px dotted black': 'none')};
    color: ${({active}) => (active ? 'red': 'black')};

    :hover {
        color: #4b59f7;
    }
`