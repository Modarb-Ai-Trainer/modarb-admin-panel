import { getAdmins } from '@/app/Actions/AdminsAction'
import DataViewTable from '@/components/large/DataViewTable/DataViewTable'
import React from 'react'



async function Admins() {
    const {data} = await getAdmins();
    console.log('admins',data)
    return (
        <div>
            <DataViewTable
             data={data}
             keysToDisplay={['id','name','email','role','gender','age']} 
            />
        </div>
    )
}

export default Admins