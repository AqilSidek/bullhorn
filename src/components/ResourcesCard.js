// code adapted from https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
import React, { Component } from 'react'
import './Navbar.css'

export default class ResourcesCard extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className='menu-wrapper'>
          <div>
            <button onClick={this.showMenu} className='dropdown-button'>
                Resources
            </button>
            
            {
                this.state.showMenu
                    ? (
                    <div className="menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                    >
                        <button className='menu-item'> Support </button>
                        <button className='menu-item'> Events </button>
                    </div>
                    )
                : (
                    null
                )
            }
        </div>
      </div>
    );
  }
}