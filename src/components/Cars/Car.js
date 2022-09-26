import css from './Car.module.css'
import {carService} from "../../services";


const Car = ({car, setCars,setUpdateCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = async  () => {
        await carService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index,1)
            return [...cars]
                  })

    }

    return (
        <div className={css.Car}>
         <div>id: {id}</div>
         <div>model: {model}</div>
         <div>price: {price}</div>
         <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() =>deleteCar()}>Delete</button>
        </div>
    );
};

export {Car};