import React from 'react';
import styles from './SingleElementContainer.module.css';
import SingleList from '../SingleList/SingleList';
import Image from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';

interface SingleElementContainerProps {
  data: { [key: string]: any };
  keysToDisplay: string[];
  updateTitle:any
}

const SingleElementContainer: React.FC<SingleElementContainerProps> = ({ data, keysToDisplay ,updateTitle }) => {
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
        <Button  size='small' type="popular"  ><Link href={`/update/${updateTitle}`} >Update</Link></Button>
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
