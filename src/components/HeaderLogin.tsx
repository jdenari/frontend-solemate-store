import React, { useState } from 'react';
import MainButton from './MainButton';
import CustomModal from './CustomModal';
import styles from './HeaderLogin.module.css';

const HeaderLogin = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleDropdown = () => {setShowDropdown(!showDropdown);};
    const handleCloseDropdown = () => {setShowDropdown(false);};

    const handleLogout = () => {setShowModal(true);handleCloseDropdown();};
    const handleCloseModal = () => {setShowModal(false);};

    return (
        <>
            <div className={styles.headerList}>
                <MainButton
                    buttonText="João Vitor"
                    imageUrl="/icons/person-circle-white.png"
                    onClick={handleDropdown}
                />
                {showDropdown ? (
                    <div aria-label="Close" onClick={handleCloseDropdown} className={`${styles.dropdown} mt-3`}>
                        <ul className={`list-unstyled ${styles.dropdownMenu}`}>
                        <li><a className={`${styles.dropdownItem} my-1`} href="/">Home</a></li>
                        <li><a className={`${styles.dropdownItem} my-1`} href="/cliente/meuspedidos">Meus Pedidos</a></li>
                        <li><a className={`${styles.dropdownItem} my-1`} href="/cliente/meucarrinho">Meu Carrinho</a></li>
                        <li><a className={`${styles.dropdownItem} my-1`} href="#">Perfil</a></li>
                        <li><a className={`${styles.dropdownItem} my-1`} href="#" onClick={handleLogout}>Sair</a></li>
                        </ul>
                    </div>
                ) : null}
            </div>
            <CustomModal 
                show={showModal} 
                handleClose={handleCloseModal} 
                text='Você tem certeza que quer sair da sua conta?'
                title='Sair da Conta'
            />
        </>
    );
};

export default HeaderLogin;



