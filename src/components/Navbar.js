import React from 'react'
import './Navbar.css'
import Logo from '../media/bullhorn-logo.png'
import Products from './Dropdown/ProductsCard.js'
import Solutions from './Dropdown/SolutionsCard.js'
import Resources from './Dropdown/ResourcesCard.js'
import Company from './Dropdown/CompanyCard.js'

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
                    <Products />
                    <Solutions />
                    <Resources />
                    <Company />
                </div>
            </div>
        );
    }
}