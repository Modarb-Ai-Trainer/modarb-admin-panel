import React from 'react'
import Button from '../Button/Button'
import Link from 'next/link'
import styles from './SingleElementContainer.module.css'
import SingleList from '../SingleList/SingleList'
import Image from 'next/image'
import exercise from '@/app/api/exercise'
interface Exercise {
    id: number;
    name: string;
    category: string;
    sets: number;
    reps: number;
    duration: number;
    expectedDurationRange: { min: number; max: number };
    media: { url: string };
  }

  interface SingleElementContainerProps {
    exercise: Exercise;
  }

  const SingleElementContainer: React.FC<SingleElementContainerProps> = ({ exercise }) => {
    console.log(exercise.media.url)

    return (
    <div className={styles.SingleElement}>
    <div className={styles.SingleElement_Button}>
    <Link href='/add/exercises'><Button children='Update' size='small'  type="popular" /></Link></div>
    <div className={styles.singleElement_container}>
      <div className={styles.singleElement_container_top}>
        <div className={styles.singleElement_container_top_left}>
        <Image src={exercise.media.url} alt={exercise.name} layout='fill' />
        </div>
        <div className={styles.singleElement_container_top_right}>
          <SingleList  id={exercise.id}  name={exercise.name} category={exercise.category} sets={exercise.sets}  reps={exercise.reps} duration={exercise.duration} expectedDurationRange={exercise.expectedDurationRange}  />
        </div> 
      </div>      
    </div> 
    </div>
  )
}

export default SingleElementContainer