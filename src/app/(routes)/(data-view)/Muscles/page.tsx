import { getMuscles } from '@/app/Actions/GetActions'
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent'
import React from 'react'

const Muscles =async () => {
const {data:muscles} =await getMuscles()
console.log(muscles)
  return (
    <div>
        <DataViewComponent
        data={muscles}
        keysToDisplay={[
          'id',
          'name',
          'image'
        ]}
        title='Muscles'
        path='./add/muscle'
        buttonTitle='Add muscle'
        />
    </div>
  )
}

export default Muscles