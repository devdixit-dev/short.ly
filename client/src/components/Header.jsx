import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='w-[90%] m-auto flex flex-col text-center mt-8 gap-4 bg-[#f1f1f17e] shadow-xl py-12'>
          <h2 className='text-4xl'>Welcome to Short.ly</h2>
          <p className='text-xl'>Simplify your links. Maximize your reach.</p>
          <p className='text-[18px] max-w-1/2 m-auto'>Shortly is a free, easy-to-use URL shortener that helps you turn long, messy links into clean, shareable URLs in seconds. Whether you're sharing on social media, tracking clicks, or just want a neater link, Shortly makes it effortless.</p>
        </div>

        <div className='flex justify-evenly mt-8'>
          <div className='bg-[#f1f1f17e] shadow-xl p-10'>
            <p className='text-[24px] mb-3'>Key Features</p>
            <ul className='text-[16px] flex flex-col gap-4'>
              <li>🔗 Shorten URLs Instantly</li>
              <li>📈 Track Your Links (Coming Soon...)</li>
              <li>🔐 No Signup or Login Required</li>
              <li>🎯 Clean & User-Friendly Interface</li>
              <li>⚡ Fast & Reliable</li>
            </ul>
          </div>

          <div className='text-center p-8'>
            <h3 className='text-[20px]'>Ready to shorten your first link?</h3>
            <Link to={'/dashboard'}><button className='mt-2 py-3 px-10 bg-blue-600 text-white rounded-sm cursor-pointer'>Use Short.ly</button></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header