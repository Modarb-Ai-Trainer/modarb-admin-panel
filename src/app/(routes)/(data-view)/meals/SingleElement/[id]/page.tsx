import { getIngradientsById, getmealsById } from '@/app/Actions/GetActions'
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import React from 'react'

const SingleMeal = async({ params, searchParams }: { params: { id: String }; searchParams: { id: String } }) => {
    const mealId=params.id
    const {data:meal}=await getmealsById(mealId)
    console.log(meal)
    const ingredientsWithIds = meal.ingredients.map((ingredient:any, index:number) => ({
        ...ingredient,
        id: ingredient._id // You can use a more appropriate unique identifier if available
    }));
    return (
    <div>
        {/* <DataViewTable
        data={meal}
        keysToDisplay={[
              'id',
              'name',
              'created_at',
              'calories',
              'carbs',
              'proteins',
              'fats',
              'type'
        ]}
        /> */}

        <h1>ingredient</h1>
        <DataViewTable
                data={ingredientsWithIds}
                keysToDisplay={[
                    'id',
                    'name',
                    'serving_size',
                    'servings_count',
                    'serving_size_unit',
                    'servings_count_unit',
                    'calories',
                    'carbs',
                    'proteins',
                    'fats'
                ]}
                
            />
    </div>    
  )
}

export default SingleMeal