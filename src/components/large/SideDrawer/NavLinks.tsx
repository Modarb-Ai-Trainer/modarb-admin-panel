import React from 'react'
import styles from './SideDrawer.module.css'
import { links } from './Links'
import { usePathname } from 'next/navigation';


const NavLinks = () => {
    const pathname = usePathname();
    return (
        <div className={styles.sidelinks}>
            {
                links.map((link) => {
                    return <ul key={link.id} >

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
    )
}

export default NavLinks