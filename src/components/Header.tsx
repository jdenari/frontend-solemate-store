// patterns imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

// child components imports
import SolemateButton from './SolemateButton';
import HeaderList from './HeaderLogin';

// actions function
import { RootState } from '../store/types';

const Header = () => {

    // dropdown
    const [showDropdown, setShowDropdown] = useState(false);

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
                        <Nav.Link href="/" className='mx-lg-5 mt-lg-0 mt-2'>Home</Nav.Link>
                        <Nav.Link href="/cliente/meuspedidos" className='mx-lg-5'>Orders</Nav.Link>
                        <Nav.Link href="/cliente/meucarrinho" className='mx-lg-5'>Cart</Nav.Link>
                        <Nav.Link href="/cliente/solemate" className='mx-lg-5'>Solemate</Nav.Link>
                        <Nav.Link href="/administracao/novosprodutos" className='mx-lg-5'>Add Product</Nav.Link>
                        <Nav.Link href="/administracao/controledeestoque" className='mx-lg-5'>Inventory</Nav.Link>
                    </Nav>
                    <div className='d-block mt-lg-0 mt-3'>
                        {authenticated ? (
                            <HeaderList />
                        ) : (
                            <SolemateButton 
                                buttonText="Login" 
                                href="/cliente/login"
                                variant='purple'
                            />
                        )}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;

