import React from 'react';
import MainButton from './MainButton';
import { Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="w-100 shadow-sm p-3">
            <Navbar.Brand href="/" className='m-1 mx-3'>
                <img src="/logo-small.png" alt="Logo" height="45" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
                    <Nav className="me-auto">
                    <Nav.Link href="/" className='mx-5'>Home</Nav.Link>
                        <Nav.Link href="/" className='mx-5'>Categorias</Nav.Link>
                        <Nav.Link href="/cliente/meuspedidos" className='mx-5'>Meus Pedidos</Nav.Link>
                        <Nav.Link href="/cliente/meucarrinho" className='mx-5'>Meu Carrinho</Nav.Link>
                        <Nav.Link href="/cliente/solemate" className='mx-5'>Solemate</Nav.Link>
                    </Nav>
                    <MainButton buttonText="Login" />
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
