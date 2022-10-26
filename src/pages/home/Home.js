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

function Home() {
    return (
        <>
            <Row>
                <Col md="auto" className='side-wrp'>
                    <Sidebar />
                </Col>
                <Col>
                    <Navigation />
                    <div class="greet-text">
                        <h2>Hello, Kristian</h2>
                        <p>Maintenance Dashboard</p>
                    </div>
                    <Row>
                        <Col>
                            <div className='charts '>
                                <Chart />
                            </div>
                        </Col>
                        <Col>
                            <div className='charts '>
                                <Progress />
                            </div>
                        </Col>
                        <Col>
                            <div className='charts '>
                                <Units />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DataTable />
                        </Col>
                        <Col>
                            <BarCharts />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Home