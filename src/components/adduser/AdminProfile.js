import React, { Component } from 'react'
import './AdminProfile.css'
import {
    Col,
    Row,
    Button
} from 'react-bootstrap'

class AddUser extends Component{
    render(){
        return(
            <div>
                <div className="adminProfileContainer">
                    <h1>Update</h1>
                    <Row>
                        <Col>
                            <div className="adminContentForm">
                                <div className="adminInputGroup">
                                    <input type="text" placeholder="Username" id="username" name="username" value="admin"/>
                                </div>
                                <div className="adminInputGroup">
                                    <input type="password" placeholder="Current Password" id="username" name="oldpassword"/>
                                </div>
                                <div className="adminInputGroup">
                                    <input type="password" placeholder="New password" id="username" name="newpassword"/>
                                </div>
                                <div className="adminInputGroup">
                                    <Button variant="info">Submit</Button>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AddUser