import st from './login.module.css'
import {NavLink} from "react-router-dom";

const Login = (props) => {

    return (
        <div className={st.root}>
            <div>
                <input
                    type='text'
                    name='login'
                    placeholder='Login'
                />
            </div>
            <div>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                />
            </div>
            <div className={st.btn}>
                <NavLink to={'/main/'}>Войти</NavLink>
            </div>
        </div>
    );
}
export default Login;