import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'
import styles from './UpdateButtonConatiner.module.css'
const UpdateButtonConatiner = () => {
  return (
    <div className={styles.UpdateButtonConatiner} >
    <Link href='/add/exercises'><Button children='Update' size='small'  type="popular" /></Link>
    </div>
  )
}

export default UpdateButtonConatiner