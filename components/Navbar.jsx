import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
  return (
    <div className='navbar-container'>
        <div className='logo'>
            <Link href='/'> Phoenix&apos;s Woodfire Pizza</Link>
        </div>
        <ul className='other-pages'>
            <li>
                <Link href='/menu' legacyBehavior> 
                    <a className={router.pathname == "/menu" ? "active" : ""}> 
                        Menu
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/order' legacyBehavior>
                    <a className={router.pathname == "/order" ? "active" : ""}> 
                        Order
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/about' legacyBehavior>
                    <a className={router.pathname == "/about" ? "active" : ""}> 
                        About
                    </a>
                </Link>
            </li>
            <li>
                <Link href='/contact' legacyBehavior>
                    <a className={router.pathname == "/contact" ? "active" : ""}> 
                        Contact
                    </a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar