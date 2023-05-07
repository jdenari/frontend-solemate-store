// patterns imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

// child components imports
import MainButton from './MainButton';
import HeaderList from './HeaderLogin';

// actions function
import { RootState } from '../store/types';

const Header = () => {

    // dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdown = () => {setShowDropdown(!showDropdown);};
    const handleCloseDropdown = () => {setShowDropdown(false);};

    const authenticated = useSelector((state: RootState) => state.authenticated.authenticated);

    return (
        <div>
            <Navbar bg="light" expand="lg" className="w-100 shadow-sm p-3">
                <Navbar.Brand href="/" className='m-1 mx-3'>
                    <img src="/logo-small.png" alt="Logo" height="45" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='mx-5'>Home</Nav.Link>
                        <Nav.Link href="/cliente/meuspedidos" className='mx-5'>Meus Pedidos</Nav.Link>
                        <Nav.Link href="/cliente/meucarrinho" className='mx-5'>Meu Carrinho</Nav.Link>
                        <Nav.Link href="/cliente/solemate" className='mx-5'>Solemate</Nav.Link>
                        <Nav.Link href="/administracao/novosprodutos" className='mx-5'>Administração</Nav.Link>
                        <Nav.Link href="/administracao/controledeestoque" className='mx-5'>Controle de Estoque</Nav.Link>
                    </Nav>
                    <div className='d-block'>
                        {authenticated ? (
                            <HeaderList />
                        ) : (
                            <MainButton buttonText="Login" href="/cliente/login"/>
                        )}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;

