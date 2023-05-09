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
                buttonText={authenticated.user?.firstName ?? 'Usuário'}
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
                    Meus Pedidos
                    </a>
                </li>
                <li>
                    <a
                    className={`${styles.dropdownItem} my-1`}
                    href="/cliente/meucarrinho"
                    >
                    Meu Carrinho
                    </a>
                </li>
                <li>
                    <a className={`${styles.dropdownItem} my-1`} href="#">
                    Perfil
                    </a>
                </li>
                <li>
                    <a
                    className={`${styles.dropdownItem} my-1`}
                    href="#"
                    onClick={handleOpenModal}
                    >
                    Sair
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
            text="Você tem certeza que quer sair da sua conta?"
            title="Sair da Conta"
        />
        </>
    );
};

export default HeaderLogin;




