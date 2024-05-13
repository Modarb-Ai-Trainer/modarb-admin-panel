'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/small/Inputs/Input';
import Button from '@/components/small/Button/Button';
import ingredient from '../../../../api/ingredient';
import meal from '../../../../api/meal';
import { useParams, useRouter } from 'next/navigation'
import ErrorWrapper from '@/components/small/ErrorWrapper/ErrorWrapper';
import FetchingWrapper from '@/components/large/FetchingWrapper/FetchingWrapper';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

interface errorMessages {
  message: string
};

interface ingTypes {
  id: string,
  name: string,
  serving_size: number,
  servings_count: number,
  serving_size_unit: string,
  servings_count_unit: string,
  calories: number,
  carbs: number,
  proteins: number,
  fats: number
}
function page() {
  const name = useRef<any>();
  const calories = useRef<any>();
  const carbs = useRef<any>();
  const proteins = useRef<any>();
  const fats = useRef<any>();
  const type = useRef<any>();
  const [messages, setMessages] = useState<errorMessages[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [myIngredients, SetMyIngredients] = useState<ingTypes[]>([]);
  const [addedIngredients, setAddedIngrediens] = useState<ingTypes[]>([]);
  const params = useParams<any>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await ingredient.getAll();
      if (res.status === 200) {
        SetMyIngredients(res.data);
      }
    };
    const propagateAddedIngredients = async () => {
      const res = await meal.get(params.id);
      if (res.status === 200) {
        console.log(res.data);
        setAddedIngrediens(res.data.ingredients);
        name.current.value = res.data.name;
        calories.current.value = res.data.calories;
        carbs.current.value = res.data.carbs;
        proteins.current.value = res.data.proteins;
        fats.current.value = res.data.fats;
        type.current.value = res.data.type;
      }
    }
    fetchData();
    propagateAddedIngredients();
    setFetching(false);
    console.log(addedIngredients);
    console.log(myIngredients);
  }, []);
  const check = (item: ingTypes) => {
    let found = 0;
    addedIngredients.map((ing: ingTypes) => {
      if (ing.name === item.name) found = 1;
    })
    return found;
  }
  const addIngredient = (item: ingTypes) => {
    setAddedIngrediens([...addedIngredients, item]);
    console.log(addedIngredients);
  }

  const eraseIngredient = (item: ingTypes) => {
    setAddedIngrediens(addedIngredients.filter((ing: ingTypes) => (
      ing != item
    )))
  }
  const handleClick = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const ings: string[] = []
    myIngredients.map(ing => {
      ings.push(ing.id);
    })
    const data = {
      name: name.current.value,
      calories: calories.current.value,
      carbs: carbs.current.value,
      proteins: proteins.current.value,
      fats: fats.current.value,
      type: type.current.value,
      ingredients: ings,

    }
    const res = await meal.update(params.id, data);
    console.log(data);
    console.log(res);
    setIsLoading(false);

    if (res.status === 201) {
      setMessages([{ message: "The Meal is Updated Successfully!" }])
      setSuccess(true);
      return;
    }
    setSuccess(false);
    res.error.map((err: any) => (
      setMessages([{ message: err }])
    ))
    setIsLoading(false);
  }
  return (
    <>
      {fetching ? (
        <FetchingWrapper />
      ) : (

        <div className={styles.meals} >
          <h3 className={styles.meals__title}>Add a Meal</h3>
          <form className={styles.meals__form} onSubmit={handleClick} >
            {messages?.map(msg => (
              <ErrorWrapper type={success ? "success" : "failed"}>{msg.message}</ErrorWrapper>
            ))}
            <input type="text" ref={name} placeholder='Name' className={styles.ingredient__form__input} />
            <input type="number" ref={calories} placeholder='Calories' className={styles.ingredient__form__input} />
            <input type="number" ref={carbs} placeholder='Carbs' className={styles.ingredient__form__input} />
            <input type="number" ref={proteins} placeholder='Proteins' className={styles.ingredient__form__input} />
            <input type="number" ref={fats} placeholder='Fats' className={styles.ingredient__form__input} />
            <select ref={type} className={styles.ingredient__form__input}>
              <option value="lunch">Lunch</option>
              <option value="breakfast">Breakfast</option>
              <option value="snacks">Snacks</option>
              <option value="dinner">Dinner</option>
            </select>
            <div className={styles.meals__form__ingredients}>
              <h4 className={styles.meals__form__ingredients__title}>Ingredients:</h4>
              <ul className={styles.meals__form__ingredients__list}>
                {addedIngredients?.map(ing => (
                  <li className={styles.meals__form__ingredients__list__item}>{ing.name}</li>
                ))}
              </ul>
              <ul className={styles.meals__form__ingredients__add}>
                {myIngredients.map(ing => (

                  <li className={styles.meals__form__ingredients__add__item}>
                    <div className={styles.meals__form__ingredients__add__item__title}>
                      {ing.name}
                    </div>
                    {check(ing) ? (
                      <span className={`${styles.meals__form__ingredients__add__item__button} ${styles.remove}`} onClick={() => eraseIngredient(ing)}>
                        <FiTrash2 />
                      </span>
                    ) : (
                      <span className={`${styles.meals__form__ingredients__add__item__button} ${styles.add}`} onClick={() => addIngredient(ing)}>
                        <IoIosAddCircleOutline />
                      </span>

                    )}
                  </li>
                ))}
              </ul>
            </div>
            <button disabled={isLoading} className={styles.ingredient__form__button}>{!isLoading ? "Submit" : "Loading..."}</button>
          </form>
        </div>
      )}
    </>
  )
}

export default page