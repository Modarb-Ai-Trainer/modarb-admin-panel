'use client'
import React, { useState } from 'react';
import styles from './SideDrawer.module.css';
import NavLinks from './NavLinks';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


function SideDrawer() {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const toggleSideDrawer = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    return (
        <div>
            <div className={`${styles.BurgerMenuIcon} ${showSideDrawer && styles.active}`} onClick={toggleSideDrawer}>
               {showSideDrawer ? <IoClose size={20}/> :  <RxHamburgerMenu size={20}/>} 
            </div>
            <div className={`${styles.SideDrawer} ${showSideDrawer && styles.open}`}>
                <div className={styles.SideDrawer_sideContainer}>
                    <div className={styles.SideDrawer_sideContainer_sideLogo}>
                        <img className={styles.SideDrawer_sideContainer_sideLogo_img} src="/images/logo.png" alt="Logo" />
                    </div>
                    <NavLinks />
                </div>
            </div>
        </div>
    );
}

export default SideDrawer;
