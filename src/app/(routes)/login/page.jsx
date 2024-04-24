'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input'
import Button from '@/components/small/Button/Button'
import APIs from '../../api/create-admin'
function page() {
    const email = useRef();
    const password = useRef();
    const loginHandler = async (e) => {
        e.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
        const res = await APIs.testLogin(email.current.value, password.current.value);
        localStorage.setItem("user", JSON.stringify(res));
    };
    return (
        <div className={styles.login} onSubmit={loginHandler}>
            <form className={styles.login__form}>
                <Input PlaceHolder='Email' type='email' size='large' inputRef={email} />
                <Input PlaceHolder='Password' type='password' size='large' inputRef={password} />
                <Button size='mediam' type='primary'>Login</Button>
            </form>
        </div>
    )
}

export default page