import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className=' nav '> 
      <img src="/images/ClearancePro-logo.png"  className='logo' alt="" />
      <ul >
        <li><a href="#">Home</a></li>
        <li><a href="#">Solution</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      

      <button className='button '>Join Waitlist</button>


      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>

      </div>

      

    
    </div>
  )
}

export default Navbar