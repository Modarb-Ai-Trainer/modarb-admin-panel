'use client';
import React, { useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import { useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import equipment from '@/app/api/equipment';
interface errorMessages {
    message: string
};
function page() {
    const name = useRef<any>();
    const image = useRef<any>();

    const [messages, setMessages] = useState<errorMessages[]>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name: name.current.value,
            image: image.current.value,
        }
        const res = await equipment.add(data);
        console.log(res);
        setIsLoading(false);

        if (res.status === 201) {
            setMessages([{ message: "The Equipment is Added Successfully!" }])
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
        <div className={styles.equipment} >
            <h3 className={styles.equipment__title}>Add an Equipment</h3>
            <form className={styles.equipment__form} onSubmit={handleClick} >
                {messages?.map(msg => (
                    <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
                ))}
                <input type="text" ref={name} placeholder='Name' className={styles.equipment__form__input} />
                <input type="text" ref={image} placeholder='Image' className={styles.equipment__form__input} />
                <button disabled={isLoading} className={styles.equipment__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
            </form>
        </div>
    )
}

export default page