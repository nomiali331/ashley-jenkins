import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import ListUnit from '../../components/chart/ViewUnit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

function UnitCreate() {
    const [unitNo, setunitNo] = useState("");
    return (
        <>
            <div className='side-wrp'>
                <Sidebar />
            </div>
            <Navigation />
            <Row className='full-height'>
                <Col  className='white-bg'>
                    <Row>
                        <Col>
                            <div className='charts '>
                                <ListUnit id={ unitNo } setunitNo={setunitNo}/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default UnitCreate