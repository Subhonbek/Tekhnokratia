import st from './main.module.css'
import {NavLink} from "react-router-dom";
import All from "./all/All";
import Header from "./header/Header";


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
            <Header/>
            <div>
                {allElement}
            </div>


        </div>
    );
}
export default Main;