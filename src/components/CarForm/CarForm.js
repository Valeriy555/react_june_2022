import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setCars, updateCar, setUpdateCar}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)

    });

    useEffect(() => {
        if (updateCar) {
            setValue('model', updateCar.model, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar, setValue])


    const submit = async (car) => {
        if (updateCar) {
            const {data} = await carService.updateById(updateCar.id, car);
            setCars((cars) => {
                const findCar = cars.find(value => value.id === updateCar.id);
                Object.assign(findCar, data)
                setUpdateCar(null)
                return [...cars]
            })
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data])
        }
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>

                <input type="text" placeholder={'price'} {...register('price')}/>

                <input type="text" placeholder={'year'} {...register('year')}/>

                <button disabled={!isValid}>Save</button>
                <div>
                    {errors.model && <span>{errors.model.message}</span>}
                    {errors.price && <span>{errors.price.message}</span>}
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
            </form>

        </div>
    );
};

export {CarForm};