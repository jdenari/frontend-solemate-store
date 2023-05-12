import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SolemateButton from './SolemateButton';
import SolemateModal from './SolemateModal';
import styles from './HeaderLogin.module.css';
import { RootState } from '../store/types';
import { DEAUTHENTICATE } from '../store/actions';

const HeaderLogin = () => {
    const dispatch = useDispatch();

    // dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdown = () => {setShowDropdown(!showDropdown);};
    const handleCloseDropdown = () => {setShowDropdown(false);};

    // modal
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {setShowModal(true);handleCloseDropdown();};
    const handleCloseModal = () => {setShowModal(false);};

    // functions to logout
    const handleLogout = () => {dispatch(DEAUTHENTICATE());handleCloseModal();};
    const authenticated = useSelector((state: RootState) => state.authenticated);

    return (
        <>
        <div className={styles.headerList}>
            <SolemateButton
                buttonText={authenticated.user?.firstName ?? 'User'}
                imageUrl={authenticated.user?.access === 'client' ? '/icons/person-circle-white.png' : '/icons/briefcase-white.png'}
                onClick={handleDropdown}
                variant='purple'
            />
            {showDropdown ? (
            <div
                aria-label="Close"
                onClick={handleCloseDropdown}
                className={`${styles.dropdown} mt-3`}
            >
                <ul className={`list-unstyled ${styles.dropdownMenu}`}>
                <li>
                    <a className={`${styles.dropdownItem} my-1`} href="/">
                    Home
                    </a>
                </li>
                <li>
                    <a
                    className={`${styles.dropdownItem} my-1`}
                    href="/cliente/meuspedidos"
                    >
                    Orders
                    </a>
                </li>
                <li>
                    <a
                    className={`${styles.dropdownItem} my-1`}
                    href="/cliente/meucarrinho"
                    >
                    Cart
                    </a>
                </li>
                <li>
                    <a className={`${styles.dropdownItem} my-1`} href="#">
                    Profile
                    </a>
                </li>
                <li>
                    <a
                    className={`${styles.dropdownItem} my-1`}
                    href="#"
                    onClick={handleOpenModal}
                    >
                    Log out
                    </a>
                </li>
                </ul>
            </div>
            ) : null}
        </div>
        <SolemateModal
            show={showModal}
            handleYes={handleLogout}
            handleClose={handleCloseModal}
            text="Are you sure you want to log out of your account?"
            title="Log Out"
        />
        </>
    );
};

export default HeaderLogin;




