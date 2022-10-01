import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logos/Group 1329.png'
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
                        {/* Hands For Hands */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className='mx-3'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/donation" className='mx-3'>Donation</Nav.Link>
                        <Nav.Link as={Link} to="/myEvents" className='mx-3'>My Events</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className='mx-3'>Blog</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className='mx-3'>About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className='mx-3'>Contact</Nav.Link>
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