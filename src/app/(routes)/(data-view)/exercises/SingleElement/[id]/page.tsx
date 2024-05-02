import React from 'react'
import styles from './page.module.css';
import { getExerciseById } from '@/app/Actions/GetActions';
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import { getEquipmentById } from '@/app/Actions/GetActions';
import SingleElementContainer from '@/components/small/SingleElementContainer/SingleElementContainer';
import { getMusclesById } from '@/app/Actions/GetActions';



const SingleElement = async ({ params, searchParams }: { params: { id: Number }; searchParams: { id: number } }) => {
  const exerciseId=params.id
  const {data :exercise} = await getExerciseById(exerciseId);
  console.log(exercise)


  const  { data: equipmentData } =await getEquipmentById(exercise.equipment);
  const {data:muscles}=await getMusclesById(exercise.targetMuscles)
  console.log('muscles',muscles)
  // console.log('eq',equipmentData)
  return (
   <div className={styles.ElementContainer}>
    <SingleElementContainer exercise={exercise}/>
     <DataViewTable
       data={[exercise]}
       keysToDisplay={[
        'instructions',
        'benefits',
      ]}
      />
    <div>
    <h1>Equipments</h1>
      <DataViewTable
       data={equipmentData}
       keysToDisplay={[
        'id',
        'name',
        'image'
      ]}
      
      />
    </div>

    <div>
    <h1>Target Muscles</h1>
      <DataViewTable
       data={muscles}
       keysToDisplay={[
        'id',
        'name',
        'image'
      ]}
      
      />
    </div>
      
    </div>
  )
}

export default SingleElement