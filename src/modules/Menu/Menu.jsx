import { Header, List, ListItem } from "./Menu.styled"
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import styles from './menu.module.css'
import { getMovies } from "shared/api/movies";

const getClassName = ({isActive}) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

const fetchPosts = async() => {
    try {
        const result = await getMovies();
       console.log(result)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log('object')
    }
}
 
 
 

const Menu = () => {
    return (
       <Header>
            <List>
                <ListItem key={nanoid()}>
                    <NavLink onClick={fetchPosts} className={getClassName}  to='/'>Home</NavLink>
                </ListItem> 
                <ListItem key={nanoid()}>
                    <NavLink className={getClassName}  to='/movies'>Movies</NavLink>
                </ListItem> 
            </List>
       </Header>
    )
}

export default Menu