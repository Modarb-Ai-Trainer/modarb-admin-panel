import React from 'react'
import styles from './page.module.css';
import { getExerciseById } from '@/app/Actions/ExercisesAction';
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import { getEquipmentsbyId } from '@/app/Actions/EquipmentAction';
import SingleElementContainer from '@/components/small/SingleElementContainer/SingleElementContainer';



const SingleElement = async ({ params, searchParams }: { params: { id: Number }; searchParams: { id: number } }) => {
  const exerciseId=params.id
  const {data :exercise} = await getExerciseById(exerciseId);
  console.log(exercise)


  const  { data: equipmentData } =await getEquipmentsbyId(exercise.equipment);
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
      
    </div>
  )
}

export default SingleElement