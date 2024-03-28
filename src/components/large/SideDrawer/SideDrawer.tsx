'use client'
import React from 'react'
import styles from './SideDrawer.module.css'
import NavLinks from './NavLinks';


function SideDrawer() {



    return (
        <div className={styles.SideDrawer}>
            <div className={styles.sideContainer}>

            <div className={styles.sideLogo}>
                <img className={styles.sidelogo} src="/images/logo.png"></img>
            </div>

            
            <NavLinks />
           
          
           

            </div>
        </div>
        
    )
}

export default SideDrawer