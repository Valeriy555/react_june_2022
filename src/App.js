import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Home, Posts, UserDetails, UserDetailsV2, Users} from "./components";


function App() {

    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/users'}>users page</Link></li>
                <li><Link to={'/posts'}>post page</Link></li>
            </ul>

            <hr/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'users'} element={<Users/>}>
                    <Route path={':id'} element={<UserDetails/>}/>
                    <Route path={'v2/:id'} element={<UserDetailsV2/>}/>

                </Route>

                <Route path={'posts'} element={<Posts/>}/>

            </Routes>

            <hr/>
        </div>
    );
}

export default App;
