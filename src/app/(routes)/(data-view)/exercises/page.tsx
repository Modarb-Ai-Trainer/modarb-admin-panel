import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { getData, handleDelete } from '../../../Actions/Action'; 
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import Button from '@/components/small/Button/Button';

interface Exercise {
  id: number;
  name: string;
  avatar: string;
  category: string;
  status: string;
  image: string;
}

async function page() {
  const exercises: Exercise[] = await getData();

  return (
    <div className={styles.dataView}>
      <div className={styles.dataView_cotainer}>
        <div className={styles.dataView_container_topConatainer}>
          <h1>Exercises</h1>
          <Link href='/add/exercises'><Button children='Add Exercise' size='meduim'  type="popular" /></Link>
        </div>

       <div className={styles.dataView_cotainer_bottomContainer}>
          <DataViewTable
            data={exercises}
            keysToDisplay={['id','image', 'status', 'name', 'category']}
            onDelete={handleDelete} 
          />
       </div>

      </div>
      
    </div>
  )
}

export default page;