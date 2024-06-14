'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import admins from '../../../api/admins';
import { useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
interface errorMessages {
    message: string
};
function page() {
    const name = useRef<any>();
    const email = useRef<any>();
    const password = useRef<any>();
    const image = useRef<any>();
    const role = useRef<any>();
    const gender = useRef<any>();
    const [messages, setMessages] = useState<errorMessages[]>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('user') === null) return router.push('/login');
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user.data.admin.role != 'superAdmin') return router.push('/dashboard');
    }, [])
    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            image: image.current.value,
            role: role.current.value,
            gender: gender.current.value,
        }
        console.log(data);
        const res = await admins.add(data);
        setIsLoading(false);

        if (res.status === 201) {
            setMessages([{ message: "The Admin is Created successfully!" }])
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
            <h3 className={styles.ingredient__title}>Add an Admin</h3>
            <form className={styles.ingredient__form} onSubmit={handleClick} >
                {messages?.map(msg => (
                    <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
                ))}
                <input type="text" ref={name} placeholder='Name' className={styles.ingredient__form__input} />
                <input type="text" ref={email} placeholder='Email' className={styles.ingredient__form__input} />
                <input type="password" ref={password} placeholder='Password' className={styles.ingredient__form__input} />
                <input type="text" ref={image} placeholder='Image' className={styles.ingredient__form__input} />
                <select ref={role} className={styles.ingredient__form__input}>
                    <option value="admin">Admin</option>
                    <option value="superAdmin">Super Admin</option>
                </select>
                <select ref={gender} className={styles.ingredient__form__input}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button disabled={isLoading} className={styles.ingredient__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
            </form>
        </div>
    )
}

export default page