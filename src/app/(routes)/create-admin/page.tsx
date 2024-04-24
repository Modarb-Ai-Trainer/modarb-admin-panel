'use client';
import React, { useState } from 'react'
import styles from './page.module.css';
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import adminApi from '../../api/create-admin';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function page() {
  type ValuePiece = Date | null | any;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [selectedDate, setSelectedDate] = useState<Value>(new Date() || null);
  console.log(selectedDate)
  return (
    <div className={styles.createAdmin}>
      <section className={styles.createAdmin__top}>
        <div className={styles.createAdmin__top__title}>Create an Admin
        </div>
      </section>
      <section className={styles.createAdmin__bottom}>
        <form className={styles.createAdmin__form}>
          <Input PlaceHolder='First Name' type='text' size='small' />
          <Input PlaceHolder='Last Name' type='text' size='small' />
          <Input PlaceHolder='Creator' type='text' size='small' />
          <Input PlaceHolder='Name' type='text' size='large' />
          <Input PlaceHolder='Email' type='email' size='large' />
          <Input PlaceHolder='Email' type='email' size='large' />

          <Input PlaceHolder='Password' type='password' size='large' />
          <Input PlaceHolder='Confirm Password' type='password' size='large' />
          <section className={styles.createAdmin__form__auth}>
            <fieldset className={styles.createAdmin__form__auth__fieldset}>
              <legend className={styles.createAdmin__form__auth__fieldset__legend}>Choose Authories For Exercises</legend>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Add Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Edit Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>View Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Delete Exercise</label>
              </div>

            </fieldset>
          </section>
          <section className={styles.createAdmin__form__auth}>
            <fieldset className={styles.createAdmin__form__auth__fieldset}>
              <legend className={styles.createAdmin__form__auth__fieldset__legend}>Choose Authories For Exercises</legend>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Add Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Edit Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>View Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Delete Exercise</label>
              </div>
              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Delete Exercise</label>
              </div>              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Delete Exercise</label>
              </div>              <div className={styles.createAdmin__form__auth__fieldset__item}>
                <input type='checkbox' className={styles.createAdmin__form__auth__fieldset__item__input} />
                <label className={styles.createAdmin__form__auth__fieldset__item__label}>Delete Exercise</label>
              </div>
            </fieldset>
          </section>
          <div>
            <DatePicker selected={new Date(selectedDate)}
              placeholderText='Date of Birth'
              onChange={(date) => (date && setSelectedDate(date))}
              dateFormat='yyyy/MM/dd'
              maxDate={new Date()}
            />
          </div>
          <div className={styles.createAdmin__form__wrapper}>
            <Button type='primary' size='full'>Submit</Button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default page
