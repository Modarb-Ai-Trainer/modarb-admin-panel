import React from 'react'
import styles from './page.module.css'
import { getmealPlans } from '@/app/Actions/GetActions'
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent';
import { MealPlanDelete } from '@/app/Actions/DeleteActions';
const MealPlans =async () => {
const{data:mealPlans}=await getmealPlans();
console.log(mealPlans)
  return (

    <div>
      <DataViewComponent
       data={mealPlans}
       keysToDisplay={[
        'id',
        'image',
        'description',
        'duration',
        'level',
        'your_journey'
       ]}
       title='Meal Plans'
       path='./add/mealPlan'
       buttonTitle='Add Plan'
       onDelete={MealPlanDelete}
       viewPath='./MealPlans/SingleElement'

      />
    </div>
  )
}

export default MealPlans