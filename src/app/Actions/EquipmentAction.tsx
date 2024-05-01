'use server'

import { revalidateTag } from "next/cache";

export async function getEquipments(EquipmentId:Number){
    const res = await fetch(`http://localhost:4000/api/v1/console/equipments/?=${EquipmentId}`,{
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNkN2Y1YjlhY2U5MTc2ZTIyNGUxNSIsImVtYWlsIjoic3VwZXJAYXBwLmNvbSIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInR5cGUiOiJhZG1pbiIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzE0NTc3MjA0LCJleHAiOjE3MTQ2NjM2MDR9.k2dscjGAJB3LHwpeRvXSMy4j81obLVfNXqzWugqDf3M'

        },
        cache:'no-cache',
        next :{
            tags :['equipment']
        }
    });
    revalidateTag('equipment')
    if (!res.ok)  {throw new Error("could not get data")};
    return res.json()
}

