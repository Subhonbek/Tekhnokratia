import st from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={st.header}>
            <div>
                <NavLink to={'/main/all'} activeClassName={st.active}>Все</NavLink>
            </div>

            <div>
                <NavLink to={'/main/blocked'} activeClassName={st.active} >Заблокированные</NavLink>
            </div>

            <div>
                <NavLink to={'/main/active'} activeClassName={st.active} >Активные</NavLink>
            </div>
        </header>
    );
}

export default Header;