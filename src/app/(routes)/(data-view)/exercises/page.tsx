import React from 'react';
import styles from './page.module.css';
import { getExercises} from '../../../Actions/GetActions'; 
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent';
import { ExerciseDelete } from '@/app/Actions/DeleteActions';



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
      ]}
      title='Exercises'
      path='./add/exercises'
      buttonTitle='Add Exercise'
      onDelete={ExerciseDelete}
      viewPath='/exercises/SingleElement'
      
      /> 
    </div>
  )
}

export default page;