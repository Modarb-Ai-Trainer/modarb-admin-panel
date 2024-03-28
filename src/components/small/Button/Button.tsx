import React from 'react'
import styles from './Button.module.css'
interface types {
    size: string,
    type: string,// [primary, success, danger]
    children: React.ReactNode
}
function Button(props: types) {
    const { size, type, children } = props;
    const typeClass = type === 'popular' ? styles.popular : styles[type];

    return (
        <button className={`${styles.button} ${typeClass} ${styles[size]}`}>
            {children}
        </button>
    );
}

export default Button