import st from './modal.module.css'
import './select.css'
const Modal = (props) => {
    debugger
    return (
        <div className={props.active ? st.modal + " " + st.active : st.modal} onClick={() => props.setActive(false)}>
            <div className={st.modalContent} onClick={e => e.stopPropagation()}>
                <header className={st.header}><b>{props.state.name + ' ' + props.state.fname}</b></header>
                <div className={st.content}>
                    <div>{props.state.name}</div>
                    <div>{props.state.fname}</div>
                    <div>{props.state.mname}</div>
                    <select>
                        <option>Подписка Активна</option>
                        <option>Приостановлено</option>
                        <option>Заблокировано</option>
                    </select>
                    <div className={st.save}> Сохранить</div>
                </div>
            </div>
        </div>
    );
}
export default Modal;