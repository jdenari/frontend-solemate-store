import React from 'react';
import { useSelector } from 'react-redux';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';
import { RootState } from '@/store/rootReducer';

const Footer = () => {
    const categories = useSelector((state: RootState) => state.category.categories);
    return (
        <div>
            <hr className="w-100 border-top border-secondary my-3 container" />
            <nav className="navbar navbar-expand-lg navbar-light bg-light container p-3">
                <div className="d-flex justify-content-between w-100">
                    <ul className="navbar-nav">
                        <li className={`nav-item text-left mx-5`}>
                            <a className={`${styles.title} font-weight-bold nav-link`} href="#">Categories</a>
                            {
                                categories.map((category) => (
                                    <a
                                    key={category.id}
                                    href="#"
                                    className={`${styles.row} nav-link`}
                                    >
                                    {category.category}
                                    </a>
                                ))
                            }
                        </li>
                        <li className={`nav-item ${styles.footerNavItem} text-left mx-5`}>
                            <a className={`${styles.title} font-weight-bold nav-link mt-lg-0 mt-3`} href="/cliente/meuspedidos">Client</a>
                            <a href="/cliente/meuspedidos" className={`${styles.row} nav-link`}>Orders</a>
                            <a href="/cliente/meucarrinho" className={`${styles.row} nav-link`}>Cart</a>
                        </li>
                        <li className={`nav-item text-left mx-5`}>
                            <a className={`${styles.title} font-weight-bold nav-link mt-lg-0 mt-3`} href="/cliente/solemate">About</a>
                            <a href="/cliente/solemate" className={`${styles.row} nav-link`}>Solemate Store</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a href="#">
                            <FaFacebookF size={20} className="text-secondary mx-2" />
                        </a>
                        <a href="#">
                            <FaTwitter size={20} className="text-secondary mx-2" />
                        </a>
                        <a href="#">
                            <FaInstagram size={20} className="text-secondary mx-2" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;


