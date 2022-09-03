import { Header, List, ListItem } from "./Menu.styled"
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import styles from './menu.module.css'

const getClassName = ({isActive}) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}


const Menu = () => {
    return (
       <Header>
            <List>
                <ListItem key={nanoid()}>
                    <NavLink  className={getClassName}  to='/'>Home</NavLink>
                </ListItem> 
                <ListItem key={nanoid()}>
                    <NavLink className={getClassName}  to='/movies'>Movies</NavLink>
                </ListItem> 
            </List>
       </Header>
    )
}

export default Menu