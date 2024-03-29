'use client'
import React, { useState } from 'react'
import styles from './SideDrawer.module.css'
import NavLinks from './NavLinks';
import { RxHamburgerMenu } from "react-icons/rx";


function SideDrawer() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };


    return (
        <div className={styles.SideDrawer}>
            <div className={styles.SideDrawer_sideContainer}>
            <div className={styles.SideDrawer_sideContainer_sideLogo}>
                <img className={styles.SideDrawer_sideContainer_sideLogo_img} src="/images/logo.png"></img>
            </div>

            
            <NavLinks />
           
          
           

            </div>
        </div>
        
    )
}

export default SideDrawer