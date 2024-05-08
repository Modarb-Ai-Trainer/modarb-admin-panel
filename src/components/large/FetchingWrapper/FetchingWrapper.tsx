import React from 'react'
import styles from './FetchingWrapper.module.css'
import LOGO from '../../../../public/images/logo.png'
import Image from 'next/image'
function FetchingWrapper() {
    return (
        <div className={styles.FetchingWrapper}>
            <Image src={LOGO} alt='Loading Logo' className={styles.FetchingWrapper__image} />
        </div>
    )
}

export default FetchingWrapper