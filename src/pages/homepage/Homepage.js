import React, { Component } from 'react'
import PendingTable from '../../components/table/pendingtable/PendingTable'
import DeliveredTable from '../../components/table/deliveredtable/DeliveredTable'
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
                    <PendingTable />
                    <DeliveredTable />
                </Container>
            </div>
        )
    }
}

export default Homepage