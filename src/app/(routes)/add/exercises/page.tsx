import Input from '@/components/small/Inputs/Input'
import React from 'react'
import styles from './page.module.css';
import Button from '@/components/small/Button/Button';
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiImages } from "react-icons/bi";

function page() {
  return (
    <div className={styles.addExercises}>
      <section className={styles.addExercises__top}>
        <div className={styles.addExercises__top__title}>Add New Exercise</div>
      </section>
      <section className={styles.addExercises__bottom}>
        <form className={styles.addExercises__bottom__form}>
          <section className={styles.addExercises__bottom__form__left}>
            <section className={styles.addExercises__bottom__form__left__top}>
              <label className={styles.addExercises__bottom__form__left__top__icon} htmlFor="video-input">
                <label htmlFor="video-input" className={styles.addExercises__bottom__form__left__top__icon__label}>
                  <MdOutlineVideoLibrary />
                </label>
                <input type='file' id='video-input' className={styles.addExercises__bottom__form__left__top__file} />
              </label>
              <span className={styles.addExercises__bottom__form__left__top__text}>
                Video
              </span>
            </section>
            <section className={styles.addExercises__bottom__form__left__top}>
              <label className={styles.addExercises__bottom__form__left__top__icon} htmlFor="image-input">
                <label htmlFor="image-input" className={styles.addExercises__bottom__form__left__top__icon__label}>
                  <BiImages />
                </label>
                <input type='file' id='image-input' className={styles.addExercises__bottom__form__left__top__file} />
              </label>
              <span className={styles.addExercises__bottom__form__left__top__text}>
                Cover
              </span>
            </section>
          </section>
          <section className={styles.addExercises__bottom__form__right}>
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
          </section>
        </form>
      </section>
    </div>
  )
}

export default page