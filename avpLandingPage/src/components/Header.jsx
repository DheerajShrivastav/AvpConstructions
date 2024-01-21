import 'typeface-poppins'
import React, { useState, useEffect } from 'react'
import avp_logo from '../assets/avp_logo.jpeg'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = (
    <ul className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 sm:ml-auto">
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white">
        <a href="#service">Services</a>
      </li>
      <li className="text-white">
        <a href="#about">About</a>
      </li>
      <li className="text-white">
        <a href="#contact">Contact Us</a>
      </li>
      <li className="text-white">
        <Link to="/work">Our Work</Link>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-gray-800 flex flex-wrap items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <a href="/">
            <img src={avp_logo} alt="AVP Logo" className="h-8 w-30 mr-2" />
          </a>
          <a href="/">
            <span className="text-white font-bold">AVP Group</span>
          </a>
        </div>
        {isSmallScreen ? (
          <>
            <MenuIcon
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 p-4 overflow-auto flex flex-col justify-start relative">
                <CloseIcon
                  className="text-white cursor-pointer absolute top-2 right-2"
                  onClick={toggleMenu}
                />
                {navLinks}
              </div>
            )}
          </>
        ) : (
          navLinks
        )}
      </nav>
    </header>
  )
}
export default Header
