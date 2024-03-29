import React from 'react'
import styles from './SideDrawer.module.css'
import { links } from './Links' 
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoLogOut } from "react-icons/io5";


const NavLinks = () => {
    const pathname = usePathname();
    return (
        <div className={styles.centerLinks}>
        <div className={styles.centerLinks_sideLinks}>
            {
                links.map((link) => {
                    return <ul key={link.id} className={pathname === link.path ? styles.activeLink : styles.other}>

                        <li >
                            {link.icon}
                        
                            <Link href={link.path}>
                            {link.title}

                            </Link>
                        </li>

                    </ul>
                })
            }
             <div className={styles.centerLinks_sideLinks_sidebottomlink}>
                <li >
                    <IoLogOut size={"23"} />
                    <a>Logout</a>
                </li>

            </div>

        </div>
        

    </div>
    )
}

export default NavLinks