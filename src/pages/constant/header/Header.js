import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { 
    Navbar, 
    Nav, 
    Form, 
    Button, 
    FormControl,
    InputGroup,
    NavDropdown
 } from 'react-bootstrap'

class Header extends Component{
    render(){
        return(
            <div>
                <div className="dashboardContainer">
                    <Navbar static bg="light" variant="light">
                        <Navbar.Brand href="/dashboard">Web App</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/dashboard">Home</Nav.Link>
                            <Nav.Link href="#features">Reports</Nav.Link>
                            <Nav.Link href="#pricing">Delivery</Nav.Link>
                            {/* <NavDropdown title="User" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Form inline>
                            <Nav.Link href="/settings" className="dashboardProfileSettings">Settings</Nav.Link>
                            <Link to="/" className="dashboardSignOut">
                                Sign Out
                            </Link>
                        </Form>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Header