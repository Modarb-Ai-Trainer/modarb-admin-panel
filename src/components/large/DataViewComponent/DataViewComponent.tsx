import React from 'react';
import styles from './DataViewComponent.module.css';
import DataViewTable from '@/components/large/DataViewTable/DataViewTable';
import DataViewHeader from '@/components/small/DataViewHeader/DataViewHeader';


interface DataProps{
data: any; 
keysToDisplay: string[]; 
onDelete?: (id: string | number) => void;
title: string; 
path: string; 
buttonTitle: string;
viewPath?:string;
updatePath?:string;
}

const DataViewComponent:React.FC<DataProps>  =  ({data,keysToDisplay,onDelete,title,path,buttonTitle,viewPath,updatePath}) =>  {
  


  return (
    <div className={styles.dataView}>
      <div className={styles.dataView_cotainer}>
        <div className={styles.dataView_container_topConatainer}>
          <DataViewHeader
          title={title}
          path={path}
          buttonTitle={buttonTitle}
          />
        </div>

       <div className={styles.dataView_cotainer_bottomContainer}>
          <DataViewTable
            data={data}
            keysToDisplay={keysToDisplay}
            onDelete={onDelete} 
            viewPath={viewPath}
            updatePath={updatePath}
          />
       </div>

      </div>
      
    </div>
  )
}

export default DataViewComponent;