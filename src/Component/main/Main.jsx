import st from './main.module.css'
import {NavLink} from "react-router-dom";
import All from "./all/All";


const Main = (props) => {

    let allElement = props.state.person.map(d => <All avatar={d.avatar}
                                                      id={d.id}
                                                      name={d.name}
                                                      balance={d.balance}
                                                      status={d.status}
                                                      lastUpdatedAt={d.lastUpdatedAt}
                                                      fname={d.fname}
                                                      mname={d.mname}/>)
    return (
        <div>
            <header className={st.header}>
                <div>
                    <NavLink to={'/main/all'} activeClassName={st.active}>Все</NavLink>
                </div>

                <div>
                    <NavLink to={'/main/Blocked'} activeClassName={st.active} >Заблокированные</NavLink>
                </div>

                <div>
                    <NavLink to={'/main/Active'} activeClassName={st.active} >Активные</NavLink>
                </div>
            </header>
            <div>
                {allElement}
            </div>


        </div>
    );
}
export default Main;