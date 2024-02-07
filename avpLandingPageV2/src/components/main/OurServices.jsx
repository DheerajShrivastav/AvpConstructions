import React from 'react'
import { Link } from 'react-router-dom'
import Real from '../assets/Real.png'
import './Ourservices.css'
import RealEstate from '../assets/RealEstate.jpg'
import 'typeface-poppins'
import ExecutionWork from '../assets/ExecutionWork.jpg'

const OurServices = () => {
  return (
    <div>
      <div
        id="service"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        {/* Service 1 */}
        <div className="service-card bg-blue-5 p-4 w-80 h-80">
          <img
            src={Real}
            alt="Construction Consultant"
            className="w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Construction Consultant
          </p>
        </div>
        {/* Service 2 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={RealEstate}
            alt="Real Estate"
            className="w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Real Estate
          </p>
        </div>
        {/* Service 3 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={ExecutionWork}
            alt="Execution Work"
            className="w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Execution Work
          </p>
        </div>
        {/* Service 4 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={Real}
            alt="Maintenance Work"
            className="w-full w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Maintenance Work
          </p>
        </div>
        {/* Service 5 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={Real}
            alt="Engineering Works"
            className="w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Engineering Works
          </p>
        </div>
        {/* Service 6 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={Real}
            alt="Architectural Works"
            className="w-full w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Architectural Works
          </p>
        </div>
        {/* Service 7 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={Real}
            alt="Interior Works"
            className="w-full w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Interior Works
          </p>
        </div>
        {/* Service 8 */}
        <div className="service-card bg-blue-5 p-6 w-80 h-80">
          <img
            src={Real}
            alt="Land Survey"
            className="w-full w-full rounded-full"
          />
          <p className="text-center text-white font-poppins font-bold">
            Land Survey
          </p>
        </div>
      </div>
      <div id="about" className="text-center">
        <h3 className="text-2xl font-bold mb-4">Why us?</h3>
        <p className="text-gray-700 pb-4">
          ACS Construction Group was formed over 20 years ago to break
          boundaries and build excellence. We do this through being a
          people-first business.
        </p>
        <p className="text-gray-700 pb-4">
          The majority of our team are employed directly by us and we always
          recruit and guide our employees based on our four core values: be
          innovative, be experts, be driven and be committed.
        </p>
        <p className="text-gray-700 pb-4">
          Our values guide us all by continuously challenging our approach and
          pushing the boundaries to offer innovative, cutting-edge solutions.
        </p>
        <p className="text-gray-700 pb-4">
          We take pride in being highly knowledgeable experts in our field.
          Always committed to excellence, we act with drive and integrity to
          exceed our clients' expectations.
        </p>
      </div>
      <div className="text-center">
        <Link to="/more-information">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OurServices
