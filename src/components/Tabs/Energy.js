import React from 'react'
import '../../App.css'

import Sunset from '../../media/min-an.jpg'

export default class Energy extends React.Component {
    render() {
        return(
            <div className='section-details'>
              {/* image */}
              <div>
                <img src={Sunset} alt='innovating' className='tab-img' />
              </div>
              
              {/* text */}
              <div className='section-text-3'>
                <div className='title-1'>
                    Lorem ipsum dolor sit amet
                </div>
                
                <div className='subtitle-1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
                </div>
              </div>
            </div>
        );
    }
}