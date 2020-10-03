import React, { Component } from 'react'
import './Footer.css'
import {
    Container,
    Row,
} from 'react-bootstrap'

class Footer extends Component {
    render(){
        return(
            <div>
                <div className="footerContainer">
                    <Container>
                        <Row>
                            <div className="footerContent">
                                <span>All Rights Reserved 2020</span>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Footer