import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Carousel from 'react-bootstrap/Carousel'

// images
import WorkDesk from './media/marvin-meyer.jpg'
import Group from './media/naassom-azevedo.jpg'
import Meeting from './media/austin-distel.jpg'
import Icon from './media/bullhorn-circle.png'
import FourDots from './media/four-dots.png'

function App() {
  return (
    <div className='container'>
      
      <Navbar />

      {/* Heading */}
      <div className='heading'>
        <div className='heading-text'>
          <div className='title'>
            Our customers are changing the world
          </div>
          <div className='subtitle'>
            Bullhorn fosters a culture of innovation, philanthropy, and inclusion, driven by our core values and a team of experienced leaders.
          </div>
        </div>
      </div>

      {/* ----- First section ----- */}
      <div className='section-wrapper'>
        {/* Text */}
        <div className='section-text-1'>
          <div className='title-1'>
            Our customers give human beings security, purpose, and dignity
          </div>

          <div className='subtitle-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
          </div>
        </div>
        
        {/* Image */}
        <div>
          <img src={Group} alt='The team at Bullhorn Boston' className='img-group' />
        </div>
      </div>

      {/* ----- Second section ----- */}
      <div className='section-wrapper-2'>
        {/* first column */}
        <div className='column-wrapper'>
          <div className='title-2'>
            One Team
          </div>
          <div>
            <img src={Icon} alt='icon' className='bullhorn-icon' />
          </div>
          <div className='subtitle-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
          </div>
        </div>

        {/* second column */}
        <div className='column-wrapper'>
          <div className='title-2'>
            One Truth
          </div>
          <div>
            <img src={Icon} alt='icon' className='bullhorn-icon' />
          </div>
          <div className='subtitle-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
          </div>
        </div>

        {/* third column */}
        <div className='column-wrapper'>
          <div className='title-2'>
            One Platform
          </div>
          <div>
            <img src={Icon} alt='icon' className='bullhorn-icon' />
          </div>
          <div className='subtitle-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
          </div>
        </div>
      </div>

      {/* ----- Third section ----- */}
      <div>
        <div className='categories'>
          <div className='category-header'>Ownership</div>
          <div className='category-header'>Energy</div>
          <div className='category-header'>Service</div>
          <div className='category-header'>Be Human</div>
        </div>
        
        <Carousel>
          <Carousel.Item>
            {/* text & image */}
            <div className='section-details'>
              {/* image */}
              <div>
                <img src={Meeting} alt='innovating' className='img-innovation' />
              </div>
              
              {/* text */}
              <div className='section-text-1'>
                <div className='title-1'>
                   Innovating for the recruiting industry for almost 20 years
                </div>
                
                <div className='subtitle-1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='section-wrapper-3'>
        {/* categories */}
        <div className='categories'>
          <div className='category-header'>Ownership</div>
          <div className='category-header'>Energy</div>
          <div className='category-header'>Service</div>
          <div className='category-header'>Be Human</div>
        </div>

        {/* text & image */}
        <div className='section-details'>
          {/* image */}
          <div>
            <img src={Meeting} alt='innovating' className='img-innovation' />
          </div>

          {/* text */}
          <div className='section-text-1'>
            <div className='title-1'>
              Innovating for the recruiting industry for almost 20 years
            </div>
            
            <div className='subtitle-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
            </div>
          </div>
        </div>

        {/* four dots */}
        <div className='dots-wrapper'>
          <img src={FourDots} alt='four dots' className='dots' />
        </div>
      </div>

      {/* ----- Fourth section ----- */}
      <div className='section-wrapper-4'>
        {/* text */}
        <div className='section-text-2'>
          {/* header */}
          <div className='title-3'>
            An Incredible Culture of Service
          </div>

          {/* body */}
          <div className='subtitle-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis ut ali
          </div>

          {/* check list */}
          <ul>
            <li><span className='icon check'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
            <li><span className='icon check'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
            <li><span className='icon check'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
          </ul>
        </div>

        {/* image */}
        <div>
          <div>
            <img src={WorkDesk} alt='work desk' className='img-work' />
          </div>
        </div>
      </div>

      {/* ----- Footer ----- */}
      <div className='footer-wrapper'>
        <div>
          <button className='button-1'>
            Explore Bullhorn's Culture
          </button>
        </div>

        <div>
          <button className='button-2'>
            Pricing
          </button>
        </div>
      </div>
    </div> 
  );
}

export default App;

// photo credits:
// Osman Rana: https://unsplash.com/@osmanrana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// Marvin Meyer: https://unsplash.com/@marvelous?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// Naassom Azevedo: https://unsplash.com/@naassomz1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// Austin Distel: https://unsplash.com/@austindistel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
