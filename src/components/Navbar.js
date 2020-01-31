import React from 'react'
import './Navbar.css'
import Logo from '../media/bullhorn-logo.png'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default class Navbar extends React.Component {
    render() {
        return(
            <div className='navbar-wrapper'>
                {/* Company logo */}
                <div>
                    <img src={Logo} alt='logo' className='bullhorn-logo' />
                </div>

                {/* Menu items */}
                <div className='menu-wrapper'>
                    <div className='menu-item'>
                        <DropdownButton id="dropdown-basic-button" title="Products">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className='menu-item'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='button'>
                                Solutions
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    
                    <div className='menu-item'>
                        Resources
                    </div>
                    
                    <div className='menu-item'>
                        Company
                    </div>
                </div>
            </div>
        );
    }
}