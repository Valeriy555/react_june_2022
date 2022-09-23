import {useEffect, useState} from "react";

import {carService} from "../../services";
import {CarForm} from "../CarForm/CarForm";
import {Car} from "./Car";
import css from "./Cars.module.css";


const Cars = () => {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])


    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>

        </div>
    );
};

export {Cars};
