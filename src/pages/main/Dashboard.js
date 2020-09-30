import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Dashboard.css'
// Component Pages
import Header from '../constant/Header'
// Bootstrap Components
import { 
    Navbar, 
    Nav, 
    Form, 
    Button, 
    FormControl,
    InputGroup,
    NavDropdown
 } from 'react-bootstrap'

class Dashboard extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
    }
}

export default Dashboard