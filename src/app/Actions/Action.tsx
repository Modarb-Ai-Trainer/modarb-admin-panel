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