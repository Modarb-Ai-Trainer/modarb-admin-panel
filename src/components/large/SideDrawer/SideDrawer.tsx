'use client'
import React from 'react'
import styles from './SideDrawer.module.css'
import { IoLogOut } from "react-icons/io5";
import NavLinks from './NavLinks';


function SideDrawer() {



    return (
        <div className={styles.sideContainer}>


            <div className={styles.sideLogo}>
                <img className={styles.sidelogo} src="/images/logo.png"></img>
            </div>

            <NavLinks />
            <div className={styles.sidebottomlink}>
                <li >
                    <IoLogOut size={"23"} />
                    <a>Logout</a>
                </li>

            </div>

        </div>
    )
}

export default SideDrawer