import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../App.css';
import logo from '../../assets/LOGO.png';
import dashIco from '../../assets/dashicon.png';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className='logo-wrp'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='side-nav'>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/"><img src={dashIco} alt="Logo" />Dashboard</Nav.Link>
                        <Nav.Link href="/list"><img src={dashIco} alt="Logo" />List Units</Nav.Link>
                        <Nav.Link href="/add"><img src={dashIco} alt="Logo" />Add New Unit</Nav.Link>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;