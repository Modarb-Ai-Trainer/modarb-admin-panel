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
        <div className={styles.input} style={{ width: props.size === 'small' ? '40rem' : props.size === 'mediam' ? '65rem' : '90rem' }}>
            <label className={styles.input__label}>{props.label && props.label}</label>
            <input type={props.type} placeholder={props.PlaceHolder} className={styles.input__field} />
        </div>
    )
}

export default Input