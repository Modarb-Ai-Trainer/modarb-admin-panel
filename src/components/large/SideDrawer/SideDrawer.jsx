'use client'
import React from 'react'
import styles from './sideDrawer.module.css'
import { IoLogOut } from "react-icons/io5";
import NavigationLinks from './NavigationLinks'

function SideDrawer() {

    

    return (
        <div className={styles.sideContainer}>


            <div className={styles.sideLogo}>
                <img className={styles.sidelogo} src="/images/logo.png"></img>
            </div>


            <NavigationLinks/>
            <div className={styles.sidebottomlink}>
            <li >
                     <IoLogOut size={"23"}/>
                    <a>Logout</a>
                </li>
          
            </div>
           
        </div>
    )
}

export default SideDrawer