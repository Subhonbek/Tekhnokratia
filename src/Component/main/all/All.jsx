import st from './all.module.css'
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
import {useState} from "react";

const All = (props) => {
    const [modalActive, setModalActive]= useState(false)

    return(
        <div className={st.root}>
            <div className={st.human}>
                <img alt={'Ico'} src={props.avatar}/>
                <div className={st.name} >
                    <NavLink to={'/main/all/person' + props.id} onClick={()=>setModalActive(true)}>{props.name} {props.fname}</NavLink>
                </div>
                <div className={st.balance} > {'Баланс: ' +props.balance} </div>
                <div className={st.time}> {props.lastUpdatedAt} </div>
                <select>
                    <option>Подписка Активна</option>
                    <option>Приостановлено</option>
                    <option>Заблокировано</option>
                </select>
            </div>
            <Modal active = {modalActive} setActive={setModalActive} state = {props}/>
        </div>
    );
}

export default All;