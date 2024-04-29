'use client';
import React, { useRef } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
function page() {
    const name = useRef<any>();
    return (
        <div className={styles.muscle} >

            <form className={styles.muscle__form} >
                <Input PlaceHolder='Muscle Name' type='text' size='large' inputRef={name} />
                <Button size='mediam' type='primary'>Submit</Button>
            </form>
        </div>
    )
}

export default page