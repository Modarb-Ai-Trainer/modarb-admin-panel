import React from 'react'
import styles from './Button.module.css'
interface types {
    size: string,
    type: string,// [primary, success, danger]
    children: React.ReactNode
}
function Button(props: types) {

    return (
        <button className={`${styles['button']}  ${styles[`${props.type}`]} ${styles[`${props.size}`]}`} >
            {props.children}
        </button>
    )
}

export default Button