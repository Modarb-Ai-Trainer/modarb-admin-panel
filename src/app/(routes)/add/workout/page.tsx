'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import muscle from '../../../api/muscle';
import equipment from '../../../api/equipment';
import exercise from '../../../api/exercise';
import { useParams, useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import FetchingWrapper from '@/components/large/FetchingWrapper/FetchingWrapper';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { FiTrash2 } from "react-icons/fi";

interface errorMessages {
    message: string
};
interface dayType {
    id: number,
    title: string,
}
interface weekType {
    id: number,
    title: string,
    days: dayType[],
};
interface exerciseTypes {
    id: string,
    name: string,
    category: string,
    duration: number,
    expectedDurationRange: {
        min: number,
        max: number
    },
    reps: number,
    sets: number,
    instructions: string,
    benefits: string,
    targetMuscles: {
        primary: string,
        secondary: string
    },
    equipments: string[],
    coverImage: string,
    media: {
        type: string,
        url: string
    }
}
function page() {
    const name = useRef<any>();
    const description = useRef<any>();
    const type = useRef<any>();
    const image = useRef<any>();
    const fitness_level = useRef<any>();
    const fitness_goal = useRef<any>();
    const place = useRef<any>();
    const min_per_day = useRef<any>();
    const weekTitle = useRef<any>("Untitled");
    const dayTitle = useRef<any>("Untitled");
    const weekId = useRef<any>(1);
    const [weeks, setWeeks] = useState<weekType[]>([]);
    const [exercises, setExercises] = useState<exerciseTypes[]>([]);
    const [addedExercises, setAddedExercises] = useState<exerciseTypes[]>([]);
    const [messages, setMessages] = useState<errorMessages[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [addDays, setAddDays] = useState<boolean>(true);
    const [fetching, setFetching] = useState<boolean>(true);
    const check = (item: exerciseTypes) => {
        let found = 0;
        addedExercises.map((equipment: exerciseTypes) => {
            if (equipment === item) found = 1;
        })
        return found;
    }
    const addExercise = (item: exerciseTypes) => {
        setAddedExercises([...addedExercises, item]);
        console.log(addedExercises);
    }

    const eraseExercise = (item: exerciseTypes) => {
        setAddedExercises(addedExercises.filter((equipment: exerciseTypes) => (
            equipment != item
        )))
    }
    const pushWeek = (e: any) => {
        e.preventDefault();
        console.log(weekTitle.current.value);
        setWeeks([...weeks, { id: weeks.length + 1, title: weekTitle.current.value, days: [] }]);
        console.log(weeks)
    }
    const pushDay = (e: any) => {
        e.preventDefault();
        let idx: number = parseInt(weekId.current.value);
        setWeeks(weeks.map(week => (
            week.id === idx ? ({ ...week, days: [...week.days, { id: week.days?.length + 1, title: dayTitle.current.value }] }) : week
        )));
    }
    const eraseWeek = (weekId: number) => {
        setWeeks(weeks.filter(week => (
            week.id !== weekId
        )));
    }
    const eraseDay = (weekId: number, dayId: number) => {
        setWeeks(weeks.map(week => (
            week.id === weekId ? ({
                ...week, days: week.days.filter(day => (
                    day.id !== dayId
                ))
            }) : week
        )));
    }
    useEffect(() => {

        const fetchExercises = async () => {
            const res = await exercise.getAll();
            if (res.status === 200) {
                setExercises(res.data);
                return;
            }
        }
        fetchExercises();
        setFetching(false);
    }, []);

    const handleClick = async (e: any) => {
        // e.preventDefault();
        // setIsLoading(true);
        // const equipments: string[] = []
        // const data: exerciseTypes = {
        //     name: name.current.value,
        //     category: category.current.value,
        //     duration: duration.current.value,
        //     expectedDurationRange: {
        //         min: MinExptectedDurationRange.current.value,
        //         max: MaxExptectedDurationRange.current.value
        //     },
        //     reps: reps.current.value,
        //     sets: sets.current.value,
        //     instructions: instructions.current.value,
        //     benefits: benefits.current.value,
        //     coverImage: coverImage.current.value,
        //     media: {
        //         type: mediaType.current.value,
        //         url: mediaURL.current.value
        //     },
        //     targetMuscles: {
        //         primary: primaryMuscles.current.value,
        //         secondary: secondaryMuscles.current.value,
        //     },
        //     equipments: equipments,
        // }
        // const res = await exercise.add(data);
        // console.log(data);
        // console.log(res);
        // setIsLoading(false);

        // if (res.status === 200) {
        //     setMessages([{ message: "The Exercise is Updated Successfully!" }])
        //     setSuccess(true);
        //     return;
        // }
        // setSuccess(false);
        // res.error.map((err: any) => (
        //     setMessages([{ message: err }])
        // ))
    }
    return (
        <>
            {fetching ? (
                <FetchingWrapper />
            ) : (

                <div className={styles.workout} >
                    <h3 className={styles.workout__title}>Add a Workout</h3>
                    <form className={styles.workout__form} onSubmit={handleClick} >
                        {addDays ? (
                            <section className={styles.workout__form__popup}>
                                <span className={styles.workout__form__popup__arrow} onClick={() => setAddDays(false)}>
                                    <IoArrowBackCircleOutline />
                                </span>
                                <select ref={weekId} className={styles.workout__form__input}>
                                    <option selected hidden>Choose a week</option>
                                    {weeks.map((week, idx) => {
                                        return (
                                            <option value={week.id}>{week.title}</option>
                                        )
                                    })}
                                </select>
                                <div className={styles.workout__form__popup__displayedWeek}>
                                </div>
                                <input type="text" ref={name} placeholder='Day Type' className={styles.workout__form__input} />
                                <div className={styles.workout__form__exercise}>
                                    <h4 className={styles.workout__form__exercise__title}>Exercises:</h4>
                                    <ul className={styles.workout__form__exercise__list}>
                                        {addedExercises?.map(exer => (
                                            <li className={styles.workout__form__exercise__list__item}>{exer.name}</li>
                                        ))}
                                    </ul>
                                    <ul className={styles.workout__form__exercise__add}>
                                        {exercises.map(exer => (

                                            <li className={styles.workout__form__exercise__add__item}>
                                                <div className={styles.workout__form__exercise__add__item__title}>
                                                    {exer.name}
                                                </div>
                                                {check(exer) ? (
                                                    <span className={`${styles.workout__form__exercise__add__item__button} ${styles.remove}`} onClick={() => eraseExercise(exer)}>
                                                        <FiTrash2 />
                                                    </span>
                                                ) : (
                                                    <span className={`${styles.workout__form__exercise__add__item__button} ${styles.add}`} onClick={() => addExercise(exer)}>
                                                        <IoIosAddCircleOutline />
                                                    </span>

                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <span className={styles.workout__form__popup__button}>Add Day</span>
                            </section>
                        ) : (
                            <>

                                {messages?.map(msg => (
                                    <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
                                ))}
                                <input type="text" ref={name} placeholder='Name' className={styles.workout__form__input} />
                                <textarea ref={description} placeholder='Description' className={styles.workout__form__textarea} />
                                <input type="text" ref={type} placeholder='Type' className={styles.workout__form__input} />
                                <input type="text" ref={image} placeholder='Image' className={styles.workout__form__input} />
                                <select ref={fitness_level} className={styles.workout__form__input}>
                                    <option selected hidden>Fitness Level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                                <select ref={fitness_goal} className={styles.workout__form__input}>
                                    <option selected hidden>Fitness Goal</option>
                                    <option value="lose weight">Lose Weight</option>
                                    <option value="gain muscle">Gain Muscle</option>
                                    <option value="get fitter">Get Fitter</option>
                                </select>                                <input type="number" ref={min_per_day} placeholder='Minimum Per Day' className={styles.workout__form__input} />
                                <select ref={place} className={styles.workout__form__input}>
                                    <option selected hidden>Place</option>
                                    <option value="home">home</option>
                                    <option value="gym">gym</option>
                                </select>
                                <section className={styles.workout__form__add}>
                                    <div className={styles.workout__form__add__weeks}>
                                        <h4 className={styles.workout__form__add__weeks__title}>Weeks - {weeks.length}</h4>
                                        <ul className={styles.workout__form__add__weeks__list}>

                                            {weeks.map((week, idx) => (
                                                <li className={styles.workout__form__add__weeks__list__item}>
                                                    {week.id} - {week.title}

                                                </li>
                                            ))}
                                        </ul>
                                        <input type="text" ref={weekTitle} placeholder='Week Name' className={styles.workout__form__input} />
                                        <textarea ref={description} placeholder='Week Description' className={styles.workout__form__textarea} />

                                        <span className={styles.workout__form__add__weeks__button} onClick={pushWeek}>Add New Week</span>
                                        <span className={styles.workout__form__add__weeks__button} onClick={() => setAddDays(true)} style={{ background: "#758375" }}>Add New Day To A Week </span>
                                    </div>
                                </section>

                                <button disabled={isLoading} className={styles.workout__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
                            </>
                        )}
                    </form>
                </div>
            )}
        </>
    )
}

export default page