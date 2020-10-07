import React, { Component } from 'react'
import Header from '../constant/header/Header'
import Footer from '../constant/footer/Footer'
import AddUser from '../../components/adduser/AdminProfile'
import {
    Container
} from 'react-bootstrap'

class Settings extends Component {
    render(){
        return(
            <div>
                <div className="settingsContainer">
                    <Header />
                        <Container>
                            <AddUser />
                        </Container>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Settings