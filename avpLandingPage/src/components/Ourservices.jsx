import React from 'react';
import Real from '../assets/Real.png'
const OurServices = () => {
    return (
      <div>
        <div id="service" className="grid grid-cols-4 gap-4">
          <div>
            <img src={Real} alt="Construction Consultant" className="w-full" />
            <p className="text-center">Construction Consultant</p>
          </div>
          <div>
            <img src={Real} alt="Real Estate" className="w-full" />
            <p className="text-center">Real Estate</p>
          </div>
          <div>
            <img src={Real} alt="Execution Work" className="w-full" />
            <p className="text-center">Execution Work</p>
          </div>
          <div>
            <img src={Real} alt="Maintenance Work" className="w-full" />
            <p className="text-center">Maintenance Work</p>
          </div>
          <div>
            <img src={Real} alt="Engineering Works" className="w-full" />
            <p className="text-center">Engineering Works</p>
          </div>
          <div>
            <img src={Real} alt="Architectural Works" className="w-full" />
            <p className="text-center">Architectural Works</p>
          </div>
          <div>
            <img src={Real} alt="Interior Works" className="w-full" />
            <p className="text-center">Interior Works</p>
          </div>
          <div>
            <img src={Real} alt="Land Survey" className="w-full" />
            <p className="text-center">Land Survey</p>
          </div>
        </div>
        <div id="about">
          <h3 className="text-2xl font-bold mb-4 p-0 0 15px">Why us?</h3>
          <p className="text-gray-700 pb-15px">
            ACS Construction Group was formed over 20 years ago to break
            boundaries and build excellence. We do this through being a
            people-first business.
          </p>
          <p className="text-gray-700 pb-15px">
            The majority of our team are employed directly by us and we always
            recruit and guide our employees based on our four core values: be
            innovative, be experts, be driven and be committed.
          </p>
          <p className="text-gray-700 pb-15px">
            Our values guide us all by continuously challenging our approach and
            pushing the boundaries to offer innovative, cutting-edge solutions.{' '}
          </p>
          <p className="text-gray-700 pb-15">
            We take pride in being highly knowledgeable experts in our field.
            Always committed to excellence, we act with drive and integrity to
            exceed our clients U+0060 expectations.
          </p>
        </div>
      </div>
    )
};

export default OurServices;
