import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsActions} from "../../redux";


const Cars = () => {
    const dispatch = useDispatch(); // добавляет в стор данные (cars)
    const {cars,loading, error } = useSelector(state => state.carsReducer); // достать из стора


    useEffect(() => {
        dispatch(carsActions.getAll())


    }, [])

    return (
        <div>

            {loading && <h1>Loading........................</h1>}
            {error && <h1>Error</h1>}

            {cars.map(car => <Cars key={car.id} user={car}/>)}

        </div>
    );
};

export {Cars};