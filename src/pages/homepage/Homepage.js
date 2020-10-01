import React, { Component } from 'react'
import CustomTable from '../../components/table/CustomTable'
import {
    Container,
} from 'react-bootstrap'

class Homepage extends Component {
    render(){
        return(
            <div>
                <Container>
                    <CustomTable/>
                </Container>
            </div>
        )
    }
}

export default Homepage