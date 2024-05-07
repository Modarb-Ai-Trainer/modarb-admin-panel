import { MusclesDelete } from '@/app/Actions/DeleteActions'
import { getExerciseById, getMuscles, getMusclesById } from '@/app/Actions/GetActions'
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent'
import React from 'react'

const Muscles = async () => {
  const { data: muscles } = await getMuscles()
  // console.log(muscles)
  // console.log(musclebyid)
  // const id ='6631b129f9f10ffca920eefa'
  // const {data:exercise}=await getExerciseById(id)
  // console.log(exercise.targetMuscles.primary)
  // const {data :musclebyid}=await getMusclesById(exercise.targetMuscles.primary)
  // console.log(musclebyid)


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
        onDelete={MusclesDelete}
      />
    </div>

  )
}

export default Muscles