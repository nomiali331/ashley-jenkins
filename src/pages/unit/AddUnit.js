import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import AddNewUnit from '../../components/form/AddNewUnit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AddUnits() {
    return (
        <>
            <div className='side-wrp'>
                <Sidebar />
            </div>
            <Navigation />
            <Row className='full-height'>
                
                <Col  className='white-bg'>
                <Link className='back-btn' to="/unitslist"><ArrowBackIcon /> Back to List </Link>
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