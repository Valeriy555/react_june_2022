import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {currentCar, errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentCar) {
            setValue('model', currentCar.model)
            setValue('price', currentCar.price)
            setValue('year', currentCar.year)
        }
    }, [currentCar, setValue]);

    const submit = async (data) => {
        if (currentCar){
            await dispatch (carsActions.updateById({id:currentCar.id, car: data}))
        } else {
            await dispatch(carsActions.create({car:data}))
        }
        reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')} />
                <input type="text" placeholder={'price'} {...register('price')} />
                <input type="text" placeholder={'year'} {...register('year')} />
                <button>{currentCar ? 'Update' : 'Create'}</button>
                {errors && <div>{JSON.stringify(errors)}</div>}
            </form>
        </div>
    );
};

export {CarForm};