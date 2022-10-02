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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" sticky='top' className='bg-opacity-50 text-white'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" alt="" />
                        {/* Hands For Hands */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} to="/home" className='mx-3'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/donation" className='mx-3'>Donation</Nav.Link>
                        <Nav.Link as={Link} to="/myEvents" className='mx-3'>My Events</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className='mx-3'>Blogs</Nav.Link>
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
                            <div className="">
                                <Nav.Link as={Link} to="/login" className='mx-1 d-inline'><Button variant='dark'>Login</Button></Nav.Link>
                                <Nav.Link as={Link} to="/admin" className='mx-1 d-inline'><button className='btn btn-outline-dark btn-sm'>Admin</button></Nav.Link>
                            </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;