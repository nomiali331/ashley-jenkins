import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import UnitUpdateForm from '../../components/form/UnitUpdateForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

function UnitCreate() {
    const [unitId, setUnitId] = useState("");
    return (
        <>
            <Row className='full-height'>
                <Col md="auto" className='side-wrp'>
                    <Sidebar />
                </Col>
                <Col  className='white-bg'>
                    <Navigation />
                    <div className="greet-text">
                        <h2>Update Appliance to unit</h2>
                        <p>Update Unit</p>
                    </div>
                    <Row>
                        <Col>
                            <div className='charts '>
                                <UnitUpdateForm id={ unitId } setUnitId={setUnitId}/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default UnitCreate