import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MainButton from './MainButton';
import styles from './HeaderLogin.module.css';
import { deauthenticated } from '../store/actions';

const HeaderList = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  const handleDropdown = () => {setShowDropdown(!showDropdown);};
  const handleCloseDropdown = () => {setShowDropdown(false);};

  return (
        <div className={styles.headerList}>
        <MainButton buttonText="João Vitor" imageUrl="/icons/person-circle-white.png" onClick={handleDropdown}/>
        {showDropdown ? (
            <div aria-label="Close" onClick={handleCloseDropdown} className={`${styles.dropdown} mt-3`}>
            <ul className={`list-unstyled ${styles.dropdownMenu}`}>
                <li><a className={`${styles.dropdownItem} my-1`} href="/">Home</a></li>
                <li><a className={`${styles.dropdownItem} my-1`} href="/cliente/meuspedidos">Meus Pedidos</a></li>
                <li><a className={`${styles.dropdownItem} my-1`} href="/cliente/meucarrinho">Meu Carrinho</a></li>
                <li><a className={`${styles.dropdownItem} my-1`} href="#">Perfil</a></li>
                <li><a className={`${styles.dropdownItem} my-1`} href="#" onClick={() => dispatch(deauthenticated())}>Sair</a></li>
            </ul>
            </div>
        ) : null}
        </div>
    );
};

export default HeaderList;


