import React from 'react'
import styles from './page.module.css';
import { getExerciseById } from '@/app/Actions/GetActions';
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import { getEquipmentById } from '@/app/Actions/GetActions';
import SingleElementContainer from '@/components/small/SingleElementContainer/SingleElementContainer';
import { getMusclesById } from '@/app/Actions/GetActions';



const SingleElement = async ({ params, searchParams }: { params: { id: String }; searchParams: { id: String } }) => {
  const exerciseId=params.id
  const {data :exercise} = await getExerciseById(exerciseId);
  console.log(exercise)



  const {data:primarymuscles}=await getMusclesById(exercise.targetMuscles?.primary)
  // console.log('primary',primarymuscles)
  const {data:secondarymuscles}=await getMusclesById(exercise.targetMuscles?.secondary)
  // console.log('secondary',secondarymuscles)

  const musclesArray = [];
  if (primarymuscles) {
      musclesArray.push(primarymuscles);
  }
  if (secondarymuscles) {
      musclesArray.push(secondarymuscles);
  }


  const equipmentData = [];
  for (const equipmentId of exercise.equipments) {
    const { data: equipment } = await getEquipmentById(equipmentId);
    equipmentData.push(equipment);
  }
  console.log('Equipment Data:', equipmentData);



  return (
   <div className={styles.ElementContainer}>
    <SingleElementContainer 
    data={exercise}
    keysToDisplay={['id', 'name', 'category', 'duration', 'expectedDurationRange']}
    />
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
       data={musclesArray}
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