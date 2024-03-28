import React from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input'
import Button from '@/components/small/Button/Button'
function page() {
    return (
        <div className={styles.login}>
            <form className={styles.login__form}>
                <Input PlaceHolder='Email' type='email' size='large' />
                <Input PlaceHolder='Password' type='password' size='large' />
                <Button size='mediam' type='primary'>Login</Button>
            </form>
        </div>
    )
}

export default page