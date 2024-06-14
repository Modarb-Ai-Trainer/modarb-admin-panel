import { IngradientDelete } from '@/app/Actions/DeleteActions'
import { getIngradients } from '@/app/Actions/GetActions'
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent'
import DataViewTable from '@/components/large/DataViewTable/DataViewTable'
import React from 'react'
const Ingredients = async() => {
const {data:ingradients}=await getIngradients()
console.log(ingradients)
  return (
    <div>      
       <DataViewComponent
       data={ingradients}
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
       title='Ingradients'
       path='./add/Ingradient'
       buttonTitle='Add Ingradient'
       onDelete={IngradientDelete} 
       updatePath={'ingredient'}

       />

    </div>
  )
}

export default Ingredients