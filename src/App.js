import './App.css';
import Login from "./Component/login/Login";
import {Route} from "react-router";
import Main from "./Component/main/Main";

function App(props) {
    return (
        <div className={'App'}>
            <Route exact path={'/'} render={() => <Login/>}/>
            <Route path={'/main/'} render={() => <Main state={props.state}/>}/>
        </div>
    );
}

export default App;
