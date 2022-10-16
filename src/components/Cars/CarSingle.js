import {useSelector} from "react-redux";

const CarSingle = () => {
    const {currentCar, carFromAPI} = useSelector(state => state.carsReducer);
    return (
        <div>
            <b>ID:</b> {currentCar && currentCar.id} <br/>
            <b>Model:</b> {currentCar && currentCar.model} <br/>
            <b>Price:</b> {currentCar && currentCar.price} <br/>
            <b>Year:</b> {currentCar && currentCar.year} <br/>


            <hr/>
            <h3>Car from API</h3>
            <b>ID:</b> {carFromAPI && carFromAPI.id} <br/>
            <b>Model:</b> {carFromAPI && carFromAPI.model} <br/>
            <b>Price:</b> {carFromAPI && carFromAPI.price} <br/>
            <b>Year:</b> {carFromAPI && carFromAPI.year} <br/>

        </div>
    );
};

export {CarSingle};