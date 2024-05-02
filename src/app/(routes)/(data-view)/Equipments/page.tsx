import React from 'react'
import styles from './page.module.css'
import DataViewHeader from '@/components/small/DataViewHeader/DataViewHeader'
import { getEquipments } from '@/app/Actions/EquipmentAction'
import DataViewTable from '@/components/large/DataViewTable/DataViewTable'
const Equipments  =async() => {
  const {data:equipments} =await getEquipments();
  console.log(equipments)
  return (
    <div className={styles.EquipmentsView}>
        <div className={styles.EquipmentsView_container}>
            <div className={styles.EquipmentsView_container_TopContainer}>
                <DataViewHeader
                title='Equipments'
                path='./add/equipment'
                buttonTitle='Add Equipment' 
                />
            </div>

            <div className={styles.EquipmentsView_container_bottomContainer}>
              <DataViewTable
              data={equipments}
              keysToDisplay={[
                'id',
                'name',
                'image'
              ]}
              />
            </div>
            
        </div>
    </div>
  )
}

export default Equipments