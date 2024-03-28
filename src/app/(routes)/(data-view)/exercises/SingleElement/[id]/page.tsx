import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import SingleList from '@/components/small/SingleList/SingleList';
import ContainerList from '@/components/small/ContainerList/ContainerList';
import img from '../../../../../../../public/images/img.png'
import Link from 'next/link';
import Button from '@/components/small/Button/Button';
const SingleElement = () => {
  return (
    <div className={styles.SingleElement}>
      <div className={styles.SingleElement_Button}>
      <Link href='/add/exercises'><Button children='Update' size='small'  type="popular" /></Link>      </div>
      <div className={styles.singleElement_container}>
        <div className={styles.singleElement_container_top}>
          <div className={styles.singleElement_container_top_left}>
            <Image src={img} alt='image' />
          </div>
          <div className={styles.singleElement_container_top_right}>
            <SingleList  value1='1'  value2='deadlift' value3='full body' value4='12'   value5='4'  value6='3min' />
          </div> 
        </div>


        
        <div className={styles.singleElement_container_bottom}>
          <ContainerList name='target muscles' value2='leg' value3='back' primary='primary:' secondary='secondary:'/>
          <ContainerList name='Equipment' value2='Barbell'/>
          <ContainerList name='Instructions' value2='Lorem ipsum dolor sit amet consectetur. Tempor elementum odio et augue etiam dignissim. Eget quisque tellus duis pulvinar sit nisl sed sed quisque. Tellus turpis aliquam leo tempor egestas orci feugiat cras. Viverra cras sed auctor ac est curabitur tristique vitae.'/>
          <ContainerList name='Benefits' value2='Lorem ipsum dolor sit amet consectetur. Tempor elementum odio et augue etiam dignissim. Eget quisque tellus duis pulvinar sit nisl sed sed quisque. Tellus turpis aliquam leo tempor egestas orci feugiat cras. Viverra cras sed auctor ac est curabitur tristique vitae.'/>
        </div>
      
      </div> 

    </div>
  )
}

export default SingleElement