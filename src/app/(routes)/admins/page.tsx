// import { getAdmins } from '@/app/Actions/AdminsAction'
import DataViewTable from '@/components/large/DataViewTable/DataViewTable'
import React from 'react'


const data =[
{   
     id:1,
     name :'john' ,
     email :'john@gmail.com',
     dop:'1/1/2000',
     gender :'male',
     role :'admin'
}
]
async function page() {
    // const admins = await getAdmins();
    // console.log('admins',admins)
    return (
        <div>
            <DataViewTable
             data={data}
             keysToDisplay={['name','email','dop','gender','role']} 
            />
        </div>
    )
}

export default page