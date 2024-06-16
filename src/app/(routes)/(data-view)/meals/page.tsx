import { MealDelete } from '@/app/Actions/DeleteActions';
import { getmeals } from '@/app/Actions/GetActions'
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent';
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import React from 'react'

interface Ingredient {
  _id: string;
  name: string;
  serving_size: number;
  servings_count: number;
  serving_size_unit: string;
  servings_count_unit: string;
  calories: number;
  carbs: number;
  proteins: number;
  fats: number;
  __v: number;
}

interface Meal {
  id: string;
  name: string;
  created_at: string;
  ingredients: Ingredient[];
  calories: number;
  carbs: number;
  proteins: number;
  fats: number;
  type: string;
}
async function page() {
const {data:meals}=await getmeals();
console.log('ing',meals.ingredients)
  return (
    <div>
      <DataViewComponent
            data={meals}
            keysToDisplay={[
              'id',
              'image',
              "name",
              'created_at',
              'calories',
              'carbs',
              'proteins',
              'fats',
              'type'
            ]}
            
            title='Meals'
            buttonTitle='Add meal'
            path='./add/meals'
            viewPath='./meals/SingleElement'
            onDelete={MealDelete}
      />
      
    </div>
  )
}

export default page