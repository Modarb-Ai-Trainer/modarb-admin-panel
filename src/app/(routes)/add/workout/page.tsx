'use client';
import React, { useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
interface dayType {
    id: number,
    title: string,
}
interface weekType {
    id: number,
    title: string,
    days: dayType[],
};
function page() {
    const weekTitle = useRef<any>("Untitled");
    const dayTitle = useRef<any>("Untitled");
    const weekId = useRef<any>(1);
    const [weeks, setWeeks] = useState<weekType[]>([]);
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
    return (
        <div className={styles.workout}>
            <section className={styles.workoutLeft}>
                <div className={styles.workoutLeftPopupWeek}>
                    <form className={styles.workoutLeftPopupWeekForm} onSubmit={pushWeek}>
                        <Input size='mediam' PlaceHolder='Week title' type='text' inputRef={weekTitle} />
                        <textarea placeholder='Week Description' />
                        <Button size='small' type='success' >Add Week {weeks.length + 1}</Button>
                    </form>
                </div>
                <div className={styles.workoutLeftPopupDay}>
                    <form className={styles.workoutLeftPopupWeekForm} onSubmit={pushDay}>
                        <Input size='mediam' PlaceHolder='Week Id' type='number' inputRef={weekId} />
                        <Input size='mediam' PlaceHolder='Day title' type='text' inputRef={dayTitle} />
                        <Button size='small' type='success' >Add Day</Button>
                    </form>
                </div>
            </section >
            <section className={styles.workouRight}>
                <ul className={styles.workouRightWeeksList}>
                    {weeks.map((week, idx) => (

                        <li className={styles.workouRightWeeksItem}>
                            <div className={styles.workouRightWeeksItemTop}>
                                <h3 className={styles.workouRightWeeksItemTopId}>Week {idx + 1}</h3>
                                <div className={styles.workouRightWeeksItemTopDays}>{week.title}</div>
                                <span className={styles.workouRightWeeksItemTopDel} onClick={() => eraseWeek(week.id)}>DEL</span>
                            </div>

                            <ul className={styles.workouRightWeeksItemBottom}>
                                {week.days.map((day, idx) => (
                                    <li className={styles.workouRightWeeksItemBottomItem} >
                                        <h3 className={styles.workouRightWeeksItemBottomItemId}>{idx + 1} - {day.title}</h3>
                                        <span className={styles.workouRightWeeksItemBottomItemDel}>DEL</span>
                                    </li>

                                ))}

                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        </div >
    )
}

export default page