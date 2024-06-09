import React from 'react'
import styles from './page.module.css'
import { getmealplansById } from '@/app/Actions/GetActions';
import SingleElementContainer from '@/components/small/SingleElementContainer/SingleElementContainer';
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import { MealPlanDelete } from '@/app/Actions/DeleteActions';
const SingleMealPlan = async({ params, searchParams }: { params: { id: String }; searchParams: { id: String } }) => {
    const mealplanId=params.id; 
    const{data:mealplan}=await getmealplansById(mealplanId);
    console.log(mealplan)
 return (
    <div className={styles.mealplanContainer}>
        <SingleElementContainer
        updateTitle='mealplan'
         data={mealplan}
         keysToDisplay={['id','image','description','duration','level','your_journey']}
        />
      <div className={styles.mealplanContainer_features}>
        <h2>Key Features</h2>
      {mealplan.key_features.map((feature:String[], index: any) => (
        <DataViewTable
         data={[{ id: index+1, ...feature }]}

        keysToDisplay={['id','description']}
        />
        ))}

      </div>

      <div className={styles.mealplanContainer_days}>
        {
            mealplan.days.map((day: { meals: string[] }, index: number) => (
                  <div key={index}>
              <h1>day {index+1}:</h1>
              <DataViewTable
               key={index}
              data={day.meals.map((mealId:String, mealIndex:any) => ({
                label: `Meal ${mealIndex + 1}`,
                id: mealId
              }))}
              keysToDisplay={['label', 'id']}
              onDelete={MealPlanDelete}
              viewPath='/meals/SingleElement'
            />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default SingleMealPlan