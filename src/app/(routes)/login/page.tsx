'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input'
import Button from '@/components/small/Button/Button'
import APIs from '../../api/create-admin'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
interface errorMessages {
    message: string
};
function page() {
    const email = useRef<any>();
    const password = useRef<any>();
    const [messages, setMessages] = useState<errorMessages[]>();
    const arr = useRef<any>();
    const loginHandler = async (e: any) => {
        e.preventDefault();
        arr.current = ["Loading"]
        console.log(arr.current);

        console.log(email.current.value);
        console.log(password.current.value);
        const res = await APIs.testLogin(email.current.value, password.current.value);
        console.log(res);
        if (res.status === 200) {
            arr.current = ["Success"]
            console.log(arr.current);

            return localStorage.setItem("user", JSON.stringify(res));
        }
        arr.current = [res.error];
        console.log(arr.current);
    };
    return (
        <div className={styles.login} >
            {arr.current && <div className={styles.loginErrorWrapper}>
                {arr.current.map((msg: any) => (
                    <ErrorWrapper type='progress'>{msg}</ErrorWrapper>
                ))}
                {/* <ErrorWrapper type='failed'>Success</ErrorWrapper>
                <ErrorWrapper type='success'>Please Enter a Valid Email</ErrorWrapper> */}
            </div>}
            <form className={styles.login__form} onSubmit={loginHandler}>
                <Input PlaceHolder='Email' type='email' size='large' inputRef={email} />
                <Input PlaceHolder='Password' type='password' size='large' inputRef={password} />
                <Button size='mediam' type='primary'>Login</Button>
            </form>
        </div>
    )
}

export default page