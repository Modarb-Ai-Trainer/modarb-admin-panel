import { getWorkoutByID } from '@/app/Actions/GetActions'
import React from 'react'
import ProgramDetails from '../../../../../../components/large/WorkoutProgramsComponent/ProgramDetails/ProgramDetails';


const SingleWorkout = async({ params, searchParams }: { params: { id: String }; searchParams: { id: String } }) => {
    const workoutId=params.id
    const{data:Workout}=await getWorkoutByID(workoutId)
    console.log(Workout)
    

  return (
    
    <div>
     <ProgramDetails program={Workout} />

        
    </div>
  )
}

export default SingleWorkout