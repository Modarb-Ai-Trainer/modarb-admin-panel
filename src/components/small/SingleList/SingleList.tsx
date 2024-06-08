import React from 'react';
import styles from './SingleList.module.css';

interface SingleListProps {
  data: { [key: string]: any } 
  keysToDisplay: string[]; 
}

const SingleList: React.FC<SingleListProps> = ({ data, keysToDisplay }) => {


  const renderValue = (value: any) => {
    if (typeof value === 'object' && value !== null) {
      return `${value.min} - ${value.max}`;
    }
    return value;
  };

  return (
    <div className={styles.SingleList}>
      <ul className={styles.SingleList_list}>
        {keysToDisplay.map(key => (
          <li key={key}>
            <span className={styles.SingleList_list_prop}>{key}:</span>
            <span className={styles.SingleList_list_value}>{renderValue(data[key])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleList;
