import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import UnitCreateForm from '../../components/form/UnitCreateForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

function UnitCreate() {
    const [unitId, setUnitId] = useState("");
    return (
        <>
            <Row>
                <Col md="auto" className='side-wrp'>
                    <Sidebar />
                </Col>
                <Col>
                    <Navigation />
                    <div class="greet-text">
                        <h2>Add New Unit</h2>
                        <p>Add New Unit</p>
                    </div>
                    <Row>
                        <Col className='col-8'>
                            <div className='charts '>
                                <UnitCreateForm id={ unitId } setUnitId={setUnitId}/>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default UnitCreate