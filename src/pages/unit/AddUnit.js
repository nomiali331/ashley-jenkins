import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import AddNewUnit from '../../components/form/AddNewUnit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

function AddUnits() {
    return (
        <>
            <div className='side-wrp'>
                <Sidebar />
            </div>
            <Navigation />
            <Row className='full-height'>
                
                <Col  className='white-bg'>
                    
                    <div className="greet-text">
                        <h2>Add New Unit</h2>
                        <p>Update Unit</p>
                    </div>
                    <Row>
                        <Col>
                            <div className='charts '>
                                <AddNewUnit />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default AddUnits