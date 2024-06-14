import { getIngradientsById, getmealsById } from '@/app/Actions/GetActions'
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import React from 'react'
import styles  from './page.module.css'
import Button from '@/components/small/Button/Button';
import Link from 'next/link';
const SingleMeal = async({ params, searchParams }: { params: { id: String }; searchParams: { id: String } }) => {
    const mealId = params.id;
    const { data: meal } = await getmealsById(mealId);
    console.log('Meal Data:', meal);
  
    const ingredientsData = [];
    for (const ingredientId of meal.ingredients) {
      const { data: ingredient } = await getIngradientsById(ingredientId);
      ingredientsData.push(ingredient);
    }
    console.log('Ingredients Data:', ingredientsData);
  
    return (
      <div className={styles.SingleMeal}>
        <div className={styles.SingleMeal_container} >
           <div className={styles.SingleMeal_container_top}>
           <h1>Meal Details</h1>
           <Button type='popular' size='small'><Link href={`/update/meal/${mealId}`}>Update</Link></Button>
           </div>
            <DataViewTable
            data={[meal]} 
            keysToDisplay={[
                'id',
                'name',
                'calories',
                'carbs',
                'proteins',
                'fats',
                'type'
            ]}
            />
        </div>
        
        <div>
            <h1>Ingredients</h1>
            <DataViewTable
            data={ingredientsData} 
            keysToDisplay={[
                'id',
                'name',
                'servings_count',
                'serving_size',
                'serving_size_unit',
                'servings_count_unit',
                'calories',
                'carbs',
                'proteins',
                'fats'
            ]}
            />
        </div>
        
       
      </div>
    );
  };
  
  export default SingleMeal;