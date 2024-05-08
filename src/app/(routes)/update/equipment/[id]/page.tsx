'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import equipment from '../../../../api/equipment';
import { useParams, useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import FetchingWrapper from '@/components/large/FetchingWrapper/FetchingWrapper';
interface errorMessages {
    message: string
};
function page() {
    const name = useRef<any>();
    const image = useRef<any>();
    const [messages, setMessages] = useState<errorMessages[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(true);
    const params = useParams<any>();
    useEffect(() => {
        const fetchData = async () => {
            const res = await equipment.get(params.id);
            name.current.value = res.data.name;
            image.current.value = res.data.image;
        };
        fetchData();
        setFetching(false);
    }, []);
    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name: name.current.value,
            image: image.current.value,
        }
        const res = await equipment.update(params.id, data);
        console.log(res);
        setIsLoading(false);

        if (res.status === 200) {
            setMessages([{ message: "The Equipment is Updated successfully!" }])
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
                <div className={styles.equipment} >
                    <h3 className={styles.equipment__title}>Update an Equipment</h3>
                    <form className={styles.equipment__form} onSubmit={handleClick} >
                        {messages?.map(msg => (
                            <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
                        ))}
                        <input type="text" ref={name} placeholder='Name' className={styles.equipment__form__input} />
                        <input type="text" ref={image} placeholder='Image' className={styles.equipment__form__input} />
                        <button disabled={isLoading} className={styles.equipment__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default page