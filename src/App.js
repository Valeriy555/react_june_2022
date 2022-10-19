import {UserSingle} from "./components/Users/UserSingle";
import css from "./App.module.css";
import {Header, Posts, Users} from "./components";


function App() {

    return (
        <div>
            <Header/>
            <div>
                <div className={css.wrap}>
                    <div className={css.users}>
                        <Users/>
                    </div>
                    <div className={css.userSingle}>
                        <UserSingle/>
                    </div>

                </div>

                <Posts/>
            </div>

        </div>
    );
}

export default App;
