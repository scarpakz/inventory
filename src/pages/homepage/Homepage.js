import React, { Component } from 'react'
import CustomTable from '../../components/table/CustomTable'
import AddOrder from '../../components/addorder/AddOrder'
import {
    Container,
} from 'react-bootstrap'

class Homepage extends Component {
    render(){
        return(
            <div>
                <Container>
                    <AddOrder />
                    <CustomTable />
                </Container>
            </div>
        )
    }
}

export default Homepage