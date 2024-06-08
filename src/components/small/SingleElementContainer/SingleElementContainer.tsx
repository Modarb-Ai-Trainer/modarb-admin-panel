import React from 'react';
import styles from './SingleElementContainer.module.css';
import SingleList from '../SingleList/SingleList';
import Image from 'next/image';
import Button from '../Button/Button';

interface SingleElementContainerProps {
  data: { [key: string]: any };
  keysToDisplay: string[];
}

const SingleElementContainer: React.FC<SingleElementContainerProps> = ({ data, keysToDisplay }) => {
  let mediaUrl = '';
  if (data.media && data.media.url) {
    mediaUrl = data.media.url;
  } else if (data.image) {
    mediaUrl = data.image; 
  }

  const { media, image, ...rest } = data;

  return (
    <div className={styles.SingleElement}>
      <div className={styles.SingleElement_Button}>
        <Button children='Update' size='small' type="popular" />
      </div>
      <div className={styles.singleElement_container}>
        <div className={styles.singleElement_container_top}>
          <div className={styles.singleElement_container_top_left}>
            {mediaUrl && <Image src={mediaUrl} alt={data.name} layout='fill' />}
          </div>
          <div className={styles.singleElement_container_top_right}>
            <SingleList
              data={rest}
              keysToDisplay={keysToDisplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleElementContainer;
