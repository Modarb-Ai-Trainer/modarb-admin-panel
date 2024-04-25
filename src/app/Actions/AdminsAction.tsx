'use server'

import { revalidateTag } from "next/cache";

export async function getAdmins(){
    const res = await fetch('https://modarb-backend.onrender.com/api/v1/console/admins',{
        cache:'no-cache',
        next :{
            tags :['admins']
        }
    });
    revalidateTag('admins')
    if (!res.ok)  {throw new Error("could not get data")};
    return res.json()
}

