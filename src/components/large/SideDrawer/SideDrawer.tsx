'use client'
import React from 'react'
import styles from './SideDrawer.module.css'
import NavLinks from './NavLinks';
import { RxHamburgerMenu } from "react-icons/rx";


function SideDrawer() {



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