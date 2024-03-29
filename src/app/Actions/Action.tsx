'use server'

import { revalidateTag } from "next/cache";

export async function getData(){
    const res = await fetch('https://660331ba2393662c31ceb407.mockapi.io/api/v1/exercises/exercises',{
        cache:'no-cache',
        next :{
            tags :['exercises']
        }
    });
    revalidateTag('exercises')
    if (!res.ok)  {throw new Error("could not get data")};
    return res.json()
}



export async function getExerciseById(exerciseId:Number) {
    const res = await fetch(`https://660331ba2393662c31ceb407.mockapi.io/api/v1/exercises/exercises/${exerciseId}`,{
        cache :'no-cache',
        next : {
            tags : ['exercises']
        }
    }
    );
    if (!res.ok) {
        throw new Error("Could not get exercise");
    }
    revalidateTag('exercises'); 
    return res.json();
}


export async function handleDelete(exerciseId:any) {
    
    const res = await fetch(`https://660331ba2393662c31ceb407.mockapi.io/api/v1/exercises/exercises/${exerciseId}`,{
        method:'DELETE'
    });
    revalidateTag('exercises'); 
    return  res.json();


}