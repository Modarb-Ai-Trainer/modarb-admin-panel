import React from 'react';
import styles from './page.module.css';
import { getExercises,handleDelete} from '../../../Actions/GetActions'; 
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent';



async function page() {
  const {data}= await getExercises();
  console.log(data)

  return (
    <div className={styles.dataView}>
      <DataViewComponent
      data={data}
      keysToDisplay={[
        'id',
        'name',
        'category',
        'duration',
        'expectedDurationRange',
        'reps',
        'sets',
        'instructions',
        'benefits',
        'targetMuscles', 
        'equipments',
        'media'
      ]}
      title='Exercises'
      path='./add/exercises'
      buttonTitle='Add Exercise'
      onDelete={handleDelete}
      /> 
    </div>
  )
}

export default page;