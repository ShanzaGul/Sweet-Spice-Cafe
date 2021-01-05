import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../images/logo.png'
import {LinkContainer} from 'react-router-bootstrap'

export default function Header() {
    return (
        <div className="header pt-3 pb-3 border-bottom shadow-sm"> 
               <div className="d-flex justify-content-center">
                 <img
                    src={logo}
                    width="100"
                    height="100"
                    alt="logo"
                />
                 </div>

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                    
                    <LinkContainer to="/"> 
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/menu"> 
                    <Nav.Link>Menu</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/locations">
                    <Nav.Link>Locations</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/order">
                    <Nav.Link><button className="button">Order Now</button></Nav.Link>
                    </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      )
}
