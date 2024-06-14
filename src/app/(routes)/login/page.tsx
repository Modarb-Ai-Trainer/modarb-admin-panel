'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input'
import Button from '@/components/small/Button/Button'
import auth from '../../api/auth'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import { useRouter } from 'next/navigation'
interface errorMessages {
    message: string
};
function page() {
    const email = useRef<any>();
    const password = useRef<any>();
    const [messages, setMessages] = useState<string>();
    const [success, setSuccesss] = useState(false);
    const router = useRouter();
    const loginHandler = async (e: any) => {
        e.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
        const res = await auth.login(email.current.value, password.current.value);
        console.log(res);
        if (res.status === 200) {
            setMessages("Success! Redirecting to the dashboard...")
            setSuccesss(true);
            localStorage.setItem("user", JSON.stringify(res));
            return router.push('/dashboard');
        }
        setSuccesss(false);
        setMessages("Failed to login. Make sure that the input data are ok.")

    };
    return (
        <div className={styles.login} >
            <form className={styles.login__form} onSubmit={loginHandler}>
                {messages?.length && (
                    <ErrorWrapper type={success ? "success" : "failed"}>{messages}</ErrorWrapper>
                )}
                <Input PlaceHolder='Email' type='email' size='large' inputRef={email} />
                <Input PlaceHolder='Password' type='password' size='large' inputRef={password} />
                <Button size='mediam' type='primary'>Login</Button>
            </form>
        </div>
    )
}

export default page