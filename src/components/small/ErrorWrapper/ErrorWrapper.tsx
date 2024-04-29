import React from 'react'
import styles from './ErrorWrapper.module.css'
interface propsType {
    type: string, // success, failed, progress
    children: React.ReactNode
};
function ErrorWrapper(props: propsType) {
    const { type, children } = props;
    return (
        <div className={`${styles.errorWrapper} + ' ' + ${styles[type]}`} >{children}</div>
    )
}

export default ErrorWrapper