import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {carService} from "../../services";

const CarForm = ({setCars}) => {

    const {register, handleSubmit,reset,setValue,formState:{errors, isValid}} = useForm({
        mode: 'all'

    });




const submit = async (car) => {
            console.log(car)
    const {data} = await carService.create(car);
    setCars(cars => [...cars, data])
    reset()
}
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {CarForm};