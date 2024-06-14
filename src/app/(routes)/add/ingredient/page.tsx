'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import ingredient from '../../../api/ingredient';
import { useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
interface errorMessages {
    message: string
};
function page() {
    const name = useRef<any>();
    const serving_size = useRef<any>();
    const serving_size_unit = useRef<any>();
    const servings_count = useRef<any>();
    const servings_count_unit = useRef<any>();
    const calories = useRef<any>();
    const carbs = useRef<any>();
    const proteins = useRef<any>();
    const fats = useRef<any>();
    const [messages, setMessages] = useState<errorMessages[]>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('user') === null) router.push('/login');
    }, [])
    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name: name.current.value,
            serving_size: serving_size.current.value,
            serving_size_unit: serving_size_unit.current.value,
            servings_count: servings_count.current.value,
            servings_count_unit: servings_count_unit.current.value,
            calories: calories.current.value,
            carbs: carbs.current.value,
            proteins: proteins.current.value,
            fats: fats.current.value,
        }
        const res = await ingredient.add(data);
        console.log(res);
        setIsLoading(false);

        if (res.status === 201) {
            setMessages([{ message: "The Ingredient is added successfully!" }])
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
        <div className={styles.ingredient} >
            <h3 className={styles.ingredient__title}>Add an Ingredient</h3>
            <form className={styles.ingredient__form} onSubmit={handleClick} >
                {messages?.map(msg => (
                    <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
                ))}
                <input type="text" ref={name} placeholder='Name' className={styles.ingredient__form__input} />
                <input type="number" ref={serving_size} placeholder='Serving Size' className={styles.ingredient__form__input} />
                <input type="text" ref={serving_size_unit} placeholder='Serving Size Unit' className={styles.ingredient__form__input} />
                <input type="number" ref={servings_count} placeholder='Serivng Count' className={styles.ingredient__form__input} />
                <input type="text" ref={servings_count_unit} placeholder='Serivng Count Unit' className={styles.ingredient__form__input} />
                <input type="number" ref={calories} placeholder='Calories' className={styles.ingredient__form__input} />
                <input type="number" ref={carbs} placeholder='Carbs' className={styles.ingredient__form__input} />
                <input type="number" ref={proteins} placeholder='Protein' className={styles.ingredient__form__input} />
                <input type="number" ref={fats} placeholder='Fats' className={styles.ingredient__form__input} />
                <button disabled={isLoading} className={styles.ingredient__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
            </form>
        </div>
    )
}

export default page