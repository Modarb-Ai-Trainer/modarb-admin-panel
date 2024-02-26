import React from 'react';
import styles from './topbar.module.css';
import { FiSearch } from 'react-icons/fi';
import { RiAccountCircleFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';


const Topbar = () => {
  return (
    <div className={styles.topcontainer}>

      <div className={styles.leftsearch}>
      <div className={styles.icon}>
          <FiSearch />
        </div>
        <input type="text" placeholder="Search..." />
        
      </div>

      <div className={styles.rightbar}> 
        <div className={styles.profile}>
                <RiAccountCircleFill size={"30"} fill='#6739FF'/>
                <span>Mohamed</span>
                <MdKeyboardArrowDown/>

        </div>
        <div className={styles.notifi}>          
        <Image src="/images/bell-ring.svg" alt="Search Icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
