import React from 'react'
import avp_logo from '../assets/avp_logo.jpeg'
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <div>
                <div className="flex items-center">
                  <img
                    src={avp_logo}
                    alt="AVP Logo"
                    className="h-8 w-30 mr-2"
                  />
                  <span className="text-white font-bold">AVP Group</span>
                </div>
              </div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p>123 Construction Street</p>
              <p>City, State, ZIP</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: info@constructionwebsite.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Services Offered</h3>
              <ul className="list-disc list-inside">
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
        <div>
          <div className="border-t border-gray-700">
            <div className="container mx-auto text-center py-6">
              &copy; 2024 Avp Construction Website
            </div>
          </div>
        </div>
      </footer>
    )
}
    

export default Footer
