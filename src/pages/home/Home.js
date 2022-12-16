import React from 'react'
import Navigation from '../../components/navbar/Navigation'
import Sidebar from '../../components/sidebar/Sidebar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from '../../components/chart/Chart';
import Progress from '../../components/chart/Progress';
import { Units } from '../../components/chart/Unit';
import DataTable from '../../components/chart/DataTable';
import BarCharts from '../../components/chart/BarCharts'
import '../../App.css';
import { useUserAuth } from '../../Context/UserAuthContext';




function Home() {
   
   

    const { user } = useUserAuth();
    return (
        <>
            <div className='side-wrp'>
                <Sidebar />
            </div>
            <Navigation />
            <Row className='full-height'>
                <Col className='white-bg'>
                    <div className="greet-text">
                        <h2>Hello, Kristian</h2>
                        <p>Maintenance Dashboard</p>
                    </div>
                    <Row>
                        <Col xl="4" lg="6" className='mt-2'>
                            <div className='charts'>
                                <Chart />
                            </div>
                        </Col>
                        <Col xl="4" lg="6" className='mt-2'>
                            <div className='charts'>
                                <Progress />
                            </div>
                        </Col>
                        <Col xl="4" className='mt-2'>
                            <div className='charts'>
                                <Units />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="8" className='home-appliance-list'>
                            <DataTable />
                        </Col>
                        <Col lg="4">
                        <div className='table-wrap'>
                                <h3 className='main-third'>Daily Records</h3>
                                <BarCharts />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Home