import React from 'react';
import styles from './Header.module.css';
import CustomButton from './MainButton';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="w-100 p-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <Navbar.Brand href="#home" className='m-1 mx-3'>
            <img src="/logo-small.png" alt="Logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='ms-5'>
                <Nav className="me-auto">
                    <Nav.Link href="#link1" className='mx-5'>Link 1</Nav.Link>
                    <Nav.Link href="#link2" className='mx-5'>Link 2</Nav.Link>
                    <Nav.Link href="#link3" className='mx-5'>Link 3</Nav.Link>
                    <Nav.Link href="#link3" className='mx-5'>Link 4</Nav.Link>
                </Nav>
                <CustomButton buttonText="Login" />
            </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
