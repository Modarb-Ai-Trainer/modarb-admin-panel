'use client'
import React from 'react'
import styles from './sideDrawer.module.css'
import { links } from './links.js'
import { IoLogOut } from "react-icons/io5";
import { usePathname } from 'next/navigation';


function SideDrawer() {

    const pathname = usePathname();
    console.log(pathname)

    return (
        <div className={styles.sideContainer}>


            <div className={styles.sideLogo}>
                <img className={styles.sidelogo} src="/images/logo.png"></img>
            </div>


            <div className={styles.sidelinks}>
                {
                    links.map((link) => {
                        return <ul key={link.id}>

                            <li className={pathname === link.path ? styles.activeLink : styles.other}>
                                {link.icon}
                                <a href={link.path}>
                                    {link.title}

                                </a>
                            </li>
                        </ul>
                    })
                }

            </div>
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