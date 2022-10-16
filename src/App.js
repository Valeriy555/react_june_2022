import {CarForm, Cars} from "./components";
import {CarSingle} from "./components/Cars/CarSingle";
import css from "./App.module.css";


function App() {

    return (
        <div>

            <CarForm/>
            <div>
                <div className={css.wrap}>
                    <div className={css.users}>
                        <Cars/>
                    </div>
                    <div className={css.userSingle}>
                        <CarSingle/>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
