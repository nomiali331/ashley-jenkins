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
                        <Nav.Link ><img src={dashIco} alt="Logo" />Dashboard</Nav.Link>
                        <Nav.Link href="/unitcreate"><img src={dashIco} alt="Logo" />List</Nav.Link>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;