import React from 'react';
import Real from '../assets/Real.png'
const OurServices = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
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
    );
};

export default OurServices;
