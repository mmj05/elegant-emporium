// src/components/common/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand as={Link} to='/'>
                Your Logo Here
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/shop'>
                        Shop
                    </Nav.Link>
                </Nav>
                <Nav className='ml-auto'>
                    <Nav.Link as={Link} to='/login'>
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to='/cart'>
                        Cart
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
