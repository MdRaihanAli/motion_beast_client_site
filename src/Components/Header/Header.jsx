import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/Provider';

function Header() {
    const { user, logOut } = useContext(AuthContext)

    const handelSignOut = () => {
        logOut()
            .then(res => {
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='bg-light rounded align-items-center px-2 d-flex ali '>
                        <img width='80' height='80' className='h-100' src={logo} alt="" />
                        <h3 className='text-dark fw-bold'>3D Motion</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto nav_bg">
                        <NavLink className='nav-link ' to='/'>Home</NavLink>
                        <NavLink className='nav-link' to='/instructors'>Instructors</NavLink>
                        <NavLink className='nav-link' to='/classes'>Classes</NavLink>
                        

                    </Nav>
                    <Nav>
                        {
                            user ? <span className='d-flex'>
                                <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
                                <img title={user?.displayName} width='40' className='rounded-circle' height='40' src={user?.photoURL} alt="" />
                                <button onClick={handelSignOut} className='btn btn-success ms-2'>Sign Out</button>
                            </span> : <NavLink className='ms-2' to='/login'> <button className='btn btn-success'>Login</button></NavLink>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header