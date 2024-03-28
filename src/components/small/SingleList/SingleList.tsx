import React from 'react'
import styles from './SingleList.module.css'

interface SingleListProps {
  value1: string; 
  value2: string; 
  value3: string;
  value4: string; 
  value5: string; 
  value6: string;

}

const SingleList:React.FC<SingleListProps> = (props:SingleListProps) => {
  return (
    <div className={styles.SingleList}>
        <ul className={styles.SingleList_list}>
              <li><span className={styles.SingleList_list_prop}>id :</span> <span  className={styles.SingleList_list_value}>{props.value1}</span></li>
              <li><span className={styles.SingleList_list_prop}> Name :</span><span className={styles.SingleList_list_value}>{props.value2}</span></li>
              <li><span className={styles.SingleList_list_prop}>Category :</span><span className={styles.SingleList_list_value}>{props.value3}</span></li>
              <li><span className={styles.SingleList_list_prop}>Sets :</span><span className={styles.SingleList_list_value}>{props.value4}</span></li>
              <li><span className={styles.SingleList_list_prop}>Reps :</span><span className={styles.SingleList_list_value}>{props.value5}</span></li>
              <li><span className={styles.SingleList_list_prop}>Duration :</span><span className={styles.SingleList_list_value}>{props.value6}</span></li>

            </ul>
    </div>
  )
}

export default SingleList