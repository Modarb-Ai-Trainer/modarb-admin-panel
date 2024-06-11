'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import ingredient from '../../../../api/ingredient';
import meal from '../../../../api/meal';
import meal_plan from '../../../../api/mealPlan';
import { useParams, useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import FetchingWrapper from '@/components/large/FetchingWrapper/FetchingWrapper';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

interface errorMessages {
    message: string
};
interface ingTypes {
    id: string,
    name: string,
    calories: number,
    carbs: number,
    proteins: number,
    fats: number,
    type: string,
    ingredients: string[],
}
interface featureType {
    title: string,
    description: string,

}
interface dayType {
    day_number: number,
    meals: string[],
}
interface mealPlan {
    image: string,
    description: string,
    duration: number,
    level: string,
    your_journey: string,
    key_features: featureType[],
    days: dayType[],

}
function page() {
    const image = useRef<any>();
    const description = useRef<any>();
    const duration = useRef<any>();
    const level = useRef<any>();
    const your_journey = useRef<any>();
    const dayNumber = useRef<any>();
    const title = useRef<any>();
    const keyDescription = useRef<any>();
    const [messages, setMessages] = useState<errorMessages[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(true);
    const [myMeals, SetMyMeals] = useState<ingTypes[]>([]);
    const [addedMeals, setAddedMeals] = useState<ingTypes[]>([]);
    const [days, setDays] = useState<dayType[]>([]);
    const [features, setFeatures] = useState<featureType[]>([]);
    const params = useParams<any>()
    useEffect(() => {
        const fetchData = async () => {
            const res = await meal.getAll();
            if (res.status === 200) {
                SetMyMeals(res.data);
            }
        };
        const fetchMealPlans = async () => {
            const res = await meal_plan.get(params.id);
            if (res.status === 200) {
                const data: mealPlan = res.data;
                console.log(data);
                image.current.value = data.image;
                description.current.value = data.description;
                duration.current.value = data.duration;
                level.current.value = data.level;
                your_journey.current.value = data.your_journey;
                setDays(data.days);
                setFeatures(data.key_features);
            }
        }
        fetchData();
        fetchMealPlans();
        console.log(myMeals)
        setFetching(false);
    }, []);
    const addDay = () => {
        setDays([...days, { day_number: dayNumber.current.value, meals: addedMeals.map(m => m.id) }]);
        console.log(days);
    }
    const eraseDay = (idx: number) => {
        let curDays: dayType[] = [];
        for (let i = 0; i < days.length; i++) {
            if (i === idx) continue
            curDays.push(days[i]);
        }
        setDays(curDays);
    }
    const addFeature = () => {
        setFeatures([...features, { title: title.current.value, description: keyDescription.current.value }]);
        console.log(days);
    }
    const eraseFeature = (idx: number) => {
        let curFeatures: featureType[] = [];
        for (let i = 0; i < features.length; i++) {
            if (i === idx) continue
            curFeatures.push(features[i]);
        }
        setFeatures(curFeatures);
    }
    const check = (item: ingTypes) => {
        let found = 0;
        addedMeals.map((ing: ingTypes) => {
            if (ing === item) found = 1;
        })
        return found;
    }
    const getName = (idx: string) => {
        for (let i = 0; i < myMeals.length; i++) {
            if (myMeals[i].id === idx) return myMeals[i].name;
        }
        return "Untitled"
    }
    const addMeal = (item: ingTypes) => {
        setAddedMeals([...addedMeals, item]);
        console.log(addedMeals);
    }

    const eraseMeal = (item: ingTypes) => {
        setAddedMeals(addedMeals.filter((ing: ingTypes) => (
            ing != item
        )))
    }
    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const ings: string[] = []
        addedMeals.map(ing => {
            ings.push(ing.id);
        })
        const data: mealPlan = {
            image: image.current.value,
            description: description.current.value,
            duration: duration.current.value,
            level: level.current.value,
            your_journey: your_journey.current.value,
            key_features: features,
            days: days,
        }
        const res = await meal_plan.update(params.id, data);
        console.log(data);
        console.log(res);
        setIsLoading(false);

        if (res.status === 200) {
            setMessages([{ message: "The Meal Plan is Updated Successfully!" }])
            setSuccess(true);
            return;
        }
        setSuccess(false);
        res.error.map((err: any) => (
            setMessages([{ message: err }])
        ))
        setIsLoading(false);
    }
    return (
        <>
            {fetching ? (
                <FetchingWrapper />
            ) : (

                <div className={styles.meals} >
                    <h3 className={styles.meals__title}>Add a Meal Plan</h3>
                    <form className={styles.meals__form} onSubmit={handleClick} >
                        {messages?.map(msg => (
                            <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
                        ))}
                        <input type="text" ref={image} placeholder='Image' className={styles.ingredient__form__input} />
                        <textarea ref={description} placeholder='Description' className={styles.ingredient__form__textarea} />
                        <input type="text" ref={duration} placeholder='Duration' className={styles.ingredient__form__input} />
                        <select ref={level} className={styles.ingredient__form__input}>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>                         <input type="text" ref={your_journey} placeholder='Your Journey' className={styles.ingredient__form__input} />
                        <div className={styles.meals__form__ingredients}>
                            <h4 className={styles.meals__form__days__title}>Days:</h4>
                            {days.length == 0 && "No Added Days"}
                            <ul className={styles.meals__form__days__list}>
                                {days?.map((day, idx) => (
                                    <li className={styles.meals__form__days__list__item}>
                                        <div className={styles.meals__form__days__list__item__top}>
                                            <div className={styles.meals__form__days__list__item__top__left}>{idx + 1}</div>
                                            <div className={styles.meals__form__days__list__item__top__right} onClick={() => eraseDay(idx)}>
                                                <FiTrash2 />

                                            </div>
                                        </div>
                                        <div className={styles.meals__form__days__list__item__bottom}>
                                            {day.meals.map(meal => (
                                                <span className={styles.meals__form__days__list__item__bottom__item}>{getName(meal)}</span>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <input type="number" min={1} max={7} ref={dayNumber} placeholder='Day Number' value={1} className={styles.ingredient__form__input} />

                            <h4 className={styles.meals__form__ingredients__title}>Meals:</h4>
                            {addedMeals.length == 0 && "No Added Meals"}
                            <ul className={styles.meals__form__ingredients__list}>
                                {addedMeals?.map(ing => (
                                    <li className={styles.meals__form__ingredients__list__item}>{ing.name}</li>
                                ))}
                            </ul>
                            <ul className={styles.meals__form__ingredients__add}>
                                {myMeals.map(ing => (

                                    <li className={styles.meals__form__ingredients__add__item}>
                                        <div className={styles.meals__form__ingredients__add__item__title}>
                                            {ing.name}
                                        </div>
                                        {check(ing) ? (
                                            <span className={`${styles.meals__form__ingredients__add__item__button} ${styles.remove}`} onClick={() => eraseMeal(ing)}>
                                                <FiTrash2 />
                                            </span>
                                        ) : (
                                            <span className={`${styles.meals__form__ingredients__add__item__button} ${styles.add}`} onClick={() => addMeal(ing)}>
                                                <IoIosAddCircleOutline />
                                            </span>

                                        )}
                                    </li>
                                ))}
                            </ul>
                            <span className={styles.meals__form__ingredients__pushDay} onClick={addDay}>Add Day</span>
                            <div className={styles.meals__form__ingredients}>
                                <h4 className={styles.meals__form__days__title}>Features:</h4>
                                {features.length == 0 && "No Added Features"}
                                <ul className={styles.meals__form__features__list}>
                                    {features?.map((feature, idx) => (
                                        <li className={styles.meals__form__days__list__item}>
                                            <div className={styles.meals__form__days__list__item__top}>
                                                <div className={styles.meals__form__days__list__item__top__left}>{idx + 1}</div>
                                                <div className={styles.meals__form__days__list__item__top__right} onClick={() => eraseFeature(idx)}>
                                                    <FiTrash2 />

                                                </div>
                                            </div>
                                            <div className={styles.meals__form__days__list__item__bottom}>
                                                {feature.description}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <input type="text" ref={title} placeholder='Title' className={styles.ingredient__form__input} />
                                <input type="text" ref={keyDescription} placeholder='Description' className={styles.ingredient__form__input} />
                                <span className={styles.meals__form__ingredients__pushDay} onClick={addFeature}>Add Feature</span>

                            </div>
                        </div>
                        <button disabled={isLoading} className={styles.ingredient__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default page