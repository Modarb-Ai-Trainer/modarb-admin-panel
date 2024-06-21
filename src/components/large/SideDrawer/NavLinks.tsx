import React from 'react'
import styles from './SideDrawer.module.css'
import { links } from './Links' 
import Link from 'next/link';
import { IoLogOut } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation';


const NavLinks = () => {
    const pathname = usePathname();

    const router = useRouter();

    const logout = () => {
        router.push('/login'); 
    };

    
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
             {pathname !== '/login' && (
                    <div className={styles.centerLinks_sideLinks_sidebottomlink}>
                        <li>
                            <IoLogOut size={'23'} />
                            <a onClick={logout}>Logout</a>
                        </li>
                    </div>
                )}

        </div>
        

    </div>
    )
}

export default NavLinks