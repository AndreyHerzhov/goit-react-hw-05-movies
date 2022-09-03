import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
width: 100%;
height: 50px;
border-bottom: 1px solid black;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 500;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`

export const ListItem = styled.li`
    text-decoration: none;
    margin-left: 10px;
    color: #000;
    
 
`

export const StyledNavLink = styled(NavLink)`
    color: brown;
    width: 100px;
    border-radius: 5px;
    padding: 10px;

   &:hover {
        background-color: darkkhaki;
        color: wheat;
        
    }

    &:active {
        background-color: brown;
        color: white;
    }
 

`