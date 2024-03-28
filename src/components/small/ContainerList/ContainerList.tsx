import React from 'react'
import styles from './ContainerList.module.css'

interface  Props {
    name:String,
    value2:String,
    value3?:String
    primary?:String
    secondary?:String

}
const ContainerList:React.FC<Props> = ({name,value2,value3,primary,secondary}) => {
  return (
    <div className={styles.ContainerList}>
        <div className={styles.ContainerList_container}>
            <div className={styles.ContainerList_container_left}>
                <span>{name}</span>
            </div>
            <div className={styles.ContainerList_container_center}>
                { primary && <span className={styles.ContainerList_container_center_primary}>{primary}</span> }
                <span className={`${styles.ContainerList_container_center_value} ${primary ? styles.primary : ''}`}>{value2}</span>
            </div>
            <div className={styles.ContainerList_container_right}>
            {secondary && <span className={styles.ContainerList_container_right_secondary}>{secondary}</span> }
            <span className={`${styles.ContainerList_container_right_value} ${secondary ? styles.secondary : ''}`}>{value3}</span>


            </div>
        </div>
    </div>
  )
}

export default ContainerList