import React from 'react'
import github_icon from '../assets/github_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-8 py-6 bg-blue-600 text-white'>
        <Link to={'/'}><h2 className='text-3xl'>Short.ly</h2></Link>
        <ul className='flex items-center gap-10 text-lg'>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/contact-us'}><li>Contact Us</li></Link>
          <a href="https://github.com/devdixit-dev" target='_blank'><img src={github_icon} /></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar