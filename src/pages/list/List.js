import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import DataTable from "../../components/chart/DataTable";

function Home() {
    const [unitId, setUnitId] = useState("");
    const getUnitIdHandler =(id) => {
        console.log("the id of the click unit is:", id);
        setUnitId(id);
    }
    return (
        <>
            <Row className='full-height'>
                <Col md="auto" className='side-wrp'>
                    <Sidebar />
                </Col>
                <Col className='white-bg'>
                    <Navigation />
                    <Row>
                        <Col>
                            <DataTable getUnitId={getUnitIdHandler}/>
                
                        </Col>
            </Row>
        </Col>
            </Row >
        </>
    );
}

export default Home