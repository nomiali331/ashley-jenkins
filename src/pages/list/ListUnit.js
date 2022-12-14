import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import DataTable from "../../components/chart/ListUnit";

function Home() {
    const [unitId, setUnitId] = useState("");
    const getUnitIdHandler =(id) => {
        setUnitId(id);
    }
    return (
        <>
            <div className='side-wrp'>
                <Sidebar />
            </div>
            <Navigation />
            <Row className='full-height'>
              
                <Col className='white-bg'>
                    
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