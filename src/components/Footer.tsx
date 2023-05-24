import React from 'react';
import { useSelector } from 'react-redux';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';
import { RootState } from '@/store/rootReducer';
import Link from 'next/link';

const Footer = () => {
    const categories = useSelector((state: RootState) => state.category.categories);
    return (
        <div>
            <hr className="w-100 border-top border-secondary my-3 container" />
            <nav className="navbar navbar-expand-lg navbar-light bg-light container p-3">
                <div className="d-flex justify-content-between w-100">
                    <ul className="navbar-nav">
                        <li className={`nav-item text-left mx-5`}>
                            <Link href="#" className={`${styles.title} font-weight-bold nav-link`}>Categories</Link>
                            {
                                categories.map((category) => (
                                    <Link href="#" key={category.id} className={`${styles.row} nav-link`}>
                                        {category.category}
                                    </Link>
                                ))
                            }
                        </li>
                        <li className={`nav-item ${styles.footerNavItem} text-left mx-5`}>
                            <Link href="/cliente/meuspedidos" className={`${styles.title} font-weight-bold nav-link mt-lg-0 mt-3`}>Client</Link>
                            <Link href="/cliente/meuspedidos" className={`${styles.row} nav-link`}>Orders</Link>
                            <Link href="/cliente/meucarrinho" className={`${styles.row} nav-link`}>Cart</Link>
                        </li>
                        <li className={`nav-item text-left mx-5`}>
                            <Link href="/cliente/solemate" className={`${styles.title} font-weight-bold nav-link mt-lg-0 mt-3`}>About</Link>
                            <Link href="/cliente/solemate" className={`${styles.row} nav-link`}>Solemate Store</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link href="#"><FaFacebookF size={20} className="text-secondary mx-2" /></Link>
                        <Link href="#"><FaTwitter size={20} className="text-secondary mx-2" /></Link>
                        <Link href="#"><FaInstagram size={20} className="text-secondary mx-2" /></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;



