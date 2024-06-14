'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import muscle from '../../../../api/muscle';
import equipment from '../../../../api/equipment';
import workout from '../../../../api/workout';
import exercise from '../../../../api/exercise';
import { useParams, useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import FetchingWrapper from '@/components/large/FetchingWrapper/FetchingWrapper';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { FiTrash2 } from "react-icons/fi";
import { workerData } from 'worker_threads';

interface errorMessages {
    message: string
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
interface dayType {
    id: number,
    type: string,
    dayNumber: number,
    exercises: exerciseTypes[],
}
interface weekType {
    id: number,
    title: string,
    description: string,
    days: dayType[],
};
interface workoutType {
    name: string,
    description: string,
    type: string,
    image: string,
    fitness_level: string,
    fitness_goal: string,
    place: string[],
    min_per_day: number,
    total_number_days: number,
    created_by: string,
    template_weeks: {
        week_number: number,
        week_name: string,
        week_description: string,
        days: {
            day_number: number,
            total_number_exercises: number,
            day_type: string,
            exercises: string[]
        }[],
    }[],
}
interface sentWeeks {
    week_number: number,
    week_name: string,
    week_description: string,
    days: {
        day_number: number,
        total_number_exercises: number,
        day_type: string,
        exercises: string[],
    }[]
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
    const weekDesc = useRef<any>("Untitled");
    const dayTitle = useRef<any>("Untitled");
    const weekId = useRef<any>(1);
    const dayType = useRef<any>();
    const dayNumber = useRef<any>();
    const [weeks, setWeeks] = useState<weekType[]>([]);
    const [exercises, setExercises] = useState<exerciseTypes[]>([]);
    const [addedExercises, setAddedExercises] = useState<exerciseTypes[]>([]);
    const [messages, setMessages] = useState<errorMessages[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [addDays, setAddDays] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(true);
    const params = useParams<any>();
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
    const pushWeek = () => {
        console.log(weekTitle.current.value);
        setWeeks([...weeks, { id: weeks.length, title: weekTitle.current.value, days: [], description: weekDesc.current.value }]);
        console.log("From Push Week", weeks)
    }
    const pushDay = () => {
        let id: number = weekId.current.value;
        setWeeks(weeks.map(week => (
            week.id == id ? ({ ...week, days: [...week.days, { id: week.days?.length, type: dayType.current.value, exercises: addedExercises, dayNumber: dayNumber.current.value }] }) : week
        )));
        console.log(id)
        console.log(weeks);
    }
    const eraseWeek = (weekId: number) => {
        let curWeeks: weekType[] = [];
        for (let i = 0; i < weeks.length; i++)
            if (weeks[i].id != weekId) curWeeks.push(weeks[i]);
        for (let i = 0; i < curWeeks.length; i++)
            curWeeks[i].id = i;

        console.log(weekId);
        console.log(curWeeks);
        console.log(weeks);
        setWeeks(curWeeks);
    }
    const eraseDay = (weekId: number, dayId: number) => {
        setWeeks(weeks.map(week => (
            week.id === weekId ? ({
                ...week, days: week.days.filter(day => (
                    day.id !== dayId
                ))
            }) : week
        )));
        let curWeeks: weekType[] = [];
        for (let i = 0; i < weeks.length; i++) {
            curWeeks.push(weeks[i]);
            if (weeks[i].id == weekId) {
                let curDays: dayType[] = [];
                for (let j = 0; j < weeks[i].days.length; j++)
                    if (weeks[i].days[j].id != dayId) curDays.push(weeks[i].days[j]);
                for (let j = 0; j < curDays.length; j++) curDays[j].id = j;

                curWeeks[curWeeks.length - 1].days = curDays;
            }
        }
        setWeeks(curWeeks);
    }
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('user') === null) router.push('/login');
    }, [])
    useEffect(() => {

        const fetchExercises = async () => {
            const res = await exercise.getAll();
            if (res.status === 200) {
                setExercises(res.data);
                console.log(exercises);

                return;
            }
        }
        fetchExercises();
    }, [])
    useEffect(() => {

        const fetchWorkouts = async () => {
            const res = await workout.get(params.id);
            if (res.status === 200) {
                const data = res.data;
                console.log(res.data);
                name.current.value = data.name;
                description.current.value = data.description;
                type.current.value = data.type;
                image.current.value = data.image;
                fitness_level.current.value = data.fitness_level;
                fitness_goal.current.value = data.fitness_goal;
                min_per_day.current.value = data.min_per_day;
                place.current.value = (data.place.length === 2 ? 'both' : data.place[0]);
                let curWeeks: weekType[] = [];
                for (let i = 0; i < data.template_weeks.length; i++) {
                    let item: sentWeeks = data.template_weeks[i];
                    let addedItem: weekType = { id: 0, description: "", title: "", days: [] };
                    addedItem.id = item.week_number;
                    addedItem.title = item.week_name;
                    addedItem.description = item.week_description;
                    for (let j = 0; j < item.days.length; j++) {
                        let addedDay: dayType = { id: 0, dayNumber: 5, type: "", exercises: [] };
                        addedDay.id = j;
                        addedDay.dayNumber = item.days[j].day_number;
                        addedDay.type = item.days[j].day_type;
                        let curExercises: exerciseTypes[] = [];
                        exercises.map(exer => {
                            if (item.days[j].exercises.includes(exer.id)) curExercises.push(exer);
                        })
                        addedDay.exercises = curExercises;
                        addedItem.days.push(addedDay);
                    }
                    curWeeks.push(addedItem);
                }
                console.log(curWeeks);
                setWeeks(curWeeks);
                return;
            }
        }
        fetchWorkouts();
        setFetching(false);
    }, [exercises]);

    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        let curWeeks: sentWeeks[] = [];
        let cnt = 0;
        console.log(weeks);
        for (let i = 0; i < weeks.length; i++) {
            console.log(weeks[i])
            let item: sentWeeks = { days: [], week_name: "Untitled", week_number: 0, week_description: "No description" };
            item.week_number = weeks[i].id;
            item.week_name = weeks[i].title;
            item.week_description = weeks[i].description;
            for (let j = 0; j < weeks[i].days.length; j++) {
                cnt++;
                item.days.push({
                    day_number: weeks[i].days[j].dayNumber,
                    total_number_exercises: weeks[i].days.length,
                    day_type: weeks[i].days[j].type,
                    exercises: weeks[i].days[j].exercises.map(exer => exer.id)
                })
            }
            curWeeks.push(item);
        }
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        console.log(user)
        const userId = user.data.admin.id;
        let places: string[] = ['home', 'gym'];
        if (place.current.value === 'home') places = ['home'];
        else if (place.current.value === 'gym') places = ['gym'];
        const data: workoutType = {
            name: name.current.value,
            description: description.current.value,
            type: type.current.value,
            image: image.current.value,
            fitness_level: fitness_level.current.value,
            fitness_goal: fitness_goal.current.value,
            place: places,
            min_per_day: min_per_day.current.value,
            total_number_days: cnt,
            template_weeks: curWeeks,
            created_by: userId,

        }
        const res = await workout.update(params.id, data);
        console.log(data);
        console.log(res);
        setIsLoading(false);

        if (res.status === 200) {
            setMessages([{ message: "The Workout is Updated Successfully!" }])
            setSuccess(true);
            return;
        }
        setSuccess(false);
        res.error.map((err: any) => (
            setMessages([{ message: err }])
        ))

    }
    return (
        <>
            {fetching ? (
                <FetchingWrapper />
            ) : (

                <div className={styles.workout} >
                    <h3 className={styles.workout__title}>Add a Workout</h3>
                    <form className={styles.workout__form} onSubmit={handleClick} >

                        <section className={styles.workout__form__popup} style={{ display: (!addDays ? "none" : "block") }}>
                            <span className={styles.workout__form__popup__arrow} onClick={() => setAddDays(false)}>
                                <IoArrowBackCircleOutline />
                            </span>
                            <select ref={weekId} className={styles.workout__form__input}>
                                {weeks.map((week, idx) => {
                                    return (
                                        <option value={week.id}>{week.title}</option>
                                    )
                                })}
                            </select>
                            <div className={styles.workout__form__popup__displayedWeek}>
                            </div>
                            <input type="text" ref={dayType} placeholder='Day Type' className={styles.workout__form__input} />
                            <input type="text" ref={dayNumber} placeholder='Day Number [1:7]' min={1} max={7} className={styles.workout__form__input} />
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
                            <span className={styles.workout__form__popup__button} onClick={pushDay}>Add Day</span>
                            <div className={styles.displayedWeeks}>
                                {weeks.map(week => (
                                    <div className={styles.displayedWeeks__week}>
                                        <h3 className={styles.displayedWeeks__week__title}>{week.title}</h3>
                                        <p className={styles.displayedWeeks__week__description}>{week.description}</p>
                                        <div className={styles.displayedWeeks__week__days}>
                                            {week.days.length === 0 ? "No Added Days" : (

                                                week.days.map((day, idx) => (
                                                    <div className={styles.displayedWeeks__week__days__day}>
                                                        <h4 className={styles.displayedWeeks__week__days__day__title}>
                                                            <div className={styles.displayedWeeks__week__days__day__title__left}>

                                                                {idx + 1} - {day.type}
                                                            </div>
                                                            <div className={styles.displayedWeeks__week__days__day__title__right} onClick={() => eraseDay(week.id, idx)}>
                                                                <FiTrash2 />
                                                            </div>
                                                        </h4>
                                                        <div className={styles.displayedWeeks__week__days__day__exercises}>
                                                            {day.exercises.map(exer => (
                                                                <span className={styles.displayedWeeks__week__days__day__exercises__item}>{exer.name}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))
                                            )}

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </section>
                        <section style={{ display: (addDays ? "none" : "block") }}>
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
                                <option value="home">Home</option>
                                <option value="gym">Gym</option>
                                <option value="both">Both Home & Gym</option>
                            </select>
                            <section className={styles.workout__form__add}>
                                <div className={styles.workout__form__add__weeks}>
                                    <h4 className={styles.workout__form__add__weeks__title}>Weeks - {weeks.length}</h4>
                                    <ul className={styles.workout__form__add__weeks__list}>

                                        {weeks.map((week, idx) => (
                                            <li className={styles.workout__form__add__weeks__list__item}>
                                                <div className={styles.workout__form__add__weeks__list__item__title}>
                                                    {week.title}
                                                </div>
                                                <div className={styles.workout__form__add__weeks__list__item__icon} onClick={() => eraseWeek(idx)}>
                                                    <FiTrash2 />
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                    <input type="text" ref={weekTitle} placeholder='Week Name' className={styles.workout__form__input} />
                                    <textarea ref={weekDesc} placeholder='Week Description' className={styles.workout__form__textarea} />

                                    <span className={styles.workout__form__add__weeks__button} onClick={pushWeek}>Add New Week</span>
                                    <span className={styles.workout__form__add__weeks__button} onClick={() => setAddDays(true)} style={{ background: "#758375" }}>Add New Day To A Week </span>
                                </div>
                            </section>
                        </section>
                        <button disabled={isLoading} className={styles.workout__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default page