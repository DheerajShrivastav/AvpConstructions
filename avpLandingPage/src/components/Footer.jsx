import React from 'react'
import avp_logo from '../assets/avp_logo.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#7a797a' }} className="bg-gray-800 text-white">
        <div className="container mx-auto py-10 px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  src={avp_logo}
                  alt="AVP Logo"
                  className="h-8 w-30 mr-2"
                />
                <span className="text-white font-bold">AVP Group</span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold">Contact Us</h3>
                <p>123 Construction Street</p>
                <p>City, State, ZIP</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@constructionwebsite.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Follow Us</h3>
              <ul className="flex space-x-4 mt-4">
                <li>
                  <a href="#" className="text-white hover:text-blue-700">
                    <FacebookIcon/>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-700">
                    <XIcon/>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-700">
                    <InstagramIcon fontSize="medium"/>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Services Offered</h3>
              <ul className="list-disc list-inside mt-4">
                <li>Construction Consultant</li>
                <li>Real Estate</li>
                <li>Execution Work</li>
                <li>Maintenance Work</li>
                <li>Engineering works</li>
                <li>Architectural works</li>
                <li>Interior Works</li>
                <li>Land Survey</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="container mx-auto text-center py-6">
            &copy; 2024 Avp Construction Website
          </div>
        </div>
      </footer>
    )
}
    

export default Footer
