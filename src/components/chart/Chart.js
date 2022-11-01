import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
const percentage = 60;

class Chart extends Component {
    render() {
        return (
            <div className='chart-wrap'>
                <h3 className='main-third'>Total Appliance </h3>
                <div className='chart-inner-content'>
                    <h4 className='main-forth'>Last Punch In at</h4>
                    <p className='main-pera'>Wed, 25th Sep 2022 10.00 AM</p>
                </div>
                <div className='feature-circular'>
                    <CircularProgressbar value={percentage} text={`${3400}`} />;
                </div>
                <div className='text-center'>
                <Link to="/add">Add Units</Link> 
                </div>
                <Row className='text-center'>
                    <Col>
                        <h5>Total Appliances</h5>
                        <p>800</p>
                    </Col>
                    <Col>
                        <h5>Total Appliances</h5>
                        <p>800</p>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Chart;