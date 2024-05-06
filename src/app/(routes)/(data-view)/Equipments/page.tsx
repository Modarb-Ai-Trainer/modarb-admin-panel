import React from 'react'
import styles from './page.module.css'
import { getEquipments } from '@/app/Actions/GetActions'
import DataViewComponent from '@/components/large/DataViewComponent/DataViewComponent'
import { EquipmentDelete } from '@/app/Actions/DeleteActions'
const Equipments  =async() => {
  const {data:equipments} =await getEquipments();


  return (
    <div className={styles.EquipmentsView}>
       <DataViewComponent
       data={equipments}
       keysToDisplay={[
         'id',
         'name',
         'image'
       ]}
        title='Equipments'
        path='./add/equipment'
        buttonTitle='Add Equipment' 
        onDelete={EquipmentDelete}
       
       />
    </div>
  )
}

export default Equipments


