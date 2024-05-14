import { getWorkoutByID } from '@/app/Actions/GetActions'
import UpdateButtonConatiner from '@/components/small/UpdateButtonContainer/UpdateButtonConatiner'
import React from 'react'

const SingleWorkout = async({ params, searchParams }: { params: { id: String }; searchParams: { id: String } }) => {
    const workoutId=params.id
    const{data:Workout}=await getWorkoutByID(workoutId)
    console.log(Workout)

  return (
    <div>
        
        <UpdateButtonConatiner/>
    </div>
  )
}

export default SingleWorkout