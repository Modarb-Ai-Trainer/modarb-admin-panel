import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'
import styles from './DataViewHeader.module.css'
interface HeaderProps{
    title:string,
    path:string,
    buttonTitle:string
}

const DataViewHeader: React.FC<HeaderProps> = ({ title, path, buttonTitle }) => {
  return (
    <div className={styles.DataViewHeader}>
    
    <h1>{title}</h1>
    <Link href={path}><Button children={buttonTitle} size='meduim'  type="popular" /></Link>
    </div>
  )
}

export default DataViewHeader