import React from 'react'
import styles from './SingleList.module.css'

interface SingleListProps {
  id: number;
  name: string;
  category: string;
  sets: number;
  reps: number;
  duration: number;
}


const SingleList:React.FC<SingleListProps> = (props:SingleListProps) => {
  return (
    <div className={styles.SingleList}>
        <ul className={styles.SingleList_list}>
              <li><span className={styles.SingleList_list_prop}>id :</span> <span  className={styles.SingleList_list_value}>{props.id}</span></li>
              <li><span className={styles.SingleList_list_prop}> Name :</span><span className={styles.SingleList_list_value}>{props.name}</span></li>
              <li><span className={styles.SingleList_list_prop}>Category :</span><span className={styles.SingleList_list_value}>{props.category}</span></li>
              <li><span className={styles.SingleList_list_prop}>Sets :</span><span className={styles.SingleList_list_value}>{props.sets}</span></li>
              <li><span className={styles.SingleList_list_prop}>Reps :</span><span className={styles.SingleList_list_value}>{props.reps}</span></li>
              <li><span className={styles.SingleList_list_prop}>Duration :</span><span className={styles.SingleList_list_value}>{props.duration}</span></li>

            </ul>
    </div>
  )
}

export default SingleList