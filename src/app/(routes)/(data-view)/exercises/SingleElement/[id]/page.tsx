import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import SingleList from '@/components/small/SingleList/SingleList';
import ContainerList from '@/components/small/ContainerList/ContainerList';
import img from '../../../../../../../public/images/img.png'
import Link from 'next/link';
import Button from '@/components/small/Button/Button';
import { getExerciseById } from '@/app/Actions/Action';
import { useParams } from 'next/navigation';

interface Exercise {
  id: number;
  name: string;
  avatar: string;
  category: string;
  image: string;
  status: string;
  reps: number;
  sets: number;
  duration: number;
  targetMuscles:String,
  benefits:string,
  equipment: String,
  instructions: String,

}

const SingleElement = async ({ params, searchParams }: { params: { id: Number }; searchParams: { id: number } }) => {
  const exerciseId=params.id
  const exercise:Exercise = await getExerciseById(exerciseId);
  console.log(exerciseId)

  return (
    <div className={styles.SingleElement}>
      <div className={styles.SingleElement_Button}>
      <Link href='/add/exercises'><Button children='Update' size='small'  type="popular" /></Link>      </div>
      <div className={styles.singleElement_container}>
        <div className={styles.singleElement_container_top}>
          <div className={styles.singleElement_container_top_left}>
            <Image src={exercise.image} alt='image' layout='fill' />
          </div>
          <div className={styles.singleElement_container_top_right}>
            <SingleList  id={exercise.id}  name={exercise.name} category={exercise.category} sets={exercise.sets}  reps={exercise.reps} duration={exercise.duration}   />
          </div> 
        </div>


        
        <div className={styles.singleElement_container_bottom}>
          <ContainerList name='target muscles' value2='leg' value3='back' primary='primary:' secondary='secondary:'/>
          <ContainerList name='Equipment' value2={exercise.equipment}/>
          <ContainerList name='Instructions' value2={exercise.instructions}/>
          <ContainerList name='Benefits' value2={exercise.benefits}/>
        </div> 
      
      </div> 

    </div>
  )
}

export default SingleElement