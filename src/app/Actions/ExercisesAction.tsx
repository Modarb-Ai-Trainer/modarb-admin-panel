'use server'

import { revalidateTag } from "next/cache";

export async function getData(){
    const res = await fetch('http://localhost:4000/api/v1/console/exercises',{
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNkN2Y1YjlhY2U5MTc2ZTIyNGUxNSIsImVtYWlsIjoic3VwZXJAYXBwLmNvbSIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInR5cGUiOiJhZG1pbiIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzE0NjYzNjQ4LCJleHAiOjE3MTQ3NTAwNDh9.eoModbN5Lq8RILWF1LdRPFUqtTvTp2_Yqm13E88UBWs'

        },
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
    const res = await fetch(`http://localhost:4000/api/v1/console/exercises/${exerciseId}`,{
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNkN2Y1YjlhY2U5MTc2ZTIyNGUxNSIsImVtYWlsIjoic3VwZXJAYXBwLmNvbSIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInR5cGUiOiJhZG1pbiIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzE0NjYzNjQ4LCJleHAiOjE3MTQ3NTAwNDh9.eoModbN5Lq8RILWF1LdRPFUqtTvTp2_Yqm13E88UBWs'

        },
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