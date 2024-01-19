import React from 'react';
import { Link } from 'react-router-dom';
import Real from '../assets/Real.png';

const OurServices = () => {
  return (
    <div>
      <div id="service" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Service 1 */}
        <div>
          <img src={Real} alt="Construction Consultant" className="w-full" />
          <p className="text-center">Construction Consultant</p>
        </div>
        {/* Service 2 */}
        <div>
          <img src={Real} alt="Real Estate" className="w-full" />
          <p className="text-center">Real Estate</p>
        </div>
        {/* Service 3 */}
        <div>
          <img src={Real} alt="Execution Work" className="w-full" />
          <p className="text-center">Execution Work</p>
        </div>
        {/* Service 4 */}
        <div>
          <img src={Real} alt="Maintenance Work" className="w-full" />
          <p className="text-center">Maintenance Work</p>
        </div>
        {/* Service 5 */}
        <div>
          <img src={Real} alt="Engineering Works" className="w-full" />
          <p className="text-center">Engineering Works</p>
        </div>
        {/* Service 6 */}
        <div>
          <img src={Real} alt="Architectural Works" className="w-full" />
          <p className="text-center">Architectural Works</p>
        </div>
        {/* Service 7 */}
        <div>
          <img src={Real} alt="Interior Works" className="w-full" />
          <p className="text-center">Interior Works</p>
        </div>
        {/* Service 8 */}
        <div>
          <img src={Real} alt="Land Survey" className="w-full" />
          <p className="text-center">Land Survey</p>
        </div>
      </div>
      <div id="about" className="text-center">
        <h3 className="text-2xl font-bold mb-4">Why us?</h3>
        <p className="text-gray-700 pb-4">
          ACS Construction Group was formed over 20 years ago to break boundaries and build excellence. We do this through being a people-first business.
        </p>
        <p className="text-gray-700 pb-4">
          The majority of our team are employed directly by us and we always recruit and guide our employees based on our four core values: be innovative, be experts, be driven and be committed.
        </p>
        <p className="text-gray-700 pb-4">
          Our values guide us all by continuously challenging our approach and pushing the boundaries to offer innovative, cutting-edge solutions.
        </p>
        <p className="text-gray-700 pb-4">
          We take pride in being highly knowledgeable experts in our field. Always committed to excellence, we act with drive and integrity to exceed our clients' expectations.
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
  );
};

export default OurServices;
