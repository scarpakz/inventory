import React, { Component } from 'react'
import './PendingTable.css'
import {
    Table,
    Button
} from 'react-bootstrap'

class PendingTable extends Component {
    render(){
        return(
            <div>
                <div className="tableTitle">
                    <h1>Pending Requests</h1>
                </div>
                <hr/>
                <div className="tableContainer">
                    <Table striped bordered hover responsive>
                        <thead>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>Order</th>
                            <th>Info</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jason</td>
                                <td>Javier</td>
                                <td>09350964805</td>
                                <td>Villa Mila Subdivision, Aplaya Jasaan</td>
                                <td><Button variant="info">Detail</Button></td>
                                <td><Button>Notes</Button></td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>SonJa</td>
                                <td>Javier</td>
                                <td>09350964805</td>
                                <td>Villa Mila Subdivision, Aplaya Jasaan</td>
                                <td><Button variant="info">Detail</Button></td>
                                <td><Button>Notes</Button></td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default PendingTable