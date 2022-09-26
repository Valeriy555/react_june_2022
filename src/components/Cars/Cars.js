import {useEffect, useState} from "react";

import {carService} from "../../services";
import {CarForm} from "../CarForm/CarForm";
import {Car} from "./Car";
import css from "./Cars.module.css";


const Cars = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar ] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])


    return (
        <div>
            <CarForm setCars={setCars} updateCar ={updateCar} setUpdateCar ={setUpdateCar} />
            <hr/>
            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setUpdateCar={setUpdateCar}/>)}
            </div>

        </div>
    );
};

export {Cars};
