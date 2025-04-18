import React from 'react'

const Navbar = () => {
  return (
    <div className='px-8 py-4 flex items-center justify-between shadow relative z-10'>
      {/* Left Section - Logo */}
      <div className='text-blue-600 font-extrabold text-2xl cursor-pointer'>
        INIT
      </div>

      {/* Middle Section - Nav Links */}
      <ul className='flex space-x-8 text-white font-medium'>
        <li>
          <a href="#home" className="hover:text-blue-400 cursor-pointer">Home</a>
        </li>
        <li>
          <a href="#features" className="hover:text-blue-400 cursor-pointer">Features</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-blue-400 cursor-pointer">FAQ</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a>
        </li>
        <li>
          <a href="#waitlist" className="hover:text-blue-400 cursor-pointer">Waitlist</a>
        </li>
      </ul>

      {/* Right Section - Empty placeholder to preserve spacing */}
      <div className='w-[160px]' />
    </div>
  )
}

export default Navbar
