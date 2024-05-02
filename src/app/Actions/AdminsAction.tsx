'use server'

import { revalidateTag } from "next/cache";

export async function getAdmins() {
    const res = await fetch('http://localhost:4000/api/v1/console/admins', {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNkN2Y1YjlhY2U5MTc2ZTIyNGUxNSIsImVtYWlsIjoic3VwZXJAYXBwLmNvbSIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInR5cGUiOiJhZG1pbiIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzE0NjYzNjQ4LCJleHAiOjE3MTQ3NTAwNDh9.eoModbN5Lq8RILWF1LdRPFUqtTvTp2_Yqm13E88UBWs'

        },
        cache: 'no-cache',
        next: {
            tags: ['admins']
        }
        
    });

    if (!res.ok) {
        throw new Error("Could not get data");
    }

    const responseData = await res.json();
    return responseData
}

