import React from 'react'
import styles from './sideDrawer.module.css'
import {links} from './links.js'
import { usePathname } from 'next/navigation';


const NavigationLinks = () => {
    const pathname = usePathname();
  return (
    <div className={styles.sidelinks}>
            {
                links.map((link)=>{
                    return <ul key={link.id} >
                        
                        <li  className={pathname === link.path ? styles.activeLink : styles.other}>
                            {link.icon} 
                            <a href={link.path}>
                            {link.title}

                            </a>
                        </li>  
                        </ul>
                })
            }
              
            </div>
  )
}

export default NavigationLinks