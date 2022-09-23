import css from './Car.module.css'
import {carService} from "../../services";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <div className={css.Car}>
         <div>id: {id}</div>
         <div>model: {model}</div>
         <div>price: {price}</div>
         <div>year: {year}</div>
        </div>
    );
};

export {Car};