import React, { useEffect, useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import DataTable from '../../components/chart/DataTable';
import { getUnit } from '@mui/material/styles/cssUtils';
import UnitDataService from "../../services/unit.services"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { async } from '@firebase/util';

function Home() {
        const [units, setUnits] = useState([]);
        useEffect(() => {
            getUnits();
        }, [])
        const getUnits = async () => {
            const data = await UnitDataService.getAllUnit();
            setUnits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
    
    const deleteHandler = async(id) => {
        await UnitDataService.deleteUnit(id);
        getUnits();
    };
    return (
        <>
            <Row>
                <Col md="auto" className='side-wrp'>
                    <Sidebar />
                </Col>
                <Col>
                    <Navigation />
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {units.map( (doc, index) => {
                                        return (
                                            <tr key={doc.id}>
                                                <td>{index + 1}</td>
                                                <td>{doc.unitNo}</td>
                                                <td>Otto</td>
                                                <td>
                                                    <Button
                                                        variant='secondary'
                                                        className='edit'
                                                        //onClick={(e) => getUnitId(doc.id)}
                                                    >
                                                        Edit
                                                    </Button>
                                                <Button 
                                                variant='danger' 
                                                className='delete'
                                                onClick={(e) => deleteHandler(doc.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                
                        </Col>
            </Row>
        </Col>
            </Row >
        </>
    );
}

export default Home