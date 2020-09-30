import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { 
    Container, 
    Row, 
    Col,
    Button,
} from 'react-bootstrap'

class Login extends Component {
    render(){
        return(
            <div className="LoginContainer">
                <div className="autoAdjustFooter"></div>
                <Container>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <div className="loginFormContainer">
                                <h1>Sign in</h1>
                                <div className="loginContent">
                                    <div className="inputGroup">
                                        <input type="text" name="Username" placeholder="Username" required autoFocus/>
                                    </div>
                                    <div className="inputGroup">
                                        <input type="password" name="Password" placeholder="Password" required/>
                                    </div>
                                    <div className="inputGroup">
                                        <Link to="/dashboard">
                                            <Button variant="primary" size="lg" block>
                                                Submit
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login