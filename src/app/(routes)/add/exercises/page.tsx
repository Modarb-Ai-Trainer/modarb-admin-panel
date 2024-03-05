import Input from '@/components/small/Input/Input'
import React from 'react'
import styles from './page.module.css';
import Button from '@/components/small/Button/Button';
function page() {
  return (
    <div className={styles.addExercises}>
      <section className={styles.addExercises__top}>
        <div className={styles.addExercises__top__title}>Add New Exercise</div>
      </section>
      <section className={styles.addExercises__bottom}>
        <section className={styles.addExercises__bottom__left}>
          <div>MEDIA</div>
        </section>
        <section className={styles.addExercises__bottom__right}>
          <form className={styles.addExercises__bottom__right__form}>
            <Input type='text' PlaceHolder='Lorem ipsum' label='Exercise Name' size='small' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Exercise Category' size='small' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Duration' size='small' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Type' size='small' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Reps' size='small' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Sets' size='small' />

            <Input type='text' PlaceHolder='Lorem ipsum' label='Instruction' size='large' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Benefits' size='large' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Equipments' size='large' />

            <Input type='text' PlaceHolder='Lorem ipsum' label='Primary Muscle' size='small' />
            <Input type='text' PlaceHolder='Lorem ipsum' label='Second Muscle' size='small' />
            <Button size='large' type='primary' >Add</Button>
          </form>
        </section>
      </section>
    </div>
  )
}

export default page