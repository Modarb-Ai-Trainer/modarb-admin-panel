'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import muscle from '../../../../api/muscle';
import equipment from '../../../../api/equipment';
import exercise from '../../../../api/exercise';
import { useParams, useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import FetchingWrapper from '@/components/large/FetchingWrapper/FetchingWrapper';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

interface errorMessages {
  message: string
};
interface equipmentType {
  id: string,
  name: string,
  image: string,
}
interface exerciseTypes {
  name: string,
  category: string,
  duration: number,
  expectedDurationRange: {
    min: number,
    max: number
  },
  reps: number,
  sets: number,
  instructions: string,
  benefits: string,
  targetMuscles: {
    primary: string,
    secondary: string
  },
  equipments: string[],
  coverImage: string,
  media: {
    type: string,
    url: string
  }
}
function page() {
  const name = useRef<any>();
  const category = useRef<any>();
  const duration = useRef<any>();
  const MinExptectedDurationRange = useRef<any>();
  const MaxExptectedDurationRange = useRef<any>();
  const reps = useRef<any>();
  const sets = useRef<any>();
  const instructions = useRef<any>();
  const benefits = useRef<any>();
  const coverImage = useRef<any>();
  const mediaType = useRef<any>();
  const mediaURL = useRef<any>();
  const primaryMuscles = useRef<any>();
  const secondaryMuscles = useRef<any>();
  const [messages, setMessages] = useState<errorMessages[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [myEquipments, SetMyEquipments] = useState<equipmentType[]>([]);
  const [myMuscles, SetMyMuscles] = useState<equipmentType[]>([]);
  const [addedEquepments, setAddedEquepments] = useState<equipmentType[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('user') === null) router.push('/login');
  }, [])
  useEffect(() => {
    const fetchEquipments = async () => {
      const res = await equipment.getAll();
      if (res.status === 200) {
        SetMyEquipments(res.data);
      }
    };
    fetchEquipments();
  }, [])
  const param = useParams<any>();
  useEffect(() => {

    const fetchMuscles = async () => {
      const res = await muscle.getAll();
      if (res.status === 200) {
        SetMyMuscles(res.data);
      }
    };
    const fetchExercises = async () => {
      const res = await exercise.get(param.id);
      if (res.status === 200) {
        let curEqu: equipmentType[] = [];
        for (let i = 0; i < myEquipments.length; i++)
          if (res.data.equipments.includes(myEquipments[i].id)) curEqu.push(myEquipments[i]);
        setAddedEquepments(curEqu);
        name.current.value = res.data.name;
        category.current.value = res.data.category;
        duration.current.value = res.data.duration;
        MinExptectedDurationRange.current.value = res.data.expectedDurationRange.min;
        MaxExptectedDurationRange.current.value = res.data.expectedDurationRange.max;
        reps.current.value = res.data.reps;
        sets.current.value = res.data.sets;
        instructions.current.value = res.data.instructions;
        benefits.current.value = res.data.benefits;
        coverImage.current.value = res.data.coverImage;
        mediaType.current.value = res.data.media.type;
        mediaURL.current.value = res.data.media.url;
        primaryMuscles.current.value = res.data.targetMuscles.primary;
        secondaryMuscles.current.value = res.data.targetMuscles.secondary;

        console.log(res.data);
        console.log(myEquipments);
      }
    }
    fetchMuscles();
    fetchExercises();
    console.log(myEquipments);
    setFetching(false);
  }, [myEquipments]);
  const check = (item: equipmentType) => {
    let found = 0;
    addedEquepments.map((equipment: equipmentType) => {
      if (equipment === item) found = 1;
    })
    return found;
  }
  const addEquipment = (item: equipmentType) => {
    setAddedEquepments([...addedEquepments, item]);
    console.log(addedEquepments);
  }

  const eraseEquipment = (item: equipmentType) => {
    setAddedEquepments(addedEquepments.filter((equipment: equipmentType) => (
      equipment != item
    )))
  }
  const handleClick = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const equipments: string[] = []
    addedEquepments.map(equipment => {
      equipments.push(equipment.id);
    })
    const data: exerciseTypes = {
      name: name.current.value,
      category: category.current.value,
      duration: duration.current.value,
      expectedDurationRange: {
        min: MinExptectedDurationRange.current.value,
        max: MaxExptectedDurationRange.current.value
      },
      reps: reps.current.value,
      sets: sets.current.value,
      instructions: instructions.current.value,
      benefits: benefits.current.value,
      coverImage: coverImage.current.value,
      media: {
        type: mediaType.current.value,
        url: mediaURL.current.value
      },
      targetMuscles: {
        primary: primaryMuscles.current.value,
        secondary: secondaryMuscles.current.value,
      },
      equipments: equipments,

    }
    const res = await exercise.update(param.id, data);
    console.log(data);
    console.log(res);
    setIsLoading(false);

    if (res.status === 200) {
      setMessages([{ message: "The Exercise is Updated Successfully!" }])
      setSuccess(true);
      return;
    }
    setSuccess(false);
    res.error.map((err: any) => (
      setMessages([{ message: err }])
    ))
  }
  return (
    <>
      {fetching ? (
        <FetchingWrapper />
      ) : (

        <div className={styles.exercises} >
          <h3 className={styles.exercises__title}>Update an Exercise</h3>
          <form className={styles.exercises__form} onSubmit={handleClick} >
            {messages?.map(msg => (
              <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
            ))}
            <input type="text" ref={name} placeholder='Name' className={styles.exercises__form__input} />
            <input type="text" ref={category} placeholder='Category' className={styles.exercises__form__input} />
            <input type="number" ref={duration} placeholder='Duration' className={styles.exercises__form__input} />
            <input type="number" ref={MinExptectedDurationRange} placeholder='Min Expected Duration' className={styles.exercises__form__input} />
            <input type="number" ref={MaxExptectedDurationRange} placeholder='Max Expected Duration' className={styles.exercises__form__input} />
            <input type="number" ref={reps} placeholder='Reps' className={styles.exercises__form__input} />
            <input type="number" ref={sets} placeholder='Sets' className={styles.exercises__form__input} />
            <input type="text" ref={coverImage} placeholder='Cover Image' className={styles.exercises__form__input} />
            <select ref={mediaType} className={styles.exercises__form__input}>
              <option selected hidden>Media Type</option>
              <option value="image">Image</option>
              <option value="video">Video</option>

            </select>
            <input type="text" ref={mediaURL} placeholder='Media URL' className={styles.exercises__form__input} />
            <textarea ref={instructions} placeholder='Instructions' className={styles.exercises__form__textarea}></textarea>
            <textarea ref={benefits} placeholder='Benefits' className={styles.exercises__form__textarea}></textarea>
            <select ref={primaryMuscles} className={styles.exercises__form__input}>
              <option selected hidden>Primary Muscle</option>
              {myMuscles.map(muscle => (
                <option value={muscle.id}>{muscle.name}</option>
              ))}
            </select>
            <select ref={secondaryMuscles} className={styles.exercises__form__input}>
              <option selected hidden>Secondary Muscle</option>
              {myMuscles.map(muscle => (
                <option value={muscle.id}>{muscle.name}</option>
              ))}
            </select>
            <div className={styles.exercises__form__equipments}>
              <h4 className={styles.exercises__form__equipments__title}>Equipments:</h4>
              <ul className={styles.exercises__form__equipments__list}>
                {addedEquepments?.map(ing => (
                  <li className={styles.exercises__form__equipments__list__item}>{ing.name}</li>
                ))}
              </ul>
              <ul className={styles.exercises__form__equipments__add}>
                {myEquipments.map(equipment => (

                  <li className={styles.exercises__form__equipments__add__item}>
                    <div className={styles.exercises__form__equipments__add__item__title}>
                      {equipment.name}
                    </div>
                    {check(equipment) ? (
                      <span className={`${styles.exercises__form__equipments__add__item__button} ${styles.remove}`} onClick={() => eraseEquipment(equipment)}>
                        <FiTrash2 />
                      </span>
                    ) : (
                      <span className={`${styles.exercises__form__equipments__add__item__button} ${styles.add}`} onClick={() => addEquipment(equipment)}>
                        <IoIosAddCircleOutline />
                      </span>

                    )}
                  </li>
                ))}
              </ul>
            </div>
            <button disabled={isLoading} className={styles.exercises__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
          </form>
        </div>
      )}
    </>
  )
}

export default page