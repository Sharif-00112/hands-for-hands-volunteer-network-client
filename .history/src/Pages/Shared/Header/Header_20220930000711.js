import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
 
const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} height="30" alt="" />
                        {/* Car Genius */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className='mx-3'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className='mx-3'>Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className='mx-3'>Experts</Nav.Link>
                        {user?.email ?
                            <div className="">
                                <Navbar.Text className='mx-4'>
                                    <Nav.Link as={Link} to="/login" className='d-inline text-info'>Signed in as: {user?.displayName}</Nav.Link>
                                </Navbar.Text>
                                <Button onClick={logout} variant='light'>Logout</Button> 
                            </div>
                            :
                            <Nav.Link as={Link} to="/login" className='mx-5'><Button variant='light'>Login</Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;