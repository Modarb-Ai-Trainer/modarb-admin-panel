import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { getData, handleDelete } from '../../../Actions/ExercisesAction'; 
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import Button from '@/components/small/Button/Button';
import DataViewHeader from '@/components/small/DataViewHeader/DataViewHeader';

interface Exercise {
  id: number;
  name: string;
  avatar: string;
  category: string;
  status: string;
  image: string;
}

async function page() {
  const {data}= await getData();
  console.log(data)


  return (
    <div className={styles.dataView}>
      <div className={styles.dataView_cotainer}>
        <div className={styles.dataView_container_topConatainer}>
          <DataViewHeader
          title='Exercises'
          path='./add/exercises'
          buttonTitle='Add Exercise'
          />
        </div>

       <div className={styles.dataView_cotainer_bottomContainer}>
          <DataViewTable
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
            onDelete={handleDelete} 
          />
       </div>

      </div>
      
    </div>
  )
}

export default page;