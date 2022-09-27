import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Home, UserDetails, UserDetailsV2, Users} from "./components";




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
                <Route path={'users'} element={<Users/>}/>

                <Route path={'users/:id'} element={<UserDetails/>}/>
                <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
                <Route/>
            </Routes>

            <hr/>
        </div>
    );
}

export default App;
