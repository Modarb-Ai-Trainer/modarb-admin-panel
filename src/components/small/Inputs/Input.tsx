import React from 'react'
import styles from './Input.module.css';
interface types {
    text: String,
    password: String,
};
interface inputTypes {
    type: string,
    PlaceHolder: string,
    label?: string,
    size: string
};
function Input(props: inputTypes) {
    return (
        <div className={styles.input} style={{ width: props.size === 'small' ? '44%' : props.size === 'mediam' ? '65%' : '90%' }}>
            <label className={styles.input__label}>{props.label && props.label}</label>
            <input type={props.type} placeholder={props.PlaceHolder} className={styles.input__field} />
        </div>
    )
}

export default Input