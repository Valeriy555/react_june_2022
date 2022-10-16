import {useDispatch} from "react-redux";

import {carsActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch(); // добавляет в стор данные (юзеров)

    const {id, model} = car;

    return (
        <div>
            <div>{id}) {model} </div>

            <button onClick={() => dispatch(carsActions.setCurrentCar(car))}>select</button>
            <button onClick={() => dispatch(carsActions.getById({id}))}>getFromAPI</button>
            <button onClick={() => dispatch(carsActions.deleteById(id))}>delete</button>

            <hr/>
        </div>
    );
};

export {Car};